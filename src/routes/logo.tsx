import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, useCallback } from "react";

type FontEntry = { name: string; weights: number[] };

const BRUTALIST: FontEntry[] = [
  { name: "Bebas Neue", weights: [400] },
  { name: "Anton", weights: [400] },
  { name: "Oswald", weights: [200, 300, 400, 500, 600, 700] },
  { name: "Archivo Black", weights: [400] },
  { name: "Barlow Condensed", weights: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: "Roboto Condensed", weights: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: "Cinzel", weights: [400, 500, 600, 700, 800, 900] },
  { name: "Alfa Slab One", weights: [400] },
  { name: "Staatliches", weights: [400] },
  { name: "Passion One", weights: [400, 700, 900] },
  { name: "Darker Grotesque", weights: [300, 400, 500, 600, 700, 800, 900] },
  { name: "Roboto Mono", weights: [100, 200, 300, 400, 500, 600, 700] },
  { name: "Space Mono", weights: [400, 700] },
  { name: "Inter", weights: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
];

const SERIF: FontEntry[] = [
  { name: "Playfair Display", weights: [400, 500, 600, 700, 800, 900] },
  { name: "Cormorant Garamond", weights: [300, 400, 500, 600, 700] },
  { name: "Bodoni Moda", weights: [400, 500, 600, 700, 800, 900] },
  { name: "DM Serif Display", weights: [400] },
  { name: "Lora", weights: [400, 500, 600, 700] },
  { name: "Libre Baskerville", weights: [400, 700] },
  { name: "Forum", weights: [400] },
  { name: "UnifrakturMaguntia", weights: [400] },
  { name: "Abril Fatface", weights: [400] },
  { name: "Fraunces", weights: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: "Cinzel Decorative", weights: [400, 700, 900] },
];

function load(name: string, w: number) {
  const id = `gf-${name.replace(/[^a-z0-9]/gi, "")}-${w}`;
  if (document.getElementById(id)) return;
  const family = name.replace(/ /g, "+");
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${family}:wght@${w}&display=swap`;
  document.head.appendChild(link);
}

function getWeights(list: FontEntry[], name: string): number[] {
  return list.find((f) => f.name === name)?.weights ?? [400];
}

export const Route = createFileRoute("/logo")({
  component: LogosPage,
});

function LogosPage() {
  const [l, setL] = useState("Bebas Neue");
  const [lw, setLw] = useState(400);
  const [s, setS] = useState("Playfair Display");
  const [sw, setSw] = useState(400);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    load(l, lw);
  }, [l, lw]);

  useEffect(() => {
    load(s, sw);
  }, [s, sw]);

  const fit = useCallback(() => {
    requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) return;
      el.style.fontSize = "";
      const pw = el.parentElement?.clientWidth ?? window.innerWidth;
      const sw2 = el.scrollWidth;
      if (sw2 > pw) {
        el.style.fontSize = `${(pw / sw2) * parseFloat(getComputedStyle(el).fontSize) * 0.97}px`;
      }
    });
  }, []);

  useEffect(() => {
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [fit]);

  useEffect(() => {
    const id = setTimeout(fit, 600);
    return () => clearTimeout(id);
  }, [l, lw, s, sw, fit]);

  const lWeights = getWeights(BRUTALIST, l);
  const sWeights = getWeights(SERIF, s);

  return (
    <div className="min-h-screen bg-[#f5f0eb] flex flex-col items-center justify-center px-6">
      <h1
        ref={ref}
        className="text-[18vw] md:text-[16vw] leading-[0.85] tracking-tighter text-center mb-20 whitespace-nowrap"
      >
        <span style={{ fontFamily: l, fontWeight: lw }}>Logos</span>{" "}
        <span style={{ fontFamily: s, fontWeight: sw }}>Supreme</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <Picker
          label="Logos"
          fonts={BRUTALIST}
          font={l}
          weight={lw}
          onFontChange={setL}
          onWeightChange={setLw}
        />
        <Picker
          label="Supreme"
          fonts={SERIF}
          font={s}
          weight={sw}
          onFontChange={setS}
          onWeightChange={setSw}
        />
      </div>
    </div>
  );
}

function Picker({
  label,
  fonts,
  font,
  weight,
  onFontChange,
  onWeightChange,
}: {
  label: string;
  fonts: FontEntry[];
  font: string;
  weight: number;
  onFontChange: (v: string) => void;
  onWeightChange: (v: number) => void;
}) {
  const weights = getWeights(fonts, font);
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-2 font-medium">
        {label}
      </label>
      <select
        value={font}
        onChange={(e) => {
          const f = e.target.value;
          onFontChange(f);
          const ws = getWeights(fonts, f);
          if (!ws.includes(weight)) onWeightChange(ws[0]);
        }}
        className="appearance-none bg-white border-2 border-zinc-900 px-4 py-2.5 text-sm font-medium rounded-none cursor-pointer min-w-[200px] w-full"
      >
        {fonts.map((f) => (
          <option key={f.name} value={f.name}>{f.name}</option>
        ))}
      </select>
      {weights.length > 1 && (
        <select
          value={weight}
          onChange={(e) => onWeightChange(Number(e.target.value))}
          className="appearance-none bg-white border-2 border-zinc-900 px-4 py-2 text-xs font-medium rounded-none cursor-pointer min-w-[200px] w-full mt-2"
        >
          {weights.map((w) => (
            <option key={w} value={w}>{w}</option>
          ))}
        </select>
      )}
      {weights.length === 1 && (
        <div className="mt-2 px-4 py-2 text-xs text-zinc-400 border-2 border-dashed border-zinc-300 min-w-[200px]">
          weight: {weight}
        </div>
      )}
    </div>
  );
}

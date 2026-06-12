import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

const BRUTALIST = [
  "Bebas Neue",
  "Anton",
  "Oswald",
  "Archivo Black",
  "Barlow Condensed",
  "Roboto Condensed",
  "Cinzel",
  "Alfa Slab One",
  "Staatliches",
  "Passion One",
];

const SERIF = [
  "Playfair Display",
  "Cormorant Garamond",
  "Bodoni Moda",
  "DM Serif Display",
  "Lora",
  "Libre Baskerville",
  "Forum",
  "UnifrakturMaguntia",
  "Abril Fatface",
  "Fraunces",
  "Cinzel Decorative",
];

function useFontLoader() {
  useEffect(() => {
    const all = [...BRUTALIST, ...SERIF];
    const families = all
      .map((n) => n.replace(/ /g, "+"))
      .join("&family=");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${families}:wght@400;700;900&display=swap`;
    document.head.appendChild(link);
  }, []);
}

export const Route = createFileRoute("/logo")({
  component: LogosPage,
});

function LogosPage() {
  const [l, setL] = useState("Bebas Neue");
  const [s, setS] = useState("Playfair Display");
  useFontLoader();

  return (
    <div className="min-h-screen bg-[#f5f0eb] flex flex-col items-center justify-center px-6">
      <h1 className="text-[18vw] md:text-[16vw] leading-[0.85] tracking-tighter text-center mb-20">
        <span style={{ fontFamily: l }}>Logos</span>{" "}
        <span style={{ fontFamily: s }}>Supreme</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <div>
          <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-2 font-medium">
            Logos
          </label>
          <select
            value={l}
            onChange={(e) => setL(e.target.value)}
            className="appearance-none bg-white border-2 border-zinc-900 px-4 py-2.5 text-sm font-medium rounded-none cursor-pointer min-w-[200px]"
          >
            {BRUTALIST.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-2 font-medium">
            Supreme
          </label>
          <select
            value={s}
            onChange={(e) => setS(e.target.value)}
            className="appearance-none bg-white border-2 border-zinc-900 px-4 py-2.5 text-sm font-medium rounded-none cursor-pointer min-w-[200px]"
          >
            {SERIF.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

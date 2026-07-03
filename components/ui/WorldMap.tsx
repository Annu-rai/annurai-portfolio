"use client";

import { useMemo } from "react";
import DottedMap from "dotted-map";
import { motion } from "motion/react";

// Where Annu's clients are — plus a home hub the arcs radiate from.
const HOME = { lat: 27.7, lng: 85.3 };
const LOCATIONS = [
  { name: "United States", lat: 39.5, lng: -98.35 },
  { name: "Canada", lat: 56.13, lng: -106.35 },
  { name: "Australia", lat: -25.27, lng: 133.77 },
];

type XY = { x: number; y: number };

function curve(a: XY, b: XY) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const lift = Math.hypot(b.x - a.x, b.y - a.y) * 0.22;
  return `M ${a.x} ${a.y} Q ${mx} ${my - lift} ${b.x} ${b.y}`;
}

export default function WorldMap() {
  const { imgSrc, viewBox, home, pins } = useMemo(() => {
    const map = new DottedMap({ height: 60, grid: "diagonal" });
    const svg = map.getSVG({
      radius: 0.22,
      color: "#334155",
      shape: "circle",
      backgroundColor: "transparent",
    });
    const { width, height } = map.image;
    const home = map.getPin(HOME) ?? { x: 0, y: 0 };
    const pins = LOCATIONS.map((l) => ({ ...l, ...(map.getPin(l) ?? { x: 0, y: 0 }) }));
    const imgSrc = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    return { imgSrc, viewBox: `0 0 ${width} ${height}`, home, pins };
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-800/20 p-4">
      <div className="relative w-full" style={{ aspectRatio: "119 / 60" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt="Dotted world map"
          className="absolute inset-0 h-full w-full opacity-70"
        />

        <svg
          viewBox={viewBox}
          className="absolute inset-0 h-full w-full"
          fill="none"
          aria-hidden
        >
          {pins.map((p, i) => (
            <motion.path
              key={`arc-${p.name}`}
              d={curve(home, p)}
              stroke="#2dd4bf"
              strokeWidth={0.35}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.3 + i * 0.35, ease: "easeInOut" }}
            />
          ))}

          {/* Home hub */}
          <circle cx={home.x} cy={home.y} r={0.9} fill="#5eead4" />
          <motion.circle
            cx={home.x}
            cy={home.y}
            fill="#5eead4"
            initial={{ r: 0.9, opacity: 0.5 }}
            animate={{ r: [0.9, 3], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />

          {/* Client locations */}
          {pins.map((p, i) => (
            <g key={`pin-${p.name}`}>
              <motion.circle
                cx={p.x}
                cy={p.y}
                fill="#2dd4bf"
                initial={{ r: 0.7, opacity: 0.5 }}
                animate={{ r: [0.7, 2.6], opacity: [0.5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.4 * i,
                }}
              />
              <circle cx={p.x} cy={p.y} r={0.8} fill="#5eead4" />
            </g>
          ))}
        </svg>
      </div>

      <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {LOCATIONS.map((l) => (
          <li key={l.name} className="flex items-center gap-2 text-xs text-slate-400">
            <span className="inline-block h-2 w-2 rounded-full bg-teal-300" />
            {l.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

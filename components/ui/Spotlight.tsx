"use client";

import { useEffect, useState } from "react";

/**
 * A soft glow that follows the cursor — the "mouse effect" behind the page.
 * Rendered once, fixed to the viewport, and ignores pointer events.
 */
export default function Spotlight() {
  const [pos, setPos] = useState({ x: -400, y: -400 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 motion-reduce:hidden"
      style={{
        background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(45, 212, 191, 0.10), transparent 80%)`,
      }}
    />
  );
}

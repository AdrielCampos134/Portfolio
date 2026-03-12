"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function GlowCursor() {
  const [visible, setVisible] = useState(false);
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setVisible(true);

    const handleMouse = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [x, y]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-30"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(124,58,237,0.06) 0%, rgba(37,99,235,0.03) 40%, transparent 70%)",
      }}
    />
  );
}

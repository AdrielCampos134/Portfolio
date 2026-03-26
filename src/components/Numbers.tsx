"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 6, suffix: "+", label: "Projetos no portfólio" },
  { value: 3, suffix: "+", label: "Anos estudando dev" },
  { value: 100, suffix: "%", label: "Dedicação total" },
  { value: 48, suffix: "h", label: "Protótipo inicial" },
];

function Counter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;

      if (decimals > 0) {
        setDisplay(current.toFixed(decimals).replace(".", ","));
      } else {
        setDisplay(Math.round(current).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, value, decimals]);

  return (
    <span ref={ref} className="gradient-text">
      {display}
      {suffix}
    </span>
  );
}

export default function Numbers() {
  return (
    <section id="numeros" className="relative py-20 bg-[#111111]">
      <div className="line-gradient w-full absolute top-0 left-0" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div
                className="font-[family-name:var(--font-jakarta)] font-black mb-2"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
              >
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={0}
                />
              </div>
              <p className="text-[#A1A1AA] text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

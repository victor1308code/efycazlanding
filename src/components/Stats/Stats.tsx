"use client";

import React, { useState, useEffect, useRef } from "react";

function CounterItem({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  formatThousands = false,
  isStarted = false,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  formatThousands?: boolean;
  isStarted: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isStarted) return;
    let startTimestamp: number | null = null;
    const duration = 2200;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Smooth easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * target;
      setCount(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [target, isStarted]);

  let displayValue: string;
  if (decimals > 0) {
    displayValue = count.toFixed(decimals);
  } else if (formatThousands) {
    displayValue = Math.floor(count).toLocaleString("pt-BR").replace(".", " ");
  } else {
    displayValue = Math.floor(count).toString();
  }

  return (
    <span>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export function Stats() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 -mt-8 sm:-mt-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Card com cinza mais claro para maior destaque */}
      <div className="bg-[#383C4A] rounded-3xl p-6 sm:p-10 border border-white/20 shadow-[0_22px_55px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:border-[#45B3A9]/40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-4 pr-0 md:pr-4 border-b md:border-b-0 md:border-r border-white/15 pb-6 md:pb-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
              Referência em{" "}
              <strong className="font-extrabold text-[#45B3A9] block sm:inline">
                gestão e inteligência contábil
              </strong>{" "}
              para o seu negócio
            </h3>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-left">
            
            {/* Stat 1: +2 933 */}
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#45B3A9] font-mono tracking-tight">
                <CounterItem
                  target={2933}
                  prefix="+"
                  formatThousands={true}
                  isStarted={isIntersecting}
                />
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-tight">
                Empresas e CNPJs atendidos com controle total de suas finanças
              </p>
            </div>

            {/* Stat 2: 18 */}
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#45B3A9] font-mono tracking-tight">
                <CounterItem
                  target={18}
                  isStarted={isIntersecting}
                />
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-tight">
                Estados brasileiros com atendimento ágil e 100% digital
              </p>
            </div>

            {/* Stat 3: +31.4M */}
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#45B3A9] font-mono tracking-tight">
                <CounterItem
                  target={31.4}
                  prefix="+"
                  suffix="M"
                  decimals={1}
                  isStarted={isIntersecting}
                />
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-tight">
                Em economia tributária legal e gestão fiscal eficiente
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

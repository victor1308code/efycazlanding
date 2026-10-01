"use client";
import React, { useRef } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Roberto Almeida",
    role: "Diretor da Clínica Vida",
    text: "Antes da EfyCaz, pagávamos quase o dobro de impostos sem saber. A revisão que fizeram salvou nosso fluxo de caixa. O atendimento pelo WhatsApp é um diferencial gigante.",
  },
  {
    id: 2,
    name: "Ana Carla Fernandes",
    role: "CEO da TechSolutions",
    text: "Trocar de contabilidade sempre foi um pesadelo, mas o time da EfyCaz fez a transição em dias. O dashboard de controle que eles nos passam todo mês mudou nossa visão do negócio.",
  },
  {
    id: 3,
    name: "Marcos Paulo",
    role: "Sócio da Comercial Santos",
    text: "Pela primeira vez sinto que minha contabilidade joga no meu time. Eles não só emitem guia, mas me avisam quando estou correndo algum risco trabalhista ou tributário.",
  },
  {
    id: 4,
    name: "Juliana Mendes",
    role: "Empreendedora Digital",
    text: "Para quem trabalha no digital, achar uma contabilidade que entenda de infoprodutos é raro. A EfyCaz resolveu minha regularização em tempo recorde.",
  }
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth > 768 ? 400 : 300;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-24 bg-[#1A1C23] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 fade-in-section">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-slate-300">
              Não acredite apenas na nossa palavra. Veja os resultados de quem já transformou a gestão da sua empresa.
            </p>
          </div>
          
          <div className="hidden md:flex gap-3 mt-6 md:mt-0">
            <button onClick={() => scroll("left")} className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll("right")} className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar fade-in-section"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="snap-start shrink-0 w-[85vw] md:w-[400px] bg-[#1A1C23] border border-white/10 p-8 rounded-2xl hover:border-brand-primary/40 transition-colors duration-300"
            >
              <div className="mb-6 text-[#45B3A9]">
                <Quote className="w-8 h-8 opacity-60" />
              </div>
              <p className="text-slate-200 text-lg leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div className="mt-auto">
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-brand-primary font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}


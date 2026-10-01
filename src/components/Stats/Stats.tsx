import React from "react";

export function Stats() {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="bg-[#2C2F3A] rounded-3xl p-6 sm:p-10 border-2 border-brand-primary/40 shadow-2xl backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-4 pr-0 md:pr-4 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0">
            <h3 className="text-xl sm:text-2xl font-normal text-white leading-snug">
              Referência em{" "}
              <strong className="font-extrabold text-[#45B3A9] block sm:inline">
                gestão e inteligência contábil
              </strong>{" "}
              para o seu negócio
            </h3>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-left">
            
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#45B3A9] font-mono tracking-tight">
                +2 933
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-tight">
                Empresas e CNPJs atendidos que têm controle total de suas finanças
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#45B3A9] font-mono tracking-tight">
                18
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-tight">
                Estados brasileiros com atendimento ágil e 100% digital
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#45B3A9] font-mono tracking-tight">
                +31.4
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-tight">
                Milhões em gestão fiscal eficiente e economia tributária legal
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

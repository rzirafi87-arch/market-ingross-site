import Image from "next/image";
import { departments } from "@/data/departments";

export function DepartmentsSection() {
  return (
    <section className="bg-transparent py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="font-heading inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#0B3B82]">
            Qualità ogni giorno
          </span>

          <h2 className="font-heading mt-4 text-4xl font-extrabold leading-[0.98] tracking-[-0.03em] text-[#0B3B82] md:text-5xl">
            I nostri reparti
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Freschezza, convenienza e assortimento per accompagnarti ogni giorno
            nella tua spesa.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {departments.map((department) => (
            <div
              key={department.slug}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm ring-1 ring-black/5 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={department.image}
                  alt={department.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-red-600">
                  Reparto
                </div>

                <h3 className="font-heading mt-2 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#0B3B82]">
                  {department.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  {department.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

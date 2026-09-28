import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { departments } from "@/data/departments";

export function DepartmentsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="mi-section-kicker">Qualità ogni giorno</p>
          <h2 className="mi-section-title mt-3 text-4xl sm:text-5xl">I nostri reparti</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Freschezza, convenienza e assortimento per accompagnarti ogni giorno nella tua spesa.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {departments.map((department) => (
            <Link
              key={department.slug}
              href={"/reparti/" + department.slug + "/foto"}
              className="group overflow-hidden rounded-[22px] border border-[#003B7A]/10 bg-white shadow-[0_12px_35px_rgba(0,43,91,0.07)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,43,91,0.12)]"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={department.image}
                  alt={department.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 250px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-extrabold leading-tight text-[#003B7A]">
                  {department.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{department.description}</p>
                <span className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#003B7A] text-white transition group-hover:bg-[#EF382F]">
                  <ArrowRight size={17} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/reparti"
            className="font-heading inline-flex rounded-xl border-2 border-[#003B7A] px-6 py-3 text-sm font-extrabold text-[#003B7A] transition hover:bg-[#003B7A] hover:text-white"
          >
            Scopri tutti i reparti
          </Link>
        </div>
      </div>
    </section>
  );
}

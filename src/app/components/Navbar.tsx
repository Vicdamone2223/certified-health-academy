"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isSpanish = pathname?.startsWith("/es");
  const langHref = isSpanish ? "/" : "/es";
  const langLabel = isSpanish ? "English" : "Español";
  const base = isSpanish ? "/es" : "";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--cream)]/70 backdrop-blur">
      <nav className="container flex h-16 items-center gap-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <Image
            src="/logo.png"
            alt="Certified Health Academy"
            width={40}
            height={40}
            priority
          />
          <span className="font-semibold tracking-tight leading-tight">
            {/* Mobile: stacked & centered */}
            <span className="block sm:hidden text-sm leading-tight text-center">
              Certified Health <br /> Academy
            </span>
            {/* Tablet/desktop: single line */}
            <span className="hidden sm:inline text-base md:text-lg whitespace-nowrap">
              Certified Health Academy
            </span>
          </span>
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Middle nav (desktop only) */}
        <div className="hidden gap-6 sm:flex">
          <Link href={`${base}/courses`} className="link-underline">
            {isSpanish ? "Cursos" : "Courses"}
          </Link>
          <Link href={`${base}/schedule`} className="link-underline">
            {isSpanish ? "Horario" : "Schedule"}
          </Link>
          <Link href={`${base}/policies`} className="link-underline">
            {isSpanish ? "Políticas" : "Policies"}
          </Link>
          <Link href={`${base}/contact`} className="link-underline">
            {isSpanish ? "Contacto" : "Contact"}
          </Link>
        </div>

        {/* Right-side buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href={langHref} className="btn btn-outline px-3 py-2 text-sm">
            {langLabel}
          </Link>

          {/* Mobile: Contact only */}
          <Link href={`${base}/contact`} className="btn btn-primary sm:hidden">
            {isSpanish ? "Contacto" : "Contact"}
          </Link>

          {/* Desktop: Book Class only */}
          <Link
            href={`${base}/schedule`}
            className="btn btn-primary hidden sm:inline-flex"
          >
            {isSpanish ? "Reservar Clase" : "Book Class"}
          </Link>
        </div>
      </nav>
    </header>
  );
}

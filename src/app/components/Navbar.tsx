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
        {/* Brand (truncate on mobile so it never hits the buttons) */}
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <Image
            src="/logo.png"
            alt="Certified Health Academy"
            width={40}
            height={40}
            priority
          />
          <span className="truncate max-w-[56vw] sm:max-w-none text-sm sm:text-base md:text-lg font-semibold tracking-tight leading-tight">
            Certified Health Academy
          </span>
        </Link>

        {/* Middle nav (hidden on mobile) */}
        <div className="hidden gap-6 sm:flex ml-auto">
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

        {/* Right-side buttons (always on the far right) */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto sm:ml-6">
          <Link href={langHref} className="btn btn-outline px-3 py-2 text-sm">
            {langLabel}
          </Link>
          <Link href={`${base}/schedule`} className="btn btn-primary">
            {isSpanish ? "Reservar Clase" : "Book Class"}
          </Link>
        </div>
      </nav>
    </header>
  );
}

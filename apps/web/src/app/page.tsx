'use client';

import Link from 'next/link';
import Image from 'next/image';

const COLORS = {
  hero: '#36BCF5',
} as const;

const NOISE_TEXTURE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

function NoiseOverlay({ opacity = 0.4 }: { opacity?: number }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 mix-blend-overlay pointer-events-none"
      style={{ backgroundImage: NOISE_TEXTURE_SVG, opacity }}
    />
  );
}

function PlayIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M4.5 5.653c0-1.426 1.529-2.38 2.792-1.645l11.54 6.348c1.263.733 1.263 2.57 0 3.303l-11.54 6.347c-1.263.733-2.792-.217-2.792-1.646V5.653Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function RecordingButton({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <Link href="/record" className={className}>
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hack Club Flag */}
      <a 
        href="https://hackclub.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute top-0 left-4 sm:left-10 z-[100] w-48 sm:w-64 transition-transform hover:-translate-y-1 active:translate-y-0"
      >
        <img 
          src="https://assets.hackclub.com/flag-orpheus-top.svg" 
          alt="Hack Club" 
          className="w-full h-auto"
        />
      </a>

      <header
        className="fixed left-0 right-0 z-50 flex justify-center px-3 sm:px-4 lg:px-6"
        style={{ top: 24 }}
      >
        <nav
          className="flex h-[48px] sm:h-[52px] w-full max-w-3xl items-center justify-between rounded-[24px] sm:rounded-[26px] px-3 sm:px-4 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06),0_0_0_1px_rgba(255,255,255,0.3),inset_0_1px_0_rgba(255,255,255,0.8)]"
          style={{ background: 'linear-gradient(180deg, #fff6 10%, #fffc)' }}
          aria-label="Main navigation"
        >
          {/* Spacing for the flag on small screens if needed, otherwise standard logo */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 ml-2">
            <Image src="/logo.png" alt="My Screen Logo" width={28} height={28} className="h-6 sm:h-7 w-auto" />
            <span className="text-sm sm:text-[15px] font-bold tracking-tight text-gray-900">
              My Screen
            </span>
          </Link>

          <div className="flex items-center">
            <RecordingButton className="inline-flex items-center justify-center rounded-full bg-black h-8 sm:h-9 px-3.5 sm:px-5 text-xs sm:text-sm font-medium text-white hover:bg-neutral-800 transition-colors whitespace-nowrap">
              Start Recording
            </RecordingButton>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <section
          className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl mx-3 sm:mx-4 md:mx-6 mt-3 sm:mt-4 py-20"
          style={{ backgroundColor: COLORS.hero }}
        >
          <NoiseOverlay opacity={0.15} />

          <div className="z-20 flex flex-col items-center gap-4 text-center px-4">
            <h1 className="font-display text-[clamp(2.5rem,10vw,6.25rem)] leading-[0.95] text-gray-900 max-w-5xl uppercase">
              RECORD ANYTHING, ANYTIME, FAST
              <br /> in secs
            </h1>
            <p className="text-gray-700/80 text-base sm:text-lg max-w-md mt-1 leading-relaxed">
              No installs. No accounts. Just record.
            </p>

            <RecordingButton className="mt-4 inline-flex items-center justify-center rounded-full h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg font-medium text-gray-900 transition-all hover:scale-[1.02] bg-white/90 backdrop-blur-sm border border-white/60 shadow-lg">
              <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Start Recording
            </RecordingButton>
          </div>
        </section>
      </main>

      <footer className="py-12 flex flex-col items-center justify-center">
        <p className="text-gray-500 text-sm sm:text-base font-medium tracking-tight">
          By <span className="text-gray-900">Sadrita Neogi</span> ( Hack Club )
        </p>
      </footer>
    </div>
  );
}
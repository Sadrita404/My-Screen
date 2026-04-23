'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  showBack?: boolean;
  backHref?: string;
}

/** Logo with image and text */
function ScreenLogo() {
  return (
    <span className="flex items-center gap-2">
      <Image 
        src="/logo.png" 
        alt="My Screen Logo" 
        width={28} 
        height={28} 
        className="h-7 w-auto" 
      />
      <span className="text-lg font-bold tracking-tight text-gray-900">
        My Screen
      </span>
    </span>
  );
}

export default function Header({ showBack = false, backHref = '/' }: HeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (backHref) {
      router.push(backHref);
    } else {
      router.back();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-3 md:px-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo and back button */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 transition-transform"
              aria-label="My Screen Home"
            >
              <ScreenLogo />
            </Link>

            {showBack && (
              <>
                <span className="h-5 w-px bg-gray-300/70" aria-hidden="true" />
                <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all active:scale-95"
                  aria-label="Go back"
                >
                  <ChevronLeft className="h-4 w-4" strokeWidth={2} />
                  <span>Back</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
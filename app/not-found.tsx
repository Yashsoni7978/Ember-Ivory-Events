import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-parchment text-ink flex items-center justify-center px-6 py-24 selection:bg-oxblood selection:text-bone">
      <div className="max-w-xl text-center">
        <span className="text-[10px] font-mono tracking-widest text-brass uppercase block mb-3">
          404 &bull; ARCHIVAL PAGE NOT FOUND
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-ink font-normal mb-6">
          A moment lost to the sands.
        </h1>
        <div className="w-16 h-[1px] bg-oxblood mx-auto mb-6" />
        <p className="text-sm sm:text-base text-ink/80 font-light leading-relaxed mb-8">
          The sanctuary or commission record you are attempting to access does not exist or has been relocated to our private archives.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3.5 bg-oxblood text-bone hover:bg-oxblood-deep transition-colors text-xs tracking-[0.2em] uppercase font-medium"
        >
          Return to Sanctuary
        </Link>
      </div>
    </main>
  );
}

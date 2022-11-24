
export default function Footer() {
  return (
    <footer className="border-t border-black/25 bg-white text-slate-60 px-3 mt-6">
      <div className="container mx-auto max-w-6xl flex  flex-col items-center justify-between gap-4 border-t border-t-slate-200 py-1 md:py-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href='https://github.com/lucaspessivaldo'
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Lucas
            </a>
            . Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </a>
          </p>
        </div>
        <p className="text-sm md:text-left">
          The source code is available on{" "}
          <a
            href='https://github.com/lucaspessivaldo/english-listening-training'
            target="_blank"
            rel="noreferrer"
            className="underline font-inter font-semibold"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
};
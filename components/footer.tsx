export default function Footer() {
  return (
    <footer className="py-10 px-4 bg-white/60 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center text-slate-600">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-4">
          <a
            href="https://www.linkedin.com/login"
            className="hover:text-[var(--color-primary-600)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/clark.valle.2025"
            className="hover:text-[var(--color-primary-600)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://github.com/dashboard"
            className="hover:text-[var(--color-primary-600)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <p className="text-sm sm:text-base">© 2025 Anthony. All rights reserved.</p>
      </div>
    </footer>
  );
}
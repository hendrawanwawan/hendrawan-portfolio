export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-1 text-center py-6 border-t border-border-blue">
      <p className="font-mono text-xs text-slate-muted">
        Built with intention · Hendrawan · Makassar, Indonesia · {year}
      </p>
    </footer>
  );
}

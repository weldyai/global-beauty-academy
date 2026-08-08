function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="size-5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.65 15.4 3.55 14.25 3.55c-2.4 0-4.05 1.47-4.05 4.17v2.23H7.5v3.1h2.7v8h3.3z" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M16.5 3c.35 2.1 1.7 3.7 3.9 3.95v2.7c-1.35.05-2.6-.35-3.65-1.05v6.4c0 3.1-2.5 5.6-5.6 5.6S5.5 18.1 5.5 15c0-3.05 2.4-5.5 5.4-5.6v2.75a2.85 2.85 0 102.5 2.83V3h3.1z" />
    </svg>
  );
}

export function SiteFooter({ lang = "fr" }: { lang?: "fr" | "ar" }) {
  const isAr = lang === "ar";
  return (
    <footer id="contact" className="border-t border-primary/10 bg-card px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-heading text-xl font-semibold text-primary">
            {isAr ? "أكاديمية جلوبال بيوتي" : "Global Beauty Academy"}
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {isAr
              ? "تكوين احترافي معتمد في المكياج وتصفيف الشعر وفن الأظافر بالدار البيضاء."
              : "Formation professionnelle certifiante en maquillage (makeup artist), coiffure et onglerie/nail art à Casablanca."}
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-2 font-semibold text-foreground">
            {isAr ? "العنوان" : "Adresse"}
          </p>
          <a
            href="https://maps.google.com/?q=33.5270154,-7.6495321"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-primary"
          >
            {isAr
              ? "شارع أبو بكر القادري، بانوراما أوفيس، عمارة 3، مكتب 6، سيدي معروف، الدار البيضاء"
              : "Bd Abou Bakr El Kadiri, Panorama Offices, Immeuble 3, Bureau 6, Sidi Maarouf, Casablanca"}
          </a>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-2 font-semibold text-foreground">
            {isAr ? "تواصلي معنا" : "Contact"}
          </p>
          <a href="https://wa.me/212666808222" className="cursor-pointer hover:text-primary">
            WhatsApp
          </a>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://www.instagram.com/gbamaroc/"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="Instagram"
              className="cursor-pointer text-foreground/70 transition-colors hover:text-primary"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://web.facebook.com/gbaacademy/"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="Facebook"
              className="cursor-pointer text-foreground/70 transition-colors hover:text-primary"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.tiktok.com/@global.beauty.academy"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="TikTok"
              className="cursor-pointer text-foreground/70 transition-colors hover:text-primary"
            >
              <TiktokIcon />
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Global Beauty Academy — {isAr ? "جميع الحقوق محفوظة" : "Tous droits réservés"}
      </p>
    </footer>
  );
}

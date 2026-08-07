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
            href="https://maps.google.com/?q=33.527599,-7.649300"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-primary"
          >
            Avenue Abou Bakr el Kadiri, 11, Aîn-Chock, Casablanca
          </a>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-2 font-semibold text-foreground">
            {isAr ? "تواصلي معنا" : "Contact"}
          </p>
          <a href="https://wa.me/212666808222" className="cursor-pointer hover:text-primary">
            WhatsApp
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Global Beauty Academy — {isAr ? "جميع الحقوق محفوظة" : "Tous droits réservés"}
      </p>
    </footer>
  );
}

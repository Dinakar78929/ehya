import { useEffect } from "react";
import HeroText from "../molecules/HeroText";

export default function HeroSection() {
  useEffect(() => {
    // GA script to track visits
    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `;
    document.body.appendChild(script2);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center md:justify-between px-6 md:px-12 py-16 bg-gradient-to-r from-blue-500 to-cyan-400">
      {/* Left */}
      <div className="md:w-1/2">
        <HeroText />
      </div>

      {/* Right - Google Analytics Embed */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <iframe
          src="https://lookerstudio.google.com/embed/reporting/3148a3be-4ba8-419f-acd3-5e2564d1984c/page/bDbYF"
          title="Google Analytics Dashboard"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

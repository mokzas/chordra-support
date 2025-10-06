import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import 'antd/dist/antd.min.css';
import React from "react";

import Router from "./router";
import i18n from "./translation";

const Seo: React.FC<{ title?: string; description?: string; canonical?: string; noindex?: boolean; ldJson?: object }> = ({ title, description, canonical, noindex, ldJson }) => {
  React.useEffect(() => {
    if (title) document.title = title;
    const ensureMeta = (name: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}='${name}']`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      return el;
    };
    if (description) {
      const m = ensureMeta("description");
      m.setAttribute("content", description);
    }
    if (canonical) {
      let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
    if (noindex) {
      const m = ensureMeta("robots");
      m.setAttribute("content", "noindex,nofollow");
    }
    if (ldJson) {
      let script = document.getElementById("ld-json") as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script") as HTMLScriptElement;
        script.type = "application/ld+json";
        script.id = "ld-json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(ldJson);
    }
  }, [title, description, canonical, noindex, ldJson]);
  return null;
};

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <I18nextProvider i18n={i18n}>
      <Seo
        title="Chordra Support — Smart Chord Training App"
        description="Official support for Chordra: downloads, privacy policy, and feedback contact."
        canonical="https://mokzas.github.io/chordra-support/"
        ldJson={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Chordra Support",
          "url": "https://mokzas.github.io/chordra-support/",
          "publisher": {
            "@type": "Organization",
            "name": "Mokzas",
            "logo": {
              "@type": "ImageObject",
              "url": `${process.env.PUBLIC_URL}/img/icons/logo512.png`
            }
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://mokzas.github.io/chordra-support/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));

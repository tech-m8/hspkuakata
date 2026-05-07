import { defaultLocale } from "@/i18n/locales";

// Relative URL so it composes correctly with the GitHub Pages basePath
// (e.g. `/hspkuakata/` -> `/hspkuakata/en/`) in production.
const target = `${defaultLocale}/`;

export const metadata = {
  title: "Hotel Silver Pearl",
  description: "Redirecting…",
};

export default function RedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <noscript>
        <p style={{ fontFamily: "system-ui", padding: 24 }}>
          Redirecting to <a href={target}>{target}</a>
        </p>
      </noscript>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(target)});`,
        }}
      />
    </>
  );
}

import type { Translator } from "@/i18n/t";

const FORM_SRC =
  "https://docs.google.com/forms/d/e/1FAIpQLSeep_tciJPhA4eacnYW8uk5vyRQTvyZeSE5hLBHgnQP2V6RgQ/viewform?embedded=true";

export function FeedbackEmbed({ t }: { t: Translator }) {
  return (
    <div className="w-full">
      <iframe
        src={FORM_SRC}
        title={t("feedback.pageTitle")}
        loading="lazy"
        className="block w-full h-[860px] border-0"
      >
        Loading…
      </iframe>
    </div>
  );
}

import "../globals.css";

export const metadata = {
  title: "Hotel Silver Pearl",
  description: "Hotel Silver Pearl — Kuakata, Patuakhali, Bangladesh.",
  robots: { index: false, follow: false },
};

export default function RedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import "../globals.css";

export const metadata = {
  title: "Hotel Silver Pearl",
  description: "Hotel Silver Pearl — Kuakata, Patuakhali, Bangladesh.",
  robots: { index: false, follow: false },
  verification: { google: "Kr0JmZGY-zTT59fDDTTtyU9_IXZ5uu97fX51LEucN8w" },
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

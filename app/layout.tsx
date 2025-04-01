import localFont from "next/font/local";
import type { Metadata } from "next";
import "@/app/_styles/globals.css";

export const publicSans = localFont({
  src: [
    {
      path: "../public/fonts/PublicSans-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/PublicSans-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
    {
      path: "../public/fonts/static/PublicSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/static/PublicSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-public-sans", // Pour l'utiliser en CSS
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s / Personal Finance App",
    default: "Personal Finance App",
  },
  description: "Track your spending, manage your budgets, and visualize your savings with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} min-h-screen bg-beige-100 text-grey-900`}>{children}</body>
    </html>
  );
}

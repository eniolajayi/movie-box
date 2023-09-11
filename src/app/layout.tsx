import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MovieBox",
  description:
    "a movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. Data is provided by the TMDB API. ",
};

export default function RootLayout({
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

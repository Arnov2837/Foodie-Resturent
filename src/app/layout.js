import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../component/share/Nav";
import Footer from "../component/share/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Foodie Restaurant",
  description: "Delicious food and amazing dining experience",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <Nav />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
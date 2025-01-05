import Navbar from "@/components/ui/Navbar";
import "@/styles/globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "TrueNaad",
  description: "Your AudioBook Library",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

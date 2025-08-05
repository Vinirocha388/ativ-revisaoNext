import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header/Header.jsx";

const roboto = localFont({
    src: [
        {
            path: "../../public/fonts/Roboto-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Roboto-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-roboto",
    display: "swap",
});
export const metadata = {
  title: "Loja de Eletrônicos",
  description: "Atividade de revisão de Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

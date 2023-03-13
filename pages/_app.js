import "@/styles/globals.css";
import '@/styles/chat.css'
import { Inter } from "@next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

import "@/styles/globals.css";
import '@/styles/app.css'
import '@/styles/hero.css'
import '@/styles/footer.css'
import '@/styles/about.css'
import { Inter } from "@next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

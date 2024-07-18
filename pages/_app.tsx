import type { AppProps } from "next/app";
import "./global.css";
import localfont from 'next/font/local';

const Playwrite = localfont({
  src: './fonts/PlaywriteCuba.ttf',
  variable: "--font-playwrite",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className={`${Playwrite.variable}`}>
    <Component {...pageProps} />
  </main>
  );
}

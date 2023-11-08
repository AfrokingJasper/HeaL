import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/home/layout/layout";

import { Alata, Josefin_Sans } from "next/font/google";

const roboto = Josefin_Sans({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});

// className={roboto.className}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

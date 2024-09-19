import "@/styles/global.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react"
import HeroSection from "@/components/Hero/Hero";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SessionProvider session={pageProps.session}>
        {/* <Component {...pageProps} /> */}
        <HeroSection />
      </SessionProvider>
    </ChakraProvider>
  );
}

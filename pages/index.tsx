import HeroIllustration from "@/components/atoms/HeroIllustration";
import Features from "@/components/organisms/Features";
import Header from "@/components/organisms/Header";
import MainBanner from "@/components/organisms/MainBanner";
import Profile from "@/components/organisms/Profile";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
        <meta name="description" content="Generated by create next app" />
        <title>Frontend Mentor | Workit landing page</title>
      </Head>
      <main>
        <Header />
        <MainBanner />
        <HeroIllustration />
        <Features />
        <Profile />
      </main>
    </>
  );
}

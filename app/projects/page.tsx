'use client';

import useTheme from "../hooks/useTheme";
import { ThreeDMarquee } from "../ui/3d-marquee";

const images = [
  {
    image: "/project-images/siwe.png",
    url: "https://siwe.xyz"
  },
  {
    image: "/project-images/efp.png",
    url: "https://efp.app"
  },
  {
    image: "/project-images/ethid-org.png",
    url: "https://ethid.org"
  },
  {
    image: "/project-images/covstats-19.png",
    url: "https://covstats-19.pages.dev/"
  },
  {
    image: "/project-images/revolucija-vodenja.png",
    url: "https://revolucijavodenja.si"
  },
  {
    image: "/project-images/siwe.png",
    url: "https://siwe.xyz"
  },
  {
    image: "/project-images/naicha-finance.png",
    url: ""
  },
  {
    image: "/project-images/koyo-finance.png",
    url: "https://koyo.finance"
  },
  {
    image: "/project-images/naicha-finance.png",
    url: ""
  },
  {
    image: "/project-images/kodex.png",
    url: "https://kodex.io"
  },
  {
    image: "/project-images/siwe.png",
    url: "https://siwe.xyz"
  },
  {
    image: "/project-images/efp.png",
    url: "https://efp.app"
  },
  {
    image: "/project-images/ethid-org.png",
    url: "https://ethid.org"
  },
  {
    image: "/project-images/pregl-digital.png",
    url: "https://pregldigital.com"
  },
  {
    image: "/project-images/efp.png",
    url: "https://efp.app"
  },
  {
    image: "/project-images/revolucija-vodenja.png",
    url: "https://revolucijavodenja.si"
  },
  {
    image: "/project-images/pregl-digital.png",
    url: "https://pregldigital.com"
  },
  {
    image: "/project-images/celjska-koca.png",
    url: "https://celjska-koca.si/en/home/"
  },
  {
    image: "/project-images/ethidentitykit.png",
    url: "https://ethidentitykit.com"
  },
  {
    image: "/project-images/efp.png",
    url: "https://efp.app"
  },
  {
    image: "/project-images/ethidentitykit.png",
    url: "https://ethidentitykit.com"
  },
  {
    image: "/project-images/koyo-finance.png",
    url: "https://koyo.finance"
  },
  {
    image: "/project-images/efp.png",
    url: "https://efp.app"
  },
  {
    image: "/project-images/ethidentitykit.png",
    url: "https://ethidentitykit.com"
  },
  {
    image: "/project-images/koyo-finance.png",
    url: "https://koyo.finance"
  },
  {
    image: "/project-images/naicha-finance.png",
    url: ""
  },
];

const Projects = () => {
  const { isDark } = useTheme();

  return (
    <main
      className={`${isDark
        ? 'dark-theme dark'
        : 'light-theme'
        } h-screen w-full flex flex-col items-center lg:items-start overflow-hidden`}
    >
      <ThreeDMarquee images={images} />
    </main>
  );
};

export default Projects;

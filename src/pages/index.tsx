import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import MainSection from '../components/sections/MainSection';
import WelcomeSection from '../components/sections/WelcomeSection';

gsap.registerPlugin(ScrollTrigger);

const IndexPage: React.FC<PageProps> = () => {
  // Initialize MailtoUI: https://mailtoui.com/
  useLayoutEffect(() => {
    require('mailtoui/dist/mailtoui-min.js').run();
  }, []);

  return (
    <div>
      <WelcomeSection />
      <MainSection />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jack Swiggett</title>;

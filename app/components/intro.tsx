"use client";

// import { CMS_NAME, CMS_URL } from "@/lib/constants";

import Logo from "./logo";
import { LinkedInIcon } from "./icons/linkedin-icon";
import { GitHubIcon } from "./icons/github-icon";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-10 mb-10 md:mb-8">
      <div className="flex items-center">
        <div className="mr-4">
          <Logo />
        </div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight md:pr-8">
          Mo&apos;s Blog
        </h2> 
      </div>
      <div className="flex items-center space-x-4 mt-5 md:pl-8">
        <a
          href="https://www.linkedin.com/in/shibl/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/mshibl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>
      </div>
    </section>
  );
}

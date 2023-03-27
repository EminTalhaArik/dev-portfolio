import React from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Typical from "react-typical";
import Link from "next/link";

import LinkedInIcon from "@/components/icons/LinkedIn";
import GithubIcon from "@/components/icons/Github";
import InstagramIcon from "@/components/icons/Instagram";

const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={Infinity}
        wrapper="p"
        steps={[
          "Business Analyst",
          2000,
          "Software Developer",
          2000,
          "Entrepreneurship Lover 🚀",
          2000,
        ]}
      />
    );
  },
  (props, prevProps) => true
);

export default function Home() {
  return (
    <Layout title={"Portolio"} description={"My Portfolio"}>
      <motion.img
        src="/images/ball-1.svg"
        alt="ball-1"
        className="hidden md:block h-auto absolute top-48 right-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}
      ></motion.img>
      <motion.img
        src="/images/ball-2.svg"
        alt="ball-1"
        className="hidden md:block h-auto absolute bottom-10 left-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}
      ></motion.img>

      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span>Hello, </span> I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercased md:text-4xl md:mt-3 dark:text-white">
              Emin Arik
            </h1>
            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/EminTalhaArik"
                target={"_blank"}
                rel="noopener noreferer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <GithubIcon className={"w-10 h-10 fill-current"} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/emin-talha-arik"
                target={"_blank"}
                rel="noopener noreferer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <LinkedInIcon className={"w-10 h-10 fill-current"} />
              </motion.a>
              <motion.a
                href="https://instagram.com/talhemin"
                target={"_blank"}
                rel="noopener noreferer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <InstagramIcon className={"w-10 h-10 fill-current"} />
              </motion.a>
            </div>
          </div>
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">Todo:</span> You can drag
                    these balloons 🎈🎈
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="">
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        technologies
                        <span className="font-bold text-pink-300"></span> =
                        ["Python", "Javascript", "Analyze/Report"];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        experiences
                        <span className="font-bold text-pink-300"></span> =
                        ["LOGO Yazılım", "Teens In Innovation"];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        Education
                        <span className="font-bold text-pink-300"></span> =
                        ["Mehmet Tuğrul Tekbulut MTAL"];{" "}
                      </p>
                    </div>
                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}

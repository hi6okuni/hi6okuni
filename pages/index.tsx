import { motion } from "framer-motion";
import type { NextPage } from "next";
import { Layout } from "../components/layout";

const Home: NextPage = () => {
  const myAccounts = [
    { service: "Linkedin", url: "https://www.linkedin.com/in/hi6okuni" },
    { service: "Github", url: "https://github.com/hi6okuni" },
    { service: "Twitter", url: "https://twitter.com/hi6okuni" },
    { service: "Instagram", url: "https://www.instagram.com/hi6okuni" },
  ];

  const contactItems = [
    {
      service: "Email",
      display: "hi6okuni@gmail.com",
      url: "hi6okuni@gmail.com",
    },
    {
      service: "Github",
      display: "@hi6okuni",
      url: "https://github.com/hi6okuni",
    },

    {
      service: "LinkedIn",
      display: "@hi6okuni",
      url: "https://www.linkedin.com/in/hi6okuni/",
    },

    {
      service: "Twitter",
      display: "@hi6okuni",
      url: "https://twitter.com/hi6okuni",
    },
  ];

  return (
    <Layout>
      <div className="flex justify-center items-center px-36 py-10 bg-hi6okuni-bg">
        <div className="flex flex-col max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <div className="mt-36">
              <h1 className="text-hi6okuni-highlight">Hirokuni Honda</h1>
              <p className="pt-3 text-hi6okuni-dim font-serif">
                Crafting software that makes people feel something special.
              </p>
            </div>
          </motion.div>
          <div className="mt-36">
            <h1 className="text-hi6okuni-highlight">About</h1>
            <p className="pt-6 text-hi6okuni-default font-serif leading-7">
              I&apos;m a frontend-engineer with about a year experience in a
              Japanese startup where I&apos;ve been recently developing a new
              product with React + GraphQL from Scratch. Before I became an
              engineer, I taught myself coding mainly Javascript and launched a
              service called{" "}
              <a
                className="underline italic hover:text-hi6okuni-highlight ease-in-out duration-300"
                href="https://swimgood.io/"
              >
                swimgood.io
              </a>{" "}
              which enables users to instantly analyze individual U.S. stocks
              with insightful charts. Currently I am passionate about learning
              technologies which unlock new possibilities of web like Rust and
              WebAssembly.
            </p>
          </div>
          {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 1 }}
        > */}
          <div className="mt-36">
            <h1 className="pb-6 text-hi6okuni-highlight">Contact</h1>
            {contactItems.map((item) => (
              <div key={item.service} className="flex mb-3 ">
                <div className="text-hi6okuni-dim basis-1/4">
                  {item.service}
                </div>
                <div className="basis-1/2">
                  <a
                    href={item.url}
                    className="text-hi6okuni-default hover:text-hi6okuni-highlight ease-in-out duration-300 underline decoration-1"
                  >
                    {item.display}
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* </motion.div> */}

          {/* <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          <div className="relative w-36 h-36 bg-gradient-to-tr from-emerald-100 via-lime-100 to-emerald-50">
            <div className="absolute top-4 right-6">
              <span className="font-inter text-slate-700">hi6okuni</span>
            </div>
            <div className="absolute bottom-3 left-4">
              <span className="font-inter text-slate-700">
                software engineer
              </span>
            </div>
          </div>
        </motion.div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

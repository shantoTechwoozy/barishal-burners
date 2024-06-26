"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AboutDM from "./aboutdm";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-10 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="https://img.freepik.com/premium-photo/man-playing-cricket_81048-22993.jpg?w=900"
                alt="About"
                className="dark:hidden"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="text-grey-600 mb-5 text-4xl font-bold">
                Barisal Burners Overview
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                The Barisal Burners bring the fiery spirit of the south-central
                region of Bangladesh. They are famous for their passionate fan
                base and dynamic style of play.
                <br />
                <strong>Strengths:</strong> Explosive batting and innovative
                bowling strategies.
                <br />
                <strong>Key Players:</strong>
                <br />
                <strong>Captain:</strong> Mosaddek Hossain
                <br />
                <strong>Star Batsman:</strong> Shamsur Rahman
                <br />
                <strong>Leading Bowler:</strong> Taskin Ahmed
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-c-1235 px-4 md:px-8 xl:px-0">
          <h2 className="text-grey-600 mb-18 text-center text-4xl font-bold">
            Barisal Burners Fixtures & Players List
          </h2>
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image src="/fixture.jpg" alt="About" fill />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image src="/list.jpg" alt="About" fill />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
      <AboutDM />
    </>
  );
};

export default About;

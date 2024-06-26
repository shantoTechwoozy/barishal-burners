"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutDM = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto flex max-w-c-1235 flex-col items-center justify-center px-4 md:px-8 xl:px-0">
          <p className="mb-10 text-center">JERSEY</p>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row lg:gap-32.5">
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
              className="relative mx-auto md:w-1/3"
            >
              <Image
                src="/jrs.jpg"
                alt="About"
                className="dark:hidden"
                width={588}
                height={526.5}
                layout="responsive"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default AboutDM;

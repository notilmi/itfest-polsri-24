import { useState } from "react";
import { Boxes } from "../ui/background-boxes";
import { motion } from "framer-motion";

export function AboutUsSection() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="py-24 md:py-28  mt-4 md:mt-0 relative w-full overflow-hidden  flex flex-col items-center justify-center p-4 md:border-b">
        <Boxes className="hidden md:flex" />
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div z-20"
        >
          <div className="flex flex-col gap-6 items-center max-w-screen-lg">
            <h1 className="text-4xl font-semibold text-center md:text-7xl">
              Tentang Kami 👥
            </h1>

            <h2 className="text-lg font-normal text-center text-muted-foreground md:text-2xl">
              Temukan Peluang Baru dan Tingkatkan Pengetahuan Anda di Dunia
              Influencer & Endorsement Melalui Event Kami!
            </h2>
          </div>
        </motion.div>
      </div>
      <div className="py-18 md:py-20 max-w-screen-lg mx-auto">
        <div
          className={`
        p-8
        rounded-md
        transition-all
        duration-300
        ease-in-out
        hover:bg-red-50
        ${isHovered ? "scale-105" : ""}
        `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="text-gray-600 text-lg mb-7">
            Influencify adalah platform influencer marketing yang membantu brand
            terhubung dengan influencer untuk memperluas jangkauan dan membangun
            engagement yang kuat.
          </div>
          <div className="text-gray-600 text-lg mb-7">
            Manfaat bekerja dengan kami adalah peningkatan visibilitas brand,
            jangkauan audiens yang lebih luas, dan hubungan yang lebih erat
            dengan pelanggan. Tujuan kami adalah menciptakan kampanye yang
            relevan dan berdampak, membantu brand Anda tumbuh dan mencapai
            kesuksesan jangka panjang.
          </div>
          <div className="text-gray-600 text-lg">
            Dengan strategi kreatif dan autentik, kami siap membawa brand Anda
            ke level berikutnya.
          </div>
        </div>
      </div>
    </>
  );
}

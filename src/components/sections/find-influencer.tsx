import { Button } from "@/components/ui/button";
import { World } from "@/components/ui/globe";
import { globeConfig, sampleArcs } from "@/lib/globefunction";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const FindInfluencerSection = () => {
  return (
    <div className="flex flex-row  items-center justify-center py-24 md:py-32 lg:py-48 h-screen md:h-auto dark:bg-black bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
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
          className="div"
        >
          <div className="flex flex-col items-center text-center max-w-screen-md mx-auto z-20">
            <h2 className="text-center text-xl md:text-5xl font-bold text-black dark:text-white">
              Temukan Influencer Dari Seluruh Belahan Dunia
            </h2>
            <p className="text-center text-lg md:text-xl font-normal text-neutral-700 dark:text-neutral-200 max-w-screen-md mt-2 mx-auto">
              Kami Telah Bekerjasama Dengan 9129 Influencer Dari 149+ Lebih
              Negara
            </p>
            <Button className="mt-4 z-20">
              Temukan Influencer Terbaik <Search className="size-4 ml-2" />
            </Button>
          </div>
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full bottom-24 md:-bottom-28 lg:-bottom-24 h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
};

export default FindInfluencerSection;

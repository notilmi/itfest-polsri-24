import { Boxes } from "@/components/ui/background-boxes";
import { Button } from "@/components/ui/button";
import { World } from "@/components/ui/globe";
import { globeConfig, sampleArcs } from "@/lib/globefunction";
import { motion } from "framer-motion";
import { Calendar, DoorOpen, Search } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="py-24 mt-4 md:mt-0 md:py-32 lg:py-48 relative w-full overflow-hidden  flex flex-col items-center justify-center p-4 md:border-b">
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
              Kembangkan Bisnis Anda 10x Lipat Dengan Endorse! 📱
            </h1>

            <h2 className="text-lg font-normal text-center text-muted-foreground md:text-2xl">
              Akses jaringan Influencer terbaik kami dan lihat hasil yang
              mengagumkan dalam waktu singkat
            </h2>
            <div className="flex flex-row gap-2">
              <Button>
                <DoorOpen className="size-4 mr-2" />
                Mulai Sekarang
              </Button>
              <Button variant="secondary">
                <Calendar className="mr-2 size-4" /> Jadwalkan Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Find Influencer Section */}
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
              <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                Temukan Influencer Dari Seluruh Belahan Dunia
              </h2>
              <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
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
    </div>
  );
};

export default LandingPage;

import { Boxes } from "@/components/ui/background-boxes";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, DoorOpen } from "lucide-react";

const HeroSection = () => {
  return (
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
          <div className="text-muted-foreground flex flex-row mt-4 gap-4 justify-center">
            <p>Featured on:</p>
            <img
              src="https://cdn.brandfetch.io/ycombinator.com/w/512/h/104/logo"
              className="w-auto h-6"
            />
            <img
              src="https://cdn.brandfetch.io/producthunt.com/w/512/h/512/logo"
              className="w-auto h-6"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

import EventSection from "@/components/sections/event-section";
import { Boxes } from "@/components/ui/background-boxes";
import { motion } from "framer-motion";

function EventPage() {
  return (
    <div className="flex flex-col gap-8 py-12">
      <div className="py-16 mt-4 md:mt-0 md:py-20 lg:py-24 relative w-full overflow-hidden  flex flex-col items-center justify-center p-4 md:border-b">
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
              Event Kami! 📅
            </h1>

            <h2 className="text-lg font-normal text-center text-muted-foreground md:text-2xl">
              Belajar & Stay Up To Date Tentang Influencer & Endorsement Melalui
              Event Kami!
            </h2>
          </div>
        </motion.div>
      </div>
      <EventSection />
    </div>
  );
}

export default EventPage;

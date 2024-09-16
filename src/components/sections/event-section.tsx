import { Grid } from "./feature-section";

// Definisikan tipe untuk data event
interface Event {
  date: string;
  title: string;
  image: string;
  desc: string;
}

// Data event
const events: Event[] = [
  {
    date: "2 Juli 2024",
    title: "Serangan Siber pada PDNS",
    image: "/artikel/artikel1.jpg",
    desc: "Pembahasan metode serangan siber yang terjadi pada data PDNS.",
  },
  {
    date: "20 Juni 2024",
    title: "Influecer Muda Tersukses",
    image: "/artikel/artikel2.jpg",
    desc: "Talkshow: cara menjadi sukses dengan menjadi influencer.",
  },
  {
    date: "12 Juni 2024",
    title: "Tips Menjadi Kaya Dalam 1 Hari",
    image: "/artikel/artikel3.jpg",
    desc: "OpenDebate: Apa yang bisa membuat anda menjadi Kaya?.",
  },
  {
    date: "14 Mei 2024",
    title: "Cara Orang Kaya Menikmati Hidup",
    image: "/artikel/artikel4.jpg",
    desc: "Talkshow: Orang kaya memiliki trik tersendiri dalam menikmati hidup.",
  },
];

// Definisikan tipe untuk props EventCard
interface EventCardProps {
  date: string;
  title: string;
  image: string;
  desc: string;
}

const EventCard: React.FC<EventCardProps> = ({ date, title, image, desc }) => {
  return (
    <div className="border rounded-lg hover:cursor-default overflow-hidden hover:scale-105 transition ease-in-out duration-150 p-4 flex flex-col lg:flex-row-reverse relative">
      <Grid size={20} />
      <img
        src={image}
        alt={title}
        className="w-full lg:w-1/3 h-36 object-cover rounded-md mb-4"
      />
      <div className="lg:w-2/3 z-30">
        <h3 className="text-lg font-semibold">{date}</h3>
        <h1 className="text-lg font-bold text-neutral-900">{title}</h1>
        <p className="text-sm text-gray-600 mt-1">{desc}</p>
      </div>
    </div>
  );
};

function EventSection() {
  return (
    <div className="container mx-auto px-4 max-w-[75%] py-8">
      <h2 className="italic text-gray-500">Past events</h2>
      <h2 className="text-2xl font-semibold mb-6">Kegiatan Sebelumnya</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div key={index}>
            <EventCard {...event} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventSection;

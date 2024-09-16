import { useState } from "react";

export function AboutUsSection() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="py-18 md:py-20 max-w-screen-lg mx-auto">
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-2xl font-medium text-red-200 text-center">
          Tentang Kami
        </h2>
        <p className="text-5xl text-center font-bold">Influencify</p>
      </div>
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
          jangkauan audiens yang lebih luas, dan hubungan yang lebih erat dengan
          pelanggan. Tujuan kami adalah menciptakan kampanye yang relevan dan
          berdampak, membantu brand Anda tumbuh dan mencapai kesuksesan jangka
          panjang.
        </div>
        <div className="text-gray-600 text-lg">
          Dengan strategi kreatif dan autentik, kami siap membawa brand Anda ke
          level berikutnya.
        </div>
      </div>
    </div>
  );
}

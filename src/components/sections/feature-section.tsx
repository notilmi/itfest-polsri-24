import { useId } from "react";

export function FeaturesSection() {
  return (
    <div className="py-18 md:py-24 max-w-screen-lg mx-auto">
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-5xl font-bold text-center">
          Dibuat Khusus Untukmu!
        </h2>
        <p className="text-xl text-center text-neutral-600">
          Kami Menawarkan Fitur Yang Memudahkanmu Dalam Menjalankan Kampanye
          Endorsement
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b m-3 md:m-2 bg-red-500 p-6 rounded-3xl overflow-hidden hover:scale-105 hover:cursor-default transition ease-in-out duration-200"
          >
            <Grid size={20} />
            <p className="text-xl font-bold text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-white mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Temukan Influencer dengan Cepat",
    description:
      "Cari influencer yang tepat untuk brand Anda dengan filter yang mudah digunakan berdasarkan kategori, lokasi, dan jumlah pengikut.",
  },
  {
    title: "Hubungi Influencer Langsung",
    description:
      "Kirim pesan langsung ke influencer yang Anda minati dan negosiasikan kerja sama endorsement dengan mudah.",
  },
  {
    title: "Kelola Kampanye Endorsement",
    description:
      "Pantau dan kelola kampanye endorsement Anda dengan mudah, termasuk melacak progress, melihat laporan, dan berkomunikasi dengan influencer.",
  },
  {
    title: "Analisis Performa Endorsement",
    description:
      "Dapatkan analisis yang komprehensif tentang performa kampanye endorsement Anda, termasuk engagement, reach, dan ROI.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-red-900/30 from-red-100/30 to-red-300/30 dark:to-red-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-red-900 dark:stroke-red-900 stroke-red-900/10 fill-red-900/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

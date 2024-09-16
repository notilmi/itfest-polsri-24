import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Grid } from "./feature-section";

const testimonials = [
  {
    quote:
      "Influencify telah membantu kami menemukan influencer yang tepat untuk brand kami. Platform ini sangat mudah digunakan dan kami berhasil meningkatkan engagement kami secara signifikan.",
    name: "Abdul Rizal",
    position: "Ayam Geprek Mas Abdul",
    image: "https://thispersondoesnotexist.com",
  },
  {
    quote:
      "Saya sangat terkesan dengan kecepatan dan efisiensi Influencify dalam membantu saya menemukan influencer yang tepat untuk kampanye saya. Platform ini sangat membantu saya dalam meningkatkan brand awareness dan penjualan.",
    name: "Mariam Sulis",
    position: "Boutique Fashionku",
    image: "https://thispersondoesnotexist.com",
  },
  {
    quote:
      "Influencify adalah solusi yang sempurna untuk bisnis yang ingin meningkatkan engagement dan brand awareness melalui influencer marketing. Platform ini sangat mudah digunakan dan menawarkan berbagai fitur yang bermanfaat.",
    name: "Rafi Karburator",
    position: "Bengkel Mang Rapi",
    image: "https://thispersondoesnotexist.com",
  },
];

export default function TestimonialSection() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-28 max-w-screen-xl">
      <div className="flex flex-col gap-2 mb-8 max-w-screen-md mx-auto">
        <h2 className="text-5xl font-bold text-center">
          Apa Kata Pengguna Kami?
        </h2>
        <p className="text-xl text-center text-neutral-600">
          Lihat sendiri apa yang dikatakan para pengguna kami tentang pengalaman
          mereka dengan Influencify!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-primary text-primary-foreground border-none relative overflow-hidden hover:scale-105 transition ease-in-out duration-150">
          <Grid size={20} />
          <CardContent className="p-6">
            <div className="text-primary-foreground text-8xl mb-4 font-bricolague">
              "
            </div>
            <p className="text-4xl mb-6 ">{testimonials[0].quote}</p>
            <div className="flex items-center">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage
                  src={testimonials[0].image}
                  alt={testimonials[0].name}
                />
                <AvatarFallback>
                  {testimonials[0].name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{testimonials[0].name}</p>
                <p className="text-primary-foreground/60">
                  {testimonials[0].position}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-8">
          {testimonials.slice(1).map((testimonial, index) => (
            <Card
              key={index}
              className="border border-border hover:scale-105 transition ease-in-out duration-150"
            >
              <CardContent className="p-6">
                <div className="text-primary text-4xl mb-2">"</div>
                <p className="text-foreground mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

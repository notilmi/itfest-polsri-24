import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Apa itu Influencify?",
      answer:
        "Influencify adalah platform influencer marketing yang membantu brand terhubung dengan influencer untuk memperluas jangkauan dan membangun engagement yang kuat.",
    },
    {
      question: "Bagaimana cara menemukan influencer di Influencify?",
      answer:
        "Anda dapat menemukan influencer di Influencify dengan menggunakan filter berdasarkan kategori, lokasi, dan jumlah pengikut.",
    },
    {
      question: "Bagaimana cara menghubungi influencer di Influencify?",
      answer:
        "Anda dapat menghubungi influencer di Influencify dengan mengirimkan pesan langsung melalui platform.",
    },
    {
      question: "Apakah Influencify aman untuk digunakan?",
      answer:
        "Ya, Influencify adalah platform yang aman dan terpercaya. Kami menjaga privasi data pengguna dan keamanan platform.",
    },
  ];

  return (
    <div className="py-24 md:py-28 max-w-screen-lg m-8 lg:mx-auto">
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-5xl font-bold text-center">
          Frequently Asked Questions (FAQ)
        </h2>
        <p className="text-xl text-center text-neutral-600">
          Temukan jawaban atas pertanyaan yang sering diajukan tentang
          Influencify.
        </p>
      </div>
      <Accordion className="mt-4" type="multiple">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={index.toString()}>
            <AccordionTrigger className="text-start">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-start">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;

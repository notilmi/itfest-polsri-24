import { InstagramIcon, Mail, Phone } from "lucide-react";
import { Grid } from "./feature-section";

const ContactSection = () => {
  return (
    <div className="relative overflow-hidden py-18 max-w-screen-lg mx-auto items-center">
      <Grid size={25} />
      <div className="flex flex-col gap-2 mb-8">
        <div className="w-full max-w-6xl p-6 bg-white rounded-lg border-solid border-2 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800">Hubungi kami</h1>
            <p className="text-gray-500 mt-2">
              Silahkan hubungi kami untuk kerjasama dan pertanyaan lain
            </p>
            <div className="mt-4">
              <div className="flex items-center justify-center md:justify-start mt-2">
                <Phone className="text-red-500 size-4" />
                <span className="ml-2 text-gray-700">+62 882-6976-9793</span>
              </div>
              <div className="flex items-center justify-center md:justify-start mt-2">
                <InstagramIcon className="text-red-500 size-4" />
                <span className="ml-2 text-gray-700">influencify_</span>
              </div>
              <div className="flex items-center justify-center md:justify-start mt-2">
                <Mail className="text-red-500 size-4" />
                <span className="ml-2 text-gray-700">
                  influencify@influencify.com
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <img
              alt="Illustration of buildings and communication icons"
              className="w-64 h-40 object-cover mx-auto md:mx-0"
              src="/city.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

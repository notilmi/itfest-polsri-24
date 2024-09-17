const Footer = () => {
  return (
    <footer className="bg-slate-50 rounded-lg border dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0">
            <img
              src="/influencify-squared.svg"
              className="rounded-full h-8"
              alt="Influencify"
            />
            <span className="self-center ml-1 text-slate-950 text-2xl font-semibold whitespace-nowrap dark:text-white">
              Influencify
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/about" className="text-slate-950 m-4 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-slate-950 m-4 hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="/about" className="text-slate-950 m-4 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-slate-950 sm:text-center dark:text-gray-400">
        © 2024{" "}
          <a href="#" className="hover:underline">
            Influencify
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

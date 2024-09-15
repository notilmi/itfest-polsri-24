const Pricing = () => {
    return (
      <div className="flex flex-col gap-2">
        <div className="py-24 mt-4 md:mt-0 md:py-28 lg:pt-36 lg:pb-10 relative w-full overflow-hidden flex flex-col items-center justify-center p-4">
          <div className="flex flex-col justify-center items-center gap-5 max-w-screen-lg">
            <h1 className="text-3xl font-semibold text-center md:text-4xl">
              Dapatkan Promo Terbaik <br /> Mengguncang Harga!
            </h1>
            <p className="text-center">Dapatkan Harga Eksklusif Terjangkau Sekarang Juga!</p>
            <h2 className="hover:scale-105 hover:bg-red-500  transition-transform cursor-pointer text-1xl font-semibold rounded-full bg-red-600 text-white py-3 px-8 text-center md:text-2xl">
              Join Sekarang!
            </h2>
          </div>
        </div>
  
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24" id="price">
          <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
            
            {/* Price Card 1 */}
            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white shadow-lg border border-red-200">
              <div className="mb-5">
                <div className="text-gray-900 font-semibold mb-1">Noob</div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-gray-900 font-bold text-3xl">$</span>
                  <span className="text-gray-900 font-bold text-4xl">29</span>
                  <span className="text-gray-500 font-medium">/bln</span>
                </div>
                <div className="text-sm text-gray-500 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, veniam!</div>
                
              </div>
              <div className="text-gray-900 font-medium mb-3">Includes:</div>
              <ul className="text-gray-600 text-sm space-y-3 flex flex-col justify-start h-full">
                <li className="flex items-center">
                  <span>✔ Unlimited placeholder texts</span>
                </li>
                <li className="flex items-center">
                  <span>✔ Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center">
                  <span>✔ Excepteur sint occaecat cupidatat</span>
                </li>
              </ul>
              <a className="w-full my-5 inline-flex justify-center rounded-lg bg-red-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-red-500 hover:scale-105 transition-transform" href="#0">
                  Purchase Plan
                </a>
            </div>
  
            {/* Price Card 2 */}
            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white shadow-lg border border-red-200">
              <div className="absolute top-0 right-0 mr-6 -mt-4">
                <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-600 text-white rounded-full">Most Popular</div>
              </div>
              <div className="mb-5">
                <div className="text-gray-900 font-semibold mb-1">Pro</div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-gray-900 font-bold text-3xl">$</span>
                  <span className="text-gray-900 font-bold text-4xl">49</span>
                  <span className="text-gray-500 font-medium">/bln</span>
                </div>
                <div className="text-sm text-gray-500 mb-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, dignissimos?</div>
                
              </div>
              <div className="text-gray-900 font-medium mb-3">Includes:</div>
              <ul className="text-gray-600 text-sm space-y-3 flex flex-col justify-start h-full">
                <li className="flex items-center">
                  <span>✔ Unlimited placeholder texts</span>
                </li>
                <li className="flex items-center">
                  <span>✔ Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center">
                  <span>✔ Excepteur sint occaecat cupidatat</span>
                </li>
                <li className="flex items-center">
                  <span>✔ Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center">
                  <span>✔ Excepteur sint occaecat cupidatat</span>
                </li>
              </ul>

              <a className="w-full my-5 inline-flex justify-center rounded-lg bg-red-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-red-500 hover:scale-105 transition-transform" href="#0">
                  Purchase Plan
                </a>
            </div>
  
            {/* Price Card 3 */}
            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white shadow-lg border border-red-200">
              <div className="mb-5">
                <div className="text-gray-900 font-semibold mb-1">hAckEr</div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-gray-900 font-bold text-3xl">$</span>
                  <span className="text-gray-900 font-bold text-4xl">79</span>
                  <span className="text-gray-500 font-medium">/bln</span>
                </div>
                <div className="text-sm text-gray-500 mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, minus!</div>
                
              </div>
              <div className="text-gray-900 font-medium mb-3">Includes:</div>
              <ul className="text-gray-600 text-sm space-y-3 flex flex-col justify-start h-full">
                <li className="flex items-center">
                  <span>✔ Unlimited placeholder texts</span>
                </li>
                <li className="flex items-center">
                  <span>✔ Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center">
                  <span>✔ Excepteur sint occaecat cupidatat</span>
                </li>
                <li className="flex items-center">
                  <span>✔ Unlimited placeholder texts</span>
                </li>
                <li className="flex items-center">
                  <span>✔ Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center">
                  <span>✔ Excepteur sint occaecat cupidatat</span>
                </li>
                <li className="flex items-center">
                  <span>✔ Unlimited placeholder texts</span>
                </li>
                <li className="flex items-center">
                  <span>✔ Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center">
                  <span>✔ Excepteur sint occaecat cupidatat</span>
                </li>
              </ul>

              <a className="w-full my-5 inline-flex justify-center rounded-lg bg-red-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-red-500 hover:scale-105 transition-transform" href="#0">
                  Purchase Plan
                </a>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default Pricing;
  
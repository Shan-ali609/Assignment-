import React, { useState, useEffect } from 'react';
// Import your skip images
import yard4 from "./assets/yard4.jpg";
import yard8 from "./assets/yard8.jpg";
import  yard10 from "./assets/yard10.jpg";
import yard14 from "./assets/yard14.jpg";
import yard20 from "./assets/yard20.jpg";
import yard40 from "./assets/yard40.jpg";

const App = () => {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  // Map skip sizes to their corresponding images
  const skipImages = {
    4: yard4,
    6: yard8,
    8: yard8,
    10: yard10,
    12: yard8,
    14: yard14,
    16: yard14,
    20: yard20,
    40: yard40
  };

  const skipsData = [
    { id: 17933, size: 4, hire_period_days: 14, price_before_vat: 278, vat: 20, allowed_on_road: true },
    { id: 17934, size: 6, hire_period_days: 14, price_before_vat: 305, vat: 20, allowed_on_road: true },
    { id: 17935, size: 8, hire_period_days: 14, price_before_vat: 375, vat: 20, allowed_on_road: true },
    { id: 17936, size: 10, hire_period_days: 14, price_before_vat: 400, vat: 20, allowed_on_road: false },
    { id: 17937, size: 12, hire_period_days: 14, price_before_vat: 439, vat: 20, allowed_on_road: false },
    { id: 17938, size: 14, hire_period_days: 14, price_before_vat: 470, vat: 20, allowed_on_road: false },
    { id: 17939, size: 16, hire_period_days: 7, price_before_vat: 496, vat: 20, allowed_on_road: false },
    { id: 15124, size: 20, hire_period_days: 14, price_before_vat: 992, vat: 20, allowed_on_road: false },
    { id: 15125, size: 40, hire_period_days: 14, price_before_vat: 992, vat: 20, allowed_on_road: false }
  ];

  useEffect(() => {
    setShowBanner(!!selectedSkip);
  }, [selectedSkip]);

  const handleSelectSkip = (skip) => {
    if (selectedSkip?.id === skip.id) {
      setSelectedSkip(null);
    } else {
      setSelectedSkip(skip);
    }
  };

  const calculateTotalPrice = (price, vat) => price + (price * (vat / 100));

  return (
    <div className="min-h-screen bg-black text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
         {/* Professional Header */}
        <div className="text-center mb-12">
          <div className="">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
              Premium Skip Hire
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white ">
              Select Your Skip Size
            </h1>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm mt-2">
            Choose from our premium range of skip sizes. All prices include VAT and standard 14-day hire period.
          </p>
        </div>
            <div className="w-4xl h-0.5 bg-blue-500 mx-auto"></div>
          <div className=" left-6 my-5">
        <button
        onClick={() => window.history.back()}
          className=" text-white px-4 py-2 hover:text-blue-400 cursor-pointer  text-sm font-medium"
         >
         ← Previous Page
        </button>
         </div>
      

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skipsData.map((skip) => (
            <div
              key={skip.id}
              className={`relative bg-gray-900 border border-gray-700 rounded-xl overflow-hidden transition-all duration-200 ease-in-out 
              ${selectedSkip?.id === skip.id ? 'ring-2 ring-blue-600 shadow-lg' : 'hover:border-gray-600 hover:shadow-md'}`}
              onClick={() => handleSelectSkip(skip)}
            >
              <div className="p-6 relative">
              

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{skip.size} Yard Skip</h3>
                    <p className="text-gray-400 text-sm">{skip.hire_period_days}-day hire period</p>
                  </div>
                  <div className="w-16 h-16 flex items-center justify-center overflow-hidden rounded-lg border border-gray-600">
                    <img 
                      src={skipImages[skip.size]} 
                      alt={`${skip.size} yard skip`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                  {/* Badge for road permission */}
                {!skip.allowed_on_road && (
                  <div className="absolute  left-4 top-20 bg-red-900/80 text-red-100 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Not Allowed on Road
                  </div>
                )}

                {/* Capacity indicator */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Capacity</span>
                    <span>{skip.size} cubic yards</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                    <div
                      style={{ width: `${Math.min(100, (skip.size / 40) * 100)}%` }}
                      className="h-full bg-white"
                    ></div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-400">Total price incl. VAT</p>
                    <p className="text-2xl font-bold text-white">
                      £{calculateTotalPrice(skip.price_before_vat, skip.vat).toFixed(0)}
                    </p>
                  </div>
                  
                  <button
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                      selectedSkip?.id === skip.id
                        ? 'bg-blue-600 text-white cursor-pointer'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    {selectedSkip?.id === skip.id ? (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Selected
                      </span>
                    ) : (
                      'Select'
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

       <div className="text-center text-sm text-gray-500 max-w-4xl mx-auto px-4 pt-8 border-t border-gray-800">
          <p>
          Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
          </p>
        </div>
      </div>

      {/* Sticky Bottom Banner */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          showBanner ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center overflow-hidden rounded-lg border border-gray-600">
                {selectedSkip && (
                  <img 
                    src={skipImages[selectedSkip.size]} 
                    alt={`${selectedSkip.size} yard skip`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{selectedSkip?.size} Yard Skip</h3>
                <p className="text-sm text-gray-400">
                  {selectedSkip?.hire_period_days} days • £
                  {selectedSkip && calculateTotalPrice(selectedSkip.price_before_vat, selectedSkip.vat).toFixed(0)} incl. VAT
                </p>
              </div>
            </div>

            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={() => setSelectedSkip(null)}
                className="px-4 py-2 text-sm font-medium cursor-pointer text-white hover:bg-gray-800 rounded-md border border-gray-600 transition w-full sm:w-auto"
              >
                Cancel
              </button>
              <button
                className="px-6 py-2 text-sm font-medium cursor-pointer bg-white hover:bg-gray-100 text-black rounded-md transition w-full sm:w-auto"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;



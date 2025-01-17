import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ResponsiveCardSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isRTL, setIsRTL] = useState(false); // Track language direction

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const checkLanguageDirection = () => {
      setIsRTL(document.documentElement.dir === 'rtl'); // Check if the language is RTL
    };

    checkMobile();
    checkLanguageDirection();

    window.addEventListener('resize', checkMobile);
    window.addEventListener('languagechange', checkLanguageDirection); // Update on language change
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('languagechange', checkLanguageDirection);
    };
  }, []);

  const cards = [
    { id: 1, title: 'Engine parts', description: '', image: './engine.png' },
    { id: 2, title: 'Transmission parts', description: 'Relax by crystal waters', image: '/transmission.png' },
    { id: 3, title: 'City Break', description: 'Urban adventures await', image: '/api/placeholder/400/300' },
    { id: 4, title: 'Forest Camping', description: 'Connect with nature', image: '/api/placeholder/400/300' },
    { id: 5, title: 'Desert Safari', description: 'Adventure in the dunes', image: '/api/placeholder/400/300' },
    { id: 6, title: 'Island Hopping', description: 'Tropical paradise tours', image: '/api/placeholder/400/300' },
  ];

  const getVisibleCards = () => (isMobile ? 1 : 3);

  const nextSlide = () => {
    setStartIndex((prev) => Math.min(prev + 1, cards.length - getVisibleCards()));
  };

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const canGoNext = startIndex < cards.length - getVisibleCards();
  const canGoPrev = startIndex > 0;

  return (
    <div className="max-w-full mx-auto px-4 md:px-12 py-8">
      <div className={`relative ${isRTL ? 'rtl' : 'ltr'}`} style={{ width: isMobile ? '90vw' : '100%' }}>
        <button
          onClick={prevSlide}
          disabled={!canGoPrev}
          className={`absolute ${isRTL ? 'right-[-30px]' : 'left-[-30px]'} top-1/2 -translate-y-1/2 
            bg-white p-2 rounded-full shadow-lg z-10 ${!canGoPrev ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          disabled={!canGoNext}
          className={`absolute ${isRTL ? 'left-[-30px]' : 'right-[-30px]'} top-1/2 -translate-y-1/2 
            bg-white p-2 rounded-full shadow-lg z-10 ${!canGoNext ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * (100 / getVisibleCards())}%)`,
              // Reverse sliding direction for RTL
              direction: isRTL ? 'rtl' : 'ltr',
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className={`${isMobile ? 'w-full' : 'w-1/3'} flex-shrink-0 px-2`}
              >
                <div className="bg-white shadow-lg overflow-hidden">
                  <div className="relative h-96 md:h-96">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4 bg-red-600 text-white">
                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: cards.length - (getVisibleCards() - 1) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIndex(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${startIndex === idx ? 'bg-black' : 'bg-gray-300'}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ResponsiveCardSlider;



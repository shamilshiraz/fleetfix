import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { t } from 'i18next';

const ResponsiveCardSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const checkLanguageDirection = () => {
      setIsRTL(document.documentElement.dir === 'rtl');
    };

    checkMobile();
    checkLanguageDirection();

    window.addEventListener('resize', checkMobile);
    window.addEventListener('languagechange', checkLanguageDirection);

    const autoSlideInterval = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('languagechange', checkLanguageDirection);
      clearInterval(autoSlideInterval);
    };
  }, []);

  const cards = [
    { id: 1, title: t('products.engine'), description: '', image: './engine.webp' },
    { id: 2, title: t('products.transmission'), description: 'Relax by crystal waters', image: '/transmission.webp' },
    { id: 3, title: t('products.brake'), description: 'Urban adventures await', image: '/brake.webp' },
    { id: 4, title: t('products.suspension'), description: 'Connect with nature', image: '/suspension.webp' },
    { id: 5, title: t('products.electrical'), description: 'Adventure in the dunes', image: '/electric.webp' },
    { id: 6, title: t('products.body'), description: 'Tropical paradise tours', image: '/bodyparts.webp' },
    { id: 7, title: t('products.wheels'), description: 'Tropical paradise tours', image: '/tyre.webp' },
    { id: 8, title: t('products.cooling'), description: 'Tropical paradise tours', image: '/cooling.webp' },
    { id: 9, title: t('products.fuel'), description: 'Tropical paradise tours', image: '/fuel.webp' },
    { id: 10, title: t('products.exhaust'), description: 'Tropical paradise tours', image: '/exhaust.webp' },
    { id: 11, title: t('products.steering'), description: 'Tropical paradise tours', image: '/steering.webp' },
    { id: 12, title: t('products.air'), description: 'Tropical paradise tours', image: '/hydraulic.webp' },
  ];

  const getVisibleCards = () => (isMobile ? 1 : 3);

  const handleNextSlide = () => {
    setStartIndex((prev) => {
      const nextIndex = prev + 1;
      const maxStartIndex = cards.length - getVisibleCards();
      return nextIndex > maxStartIndex ? 0 : nextIndex;
    });
  };

  const handlePrevSlide = () => {
    setStartIndex((prev) => {
      const prevIndex = prev - 1;
      return prevIndex < 0 ? cards.length - getVisibleCards() : prevIndex;
    });
  };

  return (
    <div className="max-w-full mx-auto px-4 md:px-12 py-8">
      <div className={`relative ${isRTL ? 'rtl' : 'ltr'}`} style={{ width: isMobile ? '90vw' : '100%' }}>
        <div className="group relative">
          <button
            onClick={handlePrevSlide}
            className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 -translate-x-full
              bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-50 mx-2`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextSlide}
            className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 translate-x-full
              bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-50 mx-2`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${startIndex * (100 / getVisibleCards())}%)`,
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
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCardSlider;
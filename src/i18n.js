// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
const resources = {
  en: {
    translation: {
      nav: {
        about: "about",
        products:'products',
        brochure:'Brochure',
        contact:"Contact"
      },
      about: {
        ab: "About",
        us:'us',
        para:"Fleets Fix, based in Saudi Arabia, is a trusted supplier of high-quality truck spare parts. We specialize in providing a comprehensive range of components for commercial vehicles, catering to the needs of businesses and fleet operators across the region. We source our products from reputable manufacturers to guarantee quality and performance. Whether you're looking for engine components, brake systems, suspension parts, or any other truck essentials, Fleets Fix is your one-stop destination."
      },
      footer: {
        text: "This is the footer",
      },
    },
  },
  ar: {
    translation: {
      nav: {
        about: "من نحن",
        products:"منتجات",
        brochure:"كتيب",
        contact:'اتصال'
      },
      about: {
        ab: "مرحبًا بكم في الصفحة الرئيسية",
        us:'',
        para:''
      },
      footer: {
        text: "هذا هو التذييل",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

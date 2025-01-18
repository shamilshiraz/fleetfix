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
        contact:"Contact",
        branches:'Branches'
      },
      about: {
        ab: "About",
        us:'us',
        para:"Fleets Fix, based in Saudi Arabia, is a trusted supplier of high-quality truck spare parts. We specialize in providing a comprehensive range of components for commercial vehicles, catering to the needs of businesses and fleet operators across the region. We source our products from reputable manufacturers to guarantee quality and performance. Whether you're looking for engine components, brake systems, suspension parts, or any other truck essentials, Fleets Fix is your one-stop destination."
      },
      mission: {
        h1: "Our",
        h2:'mission',
        para:'Our mission is to ensure your trucks stay operational and efficient with reliable and durable spare parts. Our knowledgeable team is always ready to assist you in finding the right parts to your requirements.'
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
        contact:'اتصال',
        branches:'الفروع'
      },
      about: {
        ab: "من",
        us:'نحن',
        para:'تعد شركة Fleets Fix، التي يقع مقرها في المملكة العربية السعودية، موردًا موثوقًا لقطع غيار الشاحنات عالية الجودة. نحن متخصصون في توفير مجموعة شاملة من مكونات المركبات التجارية، لتلبية احتياجات الشركات ومشغلي الأساطيل في جميع أنحاء المنطقة. نحن نستورد منتجاتنا من الشركات المصنعة ذات السمعة الطيبة لضمان الجودة والأداء. سواء كنت تبحث عن مكونات المحرك، أو أنظمة الفرامل، أو أجزاء التعليق، أو أي أساسيات أخرى للشاحنة، فإن Fleets Fix هي وجهتك الوحيدة.'
      },
      mission: {
        h1: "",
        h2:'مهمتنا',
        para:'مهمتنا هي ضمان بقاء شاحناتك عاملة وفعالة من خلال قطع الغيار الموثوقة والمتينة. فريقنا ذو المعرفة جاهز دائمًا لمساعدتك في العثور على الأجزاء المناسبة لمتطلباتك.'
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

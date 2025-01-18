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
      products:{
        h1:'Our',
        h2:'Products',
        engine:'Engine Parts',
        transmission:'Transmission parts',
        brake:'Brake parts',
        suspension:'Suspension Parts',
        electrical:'Electrical parts',
        body:'Body parts',
        wheels:'wheels and tires',
        cooling:'Cooling system parts',
        fuel:'Fuel system parts',
        exhaust:'Exhaust system parts',
        steering:'Steering parts',
        air:'Air and hydraulic system parts'
      },
      grid:{
        piston: "Pistons",
        cylinder: "Cylinders",
        crankshaft: "Crankshafts",
        camshaft: "Camshafts",
        valve: "Valves",
        gear: "Gears",
        bearing: "Bearings",
        seal: "Seals",
        clutch: "Clutches",
        pad: "Pads",
        rotor: "Rotors",
        caliper: "Calipers",
        brakeshoe: "Brake shoes",
        shock: "Shocks",
        strut: "Struts",
        spring: "Springs",
        bushing: "Bushings",
        battery: "Batteries",
        alternator: "Alternators",
        starter: "Starters",
        fuse: "Fuses",
        bumper: "Bumpers",
        fender: "Fenders",
        door: "Doors",
        mirror: "Mirrors",
        rim: "Rims",
        tire: "Tires",
        hub: "Hubs",
        bearing_wheels: "Bearings",
        more:'See more',
        less:'See less',
        all:'All categories'
      },
      branches:{
        h1:'our',
        h2:'branches',
        para:'We currently have two branches, one in Dammam and another in Riyadh, both strategically positioned to serve our customers with exceptional convenience and service. Our Dammam branch caters to the Eastern Province, while the Riyadh branch provides top-notch service in the capital. At both locations, we are dedicated to delivering an outstanding customer experience.',
        a1n:'Abdullah AL BUstoni',
        a1s:'5189 as safa dist',
        a1d:'jeddah',
        a2n:'rail street',
        a2s:'al bathaa, al aml dist',
        a2d:'riyadh',
      },
      contact:{
        h1:'contact',
        h2:'us',
        query:'Send us a query',
        name:'name',
        en:'enter your name',
        email:'email',
        em:"enter your mail",
        phone:'Phone ',
        ep:'enter your phone',
        subject:'subject',
        es:'enter the subject',
        submit:'submit',
        connect:'connect with us',
        wa:'Contact via whatsapp',
        ma:'Contact via Mail',
        ph:'Contact via Phone',
        ct:'At FleetFix, we’re dedicated to keeping your fleet running smoothly, ensuring your business stays on track with reliable maintenance and repair services.'
      },
      footer: {
        text: "All rights reserved to fleetsfix",
      },
    },
  },
 ar: {
    translation: {
      nav: {
        about: "من نحن",
        products: "منتجات",
        brochure: "كتيب",
        contact: "اتصال",
        branches: "الفروع"
      },
      about: {
        ab: "من",
        us: "نحن",
        para: 'تعد شركة Fleets Fix، التي يقع مقرها في المملكة العربية السعودية، موردًا موثوقًا لقطع غيار الشاحنات عالية الجودة. نحن متخصصون في توفير مجموعة شاملة من مكونات المركبات التجارية، لتلبية احتياجات الشركات ومشغلي الأساطيل في جميع أنحاء المنطقة. نحن نستورد منتجاتنا من الشركات المصنعة ذات السمعة الطيبة لضمان الجودة والأداء. سواء كنت تبحث عن مكونات المحرك، أو أنظمة الفرامل، أو أجزاء التعليق، أو أي أساسيات أخرى للشاحنة، فإن Fleets Fix هي وجهتك الوحيدة.'
      },
      mission: {
        h1: "",
        h2: 'مهمتنا',
        para: 'مهمتنا هي ضمان بقاء شاحناتك عاملة وفعالة من خلال قطع الغيار الموثوقة والمتينة. فريقنا ذو المعرفة جاهز دائمًا لمساعدتك في العثور على الأجزاء المناسبة لمتطلباتك.'
      },
      products: {
        h1: 'منتجاتنا',
        h2: 'منتجات',
        engine: 'أجزاء المحرك',
        transmission: 'أجزاء النقل',
        brake: 'أجزاء الفرامل',
        suspension: 'أجزاء التعليق',
        electrical: 'أجزاء كهربائية',
        body: 'أجزاء الهيكل',
        wheels: 'العجلات والإطارات',
        cooling: 'أجزاء نظام التبريد',
        fuel: 'أجزاء نظام الوقود',
        exhaust: 'أجزاء نظام العادم',
        steering: 'أجزاء التوجيه',
        air: 'أجزاء نظام الهواء والهيدروليك'
      },
      grid: {
        piston: "مكابس",
        cylinder: "اسطوانات",
        crankshaft: "عمود مرفق",
        camshaft: "عمود الكامات",
        valve: "صمامات",
        gear: "تروس",
        bearing: "محامل",
        seal: "أختام",
        clutch: "قوابض",
        pad: "وسادات",
        rotor: "دوارات",
        caliper: "مكابس الفرامل",
        brakeshoe: "أحذية الفرامل",
        shock: "ممتصات الصدمات",
        strut: "الدعامات",
        spring: "نوابض",
        bushing: "بوشات",
        battery: "بطاريات",
        alternator: "مولدات كهرباء",
        starter: "مشغلات",
        fuse: "صمامات",
        bumper: "مصدات",
        fender: "رفارف",
        door: "أبواب",
        mirror: "مرايا",
        rim: "جنوط",
        tire: "إطارات",
        hub: "محاور",
        bearing_wheels: "محامل العجلات",
        more: "عرض المزيد",
        less: "عرض أقل",
        all:'جميع الفئات'
      },
      branches: {
        h1: 'فروعنا',
        h2:'',
        para: 'لدينا حاليًا فرعين، أحدهما في الدمام والآخر في الرياض، وكلاهما يقعان بشكل استراتيجي لخدمة عملائنا براحة وخدمة استثنائية. يخدم فرع الدمام المنطقة الشرقية، بينما يقدم فرع الرياض خدمة عالية الجودة في العاصمة. في كلا الموقعين، نحن ملتزمون بتقديم تجربة عملاء متميزة.',
        a1n: 'عبدالله البسطوني',
        a1s: '5189 حي الصفا',
        a1d: 'جدة',
        a2n: 'شارع السكة الحديد',
        a2s: 'البطحاء، حي الأمل',
        a2d: 'الرياض'
      },
      contact: {
        h1: 'اتصل',
        h2: 'بنا',
        query: 'أرسل لنا استفسار',
        name: 'الاسم',
        en: 'أدخل اسمك',
        email: 'البريد الإلكتروني',
        em: "أدخل بريدك الإلكتروني",
        phone: 'الهاتف',
        ep: 'أدخل هاتفك',
        subject: 'الموضوع',
        es: 'أدخل الموضوع',
        submit: 'إرسال',
        connect: 'تواصل معنا',
        wa: 'التواصل عبر واتساب',
        ma: 'التواصل عبر البريد',
        ph: 'التواصل عبر الهاتف',
        ct: 'في FleetFix، نحن ملتزمون بالحفاظ على تشغيل أسطولك بسلاسة، لضمان استمرار عملك بخدمات الصيانة والإصلاح الموثوقة.'
      },
      footer: {
        text: "جميع الحقوق محفوظة لشركة Fleets Fix"
      }
    }
}
}

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

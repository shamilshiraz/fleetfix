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
        sp:'Your trusted spare parts partner for',
        w1:'fleets',
        w2:'trucks',
        w3:' forklifts',
        fleets:'fleets',
        fix:'fix',
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
        air:'Air and hydraulic system parts',
        hydraulic:'Hydraulic parts',
        mnl:'Mast and Lifting',
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
        fork:'Fork',
        liftchain:'Chain',
        roller:'Roller',
        all:'All categories',
        hoses:'hoses',
        hydpump: "Pumps"
      },
      ppara:{
        forkpara:'Find all your forklift parts at FleetsFix! From clutches and hydraulic systems to brakes, filters, and batteries, we offer reliable, affordable solutions to keep your forklifts running efficiently. Save time and money with our wide selection of quality parts. Choose FleetsFix for smooth operations!',
        truckpara:'Find all your truck parts at FleetsFix! From clutches and hydraulic systems to brakes, filters, and batteries, we provide durable and cost-effective solutions to keep your trucks running smoothly. Minimize downtime and maximize efficiency with our high-quality, reliable parts. Trust FleetsFix to keep your fleet on the road!',
        back:'Back',
        truck:'truck',
        forklift:'forklift'
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
        para: "Fleets Fix، إحدى الشركات الرائدة في المملكة العربية السعودية، متخصصة في توفير قطع غيار الشاحنات عالية الجودة. نحن نقدم مجموعة متنوعة من المكونات المصممة لتلبية احتياجات الشركات ومشغلي الأساطيل، مع ضمان الأداء والكفاءة. نحرص على استيراد منتجاتنا من أفضل الشركات المصنعة لضمان الجودة والمتانة. سواء كنت بحاجة إلى قطع غيار للمحرك، أنظمة الفرامل، أجزاء التعليق، أو أي مكونات أساسية أخرى، فإن Fleets Fix توفر لك الحل الأمثل للحفاظ على مركباتك في أفضل حالة تشغيل."
      },
      mission: {
        fleets:'فليتس',
        fix:'فيكس',
        h1: "",
        h2: 'مهمتنا',
        para: "في Fleets Fix، نلتزم بالحفاظ على كفاءة شاحناتك وضمان استمرارها في العمل دون انقطاع، من خلال توفير قطع غيار موثوقة وعالية الجودة. فريقنا المتخصص دائمًا على أتم الاستعداد لمساعدتك في اختيار الأجزاء المناسبة التي تلبي احتياجاتك التشغيلية بكفاءة ودقة.",
        sp:'شريكك الموثوق لقطع غيار',
        w1:'الشاحنات',
        w2:'الأساطيل',
        w3:'الرافعات الشوكية'
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
        air: 'أجزاء نظام الهواء والهيدروليك',
        hydraulic: "أجزاء الهيدروليك",
mnl: "أجزاء السارية والرفع"

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
        all:'جميع الفئات',
        fork: "شوكة الرفع",
        roller: "بكرة",
        liftchain: "سلسلة الرفع",
        hoses: "الخراطيم",
        hydpump: "المضخات"
      },
      branches: {
        h1: 'فروعنا',
        h2:'',
        para: "نفخر بوجود فرعين رئيسيين لخدمتكم، أحدهما في الدمام والآخر في الرياض، وكلاهما يتمتع بموقع استراتيجي لضمان راحة العملاء وتقديم خدمات متميزة. يخدم فرع الدمام المنطقة الشرقية، بينما يوفر فرع الرياض حلولاً عالية الجودة في قلب العاصمة. في كل من مواقعنا، نلتزم بتقديم تجربة عملاء استثنائية تلبي جميع احتياجاتكم بكفاءة واحترافية.",
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
      ppara: {
        forkpara: "جميع قطع غيار الرافعات الشوكية تجدها في FleetsFix! نوفر لك القوابض، الأنظمة الهيدروليكية، أنظمة الفرامل، الفلاتر، البطاريات، والمزيد من الحلول الموثوقة وبأسعار تنافسية، للحفاظ على كفاءة وأداء رافعاتك الشوكية. وفر الوقت والمال مع مجموعتنا المتنوعة من قطع الغيار عالية الجودة. اختر FleetsFix لضمان تشغيل سلس ومستدام!",
        
        truckpara: "كل ما تحتاجه من قطع غيار الشاحنات متوفر لدى FleetsFix! من القوابض والأنظمة الهيدروليكية إلى الفرامل والفلاتر والبطاريات، نقدم لك حلولًا متينة وفعالة من حيث التكلفة للحفاظ على تشغيل شاحناتك بأفضل أداء. قلل من وقت التوقف وزد من الكفاءة مع قطع الغيار الموثوقة وعالية الجودة. FleetsFix هو شريكك للحفاظ على أسطولك على الطريق بثقة!",
        
        back: "رجوع",
        truck: "شاحنة",
        forklift: "رافعة شوكية"
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

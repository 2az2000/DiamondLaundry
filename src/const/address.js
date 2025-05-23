

const  province = [
  {
    id: 1,
    name: "آذربایجان شرقی",
    cities: [
      "تبریز",
      "مراغه",
      "مرند",
      "اهر",
      "میانه",
      "سراب",
      "بناب",
      "کلیبر",
      "شبستر",
      "هریس",
      "بستان‌آباد",
      "ملکان",
      "خدا‌آفرین",
      "ورزقان"
    ]
  },
  {
    id: 2,
    name: "آذربایجان غربی",
    cities: [
      "ارومیه",
      "خوی",
      "بوکان",
      "مهاباد",
      "سلماس",
      "میاندوآب",
      "پیرانشهر",
      "نقده",
      "اشنویه",
      "چایپاره",
      "شاهین‌دژ",
      "سردشت",
      "شوط",
      "چالدران"
    ]
  },
  {
    id: 3,
    name: "اردبیل",
    cities: [
      "اردبیل",
      "پارس‌آباد",
      "مشگین‌شهر",
      "خلخال",
      "گرمی",
      "بیله‌سوار",
      "نمین",
      "نیر",
      "سرعین",
      "اصلاندوز",
      "هیر",
      "عنبران"
    ]
  },
  {
    id: 4,
    name: "اصفهان",
    cities: [
      "اصفهان",
      "کاشان",
      "خمینی‌شهر",
      "نجف‌آباد",
      "شهرضا",
      "فلاورجان",
      "گلپایگان",
      "نطنز",
      "آران و بیدگل",
      "فریدون‌شهر",
      "اردستان",
      "سمیرم",
      "خور و بیابانک",
      "دهاقان"
    ]
  },
  {
    id: 5,
    name: "البرز",
    cities: [
      "کرج",
      "فردیس",
      "نظرآباد",
      "ساوجبلاغ",
      "اشتهارد",
      "هشتگرد",
      "طالقان"
    ]
  },
  {
    id: 6,
    name: "ایلام",
    cities: [
      "ایلام",
      "دهلران",
      "ایوان",
      "آبدانان",
      "دره‌شهر",
      "مهران",
      "چرداول",
      "بدره",
      "ملکشاهی",
      "سیروان"
    ]
  },
  {
    id: 7,
    name: "بوشهر",
    cities: [
      "بوشهر",
      "برازجان",
      "جم",
      "دشتی",
      "تنگستان",
      "دیلم",
      "گناوه",
      "کنگان",
      "عسلویه"
    ]
  },
  {
    id: 8,
    name: "تهران",
    cities: [
      "تهران",
      "ری",
      "شهریار",
      "ورامین",
      "اسلامشهر",
      "قدس",
      "رباط‌کریم",
      "ملارد",
      "باقرشهر",
      "کهریزک",
      "پردیس",
      "دماوند",
      "فیروزکوه"
    ]
  },
  {
    id: 9,
    name: "چهارمحال و بختیاری",
    cities: [
      "شهرکرد",
      "بروجن",
      "فارسان",
      "لردگان",
      "اردل",
      "کوهرنگ",
      "سامان",
      "کیار"
    ]
  },
  {
    id: 10,
    name: "خراسان جنوبی",
    cities: [
      "بیرجند",
      "قائنات",
      "فردوس",
      "طبس",
      "نهبندان",
      "سرایان",
      "سربیشه",
      "خوسف"
    ]
  },
  {
    id: 11,
    name: "خراسان رضوی",
    cities: [
      "مشهد",
      "نیشابور",
      "سبزوار",
      "تربت‌جام",
      "کاشمر",
      "تربت‌حیدریه",
      "چناران",
      "قوچان",
      "خواف",
      "گناباد",
      "بینالود",
      "بردسکن",
      "فریمان",
      "سرخس",
      "درگز",
      "طرقبه"
    ]
  },
  {
    id: 12,
    name: "خراسان شمالی",
    cities: [
      "بجنورد",
      "شیروان",
      "اسفراین",
      "جاجرم",
      "فاروج",
      "مانه و سملقان",
      "راز و جرگلان"
    ]
  },
  {
    id: 13,
    name: "خوزستان",
    cities: [
      "اهواز",
      "آبادان",
      "خرمشهر",
      "دزفول",
      "ماهشهر",
      "شوشتر",
      "ایذه",
      "اندیمشک",
      "بندر امام خمینی",
      "مسجدسلیمان",
      "بهبهان",
      "رامهرمز",
      "شادگان",
      "امیدیه",
      "شوش",
      "حمیدیه",
      "هویزه",
      "باغ‌ملک",
      "لالی"
    ]
  },
  {
    id: 14,
    name: "زنجان",
    cities: [
      "زنجان",
      "ابهر",
      "خرمدره",
      "قیدار",
      "ماهنشان",
      "سلطانیه",
      "آب‌بر",
      "ایجرود",
      "حلب"
    ]
  },
  {
    id: 15,
    name: "سمنان",
    cities: [
      "سمنان",
      "شاهرود",
      "دامغان",
      "گرمسار",
      "مهدی‌شهر",
      "سرخه",
      "آرادان",
      "بیارجمند"
    ]
  },
  {
    id: 16,
    name: "سیستان و بلوچستان",
    cities: [
      "زاهدان",
      "چابهار",
      "ایرانشهر",
      "زابل",
      "سراوان",
      "خاش",
      "کنارک",
      "میرجاوه",
      "راسک",
      "نیکشهر",
      "هیرمند",
      "قصرقند",
      "زهک",
      "فنوج",
      "دلگان",
      "بزمان",
      "بمپور"
    ]
  }

 ,
    {
      id: 17,
      name: "فارس",
      cities: [
        "شیراز",
        "مرودشت",
        "کازرون",
        "لار",
        "جهرم",
        "فسا",
        "داراب",
        "فیروزآباد",
        "سپیدان",
        "نی‌ریز",
        "آباده",
        "قیر و کارزین",
        "زرین‌دشت",
        "ارسنجان",
        "اقلید",
        "خنج",
        "گراش",
        "لامرد",
        "بوانات",
        "خرامه",
        "مهر",
        "سروستان"
      ]
    },
    {
      id: 18,
      name: "قزوین",
      cities: [
        "قزوین",
        "البرز",
        "آبیک",
        "تاکستان",
        "بوئین‌زهرا",
        "محمدیه",
        "اقبالیه",
        "شال",
        "خاکعلی",
        "رازمیان"
      ]
    },
    {
      id: 19,
      name: "قم",
      cities: [
        "قم",
        "جعفریه",
        "دستجرد",
        "قنوات",
        "کهک"
      ]
    },
    {
      id: 20,
      name: "کردستان",
      cities: [
        "سنندج",
        "سقز",
        "مریوان",
        "بانه",
        "دیواندره",
        "کامیاران",
        "قروه",
        "بیجار",
        "دهگلان"
      ]
    },
    {
      id: 21,
      name: "کرمان",
      cities: [
        "کرمان",
        "رفسنجان",
        "جیرفت",
        "سیرجان",
        "بم",
        "زرند",
        "کهنوج",
        "بافت",
        "رودبار جنوب",
        "راور",
        "بردسیر",
        "عنبرآباد",
        "فهرج",
        "منوجان",
        "نرماشیر",
        "ریگان",
        "ارزوئیه"
      ]
    },
    {
      id: 22,
      name: "کرمانشاه",
      cities: [
        "کرمانشاه",
        "اسلام‌آباد غرب",
        "پاوه",
        "جوانرود",
        "سرپل ذهاب",
        "کنگاور",
        "هرسین",
        "صحنه",
        "سنقر",
        "گیلانغرب",
        "قصرشیرین",
        "روانسر"
      ]
    },
    {
      id: 23,
      name: "کهگیلویه و بویراحمد",
      cities: [
        "یاسوج",
        "دوگنبدان",
        "دهدشت",
        "لیکک",
        "سی‌سخت",
        "چرام",
        "پاتاوه",
        "لنده"
      ]
    },
    {
      id: 24,
      name: "گلستان",
      cities: [
        "گرگان",
        "گنبد کاووس",
        "علی‌آباد کتول",
        "آق‌قلا",
        "کلاله",
        "مینودشت",
        "آزادشهر",
        "بندرترکمن",
        "گمیشان",
        "مراوه‌تپه",
        "رامیان",
        "کردکوی",
        "بندرگز"
      ]
    },
    {
      id: 25,
      name: "گیلان",
      cities: [
        "رشت",
        "انزلی",
        "لاهیجان",
        "لنگرود",
        "آستارا",
        "تالش",
        "رودسر",
        "فومن",
        "صومعه‌سرا",
        "رودبار",
        "شفت",
        "ماسال",
        "املش",
        "بندرکیاشهر"
      ]
    },
    {
      id: 26,
      name: "لرستان",
      cities: [
        "خرم‌آباد",
        "بروجرد",
        "دورود",
        "کوهدشت",
        "الیگودرز",
        "نورآباد",
        "ازنا",
        "الشتر",
        "پلدختر",
        "سراب‌دوره"
      ]
    },
    {
      id: 27,
      name: "مازندران",
      cities: [
        "ساری",
        "بابل",
        "آمل",
        "قائم‌شهر",
        "چالوس",
        "رامسر",
        "تنکابن",
        "نور",
        "نوشهر",
        "بهشهر",
        "بابلسر",
        "جویبار",
        "محمودآباد",
        "فریدونکنار",
        "گلوگاه",
        "نکا"
      ]
    },
    {
      id: 28,
      name: "مرکزی",
      cities: [
        "اراک",
        "ساوه",
        "خمین",
        "محلات",
        "دلیجان",
        "تفرش",
        "شازند",
        "آشتیان",
        "کمیجان",
        "زرندیه"
      ]
    },
    {
      id: 29,
      name: "هرمزگان",
      cities: [
        "بندرعباس",
        "قشم",
        "کیش",
        "بندر لنگه",
        "میناب",
        "رودان",
        "جاسک",
        "پارسیان",
        "حاجی‌آباد",
        "سیریک",
        "بستک"
      ]
    },
    {
      id: 30,
      name: "همدان",
      cities: [
        "همدان",
        "ملایر",
        "نهاوند",
        "کبودرآهنگ",
        "بهار",
        "رزن",
        "فامنین",
        "اسدآباد"
      ]
    },
    {
      id: 31,
      name: "یزد",
      cities: [
        "یزد",
        "میبد",
        "اردکان",
        "ابرکوه",
        "بافق",
        "مهریز",
        "اشکذر",
        "خاتم",
        "تفت",
        "هرات"
      ]
    }
  
  
];

export default  province;
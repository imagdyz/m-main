// Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Telegram Config (أدخل توكن البوت والـ Chat ID الخاص بك هنا)
const TELEGRAM_BOT_TOKEN = '8945334487:AAEnholi3s4MHc-ju5NXAhLN8yLgLSQGLwI';
const TELEGRAM_CHAT_ID = '8882295589';

// Menu Data
const menuData = {
  categories: {
    ful: { name: "سندوتشات الفول", icon: "🥙", desc: "أصالة الطعم المصري الأصيل مع حبوب الفول المدمس بوصفاتنا الخاصة" },
    falafel: { name: "سندوتشات الفلافل", icon: "🧆", desc: "فلافل ذهبية مقرمشة محضرة طازجة يومياً بألذ الخلطات" },
    cheese: { name: "سندوتشات الجبنة", icon: "🧀", desc: "تشكيلة من السندوتشات الباردة والساخنة بأجود أنواع الأجبان" },
    eggplant: { name: "سندوتشات الباذنجان", icon: "🍆", desc: "باذنجان مقلي ومشوي متبل على الطريقة الشرقية الأصيلة" },
    potatoes: { name: "سندوتشات البطاطس", icon: "🍟", desc: "بطاطس مقرمشة ومهروسة مع إضافات مميزة ومبتكرة" },
    eggs: { name: "سندوتشات البيض", icon: "🍳", desc: "بيض طازج محضر بطرق مختلفة لتستمتع بأفضل فطور" },
    hot: { name: "سندوتشات السخن", icon: "🔥", desc: "سندوتشات ساخنة ولذيذة تجمع بين البيض، الجبن، والسجق" },
    meat: { name: "سندوتشات اللحوم", icon: "🥩", desc: "سندوتشات اللحوم المميزة، السجق، الكفتة، البانيه، ومكس الفراخ" },
    sweet: { name: "سندوتشات الحلو", icon: "🍯", desc: "سندوتشات حلوة تحلي يومك بالقشطة، الحلاوة، والمربى" },
    rolls: { name: "رولات آخر حاجة", icon: "🌯", desc: "رولات عملاقة مميزة ومحشوة بألذ المكونات المبتكرة" },
    boxes: { name: "العلب", icon: "🍱", desc: "وجبات عائلية وأصناف جانبية مميزة في علب لتشاركها مع من تحب" },
    packets: { name: "الباكت", icon: "🍟", desc: "وجبات سريعة ومتنوعة في باكتات مميزة وجاهزة للتناول" }
  },
  items: [
    // سندوتشات الفول
    { id: "ful-1", category: "ful", name: "فول عادي", price: 7, desc: "فول مدمس بالزيت الحار أو الحلو والليمون والبهارات المميزة." },
    { id: "ful-2", category: "ful", name: "فول حار", price: 8, desc: "فول مدمس مع الفلفل الحار والصلصة الحارة لعشاق الطعم السبايسي." },
    { id: "ful-3", category: "ful", name: "فول بيض", price: 15, desc: "فول مدمس غني مضاف إليه البيض المسلوق اللذيذ." },
    { id: "ful-4", category: "ful", name: "فول مكس", price: 10, desc: "فول مدمس مع تشكيلة من الإضافات والخلطات الخاصة بالمطعم." },
    { id: "ful-5", category: "ful", name: "فول اسكندراني", price: 13, desc: "فول بالبصل، الطماطم، الفلفل الأخضر، والثوم على الطريقة الإسكندرانية الأصيلة." },

    // سندوتشات الفلافل
    { id: "falafel-1", category: "falafel", name: "طعمية عادي", price: 7, desc: "فلافل مصرية مقرمشة مع الخضار الطازج والطحينة اللذيذة." },
    { id: "falafel-2", category: "falafel", name: "طعمية بيض", price: 15, desc: "فلافل ذهبية محشوة أو مضاف إليها البيض المسلوق اللذيذ." },
    { id: "falafel-3", category: "falafel", name: "طعمية مشكل", price: 15, desc: "مزيج رائع من الفلافل مع شرائح الباذنجان والبطاطس المقرمشة." },
    { id: "falafel-4", category: "falafel", name: "طعمية ماك", price: 20, desc: "طعمية مميزة ومبتكرة بأسلوب خاص وإضافات غنية كصلصة الماك الشهية." },

    // سندوتشات الجبنه
    { id: "cheese-1", category: "cheese", name: "جبنه رومي", price: 22, desc: "شرائح جبنة رومي مصرية أصلية ذات طعم قوي ومميز." },
    { id: "cheese-2", category: "cheese", name: "جبنه فيتا", price: 16, desc: "جبنة فيتا بيضاء ناعمة وكريمية مع الطماطم والخيار الطازج." },
    { id: "cheese-3", category: "cheese", name: "جبنه قريش", price: 15, desc: "جبنة قريش صحية وخفيفة متبلة بزيت الزيتون وقطع الطماطم." },
    { id: "cheese-4", category: "cheese", name: "جبنه قديمه", price: 17, desc: "الجبنة المصرية القديمة (المش) ذات المذاق الحاد واللذيذ لعشاق الأصالة." },
    { id: "cheese-5", category: "cheese", name: "جبنه نستون", price: 17, desc: "مثلثات الجبنة الكريمية الغنية المفرودة بداخل الخبز الطازج." },

    // سندوتشات الباذنجان
    { id: "eggplant-1", category: "eggplant", name: "باذنجان مقلي", price: 12, desc: "شرائح باذنجان مقلي ومقرمش مع تتبيلة الثوم والخل والليمون." },
    { id: "eggplant-2", category: "eggplant", name: "باذنجان غنوج", price: 12, desc: "بابا غنوج مدخن ولذيذ محضر بالباذنجان المشوي والطحينة." },
    { id: "eggplant-3", category: "eggplant", name: "باذنجان مسقعه", price: 12, desc: "سندوتش مسقعة بالباذنجان والفلفل مع صلصة الطماطم الغنية." },
    { id: "eggplant-4", category: "eggplant", name: "ديناميت", price: 17, desc: "سندوتش حار وقوي يجمع بين الباذنجان والتوابل والخلطة النارية المميزة." },

    // سندوتشات البطاطس
    { id: "potatoes-1", category: "potatoes", name: "بطاطس فارم", price: 12, desc: "أصابع بطاطس فارم فريتس مقرمشة ومملحة بشكل مثالي." },
    { id: "potatoes-2", category: "potatoes", name: "بطاطس شيبسي", price: 11, desc: "رقائق البطاطس الشيبسي المقرمشة بمذاق رائع." },
    { id: "potatoes-3", category: "potatoes", name: "بطاطس مهروسه", price: 12, desc: "بطاطس بيوريه مهروسة وناعمة مع الزبدة والبهارات والكمون." },
    { id: "potatoes-4", category: "potatoes", name: "فارم ماك", price: 20, desc: "بطاطس فارم مع صوص ماك المميز والجبن الذائب." },
    { id: "potatoes-5", category: "potatoes", name: "فارم فريتس", price: 17, desc: "أصابع بطاطس فريتس ذهبية وطازجة." },

    // سندوتشات البيض
    { id: "eggs-1", category: "eggs", name: "بيض مسلوق", price: 15, desc: "بيض مسلوق طازج ومقطع بداخل الخبز مع الملح والفلفل الأسود." },
    { id: "eggs-2", category: "eggs", name: "بيض شكشوكة", price: 18, desc: "بيض محضر مع البصل، الطماطم، الفلفل الأخضر، والتوابل الشهية." },
    { id: "eggs-3", category: "eggs", name: "بيض اومليت", price: 16, desc: "أومليت مقلي بالزبدة البلدية بطعم رائع وقوام غني." },
    { id: "eggs-4", category: "eggs", name: "بيض عيون", price: 16, desc: "بيض عيون مقلي ومحافظ على صفاره السائل الشهي." },
    { id: "eggs-5", category: "eggs", name: "اومليت اخر حاجه", price: 30, desc: "أومليت فاخر بخلطة مطعم آخر حاجة الخاصة مع إضافات غنية." },

    // سندوتشات السخن
    { id: "hot-1", category: "hot", name: "برجر", price: 40, desc: "قطعة برجر لحم مشوية ولذيذة مع الخضار والكاتشب والمايونيز." },
    { id: "hot-2", category: "hot", name: "كفتة", price: 35, desc: "أصابع كفتة لحم بلدي مشوية على الفحم برائحة وطعم خيالي." },
    { id: "hot-3", category: "hot", name: "سجق ", price: 35, desc: "سجق بلدي محضر مع الفلفل والأعشاب والصوص الحار اللذيذ." },
    { id: "hot-4", category: "hot", name: "فارم موتزاريلا", price: 25, desc: "بطاطس فارم مغطاة بطبقة غنية من جبن الموتزاريلا الذائب الساخن." },
    { id: "hot-5", category: "hot", name: "فول سجق", price: 30, desc: "فول مدمس مميز مضاف إليه السجق البلدي اللذيذ لمذاق رائع." },
    { id: "hot-6", category: "hot", name: "بيض زبده", price: 20, desc: "بيض مقلي غني بالزبدة الطبيعية الفاخرة." },
    { id: "hot-7", category: "hot", name: "فول بيض زبده", price: 20, desc: "مزيج رائع من الفول المدمس والبيض المقلي بالزبدة الطبيعية." },
    { id: "hot-8", category: "hot", name: "فول زبده", price: 15, desc: "فول مدمس غني وناعم محضر بالزبدة الفاخرة." },
    { id: "hot-9", category: "hot", name: "اومليت فارم", price: 30, desc: "بيض أومليت محشو ومزين بأصابع بطاطس فارم المقرمشة." },
    { id: "hot-10", category: "hot", name: "اومليت رومي", price: 30, desc: "بيض أومليت محضر مع قطع الجبنة الرومي الذائبة." },
    { id: "hot-11", category: "hot", name: "شيدر مقلي", price: 20, desc: "أصابع أو قطع جبن شيدر مقلية ومقرمشة من الخارج وذائبة من الداخل." },
    { id: "hot-12", category: "hot", name: "دهلله", price: 45, desc: "سندوتش مميز وغريب بخلطة دهلله السرية لمطعم آخر حاجة." },
    { id: "hot-13", category: "hot", name: "بيض بسطرمه", price: 40, desc: "بيض مقلي فاخر ممزوج بقطع البسطرمة الإسكندراني الشهية." },
    { id: "hot-14", category: "hot", name: "جبنه مشكل", price: 40, desc: "مزيج ساخن وذائب من عدة أنواع أجبان فاخرة." },
    { id: "hot-15", category: "hot", name: "رومي (فرن)", price: 25, desc: "جبنة رومي ذائبة في الفرن داخل الخبز الساخن." },
    { id: "hot-16", category: "hot", name: "رومي (فارم)", price: 30, desc: "جبنة رومي ذائبة ممزوجة مع بطاطس فارم المقرمشة." },

    // سندوتشات اللحوم
    { id: "meat-1", category: "meat", name: "سندوتش سجق", price: 35, desc: "سندوتش سجق بلدي متبل ومطبوخ مع البصل والطماطم." },
    { id: "meat-2", category: "meat", name: "سندوتش كفته", price: 35, desc: "كفتة بلدي مشوية ومتبلة تقدم في خبز ساخن مع البقدونس والطحينة." },
    { id: "meat-3", category: "meat", name: "برجر لحم", price: 35, desc: "سندوتش برجر كلاسيكي مميز ولذيذ." },
    { id: "meat-4", category: "meat", name: "سندوتش سوسيس", price: 35, desc: "أصابع السوسيس اللذيذة المتبلة والمطبوخة مع الخضار الطازج." },
    { id: "meat-5", category: "meat", name: "سندوتش بانيه", price: 45, desc: "صدور دجاج بانيه مقرمشة وذهبية مع الخس والمايونيز." },
    { id: "meat-6", category: "meat", name: "كوردن بلو", price: 45, desc: "رول الدجاج المقرمش المحشو بالجبنة الشيدر واللانشون الذائب." },
    { id: "meat-7", category: "meat", name: "ميكس فراخ", price: 60, desc: "مزيج فاخر من قطع الدجاج المتنوعة والمتبلة بخلطة رائعة." },

    // سندوتشات الحلو
    { id: "sweet-1", category: "sweet", name: "حلاوه قشطه", price: 17, desc: "حلاوة طحينية مصرية ممتازة مع طبقة غنية من القشطة البلدي." },
    { id: "sweet-2", category: "sweet", name: "مربى قشطه", price: 17, desc: "مربى الفراولة اللذيذة ممزوجة بالقشطة البلدي الناعمة." },
    { id: "sweet-3", category: "sweet", name: "حلو مشكل", price: 25, desc: "مزيج حلو من الحلاوة، المربى، والقشطة في سندوتش واحد ممتع." },
    { id: "sweet-4", category: "sweet", name: "حلو اخر حاجه", price: 30, desc: "أقوى سندوتش حلو بإضافات مميزة وسرية خاصة بـ آخر حاجة." },

    // رولات آخر حاجة
    { id: "rolls-1", category: "rolls", name: "طعمية رول", price: 25, desc: "رول كبير محشو بالفلافل المقرمشة والطماطم والطحينة الفاخرة." },
    { id: "rolls-2", category: "rolls", name: "جبنة مقلية رول", price: 35, desc: "رول الجبن المقلي المتبل الذائب في خبز التورتيلا المميز." },
    { id: "rolls-3", category: "rolls", name: "فارم رول", price: 30, desc: "رول البطاطس فارم المقرمشة مع الإضافات الخاصة والصلصات." },
    { id: "rolls-4", category: "rolls", name: "جيت رول", price: 40, desc: "رول حشوات مشكلة مميزة وقوية تأخذك لعالم آخر من الطعم." },
    { id: "rolls-5", category: "rolls", name: "رومي مقلية متبلة رول", price: 40, desc: "رول جبنة رومي مقلية ومتبلة بتوابل حارة وشهية." },
    { id: "rolls-6", category: "rolls", name: "سوبر سوبريم رول", price: 40, desc: "رول سوبريم غني بقطع اللحوم والجبن والخضار المشكل." },
    { id: "rolls-7", category: "rolls", name: "استربس رول", price: 45, desc: "رول دجاج استربس حار ومقرمش مع الكولسلو والجبن." },
    { id: "rolls-8", category: "rolls", name: "شيدر مقلي متبل رول", price: 35, desc: "شيدر مقلي ومتبل بخلطة مميزة ملفوف في رول دافئ." },
    { id: "rolls-9", category: "rolls", name: "حلاوه شيكولاته رول", price: 25, desc: "رول حلو محشو بالحلاوة الطحينية وصوص الشوكولاتة الغني." },
    { id: "rolls-10", category: "rolls", name: "حلو اخر حاجه رول", price: 30, desc: "رول حلو مشكل فاخر ومميز يجمع كل ما تحبه." },
    { id: "rolls-11", category: "rolls", name: "ميكس فراخ رول", price: 60, desc: "رول ميكس دجاج متبل بصلصات وأجبان ذائبة." },
    { id: "rolls-12", category: "rolls", name: "قنبلة اخر حاجه", price: 50, desc: "رول ضخم مليء بالمفاجآت والحشوات الغنية المناسبة للجوع الشديد." },
    { id: "rolls-13", category: "rolls", name: "كوردن بلو رول", price: 45, desc: "رول محشو بقطع الكوردن بلو الشهية والجبن السائل." },
    { id: "rolls-14", category: "rolls", name: "بانيه رول", price: 45, desc: "رول الدجاج البانيه المقرمش اللذيذ." },

    // العلب
    { id: "boxes-1", category: "boxes", name: "علبة جبنه قديمه", price: 20, desc: "علبة من الجبنة القديمة الحارة مع الطماطم والزيت." },
    { id: "boxes-2", category: "boxes", name: "علبة جبنه قريش", price: 20, desc: "علبة جبنة قريش صحية مضاف إليها الطماطم المقطعة وزيت الزيتون." },
    { id: "boxes-3", category: "boxes", name: "علبه غنوج", price: 20, desc: "علبة بابا غنوج كريمي بالثوم والطحينة والخل." },
    { id: "boxes-4", category: "boxes", name: "علبه مهروسه", price: 20, desc: "علبة بطاطس مهروسة متبلة ومجهزة للتقديم المباشر." },
    { id: "boxes-5", category: "boxes", name: "علبه مسقعه", price: 20, desc: "علبة مسقعة باذنجان بالصلصة المسبكة الشهية." },
    { id: "boxes-6", category: "boxes", name: "علبة فول زبده", price: 30, desc: "علبة فول مدمس بالزبدة الطبيعية الفاخرة." },
    { id: "boxes-7", category: "boxes", name: "علبة فول صلصه", price: 30, desc: "علبة فول مدمس بصلصة الطماطم المسبكة والثوم." },
    { id: "boxes-8", category: "boxes", name: "علبة فول كبيره", price: 20, desc: "علبة كبيرة من الفول المدمس السادة الجاهز للإضافة والتتبيل." },
    { id: "boxes-9", category: "boxes", name: "علبة فول صغيره", price: 10, desc: "علبة صغيرة من الفول المدمس السادة." },
    { id: "boxes-10", category: "boxes", name: "علبة فول ساده", price: 20, desc: "علبة متوسطة من الفول المدمس السادة." },
    { id: "boxes-11", category: "boxes", name: "علبة بيض بسطرمه", price: 45, desc: "علبة بيض مقلي بالبسطرمة الغنية جاهزة للمشاركة." },
    { id: "boxes-12", category: "boxes", name: "علبة شكشوكه", price: 35, desc: "علبة شكشوكة بيض بالخضار والصلصة المتبلة." },
    { id: "boxes-13", category: "boxes", name: "علبة رومي فرن", price: 45, desc: "علبة جبنة رومي ذائبة ومجهزة بالفرن." },
    { id: "boxes-14", category: "boxes", name: "علبة شيبسي", price: 12, desc: "علبة بطاطس شيبسي مقرمشة لترافق وجبتك." },
    { id: "boxes-15", category: "boxes", name: "علبة سلطة", price: 12, desc: "سلطة خضراء طازجة مقطعة ومنعشة." },
    { id: "boxes-16", category: "boxes", name: "علبة باذنجان", price: 12, desc: "علبة باذنجان مقلي متبل ولذيذ." },
    { id: "boxes-17", category: "boxes", name: "علبة فارم", price: 12, desc: "علبة بطاطس فارم فريتس مقلية وذهبية." },
    { id: "boxes-18", category: "boxes", name: "علبة عجينة طعمية", price: 20, desc: "عجينة فلافل طازجة ومتبلة لطهيها منزلياً." },
    { id: "boxes-19", category: "boxes", name: "عيش (رغيف)", price: 2, desc: "خبز بلدي طازج وساخن." },
    { id: "boxes-20", category: "boxes", name: "طعميه (حبة)", price: 1, desc: "حبة فلافل ذهبية ساخنة مقرمشة." },
    { id: "boxes-21", category: "boxes", name: "مخلل مشكل", price: 6, desc: "طرشي ومخلل مشكل لفتح الشهية." },

    // الباكت
    { id: "packets-1", category: "packets", name: "باكت فارم", price: 12, desc: "باكت بطاطس فارم مقرمشة ولذيذة للأكل السريع." },
    { id: "packets-2", category: "packets", name: "باكت باذنجان", price: 12, desc: "باكت قطع الباذنجان المقلي والمتبل." },
    { id: "packets-3", category: "packets", name: "باكت سلطه", price: 12, desc: "باكت سلطة خضراء طازجة ونظيفة جاهزة للتناول." },
    { id: "packets-4", category: "packets", name: "باكت بيض بسطرمه", price: 45, desc: "باكت يحتوي على البيض المحضر بالبسطرمة الغنية." },
    { id: "packets-5", category: "packets", name: "باكت رومي فرن", price: 45, desc: "باكت جبنة رومي ذائبة في الفرن ساخنة." },
    { id: "packets-6", category: "packets", name: "باكت شكشوكة", price: 35, desc: "باكت شكشوكة البيض اللذيذة والمتبلة بالتوابل الشرقية." }
  ],
  deliveryNumbers: ["01055667793", "01204811161"],
  complaintNumber: "01287691269"
};

// Router Logic
function handleRouting() {
  const path = window.location.hash || '#/';
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Home route
  if (path === '#/' || path === '') {
    renderHome();
    return;
  }

  // Category route: #/category/:id
  if (path.startsWith('#/category/')) {
    const catId = path.replace('#/category/', '');
    renderCategory(catId);
    return;
  }

  // Item route: #/item/:id
  if (path.startsWith('#/item/')) {
    const itemId = path.replace('#/item/', '');
    renderItemDetail(itemId);
    return;
  }

  // Default: redirect home
  window.location.hash = '#/';
}

// Render Home Page
function renderHome() {
  const mainContent = document.getElementById('main-content');

  // Hero section HTML
  let categoriesHTML = '';
  for (const [id, cat] of Object.entries(menuData.categories)) {
    categoriesHTML += `
      <div class="category-card" onclick="window.location.hash = '#/category/${id}'">
        <div class="cat-icon">${cat.icon}</div>
        <h3>${cat.name}</h3>
        <p>${menuData.items.filter(i => i.category === id).length} صنف</p>
      </div>
    `;
  }

  // Highlight some premium featured items (like rolls, meat)
  const featured = menuData.items.filter(i => i.category === 'rolls' || i.category === 'meat').slice(0, 4);
  let featuredHTML = featured.map(item => `
    <div class="item-card" onclick="window.location.hash = '#/item/${item.id}'">
      <div class="item-badge">مميز 🔥</div>
      <div class="item-card-content">
        <h3>${item.name}</h3>
        <p>${item.desc.substring(0, 50)}...</p>
        <div class="item-card-footer">
          <span class="price">${item.price} جنيه</span>
          <span class="view-details">عرض التفاصيل ←</span>
        </div>
      </div>
    </div>
  `).join('');

  mainContent.innerHTML = `
    <section class="hero-section">
      <div class="hero-content">
        <h1>مطعم آخر حاجة</h1>
        <p>أشهى السندوتشات الشعبية واللحوم والرولات بطعم لا يقاوم وجودة لا تضاهى!</p>
        <div class="delivery-badge-container">
          <span class="badge badge-success">🛵 دليفري سريع</span>
          <span class="badge badge-warning">🔥 طازج وساخن</span>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">فئات المنيو</h2>
      <div class="categories-grid">
        ${categoriesHTML}
      </div>
    </section>

    <section class="section bg-light">
      <h2 class="section-title">الأصناف الأكثر طلباً</h2>
      <div class="items-grid">
        ${featuredHTML}
      </div>
    </section>
  `;
}

// Render Category Page
function renderCategory(catId) {
  const mainContent = document.getElementById('main-content');
  const cat = menuData.categories[catId];
  if (!cat) {
    window.location.hash = '#/';
    return;
  }

  const items = menuData.items.filter(i => i.category === catId);
  const itemsHTML = items.map(item => `
    <div class="item-card" onclick="window.location.hash = '#/item/${item.id}'">
      <div class="item-card-content">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="item-card-footer">
          <span class="price">${item.price} جنيه</span>
          <span class="view-details">عرض التفاصيل ←</span>
        </div>
      </div>
    </div>
  `).join('');

  mainContent.innerHTML = `
    <div class="page-header">
      <a href="#/" class="back-link">🔙 العودة للرئيسية</a>
      <div class="header-desc">
        <span class="large-icon">${cat.icon}</span>
        <h1>${cat.name}</h1>
        <p>${cat.desc}</p>
      </div>
    </div>

    <section class="section">
      <div class="items-grid">
        ${itemsHTML.length > 0 ? itemsHTML : '<p class="no-items">لا توجد أصناف في هذه الفئة حالياً</p>'}
      </div>
    </section>
  `;
}

// Render Item Detail Page
function renderItemDetail(itemId) {
  const mainContent = document.getElementById('main-content');
  const item = menuData.items.find(i => i.id === itemId);
  if (!item) {
    window.location.hash = '#/';
    return;
  }

  const category = menuData.categories[item.category];

  // Random related items (same category)
  const related = menuData.items.filter(i => i.category === item.category && i.id !== item.id).slice(0, 3);
  const relatedHTML = related.map(rel => `
    <div class="item-card compact-card" onclick="window.location.hash = '#/item/${rel.id}'">
      <h3>${rel.name}</h3>
      <div class="item-card-footer">
        <span class="price">${rel.price} جنيه</span>
        <span class="view-details">عرض التفاصيل ←</span>
      </div>
    </div>
  `).join('');

  mainContent.innerHTML = `
    <div class="page-header">
      <a href="#/category/${item.category}" class="back-link">🔙 العودة إلى ${category.name}</a>
    </div>

    <div class="item-detail-container">
      <div class="item-detail-card">
        <div class="item-detail-header">
          <span class="category-tag">${category.icon} ${category.name}</span>
          <h1>${item.name}</h1>
        </div>
        
        <p class="item-detail-desc">${item.desc}</p>
        
        <div class="item-detail-meta">
          <div class="detail-price-box" style="border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem; margin-bottom: 1.5rem;">
            <span class="label">السعر:</span>
            <span class="detail-price">${item.price} جنيه مصري</span>
          </div>

          <!-- Quantity Selector -->
          <div class="quantity-selector-container">
            <span class="label">الكمية:</span>
            <div class="quantity-selector">
              <button class="qty-btn" id="qty-minus">-</button>
              <span class="qty-val" id="qty-value">1</span>
              <button class="qty-btn" id="qty-plus">+</button>
            </div>
          </div>

          <!-- Notes / Special Requests -->
          <div class="customization-section">
            <h3>ملاحظات إضافية (اختياري):</h3>
            <textarea id="item-notes" placeholder="مثال: بدون بصل، زيادة شطة، نوع خبز معين..." class="search-input" style="width: 100%; height: 80px; resize: none; padding: 0.75rem; font-family: inherit;"></textarea>
          </div>

          <!-- Add to Cart Button -->
          <button class="btn btn-primary btn-block btn-lg" id="add-to-cart-btn" style="width: 100%; display: flex; justify-content: center; align-items: center; gap: 0.5rem;">
            🛒 إضافة إلى السلة
          </button>
        </div>
      </div>
    </div>

    ${relatedHTML.length > 0 ? `
      <section class="section related-section">
        <h2 class="section-title">أصناف مشابهة قد تعجبك</h2>
        <div class="items-grid-related">
          ${relatedHTML}
        </div>
      </section>
    ` : ''}
  `;

  // Bind Events for item detail
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const qtyVal = document.getElementById('qty-value');
  const addBtn = document.getElementById('add-to-cart-btn');
  const itemNotes = document.getElementById('item-notes');

  if (qtyMinus && qtyPlus && qtyVal) {
    qtyMinus.addEventListener('click', () => {
      let v = parseInt(qtyVal.textContent) || 1;
      if (v > 1) qtyVal.textContent = v - 1;
    });
    qtyPlus.addEventListener('click', () => {
      let v = parseInt(qtyVal.textContent) || 1;
      qtyVal.textContent = v + 1;
    });
  }

  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const quantity = parseInt(qtyVal.textContent) || 1;
      const notes = itemNotes ? itemNotes.value.trim() : '';
      addToCart(item.id, quantity, notes);
    });
  }
}

// Search system
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    const mainContent = document.getElementById('main-content');

    if (q === '') {
      // Restore home page or route if cleared
      handleRouting();
      return;
    }

    // Filter items
    const matches = menuData.items.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q)
    );

    const matchesHTML = matches.map(item => `
      <div class="item-card" onclick="window.location.hash = '#/item/${item.id}'">
        <div class="item-card-content">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="item-card-footer">
            <span class="price">${item.price} جنيه</span>
            <span class="view-details">عرض التفاصيل ←</span>
          </div>
        </div>
      </div>
    `).join('');

    mainContent.innerHTML = `
      <div class="page-header">
        <a href="#/" class="back-link">🔙 العودة للرئيسية</a>
        <h1>نتائج البحث عن: "${q}"</h1>
        <p>تم العثور على ${matches.length} صنف</p>
      </div>
      <section class="section">
        <div class="items-grid">
          ${matchesHTML.length > 0 ? matchesHTML : '<p class="no-items">لم يتم العثور على أي نتائج مطابقة لبحثك</p>'}
        </div>
      </section>
    `;
  });
}

// Setup Delivery Contact info (Static text, not clickable links)
function setupDeliveryInfo() {
  const deliveryWrapper = document.getElementById('delivery-links');
  if (!deliveryWrapper) return;

  deliveryWrapper.innerHTML = `
    <div class="delivery-nums">
      <h4>🛵 أرقام الدليفري:</h4>
      ${menuData.deliveryNumbers.map(n => `<span class="delivery-num-btn static-text">${n}</span>`).join('')}
    </div>
    <div class="complaints-num">
      <h4>✍️ للشكاوى والاقترحات:</h4>
      <span class="complaints-btn static-text">${menuData.complaintNumber}</span>
    </div>
  `;
}

// ===== Cart Operations =====
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (totalQty > 0) {
    badge.textContent = totalQty;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

function addToCart(itemId, quantity, notes) {
  const item = menuData.items.find(i => i.id === itemId);
  if (!item) return;
  const existingIdx = cart.findIndex(c => c.id === itemId && c.notes === notes);
  if (existingIdx > -1) {
    cart[existingIdx].quantity += quantity;
  } else {
    cart.push({ id: itemId, name: item.name, price: item.price, quantity: quantity, notes: notes });
  }
  saveCart();
  showToast(`تم إضافة ${item.name} إلى السلة!`);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function toggleCartModal(open) {
  const modal = document.getElementById('cart-modal');
  if (!modal) return;
  if (open) {
    modal.classList.add('open');
    renderCartItems();
    showCartScreen();
  } else {
    modal.classList.remove('open');
  }
}

function showCartScreen() {
  const cs = document.getElementById('cart-screen');
  const co = document.getElementById('checkout-screen');
  if (cs && co) { cs.style.display = 'flex'; co.style.display = 'none'; }
}

function showCheckoutScreen() {
  const cs = document.getElementById('cart-screen');
  const co = document.getElementById('checkout-screen');
  if (cs && co) { cs.style.display = 'none'; co.style.display = 'flex'; }
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  const totalPriceEl = document.getElementById('cart-total-price');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="empty-icon">🛒</div>
        <p>سلتك فارغة حالياً</p>
        <button class="btn btn-primary" onclick="toggleCartModal(false)">تصفح المنيو</button>
      </div>
    `;
    if (totalPriceEl) totalPriceEl.textContent = '0 جنيه';
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) checkoutBtn.disabled = false;

  let total = 0;
  let html = '';
  cart.forEach((ci, idx) => {
    const itemTotal = ci.price * ci.quantity;
    total += itemTotal;
    const notesHtml = ci.notes ? `<div class="cart-item-customs">📝 ${ci.notes}</div>` : '';
    html += `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${ci.name}</h4>
          ${notesHtml}
          <div class="cart-item-price">${ci.price} جنيه</div>
        </div>
        <div class="cart-item-actions">
          <button class="qty-btn" onclick="updateCartItemQty(${idx}, -1)">-</button>
          <span class="qty-val">${ci.quantity}</span>
          <button class="qty-btn" onclick="updateCartItemQty(${idx}, 1)">+</button>
        </div>
        <div class="cart-item-total">${itemTotal} جنيه</div>
      </div>
    `;
  });
  container.innerHTML = html;
  if (totalPriceEl) totalPriceEl.textContent = `${total} جنيه`;
}

function updateCartItemQty(index, change) {
  if (index < 0 || index >= cart.length) return;
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  saveCart();
  renderCartItems();
}

function submitOrder() {
  const nameInput = document.getElementById('checkout-name');
  const phoneInput = document.getElementById('checkout-phone');
  const addressInput = document.getElementById('checkout-address');
  const confirmBtn = document.getElementById('confirm-checkout-btn');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const address = addressInput ? addressInput.value.trim() : '';

  if (!phone) {
    alert('من فضلك أدخل رقم التلفون للتواصل.');
    if (phoneInput) phoneInput.focus();
    return;
  }
  if (!address) {
    alert('من فضلك أدخل العنوان بالتفصيل لتوصيل الطلب.');
    if (addressInput) addressInput.focus();
    return;
  }

  // Check if configuration is set
  if (TELEGRAM_BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE' || TELEGRAM_CHAT_ID === 'YOUR_CHAT_ID_HERE') {
    alert('⚠️ لم يتم إعداد بيانات التلغرام بعد في الكود. يرجى كتابة الـ Bot Token والـ Chat ID الخاص بك في ملف app.js لإرسال الطلب.');
    return;
  }

  // Loading state
  const originalBtnText = confirmBtn ? confirmBtn.textContent : 'تأكيد وإرسال';
  if (confirmBtn) {
    confirmBtn.disabled = true;
    confirmBtn.textContent = 'جاري إرسال الطلب... ⏳';
  }

  let itemsText = '';
  let totalPrice = 0;
  cart.forEach(ci => {
    const itemTotal = ci.price * ci.quantity;
    totalPrice += itemTotal;
    itemsText += `• ${ci.quantity}x ${ci.name} (${itemTotal} جنيه)\n`;
    if (ci.notes) itemsText += `  - ملاحظة: ${ci.notes}\n`;
  });

  const namePart = name ? `👤 <b>الاسم:</b> ${name}\n` : '';
  const msg = `🔔 <b>طلب جديد من مطعم آخر حاجة</b> 🍔🔥

<b>بيانات التوصيل:</b>
${namePart}📞 <b>رقم التلفون:</b> ${phone}
📍 <b>العنوان:</b> ${address}

<b>الطلبات:</b>
--------------------------------
${itemsText}--------------------------------
💵 <b>إجمالي الطلب:</b> ${totalPrice} جنيه

<b>شكراً لاختياركم مطعم آخر حاجة!</b> ❤️`;

  // Send order to Telegram Channel/Chat
  fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: msg,
      parse_mode: 'HTML'
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Success: clear cart and fields
      cart = [];
      saveCart();
      toggleCartModal(false);
      if (nameInput) nameInput.value = '';
      if (phoneInput) phoneInput.value = '';
      if (addressInput) addressInput.value = '';

      alert('🎉 تم إرسال طلبك بنجاح! سنتواصل معك قريباً لتأكيد التوصيل.');
    })
    .catch(error => {
      console.error('Error sending message:', error);
      alert('❌ حدث خطأ أثناء إرسال الطلب. يرجى التأكد من اتصال الإنترنت والمحاولة مرة أخرى.');
    })
    .finally(() => {
      if (confirmBtn) {
        confirmBtn.disabled = false;
        confirmBtn.textContent = originalBtnText;
      }
    });
}

// Expose to global for inline onclick handlers
window.updateCartItemQty = updateCartItemQty;
window.toggleCartModal = toggleCartModal;

function setupCartEvents() {
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartOverlay = document.getElementById('cart-overlay');
  const checkoutBtn = document.getElementById('checkout-btn');
  const backToCartBtn = document.getElementById('back-to-cart-btn');
  const confirmCheckoutBtn = document.getElementById('confirm-checkout-btn');

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', () => toggleCartModal(true));
  if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCartModal(false));
  if (cartOverlay) cartOverlay.addEventListener('click', () => toggleCartModal(false));
  if (checkoutBtn) checkoutBtn.addEventListener('click', showCheckoutScreen);
  if (backToCartBtn) backToCartBtn.addEventListener('click', showCartScreen);
  if (confirmCheckoutBtn) confirmCheckoutBtn.addEventListener('click', submitOrder);

  updateCartBadge();
}

// Initialize application
window.addEventListener('DOMContentLoaded', () => {
  setupSearch();
  setupDeliveryInfo();
  setupCartEvents();
  handleRouting();

  // Listen to hash changes
  window.addEventListener('hashchange', handleRouting);
});

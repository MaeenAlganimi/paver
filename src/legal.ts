// Generated draft legal copy (Privacy Policy and Terms of Use) in English and Arabic.
// Bracketed items such as [LEGAL ENTITY NAME] are placeholders that must be filled in before launch.
// Set LEGAL_DRAFT to false once the text has been finalized to hide the draft banner.
export const LEGAL_DRAFT = true;

export type LegalSection = { h: string; p?: readonly string[]; ul?: readonly string[] };
export type LegalDoc = { title: string; intro: readonly string[]; sections: readonly LegalSection[] };

export const legal = {
  "en": {
    "privacy": {
      "title": "Privacy Policy",
      "intro": [
        "This policy explains what information is handled when you use the Paver website (paver-site.vercel.app), the Paver web app (paver-ashy.vercel.app) and the Paver desktop app. Paver is provided by [LEGAL ENTITY NAME] (“we”, “us”)."
      ],
      "sections": [
        {
          "h": "Who is responsible",
          "p": [
            "[LEGAL ENTITY NAME], [REGISTERED ADDRESS], is responsible for the personal information described here. You can contact us at [CONTACT EMAIL — CONFIRM qudralabs.team@gmail.com]."
          ]
        },
        {
          "h": "The website",
          "p": [
            "The product website is a static site. Its code does not include analytics, advertising or tracking cookies."
          ],
          "ul": [
            "Your language choice (English or Arabic) is saved in your browser’s local storage so the site remembers it.",
            "The site is hosted by Vercel, which processes technical request data such as your IP address, browser type and the pages you request in order to serve and protect the site.",
            "Fonts are loaded from Google Fonts, so your browser connects to Google’s servers, which receive your IP address.",
            "Download buttons link to GitHub Releases. GitHub receives your request when you download the desktop app.",
            "If you email us, we receive your email address and anything you include in your message."
          ]
        },
        {
          "h": "Information you provide in the web app",
          "ul": [
            "Account details: when you create a company, the company name, your name, email address, password and chosen display currency.",
            "Team members: the general manager can create accounts for colleagues, which includes their names and work email addresses.",
            "Business records you enter: projects, sites, milestones and progress, materials, purchasing, inventory and equipment, suppliers, workforce, expenses, bills, budgets, reports and client portal content. These may include personal information about your staff, suppliers or clients that you choose to enter."
          ]
        },
        {
          "h": "Cookies and browser storage in the web app",
          "p": [
            "The web app uses only the cookies it needs to work:"
          ],
          "ul": [
            "Sign-in and security cookies that keep you signed in and protect forms against cross-site request forgery.",
            "A preference cookie (paver-theme) that remembers your light or dark appearance setting for one year.",
            "We have not found analytics or advertising cookies in the web app. [CONFIRM: NO ANALYTICS ENABLED IN THE VERCEL PROJECT]"
          ]
        },
        {
          "h": "How we use information",
          "ul": [
            "To create and run your account and workspace.",
            "To sign you in and keep the service secure.",
            "To respond to your messages and provide support.",
            "To maintain, troubleshoot and improve the service.",
            "We do not use your workspace data for advertising. [CONFIRM: WE DO NOT SELL PERSONAL INFORMATION]"
          ]
        },
        {
          "h": "Service providers",
          "p": [
            "We use these providers to run the service. They process information on our behalf:"
          ],
          "ul": [
            "Vercel: hosting for the website and the web app.",
            "[DATABASE / HOSTING PROVIDER]: storage of web app data.",
            "Google Fonts: fonts on the website.",
            "GitHub: desktop app downloads and update checks."
          ]
        },
        {
          "h": "The desktop app",
          "p": [
            "The desktop app opens the hosted Paver web app, so everything above applies to it. The app itself does not add analytics or tracking."
          ],
          "ul": [
            "Like a web browser, it stores the web app’s sign-in cookies and cached content on your computer.",
            "It checks GitHub Releases for updates, which sends your IP address and the app version to GitHub.",
            "It blocks requests for camera, microphone, location and other device permissions."
          ]
        },
        {
          "h": "Where information is stored",
          "p": [
            "[DATA STORAGE REGION]. Our service providers may process information in other countries."
          ]
        },
        {
          "h": "How long we keep information",
          "p": [
            "We keep account and workspace data while your account is active and for [DATA RETENTION PERIOD] after it is closed, unless the law requires otherwise. Our hosting providers keep technical logs according to their own policies."
          ]
        },
        {
          "h": "Your choices and rights",
          "p": [
            "You can view and update much of your information in the app. To ask for a copy, correction or deletion of your personal information, or to close your account, contact [CONTACT EMAIL — CONFIRM qudralabs.team@gmail.com]. Depending on where you live, you may have more rights under [APPLICABLE DATA PROTECTION LAW]."
          ]
        },
        {
          "h": "Information about other people",
          "p": [
            "If you add information about other people, such as employees, suppliers or clients, make sure you are allowed to share it. Your company decides how that information is used, and we process it on your company’s behalf."
          ]
        },
        {
          "h": "Security",
          "p": [
            "Connections to the website and web app use HTTPS. No system is completely secure. If you find a security problem, please tell us at [CONTACT EMAIL — CONFIRM qudralabs.team@gmail.com]."
          ]
        },
        {
          "h": "Changes to this policy",
          "p": [
            "When this policy changes, we will update the date at the top. For significant changes, we will let account holders know [HOW USERS ARE NOTIFIED OF CHANGES]."
          ]
        }
      ]
    },
    "terms": {
      "title": "Terms of Use",
      "intro": [
        "These terms apply to the Paver website, web app and desktop app (together, “Paver”), provided by [LEGAL ENTITY NAME]. By creating an account or using Paver, you agree to these terms."
      ],
      "sections": [
        {
          "h": "Using Paver",
          "p": [
            "Paver is a workspace for construction businesses to manage projects, sites, materials, purchasing, workforce and budgets.",
            "If you create an account for a company, you confirm that you are allowed to act on its behalf."
          ]
        },
        {
          "h": "Accounts",
          "p": [
            "The first account in a company is the general manager, who can add and manage team members. Keep your password private. You are responsible for activity under your account and should tell us promptly about any unauthorized use."
          ]
        },
        {
          "h": "Your data",
          "p": [
            "You keep ownership of the information and files you add. You allow us to store and process them only to provide and support Paver. You are responsible for making sure what you add is accurate and lawful.",
            "Figures and reports in Paver are based on the data you enter. They are not financial, accounting, tax or legal advice."
          ]
        },
        {
          "h": "Acceptable use",
          "p": [
            "You agree not to:"
          ],
          "ul": [
            "use Paver for anything illegal or harmful;",
            "try to access other people’s accounts or data, or our systems, without permission;",
            "disrupt, overload or attack the service, or upload malware;",
            "copy, resell or reverse engineer the hosted service, except where the law allows it."
          ]
        },
        {
          "h": "Demo",
          "p": [
            "The demo uses sample data, may be limited and can change or be removed at any time."
          ]
        },
        {
          "h": "Desktop app",
          "p": [
            "The desktop app is free and opens the hosted Paver web app. It is not currently code-signed, so your operating system may show a warning before installing. It updates itself from the official GitHub repository. Its source code is published under the MIT License; these terms cover your use of the hosted service."
          ]
        },
        {
          "h": "Fees",
          "p": [
            "[PRICING / PAID PLANS, IF ANY]. If we introduce fees, we will tell you before they apply."
          ]
        },
        {
          "h": "Availability and changes",
          "p": [
            "We work to keep Paver available, but we do not promise uninterrupted service. We may change or discontinue features. [NOTICE PERIOD FOR SHUTDOWN / DATA EXPORT]"
          ]
        },
        {
          "h": "Ending your use",
          "p": [
            "You can stop using Paver at any time and ask us to close your account. We may suspend or close accounts that break these terms."
          ]
        },
        {
          "h": "Disclaimer",
          "p": [
            "To the extent the law allows, Paver is provided “as is” and “as available”, without warranties of any kind."
          ]
        },
        {
          "h": "Limitation of liability",
          "p": [
            "To the extent the law allows, [LEGAL ENTITY NAME] is not liable for indirect or consequential losses, or for lost profits, revenue, data or business. Our total liability is limited to [LIABILITY CAP]."
          ]
        },
        {
          "h": "Governing law",
          "p": [
            "These terms are governed by [JURISDICTION / GOVERNING LAW]. Disputes will be handled by [COURTS / DISPUTE VENUE]."
          ]
        },
        {
          "h": "Changes and contact",
          "p": [
            "We may update these terms. The date at the top shows the current version, and continuing to use Paver after a change means you accept it. Questions: [CONTACT EMAIL — CONFIRM qudralabs.team@gmail.com]."
          ]
        }
      ]
    },
    "privacyLabel": "Privacy",
    "termsLabel": "Terms",
    "updated": "Last updated: [EFFECTIVE DATE]",
    "back": "Back to Paver",
    "draft": "Draft: this page has not been finalized. Items in brackets still need to be filled in."
  },
  "ar": {
    "privacy": {
      "title": "سياسة الخصوصية",
      "intro": [
        "توضح هذه السياسة المعلومات التي تتم معالجتها عند استخدامك موقع بيفر (paver-site.vercel.app) وتطبيق بيفر على الويب (paver-ashy.vercel.app) وتطبيق بيفر لسطح المكتب. يقدّم بيفر [LEGAL ENTITY NAME] (ويُشار إليه بـ“نحن”)."
      ],
      "sections": [
        {
          "h": "الجهة المسؤولة",
          "p": [
            "[LEGAL ENTITY NAME]، [REGISTERED ADDRESS]، هي الجهة المسؤولة عن المعلومات الشخصية الموضحة هنا. يمكنك التواصل معنا عبر [CONTACT EMAIL — CONFIRM qudralabs.team@gmail.com]."
          ]
        },
        {
          "h": "الموقع",
          "p": [
            "موقع المنتج موقع ثابت، ولا تتضمن شيفرته أدوات تحليلات أو إعلانات أو ملفات تعريف ارتباط للتتبع."
          ],
          "ul": [
            "يُحفظ اختيارك للغة (العربية أو الإنجليزية) في التخزين المحلي لمتصفحك حتى يتذكره الموقع.",
            "يستضيف الموقعَ مزوّدُ الخدمة Vercel، الذي يعالج بيانات الطلبات التقنية مثل عنوان IP ونوع المتصفح والصفحات المطلوبة لتقديم الموقع وحمايته.",
            "تُحمّل الخطوط من خدمة Google Fonts، لذلك يتصل متصفحك بخوادم Google التي تتلقى عنوان IP الخاص بك.",
            "تؤدي أزرار التنزيل إلى صفحة الإصدارات على GitHub، ويتلقى GitHub طلبك عند تنزيل تطبيق سطح المكتب.",
            "إذا راسلتنا عبر البريد الإلكتروني، نتلقى عنوان بريدك وكل ما تضمّنه رسالتك."
          ]
        },
        {
          "h": "المعلومات التي تقدّمها في تطبيق الويب",
          "ul": [
            "بيانات الحساب: عند إنشاء شركة، نجمع اسم الشركة واسمك وبريدك الإلكتروني وكلمة المرور وعملة العرض التي تختارها.",
            "أعضاء الفريق: يمكن للمدير العام إنشاء حسابات لزملائه، بما في ذلك أسماؤهم وعناوين بريدهم الإلكتروني للعمل.",
            "سجلات العمل التي تُدخلها: المشاريع والمواقع والمراحل ونسب التقدم، والمواد والمشتريات والمخزون والمعدات، والموردون، والقوى العاملة، والمصروفات والفواتير والميزانيات والتقارير ومحتوى بوابة العملاء. وقد تتضمن معلومات شخصية عن موظفيك أو مورديك أو عملائك تختار إدخالها."
          ]
        },
        {
          "h": "ملفات تعريف الارتباط والتخزين في تطبيق الويب",
          "p": [
            "يستخدم تطبيق الويب ملفات تعريف الارتباط اللازمة لعمله فقط:"
          ],
          "ul": [
            "ملفات تسجيل الدخول والأمان التي تبقيك مسجلًا وتحمي النماذج من هجمات تزوير الطلبات عبر المواقع.",
            "ملف تفضيلات (paver-theme) يتذكر اختيارك للمظهر الفاتح أو الداكن لمدة سنة.",
            "لم نجد ملفات تعريف ارتباط للتحليلات أو الإعلانات في تطبيق الويب. [CONFIRM: NO ANALYTICS ENABLED IN THE VERCEL PROJECT]"
          ]
        },
        {
          "h": "كيف نستخدم المعلومات",
          "ul": [
            "لإنشاء حسابك ومساحة عملك وتشغيلهما.",
            "لتسجيل دخولك والحفاظ على أمان الخدمة.",
            "للرد على رسائلك وتقديم الدعم.",
            "لصيانة الخدمة وإصلاح أعطالها وتحسينها.",
            "لا نستخدم بيانات مساحة عملك للإعلانات. [CONFIRM: WE DO NOT SELL PERSONAL INFORMATION]"
          ]
        },
        {
          "h": "مزوّدو الخدمات",
          "p": [
            "نستعين بالمزوّدين التاليين لتشغيل الخدمة، ويعالجون المعلومات نيابةً عنا:"
          ],
          "ul": [
            "Vercel: استضافة الموقع وتطبيق الويب.",
            "[DATABASE / HOSTING PROVIDER]: تخزين بيانات تطبيق الويب.",
            "Google Fonts: خطوط الموقع.",
            "GitHub: تنزيلات تطبيق سطح المكتب والتحقق من التحديثات."
          ]
        },
        {
          "h": "تطبيق سطح المكتب",
          "p": [
            "يفتح تطبيق سطح المكتب تطبيق بيفر المستضاف على الويب، لذا ينطبق عليه كل ما سبق. ولا يضيف التطبيق نفسه أي أدوات تحليلات أو تتبع."
          ],
          "ul": [
            "يحفظ، كما يفعل متصفح الويب، ملفات تسجيل الدخول والمحتوى المؤقت لتطبيق الويب على جهازك.",
            "يتحقق من وجود تحديثات على صفحة الإصدارات في GitHub، مما يرسل عنوان IP الخاص بك وإصدار التطبيق إلى GitHub.",
            "يرفض طلبات الوصول إلى الكاميرا والميكروفون والموقع الجغرافي وغيرها من أذونات الجهاز."
          ]
        },
        {
          "h": "مكان تخزين المعلومات",
          "p": [
            "[DATA STORAGE REGION]. وقد يعالج مزوّدو الخدمات المعلومات في دول أخرى."
          ]
        },
        {
          "h": "مدة الاحتفاظ بالمعلومات",
          "p": [
            "نحتفظ ببيانات الحساب ومساحة العمل ما دام حسابك نشطًا ولمدة [DATA RETENTION PERIOD] بعد إغلاقه، ما لم يفرض القانون غير ذلك. ويحتفظ مزوّدو الاستضافة بالسجلات التقنية وفق سياساتهم الخاصة."
          ]
        },
        {
          "h": "خياراتك وحقوقك",
          "p": [
            "يمكنك عرض كثير من معلوماتك وتحديثها داخل التطبيق. لطلب نسخة من معلوماتك الشخصية أو تصحيحها أو حذفها، أو لإغلاق حسابك، تواصل معنا عبر [CONTACT EMAIL — CONFIRM qudralabs.team@gmail.com]. وقد تكون لك حقوق إضافية بموجب [APPLICABLE DATA PROTECTION LAW] بحسب مكان إقامتك."
          ]
        },
        {
          "h": "معلومات عن أشخاص آخرين",
          "p": [
            "إذا أضفت معلومات عن أشخاص آخرين، مثل الموظفين أو الموردين أو العملاء، فتأكد من أنه يحق لك مشاركتها. تحدد شركتك طريقة استخدام هذه المعلومات، ونعالجها نحن نيابةً عنها."
          ]
        },
        {
          "h": "الأمان",
          "p": [
            "تستخدم الاتصالات بالموقع وتطبيق الويب بروتوكول HTTPS. لا يوجد نظام آمن تمامًا، وإذا اكتشفت مشكلة أمنية فأخبرنا عبر [CONTACT EMAIL — CONFIRM qudralabs.team@gmail.com]."
          ]
        },
        {
          "h": "التغييرات على هذه السياسة",
          "p": [
            "عند تغيير هذه السياسة سنحدّث التاريخ في أعلاها، وسنُعلم أصحاب الحسابات بالتغييرات الجوهرية [HOW USERS ARE NOTIFIED OF CHANGES]."
          ]
        }
      ]
    },
    "terms": {
      "title": "شروط الاستخدام",
      "intro": [
        "تنطبق هذه الشروط على موقع بيفر وتطبيقه على الويب وتطبيقه لسطح المكتب (ويُشار إليها معًا بـ“بيفر”)، التي يقدّمها [LEGAL ENTITY NAME]. بإنشائك حسابًا أو استخدامك بيفر، فإنك توافق على هذه الشروط."
      ],
      "sections": [
        {
          "h": "استخدام بيفر",
          "p": [
            "بيفر مساحة عمل تساعد شركات الإنشاءات على إدارة المشاريع والمواقع والمواد والمشتريات والقوى العاملة والميزانيات.",
            "إذا أنشأت حسابًا لشركة، فإنك تؤكد أنه يحق لك التصرف نيابةً عنها."
          ]
        },
        {
          "h": "الحسابات",
          "p": [
            "الحساب الأول في الشركة هو حساب المدير العام، ويمكنه إضافة أعضاء الفريق وإدارتهم. حافظ على سرية كلمة المرور. أنت مسؤول عن النشاط الذي يجري من خلال حسابك، وعليك إبلاغنا فورًا بأي استخدام غير مصرّح به."
          ]
        },
        {
          "h": "بياناتك",
          "p": [
            "تبقى ملكية المعلومات والملفات التي تضيفها لك. وتسمح لنا بتخزينها ومعالجتها فقط لتقديم بيفر ودعمه. وأنت مسؤول عن دقة ما تضيفه ومشروعيته.",
            "تعتمد الأرقام والتقارير في بيفر على البيانات التي تُدخلها، وهي ليست استشارة مالية أو محاسبية أو ضريبية أو قانونية."
          ]
        },
        {
          "h": "الاستخدام المقبول",
          "p": [
            "توافق على ألا تقوم بما يلي:"
          ],
          "ul": [
            "استخدام بيفر لأي غرض غير قانوني أو ضار؛",
            "محاولة الوصول إلى حسابات الآخرين أو بياناتهم أو إلى أنظمتنا دون إذن؛",
            "تعطيل الخدمة أو إثقالها أو مهاجمتها، أو رفع برمجيات خبيثة؛",
            "نسخ الخدمة المستضافة أو إعادة بيعها أو الهندسة العكسية لها، إلا بالقدر الذي يسمح به القانون."
          ]
        },
        {
          "h": "النسخة التجريبية",
          "p": [
            "تستخدم النسخة التجريبية بيانات نموذجية، وقد تكون محدودة، ويمكن تغييرها أو إزالتها في أي وقت."
          ]
        },
        {
          "h": "تطبيق سطح المكتب",
          "p": [
            "تطبيق سطح المكتب مجاني ويفتح تطبيق بيفر المستضاف على الويب. وهو غير موقّع رقميًا حاليًا، لذا قد يعرض نظام التشغيل تحذيرًا قبل التثبيت. ويحدّث نفسه من مستودع GitHub الرسمي. شيفرته المصدرية منشورة بموجب ترخيص MIT، وتحكم هذه الشروط استخدامك للخدمة المستضافة."
          ]
        },
        {
          "h": "الرسوم",
          "p": [
            "[PRICING / PAID PLANS, IF ANY]. إذا فرضنا رسومًا فسنخبرك قبل تطبيقها."
          ]
        },
        {
          "h": "التوفر والتغييرات",
          "p": [
            "نعمل على إبقاء بيفر متاحًا، لكننا لا نضمن عدم انقطاع الخدمة. وقد نغيّر بعض المزايا أو نوقفها. [NOTICE PERIOD FOR SHUTDOWN / DATA EXPORT]"
          ]
        },
        {
          "h": "إنهاء الاستخدام",
          "p": [
            "يمكنك التوقف عن استخدام بيفر في أي وقت وطلب إغلاق حسابك. ويجوز لنا تعليق الحسابات التي تخالف هذه الشروط أو إغلاقها."
          ]
        },
        {
          "h": "إخلاء المسؤولية",
          "p": [
            "في الحدود التي يسمح بها القانون، يُقدَّم بيفر “كما هو” و“حسب توفره”، دون أي ضمانات."
          ]
        },
        {
          "h": "حدود المسؤولية",
          "p": [
            "في الحدود التي يسمح بها القانون، لا يتحمل [LEGAL ENTITY NAME] المسؤولية عن الخسائر غير المباشرة أو التبعية، ولا عن خسارة الأرباح أو الإيرادات أو البيانات أو الأعمال. وتقتصر مسؤوليتنا الإجمالية على [LIABILITY CAP]."
          ]
        },
        {
          "h": "القانون الواجب التطبيق",
          "p": [
            "تخضع هذه الشروط لـ [JURISDICTION / GOVERNING LAW]، وتختص [COURTS / DISPUTE VENUE] بالنظر في أي نزاع."
          ]
        },
        {
          "h": "التغييرات والتواصل",
          "p": [
            "قد نحدّث هذه الشروط. يوضح التاريخ في الأعلى الإصدار الحالي، ويعني استمرارك في استخدام بيفر بعد أي تغيير موافقتك عليه. للاستفسارات: [CONTACT EMAIL — CONFIRM qudralabs.team@gmail.com]."
          ]
        }
      ]
    },
    "privacyLabel": "الخصوصية",
    "termsLabel": "الشروط",
    "updated": "آخر تحديث: [EFFECTIVE DATE]",
    "back": "العودة إلى بيفر",
    "draft": "مسودة: لم تُعتمد هذه الصفحة بعد. ما زالت العناصر بين الأقواس بحاجة إلى استكمال."
  }
} as const;

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HardDrive, Clock, BookOpen, MonitorPlay, ExternalLink, X, Send, Sparkles, Play } from 'lucide-react';

interface Course {
  titleEn: string;
  titleAr: string;
  description: React.ReactNode;
  image: string;
  metadata: {
    size: string;
    duration: string;
    lessons: string;
    quality: string;
  };
  telegram: string;
}

// Flattened array maintaining the exact requested order
const courses: Course[] = [
  // Adobe Courses (Most Demanded)
  {
    titleEn: "Photoshop 2026",
    titleAr: "فوتوشوب 2026",
    description: <>تصميم وتعديل الصور بالـ <span className="font-en font-bold">AI</span></>,
    image: "https://d.top4top.io/p_3739cp2ob1.jpg",
    metadata: { size: "35 GB", duration: "25 Hours", lessons: "80", quality: "4K" },
    telegram: "https://t.me/c/3493244902/263"
  },
  {
    titleEn: "Illustrator 2026",
    titleAr: "إليستريتور 2026",
    description: "تصميم فيكتور احترافي",
    image: "https://b.top4top.io/p_37394ok4r1.jpg",
    metadata: { size: "~40 GB", duration: "31 Hours", lessons: "135", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/111"
  },
  {
    titleEn: "After Effects",
    titleAr: "أفتر إفكت",
    description: "موشن جرافيك احترافي",
    image: "https://k.top4top.io/p_3739qa2cs1.jpg",
    metadata: { size: "~110 GB", duration: "37 Hours", lessons: "118", quality: "4K" },
    telegram: "https://t.me/c/3493244902/89"
  },
  {
    titleEn: "Premiere Advanced",
    titleAr: "بريمير متقدم",
    description: "مونتاج احترافي متقدم",
    image: "https://l.top4top.io/p_3739rcot51.jpg",
    metadata: { size: "6.5 GB", duration: "15 Hours", lessons: "44", quality: "4K" },
    telegram: "https://t.me/c/3493244902/42"
  },
  {
    titleEn: "Premiere Essential",
    titleAr: "بريمير أساسي",
    description: "أساسيات المونتاج",
    image: "https://l.top4top.io/p_3739rcot51.jpg",
    metadata: { size: "~7 GB", duration: "6 Hours", lessons: "24", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/38"
  },

  // AI Courses
  {
    titleEn: "AI Graphic Design",
    titleAr: "الذكاء الاصطناعي في التصميم",
    description: <>دمج الـ <span className="font-en font-bold">AI</span> في الجرافيك</>,
    image: "https://i.top4top.io/p_37399pbvm1.jpg",
    metadata: { size: "9 GB", duration: "12 Hours", lessons: "42", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/283"
  },
  {
    titleEn: "AI Design",
    titleAr: "تصميم بالذكاء الاصطناعي كوريل",
    description: <>تصميم باستخدام الـ <span className="font-en font-bold">AI</span></>,
    image: "https://h.top4top.io/p_3739joenj1.jpg",
    metadata: { size: "3 GB", duration: "5 Hours", lessons: "18", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/260"
  },

  // Marketing & Social Media
  {
    titleEn: "Marketing Yourself",
    titleAr: "تسويق نفسك كمصمم",
    description: "بناء البراند الشخصي",
    image: "https://d.top4top.io/p_3739df3uz1.jpg",
    metadata: { size: "4.25 GB", duration: "6 Hours", lessons: "21", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/58"
  },
  {
    titleEn: "Social Media Marketing",
    titleAr: "التسويق عبر السوشيال ميديا",
    description: "إعلانات واستهداف الجمهور",
    image: "https://l.top4top.io/p_3739cig8i1.jpg",
    metadata: { size: "12 GB", duration: "15 Hours", lessons: "60", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/138"
  },

  // Design Basics & Foundations
  {
    titleEn: "Design Basics",
    titleAr: "أساسيات التصميم",
    description: "مبادئ التصميم",
    image: "https://f.top4top.io/p_3739exql31.jpg",
    metadata: { size: "~20 GB", duration: "~10 Hours", lessons: "~50", quality: "2K" },
    telegram: "https://t.me/c/3493244902/52"
  },
  {
    titleEn: "Infographic Design",
    titleAr: "تصميم إنفوجرافيك",
    description: "تصميم محتوى بصري معلوماتي",
    image: "https://f.top4top.io/p_37390mm6c1.jpg",
    metadata: { size: "4.5 GB", duration: "8 Hours", lessons: "34", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/151"
  },
  {
    titleEn: "Figma",
    titleAr: "فيجما",
    description: <>تصميم واجهات المستخدم <span className="font-en font-bold">UI/UX</span></>,
    image: "https://e.top4top.io/p_3739cnwpt1.jpg",
    metadata: { size: "14 GB", duration: "18 Hours", lessons: "54", quality: "4K" },
    telegram: "https://t.me/c/3493244902/32"
  },

  // 3D & Motion (High Demand)
  {
    titleEn: "Blender 2.93",
    titleAr: "بلندر 2.93",
    description: "تصميم وتحريك ثلاثي الأبعاد",
    image: "https://c.top4top.io/p_3739539oi1.jpg",
    metadata: { size: "33.5 GB", duration: "49 Hours", lessons: "84", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/20"
  },
  {
    titleEn: "Cinema 4D",
    titleAr: "سينما فور دي",
    description: "تصميم ثلاثي الأبعاد وموشن",
    image: "https://i.top4top.io/p_3739vejw31.jpg",
    metadata: { size: "45 GB", duration: "42 Hours", lessons: "110", quality: "4K" },
    telegram: "https://t.me/c/3493244902/129"
  },
  {
    titleEn: "3ds Max Essential",
    titleAr: "ثري دي ماكس أساسي",
    description: "أساسيات التصميم ثلاثي الأبعاد",
    image: "https://j.top4top.io/p_3739v1rbi1.jpg",
    metadata: { size: "5.4 GB", duration: "10 Hours", lessons: "40", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/255"
  },
  {
    titleEn: "Autodesk Maya",
    titleAr: "مايا أوتوديسك",
    description: "تحريك ونمذجة ثلاثية الأبعاد",
    image: "https://a.top4top.io/p_37391yaes1.jpg",
    metadata: { size: "35 GB", duration: "38 Hours", lessons: "92", quality: "4K" },
    telegram: "https://t.me/c/3493244902/235"
  },
  {
    titleEn: "Advanced Motion",
    titleAr: "موشن متقدم",
    description: "موشن جرافيك متقدم",
    image: "https://f.top4top.io/p_3739vik3a1.jpg",
    metadata: { size: "18 GB", duration: "22 Hours", lessons: "65", quality: "2K" },
    telegram: "https://t.me/c/3493244902/169"
  },

  // Architecture & Rendering
  {
    titleEn: "V-Ray Rendering",
    titleAr: "في راي ريندر",
    description: "إخراج ثلاثي الأبعاد",
    image: "https://c.top4top.io/p_37395shr71.jpg",
    metadata: { size: "13 GB", duration: "12 Hours", lessons: "47", quality: "4K" },
    telegram: "https://t.me/c/3493244902/248"
  },
  {
    titleEn: "Corona Render",
    titleAr: "كورونا ريندر",
    description: "إخراج واقعي احترافي",
    image: "https://a.top4top.io/p_3739q0nro1.jpg",
    metadata: { size: "25 GB", duration: "24 Hours", lessons: "75", quality: "4K" },
    telegram: "https://t.me/c/3493244902/196"
  },
  {
    titleEn: "Lumion Rendering",
    titleAr: "لوميون ريندر",
    description: "إخراج معماري واقعي",
    image: "https://j.top4top.io/p_37394ekr21.jpg",
    metadata: { size: "21.1 GB", duration: "18 Hours", lessons: "55", quality: "4K" },
    telegram: "https://t.me/c/3493244902/217"
  },
  {
    titleEn: "Revit Architecture",
    titleAr: "ريفيت معماري",
    description: "تصميم معماري احترافي",
    image: "https://c.top4top.io/p_3739car7z1.jpg",
    metadata: { size: "3.8 GB", duration: "10 Hours", lessons: "32", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/226"
  },
  {
    titleEn: "AutoCAD Basics",
    titleAr: "أوتوكاد أساسيات",
    description: "الرسم الهندسي",
    image: "https://g.top4top.io/p_3739trl801.jpg",
    metadata: { size: "7.1 GB", duration: "14 Hours", lessons: "48", quality: "4K" },
    telegram: "https://t.me/c/3493244902/189"
  },
  {
    titleEn: "SketchUp",
    titleAr: "سكتش أب",
    description: "تصميم ثلاثي الأبعاد سهل",
    image: "https://k.top4top.io/p_3739fdkp31.jpg",
    metadata: { size: "19.6 GB", duration: "20 Hours", lessons: "62", quality: "4K" },
    telegram: "https://t.me/c/3493244902/208"
  },
  {
    titleEn: "Interior Design Intro",
    titleAr: "مقدمة التصميم الداخلي",
    description: "أساسيات التصميم الداخلي",
    image: "https://l.top4top.io/p_3739aojrd1.jpg",
    metadata: { size: "549 MB", duration: "3 Hours", lessons: "12", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/193"
  },

  // Supporting Skills
  {
    titleEn: "Sound Engineering",
    titleAr: "الهندسة الصوتية",
    description: "تحرير الصوت",
    image: "https://h.top4top.io/p_3739ey0wg1.jpg",
    metadata: { size: "5.8 GB", duration: "6 Hours", lessons: "21", quality: "4K" },
    telegram: "https://t.me/c/3493244902/48"
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
};

function CourseCard({ course }: { course: Course; key?: React.Key }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-[var(--color-card)] shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 border border-white/5 hover:border-[var(--color-accent)]/40"
    >
      {/* Glow effect behind the card on hover */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-[var(--color-accent)] to-transparent opacity-0 blur-xl transition duration-500 group-hover:opacity-10" />
      
      <div className="relative z-10 flex h-full flex-col bg-[var(--color-card)]">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
          <img
            src={course.image}
            alt={course.titleEn}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card)] via-[var(--color-card)]/10 to-transparent opacity-100" />
          
          {/* Play Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
              <Play className="h-5 w-5 ml-1" />
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2.5 text-lg font-heading font-bold leading-snug text-[var(--color-text-main)] transition-colors group-hover:text-[var(--color-accent)]" dir="auto">
            <span className="font-en text-[1.25rem]">{course.titleEn}</span> <span className="text-sm opacity-70 font-sans font-normal">({course.titleAr})</span>
          </h3>
          <p className="mb-5 text-sm text-[var(--color-text-secondary)] font-sans leading-[1.7]" dir="auto">
            {course.description}
          </p>

          <div className="mb-6 mt-auto grid grid-cols-2 gap-3 text-xs font-medium text-slate-300">
            {course.metadata.size && (
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-1.5 border border-white/5">
                <HardDrive className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                <span dir="ltr" className="font-en text-xs">{course.metadata.size}</span>
              </div>
            )}
            {course.metadata.duration && (
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-1.5 border border-white/5">
                <Clock className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                <span dir="ltr" className="font-en text-xs">{course.metadata.duration}</span>
              </div>
            )}
            {course.metadata.lessons && (
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-1.5 border border-white/5">
                <BookOpen className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                <span dir="ltr" className="font-en text-xs">{course.metadata.lessons} Lessons</span>
              </div>
            )}
            {course.metadata.quality && (
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-1.5 border border-white/5">
                <MonitorPlay className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                <span dir="ltr" className="font-en text-xs">{course.metadata.quality}</span>
              </div>
            )}
          </div>

          <div className="relative group/btn">
            <a
              href={course.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-blue-600 px-4 py-3 text-sm font-heading font-semibold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="font-en text-base font-bold tracking-wide">Open Course</span>
                <ExternalLink className="h-4 w-4" />
              </span>
            </a>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 z-50 mb-3 w-max max-w-[240px] -translate-x-1/2 scale-95 opacity-0 transition-all duration-200 group-hover/btn:scale-100 group-hover/btn:opacity-100 pointer-events-none">
              <div className="rounded-xl bg-slate-800 p-3 text-center shadow-xl border border-white/10">
                <p className="mb-1.5 font-sans text-xs text-slate-200 leading-relaxed" dir="auto">{course.description}</p>
                <p className="font-en text-[10px] text-cyan-400 break-all bg-slate-900/50 p-1.5 rounded-md">{course.telegram}</p>
                <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-slate-800 border-b border-r border-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-secondary)] selection:bg-[var(--color-accent)] selection:text-[var(--color-secondary)]" dir="rtl">
      
      {/* Background Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Telegram Subscription Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl bg-[var(--color-card)] p-8 shadow-2xl border border-white/10"
              dir="rtl"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute left-4 top-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                  <Send className="h-10 w-10 ml-1" />
                </div>
              </div>

              <h3 className="mb-4 text-center text-xl sm:text-2xl font-heading font-bold text-white leading-snug">
                تنبيه هام! 🚨
              </h3>
              <p className="mb-8 text-center text-slate-300 leading-[1.8] font-sans text-sm sm:text-base">
                عشان تفتح معك الكورسات وتستفيد منها بدون أي مشاكل، ضروري تنضم لقناتنا الرسمية على <span className="font-en text-lg font-bold text-[var(--color-accent)]">Telegram</span> أول.
                <br/><br/>
                اشترك الحين وخذ راحتك في المنصة!
              </p>

              <a
                href="https://t.me/+RJCiT8Fb9zc5ZWE0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowModal(false)}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 text-base sm:text-lg font-heading font-bold text-white transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:scale-[1.02]"
              >
                <Send className="h-5 w-5" />
                <span>انضم للقناة الحين</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--color-primary)]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <span className="font-en text-xl font-extrabold tracking-tighter text-white">GD</span>
            </div>
            <h1 className="font-en text-2xl font-bold tracking-tight text-[var(--color-text-main)]" dir="ltr">
              GD Work <span className="text-[var(--color-accent)]">Premium</span>
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 border border-white/10"
            dir="ltr"
          >
            <Sparkles className="h-4 w-4 text-[var(--color-accent)]" />
            <span className="text-sm font-en font-semibold text-[var(--color-text-secondary)]">
              {courses.length} <span className="text-white">Premium Courses</span>
            </span>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-heading font-medium text-cyan-400">
            <Sparkles className="h-4 w-4" />
            <span>منصتك المتكاملة للتصميم</span>
          </div>
          <h2 className="text-3xl font-heading font-extrabold text-[var(--color-text-main)] sm:text-4xl lg:text-5xl leading-[1.4] sm:leading-[1.3]">
            طور مهاراتك واوصل <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-blue-500">لمستوى الاحتراف</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-[1.8] text-[var(--color-text-secondary)] font-sans">
            مكتبة شاملة فيها أقوى الكورسات في التصميم، الموشن جرافيك، والذكاء الاصطناعي. جهزناها لك عشان تطور مهاراتك وتصير محترف. ابدأ رحلتك الإبداعية الحين!
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10"
          dir="ltr"
        >
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </motion.div>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-white/10 bg-[var(--color-primary)] py-12">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-blue-600 opacity-50 grayscale">
              <span className="font-en text-xl font-extrabold tracking-tighter text-white">GD</span>
            </div>
          </div>
          <p className="text-sm font-sans font-medium text-[var(--color-text-secondary)] leading-[1.8]" dir="rtl">
            &copy; {new Date().getFullYear()} <span className="font-en font-bold text-white">GD Work Premium</span>. جميع الحقوق محفوظة. سويناها بشغف للمبدعين.
          </p>
        </div>
      </footer>
    </div>
  );
}

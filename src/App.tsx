/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { HardDrive, Clock, BookOpen, MonitorPlay, ExternalLink } from 'lucide-react';

interface Course {
  title: string;
  description: string;
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
    title: "Photoshop 2026 (فوتوشوب 2026)",
    description: "تصميم وتعديل الصور بالذكاء الاصطناعي",
    image: "https://d.top4top.io/p_3739cp2ob1.jpg",
    metadata: { size: "35 GB", duration: "25 Hours", lessons: "80", quality: "4K" },
    telegram: "https://t.me/c/3493244902/263"
  },
  {
    title: "Illustrator 2026 (إليستريتور 2026)",
    description: "تصميم فيكتور احترافي",
    image: "https://b.top4top.io/p_37394ok4r1.jpg",
    metadata: { size: "~40 GB", duration: "31 Hours", lessons: "135", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/111"
  },
  {
    title: "After Effects (أفتر إفكت)",
    description: "موشن جرافيك احترافي",
    image: "https://k.top4top.io/p_3739qa2cs1.jpg",
    metadata: { size: "~110 GB", duration: "37 Hours", lessons: "118", quality: "4K" },
    telegram: "https://t.me/c/3493244902/89"
  },
  {
    title: "Premiere Advanced (بريمير متقدم)",
    description: "مونتاج احترافي متقدم",
    image: "https://l.top4top.io/p_3739rcot51.jpg",
    metadata: { size: "6.5 GB", duration: "15 Hours", lessons: "44", quality: "4K" },
    telegram: "https://t.me/c/3493244902/42"
  },
  {
    title: "Premiere Essential (بريمير أساسي)",
    description: "أساسيات المونتاج",
    image: "https://l.top4top.io/p_3739rcot51.jpg",
    metadata: { size: "~7 GB", duration: "6 Hours", lessons: "24", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/38"
  },

  // AI Courses
  {
    title: "AI Graphic Design (الذكاء الاصطناعي في التصميم)",
    description: "دمج AI في الجرافيك",
    image: "https://i.top4top.io/p_37399pbvm1.jpg",
    metadata: { size: "9 GB", duration: "12 Hours", lessons: "42", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/283"
  },
  {
    title: "AI Design كوريل (تصميم بالذكاء الاصطناعي)",
    description: "تصميم باستخدام AI",
    image: "https://h.top4top.io/p_3739joenj1.jpg",
    metadata: { size: "3 GB", duration: "5 Hours", lessons: "18", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/260"
  },

  // Marketing & Social Media
  {
    title: "Marketing Yourself (تسويق نفسك كمصمم)",
    description: "بناء البراند الشخصي",
    image: "https://d.top4top.io/p_3739df3uz1.jpg",
    metadata: { size: "4.25 GB", duration: "6 Hours", lessons: "21", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/58"
  },
  {
    title: "Social Media Marketing (التسويق عبر السوشيال ميديا)",
    description: "إعلانات واستهداف الجمهور",
    image: "https://l.top4top.io/p_3739cig8i1.jpg",
    metadata: { size: "12 GB", duration: "15 Hours", lessons: "60", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/138"
  },

  // Design Basics & Foundations
  {
    title: "Design Basics (أساسيات التصميم)",
    description: "مبادئ التصميم",
    image: "https://f.top4top.io/p_3739exql31.jpg",
    metadata: { size: "~20 GB", duration: "~10 Hours", lessons: "~50", quality: "2K" },
    telegram: "https://t.me/c/3493244902/52"
  },
  {
    title: "Infographic Design (تصميم إنفوجرافيك)",
    description: "تصميم محتوى بصري معلوماتي",
    image: "https://f.top4top.io/p_37390mm6c1.jpg",
    metadata: { size: "4.5 GB", duration: "8 Hours", lessons: "34", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/151"
  },
  {
    title: "Figma (فيجما)",
    description: "تصميم واجهات المستخدم UI/UX",
    image: "https://e.top4top.io/p_3739cnwpt1.jpg",
    metadata: { size: "14 GB", duration: "18 Hours", lessons: "54", quality: "4K" },
    telegram: "https://t.me/c/3493244902/32"
  },

  // 3D & Motion (High Demand)
  {
    title: "Blender 2.93 (بلندر 2.93)",
    description: "تصميم وتحريك ثلاثي الأبعاد",
    image: "https://c.top4top.io/p_3739539oi1.jpg",
    metadata: { size: "33.5 GB", duration: "49 Hours", lessons: "84", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/20"
  },
  {
    title: "Cinema 4D (سينما فور دي)",
    description: "تصميم ثلاثي الأبعاد وموشن",
    image: "https://i.top4top.io/p_3739vejw31.jpg",
    metadata: { size: "45 GB", duration: "42 Hours", lessons: "110", quality: "4K" },
    telegram: "https://t.me/c/3493244902/129"
  },
  {
    title: "3ds Max Essential (ثري دي ماكس أساسي)",
    description: "أساسيات التصميم ثلاثي الأبعاد",
    image: "https://j.top4top.io/p_3739v1rbi1.jpg",
    metadata: { size: "5.4 GB", duration: "10 Hours", lessons: "40", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/255"
  },
  {
    title: "Autodesk Maya (مايا أوتوديسك)",
    description: "تحريك ونمذجة ثلاثية الأبعاد",
    image: "https://a.top4top.io/p_37391yaes1.jpg",
    metadata: { size: "35 GB", duration: "38 Hours", lessons: "92", quality: "4K" },
    telegram: "https://t.me/c/3493244902/235"
  },
  {
    title: "Advanced Motion (موشن متقدم)",
    description: "موشن جرافيك متقدم",
    image: "https://f.top4top.io/p_3739vik3a1.jpg",
    metadata: { size: "18 GB", duration: "22 Hours", lessons: "65", quality: "2K" },
    telegram: "https://t.me/c/3493244902/169"
  },

  // Architecture & Rendering
  {
    title: "V-Ray Rendering (في راي ريندر)",
    description: "إخراج ثلاثي الأبعاد",
    image: "https://c.top4top.io/p_37395shr71.jpg",
    metadata: { size: "13 GB", duration: "12 Hours", lessons: "47", quality: "4K" },
    telegram: "https://t.me/c/3493244902/248"
  },
  {
    title: "Corona Render (كورونا ريندر)",
    description: "إخراج واقعي احترافي",
    image: "https://a.top4top.io/p_3739q0nro1.jpg",
    metadata: { size: "25 GB", duration: "24 Hours", lessons: "75", quality: "4K" },
    telegram: "https://t.me/c/3493244902/196"
  },
  {
    title: "Lumion Rendering (لوميون ريندر)",
    description: "إخراج معماري واقعي",
    image: "https://j.top4top.io/p_37394ekr21.jpg",
    metadata: { size: "21.1 GB", duration: "18 Hours", lessons: "55", quality: "4K" },
    telegram: "https://t.me/c/3493244902/217"
  },
  {
    title: "Revit Architecture (ريفيت معماري)",
    description: "تصميم معماري احترافي",
    image: "https://c.top4top.io/p_3739car7z1.jpg",
    metadata: { size: "3.8 GB", duration: "10 Hours", lessons: "32", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/226"
  },
  {
    title: "AutoCAD Basics (أوتوكاد أساسيات)",
    description: "الرسم الهندسي",
    image: "https://g.top4top.io/p_3739trl801.jpg",
    metadata: { size: "7.1 GB", duration: "14 Hours", lessons: "48", quality: "4K" },
    telegram: "https://t.me/c/3493244902/189"
  },
  {
    title: "SketchUp (سكتش أب)",
    description: "تصميم ثلاثي الأبعاد سهل",
    image: "https://k.top4top.io/p_3739fdkp31.jpg",
    metadata: { size: "19.6 GB", duration: "20 Hours", lessons: "62", quality: "4K" },
    telegram: "https://t.me/c/3493244902/208"
  },
  {
    title: "Interior Design Intro (مقدمة التصميم الداخلي)",
    description: "أساسيات التصميم الداخلي",
    image: "https://l.top4top.io/p_3739aojrd1.jpg",
    metadata: { size: "549 MB", duration: "3 Hours", lessons: "12", quality: "1080p" },
    telegram: "https://t.me/c/3493244902/193"
  },

  // Supporting Skills
  {
    title: "Sound Engineering (الهندسة الصوتية)",
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
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-[var(--color-card)] shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 ring-1 ring-white/5 hover:ring-[var(--color-accent)]/50"
    >
      {/* Glow effect behind the card on hover */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-[var(--color-accent)] to-transparent opacity-0 blur transition duration-500 group-hover:opacity-20" />
      
      <div className="relative z-10 flex h-full flex-col bg-[var(--color-card)]">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-800">
          <img
            src={course.image}
            alt={course.title}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card)] via-[var(--color-card)]/20 to-transparent opacity-90" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-xl font-bold leading-tight text-[var(--color-text-main)] transition-colors group-hover:text-[var(--color-accent)]" dir="auto">
            {course.title}
          </h3>
          <p className="mb-6 text-sm text-[var(--color-text-secondary)]" dir="auto">
            {course.description}
          </p>

          <div className="mb-6 mt-auto grid grid-cols-2 gap-y-4 text-xs font-medium text-slate-400">
            {course.metadata.size && (
              <div className="flex items-center gap-2">
                <HardDrive className="h-4 w-4 text-[var(--color-accent)]" />
                <span dir="ltr">{course.metadata.size}</span>
              </div>
            )}
            {course.metadata.duration && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--color-accent)]" />
                <span dir="ltr">{course.metadata.duration}</span>
              </div>
            )}
            {course.metadata.lessons && (
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[var(--color-accent)]" />
                <span dir="ltr">{course.metadata.lessons} Lessons</span>
              </div>
            )}
            {course.metadata.quality && (
              <div className="flex items-center gap-2">
                <MonitorPlay className="h-4 w-4 text-[var(--color-accent)]" />
                <span dir="ltr">{course.metadata.quality}</span>
              </div>
            )}
          </div>

          <a
            href={course.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[var(--color-accent)]/10 px-4 py-3 text-sm font-semibold text-[var(--color-accent)] transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-secondary)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Open Course
              <ExternalLink className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-secondary)] selection:bg-[var(--color-accent)] selection:text-[var(--color-secondary)]" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[var(--color-secondary)]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-blue-500 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <span className="text-lg font-black tracking-tighter text-[var(--color-secondary)]">GD</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text-main)]" dir="ltr">
              GD Work <span className="text-[var(--color-accent)]">Premium</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm font-semibold text-[var(--color-text-secondary)]"
            dir="ltr"
          >
            {courses.length} Premium Courses
          </motion.p>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center sm:text-right"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-5xl lg:text-6xl">
            اكتشف <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-blue-500">الكورسات</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-secondary)] sm:max-w-2xl">
            يا هلا فيك.. جهزنالك تشكيلة من أقوى الكورسات اللي هتظبط مهاراتك وتنقلك لمستوى احترافي في التصميم، الثري دي، والمونتاج. توكل على الله وابدأ دحين، وخليك دايماً متميز!
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
      <footer className="mt-20 border-t border-white/5 bg-[var(--color-primary)] py-12">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-sm font-medium text-[var(--color-text-secondary)]" dir="ltr">
            &copy; {new Date().getFullYear()} GD Work Premium. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

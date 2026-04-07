import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const MOSAIC_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=600',
    alt: 'Serene clinic interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
    alt: 'Facial aesthetics treatment',
  },
  {
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600',
    alt: 'Professional skincare session',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const mosaicVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, delay: 0.3 + i * 0.18, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-primary-bg"
    >
      {/* Decorative concentric rings — top-right, partially clipped */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[680px] h-[680px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 rounded-full border border-primary-sage/50" />
        <div className="absolute inset-[64px] rounded-full border border-primary-sage/35" />
        <div className="absolute inset-[128px] rounded-full border border-primary-sage/20" />
      </div>

      {/* Soft background gradient blob — bottom-left */}
      <div
        className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-primary-sage/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center w-full">

          {/* ── Left: Content ── */}
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge pill */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-sage/60 border border-primary-sage text-xs font-body font-semibold text-primary-text tracking-widest uppercase mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-accent shrink-0" />
                {t('hero.badge')}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl xl:text-[4.25rem] font-heading font-bold text-primary-text leading-[1.06] tracking-tight mb-6"
            >
              {t('hero.title')}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg font-body text-slate-500 mb-10 max-w-[440px] leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA row */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <a
                href="#treatments"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-accent text-white font-heading font-semibold rounded-xl hover:bg-sky-700 transition-all duration-300 shadow-[0_8px_32px_rgb(2,132,199,0.28)] hover:shadow-[0_12px_40px_rgb(2,132,199,0.42)] hover:-translate-y-0.5 transform cursor-pointer text-sm"
              >
                {t('hero.cta')}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:contact@sereneclinic.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-heading font-semibold rounded-xl border border-gray-200 text-slate-600 hover:border-primary-accent hover:text-primary-accent transition-all duration-300 hover:-translate-y-0.5 transform cursor-pointer text-sm"
              >
                <Mail className="w-4 h-4" />
                {t('hero.email')}
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Image mosaic (hidden on mobile) ── */}
          <div className="hidden lg:grid grid-cols-2 gap-3 h-[580px]" aria-hidden="true">
            {/* Left column: two stacked short images */}
            <div className="flex flex-col gap-3">
              {MOSAIC_IMAGES.slice(0, 2).map((img, i) => (
                <motion.div
                  key={img.src}
                  custom={i}
                  variants={mosaicVariants}
                  initial="hidden"
                  animate="visible"
                  className="rounded-2xl overflow-hidden flex-1"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </motion.div>
              ))}
            </div>

            {/* Right column: one tall image */}
            <motion.div
              custom={2}
              variants={mosaicVariants}
              initial="hidden"
              animate="visible"
              className="rounded-2xl overflow-hidden"
            >
              <img
                src={MOSAIC_IMAGES[2].src}
                alt={MOSAIC_IMAGES[2].alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

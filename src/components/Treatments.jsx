import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Layers, Droplets } from 'lucide-react';

const ICONS = {
  '1': <Sparkles className="w-7 h-7 text-primary-accent" />,
  '2': <Zap className="w-7 h-7 text-primary-accent" />,
  '3': <Layers className="w-7 h-7 text-primary-accent" />,
  '4': <Droplets className="w-7 h-7 text-primary-accent" />,
};

const TREATMENT_KEYS = ['1', '2', '3', '4'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function TreatmentCard({ id, name, desc }) {
  const cardRef = useRef(null);

  function handleMouseMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      onMouseMove={handleMouseMove}
      className="relative bg-primary-bg rounded-3xl p-8 border border-gray-100 cursor-default group overflow-hidden"
      style={{ '--mx': '50%', '--my': '50%' }}
    >
      {/* Mouse-tracking spotlight */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{
          background:
            'radial-gradient(280px circle at var(--mx) var(--my), rgba(2,132,199,0.07), transparent 70%)',
        }}
      />

      {/* Top accent line — slides in on hover */}
      <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-primary-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />

      {/* Hover shadow (box-shadow via Tailwind won't react to group-hover well, so use outline via ring) */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-primary-accent/20 transition-all duration-400 pointer-events-none" />

      <div className="relative z-10">
        {/* Icon container */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-sage to-primary-sage/50 flex items-center justify-center mb-6 group-hover:shadow-[0_4px_16px_rgb(2,132,199,0.15)] transition-shadow duration-300">
          {ICONS[id]}
        </div>

        <h3 className="text-xl font-heading font-bold text-primary-text mb-3 leading-snug">
          {name}
        </h3>
        <p className="font-body text-slate-500 leading-relaxed text-[0.9375rem]">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function Treatments() {
  const { t } = useTranslation();

  return (
    <section id="treatments" className="py-28 bg-primary-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary-text mb-5"
          >
            {t('treatments.title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="h-[3px] w-16 bg-gradient-to-r from-primary-sage via-primary-accent to-primary-sage mx-auto rounded-full"
          />
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TREATMENT_KEYS.map((key) => (
            <TreatmentCard
              key={key}
              id={key}
              name={t(`treatments.items.${key}.name`)}
              desc={t(`treatments.items.${key}.desc`)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

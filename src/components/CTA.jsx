import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const BLOB_CONFIGS = [
  { size: 420, x: '-18%', y: '-30%', delay: 0, duration: 8 },
  { size: 320, x: '72%', y: '55%', delay: 1.5, duration: 10 },
  { size: 240, x: '50%', y: '-20%', delay: 3, duration: 7 },
];

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
      {/* Animated ambient blobs */}
      {BLOB_CONFIGS.map((blob, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          className="absolute rounded-full pointer-events-none"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            background:
              'radial-gradient(circle, rgba(2,132,199,0.18) 0%, transparent 70%)',
            filter: 'blur(48px)',
          }}
          animate={{ y: [0, -24, 0], opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Subtle dot texture overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-heading font-bold text-white mb-5 leading-tight"
        >
          {t('cta.title')}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg font-body text-sky-200/80 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          {t('cta.desc')}
        </motion.p>

        {/* CTA Button with shimmer sweep */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a
            href="mailto:contact@sereneclinic.com"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            className="relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary-accent font-heading font-bold text-lg rounded-2xl shadow-[0_16px_60px_rgba(0,0,0,0.35)] overflow-hidden cursor-pointer"
          >
            {/* Shimmer sweep — Framer Motion animated */}
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-accent/10 to-transparent -skew-x-12"
              initial={{ x: '-120%' }}
              animate={{ x: '220%' }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'linear',
              }}
            />

            <Send className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span className="relative z-10">{t('cta.button')}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

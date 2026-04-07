import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_KEYS = ['1', '2', '3', '4'];

function FAQItem({ number, question, answer, isOpen, onClick }) {
  return (
    <div className="relative">
      {/* Left accent bar — visible when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="accent"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary-accent to-primary-sage rounded-full origin-top"
          />
        )}
      </AnimatePresence>

      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full flex items-start gap-5 px-6 py-6 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent focus-visible:ring-offset-2 rounded-lg"
      >
        {/* Number */}
        <span className="text-xs font-heading font-bold text-primary-accent/60 tracking-widest mt-1 shrink-0 w-6 select-none">
          {number}
        </span>

        {/* Question */}
        <span className="flex-1 font-heading font-semibold text-[1.0625rem] text-primary-text leading-snug group-hover:text-primary-accent transition-colors duration-200">
          {question}
        </span>

        {/* Plus / Minus toggle */}
        <span className="relative w-5 h-5 shrink-0 mt-0.5" aria-hidden="true">
          {/* Horizontal bar (always visible) */}
          <motion.span
            className="absolute inset-y-[9px] left-0 right-0 h-[2px] bg-primary-accent/70 rounded-full"
          />
          {/* Vertical bar (visible when closed, fades out when open) */}
          <motion.span
            animate={{ scaleY: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="absolute inset-x-[9px] top-0 bottom-0 w-[2px] bg-primary-accent/70 rounded-full"
          />
        </span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="pl-[3.25rem] pr-6 pb-6 font-body text-slate-500 leading-relaxed text-[0.9375rem]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Separator */}
      <div className="h-px bg-gray-100 mx-6" />
    </div>
  );
}

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  function toggle(i) {
    setOpenIndex(openIndex === i ? -1 : i);
  }

  return (
    <section id="faq" className="py-28 bg-primary-surface">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary-text mb-5"
          >
            {t('faq.title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="h-[3px] w-16 bg-gradient-to-r from-primary-sage via-primary-accent to-primary-sage mx-auto rounded-full"
          />
        </div>

        {/* Accordion list */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
        >
          {/* Top separator */}
          <div className="h-px bg-gray-100" />

          {FAQ_KEYS.map((key, i) => (
            <FAQItem
              key={key}
              number={String(i + 1).padStart(2, '0')}
              question={t(`faq.q${key}`)}
              answer={t(`faq.a${key}`)}
              isOpen={openIndex === i}
              onClick={() => toggle(i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

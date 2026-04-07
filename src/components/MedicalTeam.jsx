import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function MedicalTeam() {
  const { t } = useTranslation();

  const members = [
    {
      id: 'doctor',
      name: 'Dr. Sofia Ribeiro',
      image: 'https://images.unsplash.com/photo-1594824406692-b4369062334f?auto=format&fit=crop&q=80&w=400&h=400',
    },
    {
      id: 'nurse',
      name: 'Joana Martins',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400',
    }
  ];

  return (
    <section id="team" className="py-24 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary-text mb-6"
          >
            {t('team.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg font-body text-slate-600"
          >
            {t('team.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {members.map((member, idx) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-primary-sage/20"
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-text/90 via-primary-text/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">{member.name}</h3>
                <p className="text-primary-sage font-body text-lg">{t(`team.roles.${member.id}`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

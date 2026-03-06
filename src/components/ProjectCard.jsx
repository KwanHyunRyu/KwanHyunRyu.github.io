import { motion } from 'framer-motion';
import { Shield, Globe, Server, ArrowRight, Calendar } from 'lucide-react';

const iconMap = {
  Shield,
  Globe,
  Server,
};

const accentMap = {
  blue: {
    bg: 'bg-accent-blue/10',
    border: 'border-accent-blue/30',
    text: 'text-accent-blue',
    glow: 'hover:shadow-[0_0_30px_rgba(79,143,247,0.15)]',
    gradient: 'from-accent-blue/20 to-transparent',
    badge: 'bg-accent-blue/15 text-accent-blue',
  },
  cyan: {
    bg: 'bg-accent-cyan/10',
    border: 'border-accent-cyan/30',
    text: 'text-accent-cyan',
    glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]',
    gradient: 'from-accent-cyan/20 to-transparent',
    badge: 'bg-accent-cyan/15 text-accent-cyan',
  },
  green: {
    bg: 'bg-accent-green/10',
    border: 'border-accent-green/30',
    text: 'text-accent-green',
    glow: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]',
    gradient: 'from-accent-green/20 to-transparent',
    badge: 'bg-accent-green/15 text-accent-green',
  },
};

export default function ProjectCard({ project, onClick, index }) {
  const Icon = iconMap[project.icon];
  const colors = accentMap[project.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div
        onClick={onClick}
        className={`group relative cursor-pointer rounded-2xl border border-border bg-dark-800/60 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 ${colors.glow} hover:border-${project.accent === 'blue' ? 'accent-blue' : project.accent === 'cyan' ? 'accent-cyan' : 'accent-green'}/40 hover:-translate-y-1`}
      >
        {/* Top gradient accent */}
        <div
          className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${colors.gradient}`}
        />

        {/* Icon & Title */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl ${colors.bg} ${colors.border} border`}>
            <Icon className={`w-6 h-6 ${colors.text}`} />
          </div>
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full ${colors.badge}`}
          >
            {project.team}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-1">
          {project.title}
        </h3>
        <p className={`text-sm font-medium ${colors.text} mb-3`}>
          {project.subtitle}
        </p>

        {/* Tagline */}
        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {project.tagline}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md bg-dark-700 text-text-muted border border-border"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Period & Role */}
        <div className="space-y-1.5 mb-4">
          {project.period && (
            <p className="text-xs text-text-muted flex items-center gap-1.5">
              <Calendar className="w-3 h-3" />
              {project.period}
            </p>
          )}
          <p className="text-xs text-text-muted">
            <span className="text-text-secondary font-medium">Role:</span>{' '}
            {project.role}
          </p>
        </div>

        {/* CTA */}
        <div
          className={`flex items-center gap-2 text-sm font-medium ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        >
          <span>자세히 보기</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

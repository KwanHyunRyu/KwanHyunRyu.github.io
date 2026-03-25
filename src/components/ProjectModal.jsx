import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Globe, Server, ChevronRight, Lightbulb, Calendar, GitBranch } from 'lucide-react';
import ArchitectureDiagram from './ArchitectureDiagram';

const iconMap = { Shield, Globe, Server };

const accentColorMap = {
  blue: {
    text: 'text-accent-blue',
    bg: 'bg-accent-blue/10',
    border: 'border-accent-blue/30',
    badge: 'bg-accent-blue/15 text-accent-blue',
    dot: 'bg-accent-blue',
    gradient: 'from-accent-blue/10',
  },
  cyan: {
    text: 'text-accent-cyan',
    bg: 'bg-accent-cyan/10',
    border: 'border-accent-cyan/30',
    badge: 'bg-accent-cyan/15 text-accent-cyan',
    dot: 'bg-accent-cyan',
    gradient: 'from-accent-cyan/10',
  },
  green: {
    text: 'text-accent-green',
    bg: 'bg-accent-green/10',
    border: 'border-accent-green/30',
    badge: 'bg-accent-green/15 text-accent-green',
    dot: 'bg-accent-green',
    gradient: 'from-accent-green/10',
  },
};

export default function ProjectModal({ project, onClose }) {
  const Icon = iconMap[project.icon];
  const colors = accentColorMap[project.accent];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl my-8 sm:my-16 rounded-2xl border border-border-card bg-dark-800 shadow-2xl shadow-accent-purple/5"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`relative p-6 sm:p-8 border-b border-border bg-gradient-to-b ${colors.gradient} to-transparent rounded-t-2xl`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg bg-dark-700/80 hover:bg-dark-600 text-text-muted hover:text-text-primary transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-xl ${colors.bg} ${colors.border} border`}>
                <Icon className={`w-7 h-7 ${colors.text}`} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                  {project.title}
                </h2>
                <p className={`text-sm font-medium ${colors.text}`}>
                  {project.subtitle}
                </p>
              </div>
            </div>

            <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-4">
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              {project.period && (
                <>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-text-muted" />
                    <span className="text-text-primary font-medium">{project.period}</span>
                  </div>
                  <span className="text-border">|</span>
                </>
              )}
              <div className="flex items-center gap-2">
                <span className="text-text-muted">Role:</span>
                <span className="text-text-primary font-medium">{project.role}</span>
              </div>
              <span className="text-border">|</span>
              <div className="flex items-center gap-2">
                <span className="text-text-muted">Team:</span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${colors.badge}`}>
                  {project.team}
                </span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-lg bg-dark-700/80 text-text-secondary border border-border font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
              <ChevronRight className={`w-5 h-5 ${colors.text}`} />
              Key Highlights
            </h3>

            <div className="space-y-5">
              {project.highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="relative pl-5 border-l-2 border-border hover:border-l-2 transition-colors"
                  style={{
                    '--hover-border': `var(--color-accent-${project.accent})`,
                  }}
                >
                  <div className={`absolute left-[-5px] top-1.5 w-2 h-2 rounded-full ${colors.dot}`} />
                  <div className="mb-1">
                    <span className={`text-xs font-bold uppercase tracking-wider ${colors.text}`}>
                      {h.label}
                    </span>
                  </div>
                  <p className="text-text-primary font-medium text-sm sm:text-base mb-2">
                    {h.description}
                  </p>
                  {h.detail && (
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {h.detail}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Architecture Diagram */}
            {project.architecture && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2 mb-3">
                  <GitBranch className={`w-5 h-5 ${colors.text}`} />
                  Architecture
                </h3>
                <ArchitectureDiagram projectId={project.id} />
              </div>
            )}

            {/* Insight */}
            <div className={`mt-4 p-5 rounded-xl ${colors.bg} border ${colors.border}`}>
              <div className="flex items-start gap-3">
                <Lightbulb className={`w-5 h-5 mt-0.5 ${colors.text} shrink-0`} />
                <div>
                  <h4 className={`text-sm font-bold ${colors.text} mb-2`}>Insight</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.insight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

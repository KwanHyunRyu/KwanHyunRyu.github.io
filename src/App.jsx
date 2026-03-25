import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Shield,
  Mail,
  Github,
  ChevronDown,
  Briefcase,
  Calendar,
  Phone,
  Users,
  GraduationCap,
} from 'lucide-react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { projects } from './data/projects';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-dark-950 overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background gradient orbs — warm navy glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-purple/6 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/3 rounded-full blur-[200px]" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/80 border border-border text-sm text-text-secondary mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              Backend Developer
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-text-primary">안녕하세요,</span>
            <br />
            <span className="bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan bg-clip-text text-transparent">
              류관현
            </span>
            <span className="text-text-primary">입니다</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Java/Spring 기반의 백엔드 개발자로서, 금융 시스템 구축과 레거시 마이그레이션,
            보안 인증 취득 경험을 바탕으로 신뢰할 수 있는 시스템을 만듭니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-purple/80 to-accent-blue/80 hover:from-accent-purple hover:to-accent-blue text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/30"
            >
              프로젝트 보기
              <ChevronDown className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-700 hover:bg-dark-600 text-text-primary font-medium text-sm border border-border-card hover:border-accent-purple/40 transition-all duration-300"
            >
              연락하기
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-5 h-5 text-text-muted animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              About Me
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              견고한 백엔드 시스템을 설계하고, 보안과 안정성을 최우선으로 개발합니다.
            </p>
          </motion.div>

          {/* Career */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 p-6 rounded-2xl bg-dark-800/60 border border-border-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-5 h-5 text-accent-blue" />
              <h3 className="text-lg font-semibold text-text-primary">Career</h3>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <div>
                <p className="text-base font-semibold text-text-primary">제노솔루션(주)</p>
                <p className="text-sm text-text-secondary">백엔드 개발자</p>
              </div>
              <div className="sm:ml-auto flex items-center gap-2 text-sm text-text-muted">
                <Calendar className="w-3.5 h-3.5" />
                <span>2022.11 ~ 현재</span>
                <span className="px-2 py-0.5 rounded-full bg-accent-green/15 text-accent-green text-xs font-medium ml-2">재직중</span>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 p-6 rounded-2xl bg-dark-800/60 border border-border-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-accent-cyan" />
              <h3 className="text-lg font-semibold text-text-primary">Education</h3>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <div>
                <p className="text-base font-semibold text-text-primary">경동대학교</p>
                <p className="text-sm text-text-secondary">컴퓨터공학 학사</p>
              </div>
              <div className="sm:ml-auto flex items-center gap-2 text-sm text-text-muted">
                <Calendar className="w-3.5 h-3.5" />
                <span>2015.03 ~ 2022.02</span>
                <span className="px-2 py-0.5 rounded-full bg-accent-blue/15 text-accent-blue text-xs font-medium ml-2">졸업</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code2,
                title: 'Backend Development',
                desc: 'Java/Spring Boot 기반의 REST API 설계 및 구현, JPA를 활용한 효율적인 데이터 관리',
                color: 'accent-blue',
              },
              {
                icon: Database,
                title: 'System Architecture',
                desc: '금융 중계 시스템 설계 경험, 확장 가능하고 안정적인 아키텍처 구축',
                color: 'accent-cyan',
              },
              {
                icon: Shield,
                title: 'Security & Certification',
                desc: '보안기능확인서, GS 인증 취득 경험, 시큐어 코딩 및 취약점 분석',
                color: 'accent-green',
              },
              {
                icon: Users,
                title: 'Cross-Team Communication',
                desc: '인프라팀(서버/네트워크/미들웨어)과의 개발-운영 간 소통 담당, 기술 요구사항 번역 및 협업 주도',
                color: 'accent-purple',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-dark-800/60 border border-border-card hover:border-dark-500 transition-colors"
              >
                <item.icon className={`w-8 h-8 text-${item.color} mb-4`} />
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 sm:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Projects
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              실무에서 직접 설계하고 구축한 프로젝트들입니다.
              <br className="hidden sm:block" />
              카드를 클릭하면 상세 내용을 확인할 수 있습니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Contact
            </h2>
            <p className="text-text-secondary mb-10">
              함께 일하고 싶으시다면 언제든 연락주세요.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+821048561382"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-dark-800 border border-border-card hover:border-accent-cyan/50 hover:bg-dark-700 text-text-primary font-medium text-sm transition-all"
              >
                <Phone className="w-5 h-5 text-accent-cyan" />
                010-4856-1382
              </a>
              <a
                href="mailto:fbrhksgus2@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-dark-800 border border-border-card hover:border-accent-blue/50 hover:bg-dark-700 text-text-primary font-medium text-sm transition-all"
              >
                <Mail className="w-5 h-5 text-accent-blue" />
                fbrhksgus2@gmail.com
              </a>
              <a
                href="https://github.com/KwanHyunRyu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-dark-800 border border-border-card hover:border-accent-purple/50 hover:bg-dark-700 text-text-primary font-medium text-sm transition-all"
              >
                <Github className="w-5 h-5 text-accent-purple" />
                GitHub
              </a>
              <a
                href="https://github.com/RyuKwanHyun"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-dark-800 border border-border-card hover:border-accent-purple/50 hover:bg-dark-700 text-text-muted font-medium text-sm transition-all"
              >
                <Github className="w-5 h-5 text-text-muted" />
                GitHub (Archive)
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-text-muted">
            &copy; 2026 류관현. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;

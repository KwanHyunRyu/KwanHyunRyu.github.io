import { motion } from 'framer-motion';
import { Monitor, Server, Database, Globe, Shield, Cpu, Activity, Settings, Eye, Lock, Layers, Code2, Users, FileText, Zap, Network } from 'lucide-react';

// ── Shared UI Primitives ──

function Node({ icon: Icon, label, sublabel, color = 'blue', delay = 0, size = 'md', pulse }) {
  const colorMap = {
    blue: 'border-accent-blue/40 bg-accent-blue/8 text-accent-blue',
    cyan: 'border-accent-cyan/40 bg-accent-cyan/8 text-accent-cyan',
    green: 'border-accent-green/40 bg-accent-green/8 text-accent-green',
    purple: 'border-accent-purple/40 bg-accent-purple/8 text-accent-purple',
    orange: 'border-accent-orange/40 bg-accent-orange/8 text-accent-orange',
    muted: 'border-border bg-dark-700/50 text-text-muted',
  };
  const sizeMap = {
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-5 py-4',
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 300, damping: 25 }}
      className={`relative flex flex-col items-center gap-1.5 ${sizeMap[size]} rounded-xl border ${colorMap[color]} backdrop-blur-sm`}
    >
      {pulse && (
        <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent-${color === 'muted' ? 'blue' : color} animate-pulse`} />
      )}
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span className="text-xs font-semibold text-text-primary whitespace-nowrap">{label}</span>
      {sublabel && <span className="text-[10px] text-text-muted whitespace-nowrap">{sublabel}</span>}
    </motion.div>
  );
}

function Arrow({ direction = 'right', label, delay = 0, color = 'blue' }) {
  const isVertical = direction === 'down';
  const arrowColor = {
    blue: 'text-accent-blue/50',
    cyan: 'text-accent-cyan/50',
    green: 'text-accent-green/50',
    muted: 'text-text-muted/40',
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={`flex ${isVertical ? 'flex-col' : 'flex-row'} items-center gap-0.5 ${arrowColor[color] || arrowColor.muted}`}
    >
      {label && <span className="text-[9px] text-text-muted font-medium">{label}</span>}
      {isVertical ? (
        <div className="flex flex-col items-center">
          <div className="w-px h-4 bg-current opacity-60" />
          <span className="text-[10px]">▼</span>
        </div>
      ) : (
        <div className="flex items-center">
          <div className="h-px w-4 sm:w-6 bg-current opacity-60" />
          <span className="text-[10px]">▶</span>
        </div>
      )}
    </motion.div>
  );
}

function GroupBox({ title, color = 'blue', children, delay = 0 }) {
  const borderColors = {
    blue: 'border-accent-blue/20',
    cyan: 'border-accent-cyan/20',
    green: 'border-accent-green/20',
    purple: 'border-accent-purple/20',
    orange: 'border-accent-orange/20',
    muted: 'border-border/60',
  };
  const textColors = {
    blue: 'text-accent-blue',
    cyan: 'text-accent-cyan',
    green: 'text-accent-green',
    purple: 'text-accent-purple',
    orange: 'text-accent-orange',
    muted: 'text-text-muted',
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`relative rounded-xl border border-dashed ${borderColors[color]} p-3 sm:p-4`}
    >
      <span className={`absolute -top-2.5 left-3 px-2 text-[10px] font-bold uppercase tracking-wider ${textColors[color]} bg-dark-800`}>
        {title}
      </span>
      {children}
    </motion.div>
  );
}

// ── VDeX Architecture ──

function VDeXDiagram() {
  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Client Layer */}
      <GroupBox title="Client Layer" color="muted" delay={0}>
        <div className="flex flex-wrap gap-2 justify-center">
          <Node icon={Monitor} label="Admin Portal" sublabel="Vue.js" color="muted" delay={0.05} size="sm" />
          <Node icon={Monitor} label="User Portal" sublabel="Vue.js" color="muted" delay={0.1} size="sm" />
        </div>
      </GroupBox>

      <Arrow direction="down" label="REST API" color="blue" delay={0.15} />

      {/* WAS Layer - Multi Instance */}
      <GroupBox title="WAS Layer (Multi-Instance)" color="blue" delay={0.2}>
        <div className="space-y-3">
          {/* WAS Instances */}
          <div className="flex flex-wrap gap-2 justify-center">
            <Node icon={Server} label="WAS-01" color="blue" size="sm" delay={0.25} pulse />
            <Node icon={Server} label="WAS-02" color="blue" size="sm" delay={0.3} pulse />
          </div>

          {/* Core Modules */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            <Node icon={Shield} label="JWT 인증" color="blue" size="sm" delay={0.35} />
            <Node icon={Users} label="사용자/정책" color="blue" size="sm" delay={0.38} />
            <Node icon={Monitor} label="Streamer" sublabel="VM 세션 관리" color="blue" size="sm" delay={0.41} />
            <Node icon={FileText} label="감사/리포트" color="blue" size="sm" delay={0.44} />
          </div>

          {/* Architecture Tags */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20 font-medium">
              Event-Driven
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20 font-medium">
              @ConditionalOnProperty
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20 font-medium">
              Distributed Lock
            </span>
          </div>
        </div>
      </GroupBox>

      {/* External Integrations */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        <GroupBox title="Splashtop" color="purple" delay={0.5}>
          <div className="flex justify-center">
            <Node icon={Globe} label="원격접속" sublabel="HTTP API" color="purple" size="sm" delay={0.55} />
          </div>
        </GroupBox>

        <GroupBox title="TCenter" color="green" delay={0.5}>
          <div className="flex justify-center">
            <Node icon={Layers} label="하이퍼바이저" sublabel="Proxmox / OpenStack" color="green" size="sm" delay={0.55} />
          </div>
        </GroupBox>

        <GroupBox title="Zabbix" color="orange" delay={0.5}>
          <div className="flex justify-center">
            <Node icon={Activity} label="모니터링" sublabel="JSON-RPC" color="orange" size="sm" delay={0.55} />
          </div>
        </GroupBox>

        <GroupBox title="Active Directory" color="cyan" delay={0.5}>
          <div className="flex justify-center">
            <Node icon={Users} label="LDAP 인증" sublabel="사용자 동기화" color="cyan" size="sm" delay={0.55} />
          </div>
        </GroupBox>
      </div>

      <Arrow direction="down" color="blue" delay={0.6} />

      {/* Data Layer */}
      <GroupBox title="Data Layer" color="blue" delay={0.65}>
        <div className="flex flex-wrap gap-2 justify-center">
          <Node icon={Database} label="PostgreSQL" sublabel="Primary DB (JPA)" color="blue" size="sm" delay={0.7} />
          <Node icon={Database} label="Splashtop DB" sublabel="Secondary (JDBC)" color="purple" size="sm" delay={0.75} />
        </div>
      </GroupBox>
    </div>
  );
}

// ── ORIS Architecture ──

function ORISDiagram() {
  return (
    <div className="space-y-5">
      {/* Main flow: 요청기관 → ORIS → BOK */}
      <GroupBox title="Data Flow" color="cyan" delay={0}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 py-2">
          <Node icon={Globe} label="요청기관" sublabel="금융기관" color="muted" delay={0.1} />
          <Arrow label="요청" color="cyan" delay={0.15} />
          <Node icon={Server} label="ORIS" sublabel="중계 시스템" color="cyan" delay={0.2} pulse />
          <Arrow label="전송" color="cyan" delay={0.25} />
          <Node icon={Shield} label="BOK" sublabel="한국은행" color="purple" delay={0.3} />
        </div>
      </GroupBox>

      {/* Internal Architecture */}
      <GroupBox title="Internal Architecture" color="cyan" delay={0.35}>
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2">
            <Node icon={Monitor} label="WEB" sublabel="프론트엔드" color="muted" delay={0.4} size="sm" />
            <Arrow color="cyan" delay={0.42} />
            <Node icon={Server} label="WAS" sublabel="API Server" color="cyan" delay={0.45} size="sm" />
            <Arrow color="cyan" delay={0.47} />
            <Node icon={Database} label="PostgreSQL" color="cyan" delay={0.5} size="sm" />
          </div>

          {/* Key patterns */}
          <div className="flex flex-wrap gap-2 justify-center pt-1">
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 font-medium">
              State Machine Pattern
            </span>
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 font-medium">
              Transaction Rollback
            </span>
          </div>
        </div>
      </GroupBox>

      {/* HA & Security */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <GroupBox title="High Availability" color="purple" delay={0.55}>
          <div className="flex flex-wrap gap-2 justify-center">
            <Node icon={Activity} label="L4 스위치" color="purple" size="sm" delay={0.6} />
            <Node icon={Server} label="WAS 이중화" color="purple" size="sm" delay={0.65} />
            <Node icon={Database} label="DB 이중화" color="purple" size="sm" delay={0.7} />
          </div>
        </GroupBox>

        <GroupBox title="Security Layer" color="orange" delay={0.55}>
          <div className="flex flex-wrap gap-2 justify-center">
            <Node icon={Lock} label="암호화" color="orange" size="sm" delay={0.6} />
            <Node icon={Eye} label="마스킹" color="orange" size="sm" delay={0.65} />
            <Node icon={Shield} label="Least Privilege" color="orange" size="sm" delay={0.7} />
          </div>
        </GroupBox>
      </div>
    </div>
  );
}

// ── 외환전산망 Architecture ──

function ForexDiagram() {
  return (
    <div className="space-y-4 sm:space-y-5">
      {/* AP-SERVER */}
      <GroupBox title="AP-SERVER" color="green" delay={0}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 py-2">
          <Node icon={Globe} label="회원사" color="muted" delay={0.1} />
          <Arrow color="green" delay={0.15} />
          <Node icon={Code2} label="API Service" sublabel="Go" color="green" delay={0.2} size="sm" />
          <Arrow color="green" delay={0.25} />
          <Node icon={Server} label="Web Service" sublabel="PHP" color="cyan" delay={0.3} size="sm" />
          <Arrow color="green" delay={0.35} />
          <Node icon={Server} label="BOK Service" sublabel="Java" color="blue" delay={0.4} size="sm" />
          <Arrow color="green" delay={0.45} />
          <Node icon={Shield} label="BOK" sublabel="한국은행" color="purple" delay={0.5} />
        </div>
      </GroupBox>

      {/* DB-SERVER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <GroupBox title="DB-SERVER" color="green" delay={0.55}>
          <div className="flex flex-wrap gap-2 justify-center">
            <Node icon={Lock} label="Cert Server" sublabel="인증서 관리" color="orange" size="sm" delay={0.6} />
            <Node icon={Database} label="MySQL" color="green" size="sm" delay={0.65} />
          </div>
        </GroupBox>

        <GroupBox title="Crl-Fetcher" color="orange" delay={0.55}>
          <div className="flex justify-center">
            <Node icon={Shield} label="인증서 폐기 목록" sublabel="CRL 자동 관리" color="orange" size="sm" delay={0.65} />
          </div>
        </GroupBox>
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 justify-center pt-1">
        <span className="text-[10px] px-2.5 py-1 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20 font-medium">
          VMware 2-Tier
        </span>
        <span className="text-[10px] px-2.5 py-1 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20 font-medium">
          Polyglot: Go + Java + PHP
        </span>
      </div>
    </div>
  );
}

// ── Main Export ──

const diagramMap = {
  vdex: VDeXDiagram,
  oris: ORISDiagram,
  forex: ForexDiagram,
};

export default function ArchitectureDiagram({ projectId }) {
  const Diagram = diagramMap[projectId];
  if (!Diagram) return null;

  return (
    <div className="mt-2 p-4 sm:p-5 rounded-xl bg-dark-900/60 border border-border overflow-x-auto">
      <Diagram />
    </div>
  );
}

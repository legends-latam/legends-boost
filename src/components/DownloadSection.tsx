import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowUpRight, Apple, BadgeInfo, Download, LaptopMinimal, MonitorSmartphone } from 'lucide-react';
import versioning from '@/assets/versioning.json';
import legendsLogo from '@/assets/logo.png';
import { Link } from 'react-router-dom';

const accentMap = {
  green: {
    border: 'border-neon-green/30',
    text: 'text-neon-green',
    glow: 'shadow-[0_0_32px_rgba(0,255,136,0.12)]',
  },
  cyan: {
    border: 'border-neon-cyan/30',
    text: 'text-neon-cyan',
    glow: 'shadow-[0_0_32px_rgba(0,212,255,0.12)]',
  },
  purple: {
    border: 'border-neon-purple/30',
    text: 'text-neon-purple',
    glow: 'shadow-[0_0_32px_rgba(153,69,255,0.12)]',
  },
} as const;

const iconMap = {
  windows: MonitorSmartphone,
  mac: Apple,
  linux: LaptopMinimal,
} as const;

const platformOrder = ['windows', 'mac', 'linux'] as const;

const DownloadSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background py-10 text-foreground md:py-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--neon-red)/0.18),transparent_28%),radial-gradient(circle_at_top_right,hsl(var(--neon-cyan)/0.12),transparent_26%),linear-gradient(180deg,rgba(5,8,16,0.94),rgba(10,14,27,1))]" />
        <div className="absolute inset-0 hex-grid opacity-20" />
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-neon-red/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-neon-cyan/10 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img src={legendsLogo} alt="Legends" className="h-14 w-auto" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neon-cyan/80">Legends Downloads</p>
              <h1 className="font-orbitron text-2xl font-black text-white md:text-3xl">Centro de Descargas</h1>
            </div>
          </div>

          <Button asChild variant="outline" className="w-full border-white/15 bg-white/5 text-white hover:border-neon-green/50 hover:bg-white/10 hover:text-neon-green md:w-auto">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
        </div>

        <div className="mb-8 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_340px]">
          <div className="glass-card border border-white/10 bg-black/45 p-8 md:p-10">
            <p className="font-orbitron text-xl uppercase tracking-[0.26em] text-neon-red">Actualización</p>
            <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-orbitron text-6xl font-black leading-none text-neon-red md:text-8xl">
                  {versioning.version}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                  {versioning.summary}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-text-secondary">
                <div className="mb-2 flex items-center gap-2 text-neon-cyan">
                  <BadgeInfo className="h-4 w-4" />
                  Canal {versioning.channel}
                </div>
                <p>Release {versioning.updatedAt}</p>
                <p className="mt-1 text-white">Instaladores oficiales x64 y Apple Silicon</p>
              </div>
            </div>
          </div>

          <div className="glass-card border border-neon-yellow/20 bg-[linear-gradient(180deg,rgba(255,91,46,0.18),rgba(255,91,46,0.04))] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neon-yellow">Disponibilidad</p>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-sm text-text-secondary">Sistemas soportados</p>
                <p className="mt-1 font-orbitron text-4xl font-black text-white">3</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-sm text-text-secondary">Paquetes listos</p>
                <p className="mt-1 font-orbitron text-4xl font-black text-white">5</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm leading-relaxed text-text-secondary">
                Descarga el build correcto para tu arquitectura. Si usas Mac, revisa si tu equipo es Intel o Apple Silicon antes de instalar.
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/35 shadow-2xl backdrop-blur-md">
          <div className="border-b border-neon-red/40 bg-[linear-gradient(90deg,hsl(var(--neon-red)/0.76),hsl(var(--neon-yellow)/0.22),rgba(10,14,27,0.15))] px-6 py-5 md:px-8">
            <h2 className="font-orbitron text-3xl font-black uppercase tracking-wide text-white md:text-4xl">
              Descargas Generales
            </h2>
          </div>

          <div className="border-b border-white/10 bg-[linear-gradient(90deg,rgba(8,18,32,0.92),rgba(14,22,35,0.72))] px-6 py-4 md:px-8">
            <p className="text-lg font-semibold uppercase tracking-[0.2em] text-white/95">Builds oficiales</p>
          </div>

          <div className="grid gap-6 bg-[linear-gradient(180deg,rgba(6,10,18,0.96),rgba(12,17,28,0.88))] px-6 py-8 md:px-8 xl:grid-cols-3">
            {platformOrder.map((platformKey) => {
              const platform = versioning.platforms[platformKey];
              const accent = accentMap[platform.accent as keyof typeof accentMap];
              const PlatformIcon = iconMap[platformKey];

              return (
                <article
                  key={platformKey}
                  className={`rounded-3xl border bg-white/[0.03] p-6 backdrop-blur-sm ${accent.border} ${accent.glow}`}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 ${accent.text}`}>
                        <PlatformIcon className="h-6 w-6" />
                      </div>
                      <h3 className="font-orbitron text-2xl font-bold text-white">{platform.label}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{platform.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {platform.downloads.map((download) => (
                      <div key={download.name} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <p className="text-lg font-semibold text-white">{download.name}</p>
                            <p className="mt-1 text-sm text-text-secondary">{download.architecture}</p>
                          </div>

                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                            {download.format}
                          </span>
                        </div>

                        <Button asChild className="btn-hero w-full justify-between px-5 py-6 text-sm font-semibold uppercase tracking-[0.16em]">
                          <a href={download.url} target="_blank" rel="noreferrer">
                            Descargar
                            <div className="flex items-center gap-2">
                              <Download className="h-4 w-4" />
                              <ArrowUpRight className="h-4 w-4" />
                            </div>
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
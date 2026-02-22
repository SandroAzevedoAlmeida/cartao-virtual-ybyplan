import { Mail, MessageCircle, Home, Globe, Volume2, VolumeX } from "lucide-react";
import { useBackgroundMusic } from "@/hooks/use-background-music";
import bgMusic from "@/assets/background-music.mp3";

const MUSIC_SRC = bgMusic;

type Corretor = {
  nome: string;
  cargo: string;
  tipoRegistro: string;
  registro: string;
  email: string;
  whatsapp: string;
  foto: string;
};

type Props = {
  dados: Corretor;
  slug: string;
};

const Index = ({ dados, slug }: Props) => {
  const { isPlaying, toggle, ready } = useBackgroundMusic(MUSIC_SRC);

  const contactItems = [
    {
      icon: Mail,
      label: "E-MAIL",
      value: dados.email,
      href: `mailto:${dados.email}`,
    },
    {
      icon: MessageCircle,
      label: "WHATSAPP",
      value: dados.whatsapp,
      href: `https://wa.me/${dados.whatsapp}`,
    },
    {
      icon: Home,
      label: dados.tipoRegistro,
      value: dados.registro,
      href: slug === "paulo" || slug === "sandro" ? null : "https://portalcreci.org.br/#",
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 overflow-hidden">
      {ready && (
        <button
          onClick={toggle}
          className="fixed right-4 top-4 z-50 rounded-full border border-primary/20 bg-card/80 p-2.5 text-muted-foreground backdrop-blur-sm transition-colors hover:text-primary"
          aria-label={isPlaying ? "Pausar música" : "Tocar música"}
        >
          {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </button>
      )}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -inset-6 rounded-3xl bg-primary/8 blur-2xl" />
      </div>

      {/* Embalagem flutuante */}
      <div className="relative animate-float">
        {/* Camadas externas */}
        <div className="absolute -inset-6 rounded-3xl bg-primary/8 blur-2xl" />
        <div className="absolute -inset-3 rounded-3xl bg-primary/5 blur-xl" />
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 via-primary/5 to-primary/20" />

        {/* Raios laranja */}
        <div
          className="absolute -inset-4 animate-[pulse_1.5s_ease-in-out_infinite] rounded-3xl opacity-70"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, hsl(25 100% 55% / 0.35), transparent 15%, transparent, hsl(25 100% 55% / 0.3), transparent 35%, transparent, hsl(25 100% 55% / 0.38), transparent 55%, transparent, hsl(25 100% 55% / 0.32), transparent 75%, transparent, hsl(25 100% 55% / 0.36), transparent 90%)",
            filter: "blur(8px)",
          }}
        />
        <div
          className="absolute -inset-5 animate-[spin_8s_linear_infinite] rounded-3xl opacity-60"
          style={{
            background:
              "conic-gradient(from 45deg, transparent, hsl(30 100% 55% / 0.3), transparent 12%, transparent, hsl(20 100% 50% / 0.35), transparent 30%, transparent, hsl(25 100% 60% / 0.28), transparent 48%, transparent, hsl(25 100% 55% / 0.32), transparent 65%, transparent, hsl(30 100% 50% / 0.3), transparent 82%)",
            filter: "blur(10px)",
          }}
        />
        <div
          className="absolute -inset-6 animate-[spin_6s_linear_infinite_reverse] rounded-3xl opacity-50"
          style={{
            background:
              "conic-gradient(from 90deg, transparent, hsl(25 100% 55% / 0.32), transparent 10%, transparent, hsl(30 100% 50% / 0.28), transparent 28%, transparent, hsl(20 100% 55% / 0.34), transparent 46%, transparent, hsl(25 100% 60% / 0.3), transparent 64%, transparent, hsl(25 100% 55% / 0.32), transparent 82%)",
            filter: "blur(12px)",
          }}
        />

        {/* Borda futurista */}
        <div className="absolute -inset-[3px] rounded-[28px] pointer-events-none z-0">
          <div className="w-full h-full rounded-[28px] lightning-border"></div>
        </div>

        {/* Card principal */}
        <main className="relative z-10 w-full max-w-md animate-fade-in rounded-2xl border border-primary/20 bg-card p-8 shadow-[0_0_60px_-15px_hsl(25_95%_55%/0.3)]">
          <div className="absolute left-0 right-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-primary/60 blur-sm" />
              <img
                src={dados.foto}
                alt={dados.nome}
                className="relative h-32 w-32 rounded-full border-4 border-primary object-cover"
              />
            </div>
          </div>

          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">{dados.nome}</h1>
            <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-primary">{dados.cargo}</p>
            <p className="mt-1 text-xs tracking-wide text-muted-foreground">Ybyplan – Soluções Imobiliárias</p>
          </div>

          <div className="space-y-3">
            {contactItems.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="flex items-center gap-4 rounded-xl border border-border bg-secondary/50 px-4 py-3 transition-all duration-300 hover:border-[hsl(140_80%_45%/0.4)] hover:bg-[hsl(140_100%_50%/0.12)] hover:shadow-[inset_0_0_25px_hsl(140_100%_50%/0.1)]">
                  <Icon className="h-5 w-5 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
                    <p className="truncate text-sm text-foreground">{value}</p>
                  </div>
                </div>
              );

              if (!href) return <div key={label}>{content}</div>;

              return (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              );
            })}

            <a
              href="https://www.ybyplan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-primary/30"
            >
              <Globe className="h-5 w-5" />
              ybyplan.com
            </a>
          </div>
        </main>
      </div>

      {/* CSS do raio */}
      <style>
        {`
        @keyframes lightningMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }

        .lightning-border {
          padding: 2px;
          border-radius: 28px;
          background: linear-gradient(
            90deg,
            transparent,
            hsl(25 100% 55%),
            hsl(30 100% 60%),
            hsl(20 100% 50%),
            transparent
          );
          background-size: 300% 300%;
          animation: lightningMove 2.5s linear infinite;
          filter: blur(1px);
        }
        `}
      </style>
    </div>
  );
};

export default Index;
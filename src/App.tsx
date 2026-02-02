import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Shield,
  LineChart,
  Banknote,
  Globe2,
  Youtube,
  Linkedin,
  FileText,
  Star,
  Building2,
  Award,
  BookOpen,
  ChevronRight,
  Mail,
  MapPin,
  Users,
  Play,
  ChevronLeft,
  Book } from
'lucide-react';
const colors = {
  white: '#FFFFFF',
  primary: '#09186D',
  secondary: '#CDC6B4',
  accent: '#CDA53E'
};
const Container = ({
  children,
  className = ''



}: {children: React.ReactNode;className?: string;}) =>
<div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>;

const Section = ({
  id,
  className = '',
  children




}: {id: string;className?: string;children: React.ReactNode;}) =>
<section id={id} className={`py-16 md:py-24 ${className}`}>
    {children}
  </section>;

const Button = ({
  href,
  children,
  variant = 'primary'




}: {href?: string;children: React.ReactNode;variant?: 'primary' | 'ghost';}) => {
  const base =
  'inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-offset-2';
  const stylePrimary = {
    backgroundColor: colors.primary,
    color: colors.white,
    borderColor: colors.primary
  };
  const styleGhost = {
    backgroundColor: colors.white,
    color: colors.primary,
    border: `1px inset ${colors.secondary}`
  };
  const Comp = href ? 'a' : 'button';
  const props = href ?
  {
    href
  } :
  {};
  return (
    <Comp
      className={base}
      style={variant === 'primary' ? stylePrimary : styleGhost}
      {...props}>

      {children}
    </Comp>);

};
export function App() {
  const whatsappLink =
  'https://api.whatsapp.com/message/F265VLKW34M6F1';
  const calendarLink = 'https://calendly.com/your-calendly/30min';
  const [paused, setPaused] = useState(false);
  // Reels state
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const reelsSectionRef = useRef<HTMLDivElement>(null);
  const isReelsInView = useInView(reelsSectionRef, {
    amount: 0.5
  });
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const reels = [
  {
    id: 1,
    title: 'Dubai Market Update',
    thumbnail: 'https://youtu.be/vBcvppXGz3Y?si=1azCVHcySJOs9dmp'
  },
  {
    id: 2,
    title: 'Golden Visa Tips',
    thumbnail: 'https://www.instagram.com/p/DUBLkIPjMJ9/'
  },
  {
    id: 3,
    title: 'Investment Strategy',
    thumbnail: 'https://www.instagram.com/reel/DTp5KIXCFp8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: 4,
    title: 'Property Tour',
    thumbnail: 'https://www.instagram.com/reel/DTp5KIXCFp8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: 5,
    title: 'Market Analysis',
    thumbnail: 'https://www.instagram.com/reel/DTp5KIXCFp8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  }];

  const books = [
  {
    title: '',
    subtitle: '',
    image: '/public/Group-24080-1.png'
  },
  {
    title: '',
    subtitle: '',
    image: '/public/Strategic-Real-Estate-Investment-In-Dubai-2026.png'
  }];

  // Auto-advance reels when in view
  useEffect(() => {
    if (!isReelsInView) return;
    const interval = setInterval(() => {
      setCurrentReelIndex((prev) => (prev + 1) % reels.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isReelsInView, reels.length]);
  const developers = [
  {
    name: 'Emaar',
    logo: 'https://aklinvestment.com/wp-content/uploads/2025/05/emaar-logo-e1748040993455.png'
  },
  {
    name: 'DAMAC',
    logo: 'https://aklinvestment.com/wp-content/uploads/2025/05/Damac_logo.png'
  },
  {
    name: 'Nakheel',
    logo: 'https://aklinvestment.com/wp-content/uploads/2025/05/nakheel-logo.png'
  },
  {
    name: 'Sobha',
    logo: 'https://aklinvestment.com/wp-content/uploads/2025/05/sobha-realty-logo-e1748040946546.png'
  },
  {
    name: 'Meraas',
    logo: 'https://aklinvestment.com/wp-content/uploads/2025/05/Meraas1.png'
  },
  {
    name: 'Ellington',
    logo: 'https://aklinvestment.com/wp-content/uploads/2025/05/ellington.png'
  }];

  const [areaIndex, setAreaIndex] = useState(0);
  const areas = [
  {
    name: 'Downtown Dubai',
    image: 'https://placehold.co/1200x1200/jpg?text=Downtown+Dubai'
  },
  {
    name: 'Dubai Marina',
    image: 'https://placehold.co/1200x1200/jpg?text=Dubai+Marina'
  },
  {
    name: 'Palm Jumeirah',
    image: 'https://placehold.co/1200x1200/jpg?text=Palm+Jumeirah'
  },
  {
    name: 'Business Bay',
    image: 'https://placehold.co/1200x1200/jpg?text=Business+Bay'
  },
  {
    name: 'JLT',
    image: 'https://placehold.co/1200x1200/jpg?text=JLT'
  }];

  const [areasPaused, setAreasPaused] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [instant, setInstant] = useState(false);
  useEffect(() => {
    const handle = () =>
    setSlidesPerView(
      window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1
    );
    handle();
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);
  useEffect(() => {
    if (areasPaused) return;
    const id = setInterval(() => setAreaIndex((i) => i + 1), 3500);
    return () => clearInterval(id);
  }, [areasPaused]);
  useEffect(() => {
    const total = areas.length;
    if (areaIndex >= total) {
      setInstant(true);
      setAreaIndex(0);
      requestAnimationFrame(() => setInstant(false));
    }
  }, [areaIndex, areas.length]);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohamed Akl',
    jobTitle: 'Real Estate & Investment Advisor',
    url: 'https://aklinvestment.com/',
    logo: 'https://aklinvestment.com/wp-content/uploads/2025/08/Group-24053-1.png',
    sameAs: ['https://www.linkedin.com/in/', 'https://www.youtube.com/@'],
    knowsAbout: [
    'Dubai Real Estate',
    'RERA Compliance',
    'DLD Procedures',
    'Golden Visa',
    'Portfolio Management',
    'Wealth Planning'],

    worksFor: {
      '@type': 'Organization',
      name: 'AKL Investment'
    }
  };
  return (
    <div
      className="min-h-screen text-zinc-900"
      style={{
        background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.secondary} 30%, ${colors.white} 100%)`
      }}>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }} />


      {/* Header */}
      <header
        className="sticky top-0 z-50 backdrop-blur border-b"
        style={{
          backgroundColor: `${colors.white}B3`,
          borderColor: colors.secondary
        }}>

        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://aklinvestment.com/wp-content/uploads/2025/08/Group-24053-1.png"
              alt="AKL Investment logo"
              className="h-8 w-auto" />

            <span className="text-base font-bold tracking-tight">
              Mohamed Akl
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#trust" className="hover:opacity-70">
              Proof
            </a>
            <a href="#services" className="hover:opacity-70">
              Services
            </a>
            <a href="#framework" className="hover:opacity-70">
              Framework
            </a>
            <a href="#reels" className="hover:opacity-70">
              Reels
            </a>
            <a href="#books" className="hover:opacity-70">
              Books
            </a>
            <a href="#contact" className="hover:opacity-70">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button href={calendarLink}>
              <Calendar size={16} /> Book a Call
            </Button>
            <Button href={whatsappLink} variant="ghost">
              <Phone size={16} /> WhatsApp
            </Button>
          </div>
        </Container>
      </header>

      {/* Hero Section */}
      <Section id="hero" className="pb-8 pt-20 md:pt-28 relative min-h-[80vh]">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://aklinvestment.com/wp-content/uploads/2025/09/Group-1000001774.png"
            alt=""
            className="w-full h-full object-cover opacity-35" />

        </div>
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
            'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.65) 40%, rgba(255,255,255,0.25) 100%)'
          }} />

        <Container className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6
              }}
              className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">

              <span
                style={{
                  color: colors.primary,
                  textShadow: '0 1px 2px rgba(0,0,0,0.08)'
                }}>

                Strategic Wealth Building
              </span>
              <span
                className="block"
                style={{
                  color: colors.secondary,
                  textShadow: '0 1px 2px rgba(0,0,0,0.08)'
                }}>

                Through Dubai Real Estate
              </span>
            </motion.h1>
            <p className="mt-5 text-lg text-zinc-700 max-w-xl">
              10+ years in Dubai real estate · 5+ years in financial markets. I
              blend <strong>regulatory mastery (DLD/RERA)</strong> with{' '}
              <strong>portfolio strategy</strong> to help HNWIs, founders, and
              influencers turn property into long-term wealth.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
              {
                icon: <Shield size={16} />,
                text: 'RERA & DLD compliance built-in'
              },
              {
                icon: <LineChart size={16} />,
                text: 'Data-driven ROI & risk controls'
              },
              {
                icon: <Banknote size={16} />,
                text: 'Golden Visa & tax efficiency'
              },
              {
                icon: <Globe2 size={16} />,
                text: '100+ clients across 20+ countries'
              }].
              map((i, idx) =>
              <li key={idx} className="flex items-center gap-2">
                  <span
                  style={{
                    color: colors.primary
                  }}>

                    {i.icon}
                  </span>
                  <span className="text-zinc-700">{i.text}</span>
                </li>
              )}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={calendarLink}>
                <Calendar size={16} /> Schedule Strategy Call
              </Button>
              <Button href="#books" variant="ghost">
                <Book size={16} /> Get Free Book
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-zinc-500">
              <div className="flex items-center gap-1">
                <Star
                  size={14}
                  style={{
                    color: colors.accent
                  }} />
                {' '}
                Trusted by executives & creators
              </div>
              <div className="flex items-center gap-1">
                <Building2
                  size={14}
                  style={{
                    color: colors.primary
                  }} />
                {' '}
                DLD/RERA aligned process
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative w-full overflow-hidden rounded-3xl shadow-xl">
              <div className="aspect-[16/9] w-full bg-black flex items-center justify-center text-white">
                <p className="text-sm">Embed intro video here</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-xs text-zinc-600">
              <div
                className="rounded-xl p-3"
                style={{
                  border: `1px solid ${colors.secondary}`
                }}>

                150+ deals
              </div>
              <div
                className="rounded-xl p-3"
                style={{
                  border: `1px solid ${colors.secondary}`
                }}>

                Avg. 7–12% yields*
              </div>
              <div
                className="rounded-xl p-3"
                style={{
                  border: `1px solid ${colors.secondary}`
                }}>

                20+ markets served
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Section */}
      <Section id="trust" className="bg-white">
        <Container>
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Why clients choose me
            </h2>
            <p className="mt-2 text-zinc-600">
              Regulatory safeguards, portfolio discipline, and a seamless
              end-to-end experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            {
              icon: <Shield size={24} />,
              title: 'Regulatory mastery',
              text: '10+ years with DLD processes: registrations, terminations, dispute resolution.'
            },
            {
              icon: <LineChart size={24} />,
              title: 'Dual expertise',
              text: 'Financial analysis + real‑estate execution: off‑plan, resale, yield optimization.'
            },
            {
              icon: <Award size={24} />,
              title: 'Proven results',
              text: '100+ clients guided through acquisitions, resales, and Golden Visa pathways.'
            },
            {
              icon: <Users size={24} />,
              title: 'Global network',
              text: 'Trusted by HNWIs, founders, and public figures across 20+ countries worldwide.'
            }].
            map((card, i) =>
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{
                backgroundColor: `${colors.secondary}33`,
                border: `1px solid ${colors.secondary}`
              }}>

                <div
                className="mb-3"
                style={{
                  color: colors.primary
                }}>

                  {card.icon}
                </div>
                <h3 className="font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{card.text}</p>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section
        id="services"
        className="bg-gradient-to-br from-white to-zinc-50">

        <Container>
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Advisory & Services
            </h2>
            <p className="mt-2 text-zinc-600">
              A turnkey stack to plan, acquire, and grow Dubai portfolios.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
            {
              title: 'Wealth Roadmap Session',
              desc: '90‑minute strategy call to map goals, risk, and a Dubai property plan.',
              bullets: [
              'Portfolio fit & capital plan',
              'Target yields & areas',
              'Residency considerations']

            },
            {
              title: 'Brokerage & Deal Execution',
              desc: 'Sourcing, due diligence, negotiation, DLD/RERA paperwork.',
              bullets: [
              'Off‑plan & resale',
              'ROI scenarios',
              'Developer screening']

            },
            {
              title: 'Golden Visa Blueprint',
              desc: 'Property‑based residency planning for families & founders.',
              bullets: [
              'Eligibility & thresholds',
              'Timeline & documents',
              'Partner legal support']

            },
            {
              title: 'Portfolio Management',
              desc: 'Yield optimization, refinancing, exit timing, quarterly reviews.',
              bullets: [
              'Cash‑flow tracking',
              'Rent vs. sell triggers',
              'Risk controls']

            },
            {
              title: 'Compliance & Safeguards',
              desc: 'RERA aligned contracts, termination procedures, dispute readiness.',
              bullets: [
              'Process checklists',
              'Cost transparency',
              'Escrow oversight']

            },
            {
              title: 'Concierge & PM',
              desc: 'Letting, furnishing, management, audit‑ready records.',
              bullets: ['Turnkey management', 'Vendor network', 'Reporting']
            }].
            map((svc, i) =>
            <div
              key={i}
              className="rounded-2xl p-6 shadow-sm"
              style={{
                backgroundColor: colors.white,
                border: `1px solid ${colors.secondary}`
              }}>

                <h3
                className="font-semibold text-lg"
                style={{
                  color: colors.primary
                }}>

                  {svc.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">{svc.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  {svc.bullets.map((b, j) =>
                <li key={j} className="flex items-center gap-2">
                      <CheckCircle
                    size={16}
                    style={{
                      color: colors.primary
                    }} />
                  {' '}
                      {b}
                    </li>
                )}
                </ul>
                <div className="mt-5">
                  <Button href={calendarLink}>
                    Learn more <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Framework Section */}
      <Section id="framework" className="bg-white">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div
                className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-4"
                style={{
                  backgroundColor: `${colors.primary}10`,
                  color: colors.primary
                }}>

                Investment Framework
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                The AKL Framework
              </h2>
              <p className="mt-2 text-zinc-600">
                When to buy, when to exit, and how to reinvest—codified into a
                repeatable system.
              </p>
            </div>
            <Button href={calendarLink} variant="ghost">
              See it applied <ChevronRight size={16} />
            </Button>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
            {
              k: 'A',
              title: 'Assess',
              text: 'Macro, FX peg, cycle stage, neighborhood drivers, developer risk.'
            },
            {
              k: 'K',
              title: 'Knit',
              text: 'Integrate property with your broader portfolio (equities, cash, ventures).'
            },
            {
              k: 'L',
              title: 'Leverage',
              text: 'Use safe financing, rentability, and tax‑efficient structures to amplify returns.'
            },
            {
              k: '∞',
              title: 'Compound',
              text: 'Review quarterly; rebalance, refinance, or exit to compound long‑term wealth.'
            }].
            map((s, i) =>
            <div
              key={i}
              className="rounded-2xl p-6 bg-white"
              style={{
                border: `1px solid ${colors.secondary}`
              }}>

                <div
                className="mb-3 text-4xl font-black"
                style={{
                  color: colors.primary
                }}>

                  {s.k}
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{s.text}</p>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Developers Section */}
      <Section id="developers" className="bg-white">
        <Container>
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Top Developers We've Worked With
            </h2>
            <p className="mt-2 text-zinc-600">
              Trusted partners in Dubai — hover to pause the carousel.
            </p>
          </div>
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              border: `1px solid ${colors.secondary}`,
              backgroundColor: `${colors.secondary}1A`
            }}>

            <div
              className="flex items-center gap-6 py-6"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              style={{
                width: 'max-content',
                animation: 'akl-scroll 28s linear infinite',
                animationPlayState: paused ? 'paused' : 'running'
              }}>

              {[...developers, ...developers].map((dev, idx) =>
              <div key={idx} className="flex items-center gap-3">
                  <div
                  className="h-16 w-16 rounded-full bg-white border shadow-sm flex items-center justify-center"
                  style={{
                    borderColor: colors.secondary
                  }}
                  title={dev.name}>

                    <img
                    src={dev.logo}
                    alt={dev.name}
                    className="h-12 w-12 object-contain rounded-full" />

                  </div>
                  <span className="text-sm text-zinc-700 hidden sm:inline">
                    {dev.name}
                  </span>
                </div>
              )}
            </div>
            <style>{`
              @keyframes akl-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
          </div>
        </Container>
      </Section>

      {/* NEW: Books Section with Form */}
      <Section id="books" className="bg-gradient-to-br from-zinc-50 to-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Books */}
            <div>
              <div
                className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-4"
                style={{
                  backgroundColor: `${colors.primary}10`,
                  color: colors.primary
                }}>

                Free Resources
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Mohamed Akl's Books
              </h2>
              <p className="mt-2 text-zinc-600 mb-8">
                Get exclusive insights from years of experience in Dubai real
                estate and wealth building.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {books.map((book, i) =>
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    delay: i * 0.1
                  }}
                  className="group">

                    <div
                    className="relative overflow-hidden rounded-2xl shadow-lg"
                    style={{
                      border: `2px solid ${colors.secondary}`
                    }}>

                      <img
                      src={book.image}
                      alt={book.title}
                      className="w-full aspect-[3/4] object-cover" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
                        <h3 className="text-white font-bold text-lg">
                          {book.title}
                        </h3>
                        <p className="text-white/80 text-sm">{book.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right side - Form */}
            <div
              className="rounded-3xl overflow-hidden shadow-xl"
              style={{
                border: `1px solid ${colors.secondary}`
              }}>

              <div
                className="p-8"
                style={{
                  backgroundColor: colors.primary
                }}>

                <h3 className="text-2xl font-bold text-white">
                  Get One of Mohamed Akl's Books for Free
                </h3>
                <p className="mt-2 text-white/80">
                  A concise playbook covering areas, yields, legal steps, and
                  the AKL Framework. Sent instantly to your inbox.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle
                      size={16}
                      style={{
                        color: colors.accent
                      }} />
                    {' '}
                    Area cheat‑sheets & ROI models
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle
                      size={16}
                      style={{
                        color: colors.accent
                      }} />
                    {' '}
                    DLD/RERA checklist & timeline
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle
                      size={16}
                      style={{
                        color: colors.accent
                      }} />
                    {' '}
                    Golden Visa thresholds explained
                  </li>
                </ul>
              </div>
              <form className="p-8 bg-white">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700">
                      Full name
                    </label>
                    <input
                      className="mt-1 w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      style={{
                        borderColor: colors.secondary
                      }}
                      placeholder="Your name" />

                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      style={{
                        borderColor: colors.secondary
                      }}
                      placeholder="you@email.com" />

                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700">
                      Investor type
                    </label>
                    <select
                      className="mt-1 w-full rounded-xl border p-3 focus:outline-none"
                      style={{
                        borderColor: colors.secondary
                      }}>

                      <option value="">Select...</option>
                      <option>HNWI / Executive</option>
                      <option>Entrepreneur / Founder</option>
                      <option>Influencer / Creator</option>
                      <option>Athlete / Public Figure</option>
                      <option>Global Investor</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-2xl font-semibold py-3 transition hover:translate-y-[-1px]"
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.white
                    }}>

                    Send me the guide
                  </button>
                </div>
                <p className="mt-3 text-xs text-zinc-500 text-center">
                  By submitting, you agree to receive occasional emails.
                  Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </Section>

      {/* NEW: Reels Section - Auto-play on scroll */}
        <Section id="reels" className="bg-white overflow-hidden">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div
                className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-4"
                style={{
                  backgroundColor: `${colors.primary}10`,
                  color: colors.primary
                }}>

                Latest Content
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Watch My Reels
              </h2>
              <p className="mt-2 text-zinc-600">
                Quick insights on Dubai real estate — auto-plays when you scroll
                here.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Previous reel"
                onClick={() =>
                setCurrentReelIndex(
                  (i) => (i - 1 + reels.length) % reels.length
                )
                }
                className="rounded-full p-3 transition hover:translate-y-[-1px]"
                style={{
                  backgroundColor: colors.white,
                  color: colors.primary,
                  border: `1px solid ${colors.secondary}`
                }}>

                <ChevronLeft size={20} />
              </button>
              <button
                aria-label="Next reel"
                onClick={() =>
                setCurrentReelIndex((i) => (i + 1) % reels.length)
                }
                className="rounded-full p-3 transition hover:translate-y-[-1px]"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.white
                }}>

                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div ref={reelsSectionRef} className="relative">
            <div className="flex gap-4 overflow-hidden">
              {reels.map((reel, idx) => {
                const isActive = idx === currentReelIndex;
                const isPrev =
                idx === (currentReelIndex - 1 + reels.length) % reels.length;
                const isNext = idx === (currentReelIndex + 1) % reels.length;
                const isVisible = isActive || isPrev || isNext;
                return (
                  <motion.div
                    key={reel.id}
                    className="flex-shrink-0"
                    animate={{
                      x: `${(idx - currentReelIndex) * 100}%`,
                      scale: isActive ? 1 : 0.85,
                      opacity: isVisible ? 1 : 0
                    }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut'
                    }}
                    style={{
                      width: 'calc(33.333% - 1rem)',
                      minWidth: '280px'
                    }}>

                    <div
                      className="relative rounded-2xl overflow-hidden shadow-lg"
                      style={{
                        border: isActive ?
                        `3px solid ${colors.accent}` :
                        `1px solid ${colors.secondary}`
                      }}>

                      <div className="aspect-[9/16] relative bg-zinc-900">
                        <img
                          src={reel.thumbnail}
                          alt={reel.title}
                          className="absolute inset-0 w-full h-full object-cover" />

                        {isActive && isReelsInView &&
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{
                            opacity: 0
                          }}
                          animate={{
                            opacity: 1
                          }}>

                            <div
                            className="w-16 h-16 rounded-full flex items-center justify-center"
                            style={{
                              backgroundColor: `${colors.primary}CC`
                            }}>

                              <Play
                              size={28}
                              className="text-white ml-1"
                              fill="white" />

                            </div>
                          </motion.div>
                        }
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-white font-semibold text-sm">
                            {reel.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>);

              })}
            </div>

            {/* Dots indicator */}
            <div className="mt-6 flex justify-center gap-2">
              {reels.map((_, i) =>
              <button
                key={i}
                onClick={() => setCurrentReelIndex(i)}
                aria-label={`Go to reel ${i + 1}`}
                className="h-2.5 w-2.5 rounded-full transition-all"
                style={{
                  backgroundColor:
                  i === currentReelIndex ? colors.accent : colors.secondary,
                  transform:
                  i === currentReelIndex ? 'scale(1.2)' : 'scale(1)'
                }} />

              )}
            </div>
          </div>
        </Container>
      </Section>
      {/* Case Studies Section */}
      <Section id="cases" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Featured Case Study
          </h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div
              className="rounded-3xl p-6"
              style={{
                border: `1px solid ${colors.secondary}`
              }}>

              <h3
                className="text-lg font-semibold"
                style={{
                  color: colors.primary
                }}>

                US Founder → Golden Visa + 9.2% Yield
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                A California tech founder sought diversification and residency.
                We structured a two‑asset plan (prime off‑plan + turnkey rental)
                with RERA‑aligned contracts and a refinance path.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    style={{
                      color: colors.primary
                    }} />
                  {' '}
                  30‑day from inquiry to SPA
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    style={{
                      color: colors.primary
                    }} />
                  {' '}
                  Golden Visa eligibility achieved
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    style={{
                      color: colors.primary
                    }} />
                  {' '}
                  Stabilized net yield: 9.2% (year 1)
                </li>
              </ul>
            </div>
            <div
              className="rounded-3xl p-6"
              style={{
                border: `1px solid ${colors.secondary}`
              }}>

              <h3
                className="text-lg font-semibold"
                style={{
                  color: colors.primary
                }}>

                Premier League Athlete → Privacy & Preservation
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Time‑poor athlete required discreet acquisition and concierge
                PM. Delivered gated community villa, privacy‑first vendor
                network, and quarterly reporting.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    style={{
                      color: colors.primary
                    }} />
                  {' '}
                  End‑to‑end remote closing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    style={{
                      color: colors.primary
                    }} />
                  {' '}
                  Yield target met within 90 days
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    style={{
                      color: colors.primary
                    }} />
                  {' '}
                  Dispute‑ready contracts (no disputes triggered)
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Areas Section */}
      <Section id="areas" className="bg-white">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Best Areas in Dubai
              </h2>
              <p className="mt-2 text-zinc-600">
                Curated neighborhoods for yield, lifestyle, and long‑term value.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Previous area"
                onClick={() =>
                setAreaIndex((i) => (i - 1 + areas.length) % areas.length)
                }
                className="rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm hover:translate-y-[-1px]"
                style={{
                  backgroundColor: colors.white,
                  color: colors.primary,
                  border: `1px solid ${colors.secondary}`
                }}>

                Prev
              </button>
              <button
                aria-label="Next area"
                onClick={() => setAreaIndex((i) => (i + 1) % areas.length)}
                className="rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm hover:translate-y-[-1px]"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.white,
                  border: `1px solid ${colors.primary}`
                }}>

                Next
              </button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-3xl">
            <div
              className="overflow-hidden rounded-[28px] shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.secondary}40 100%)`,
                border: `1px solid ${colors.accent}`,
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
              }}
              onMouseEnter={() => setAreasPaused(true)}
              onMouseLeave={() => setAreasPaused(false)}>

              <div
                className="flex"
                style={{
                  transform: `translateX(-${100 / slidesPerView * areaIndex}%)`,
                  transition: instant ? 'none' : 'transform 500ms ease'
                }}>

                {[...areas, ...areas].map((a, idx) =>
                <div
                  key={idx}
                  className="shrink-0 basis-full sm:basis-1/2 lg:basis-1/3">

                    <div className="aspect-square w-full relative">
                      <img
                      src={a.image}
                      alt={a.name}
                      className="absolute inset-0 h-full w-full object-cover" />

                      <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 0 2px ${colors.white}AA, inset 0 0 0 4px ${colors.accent}80`
                      }} />

                    </div>
                    <div
                    className="p-5 text-center"
                    style={{
                      backgroundColor: colors.white
                    }}>

                      <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                        Area
                      </div>
                      <div
                      className="mt-1 text-xl md:text-2xl font-semibold"
                      style={{
                        color: colors.primary
                      }}>

                        {a.name}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {areas.map((_, i) =>
              <button
                key={i}
                onClick={() => setAreaIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  backgroundColor:
                  i === areaIndex ? colors.accent : colors.secondary
                }} />

              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section
        id="testimonials"
        className="bg-gradient-to-b from-zinc-50 to-white">

        <Container>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            What clients say
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
            {
              name: 'A. Carter (NYC)',
              quote: 'Clear strategy, compliant process, excellent results.',
              role: 'Founder & Investor'
            },
            {
              name: 'L. Carter (LA)',
              quote: 'Understood my brand needs and delivered strong ROI.',
              role: 'Influencer'
            },
            {
              name: 'A. Silva (London)',
              quote: 'Discreet, efficient, and yield‑focused from day one.',
              role: 'Athlete'
            }].
            map((t, i) =>
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{
                backgroundColor: colors.white,
                border: `1px solid ${colors.secondary}`
              }}>

                <div
                className="flex items-center gap-2"
                style={{
                  color: colors.accent
                }}>

                  {Array.from({
                  length: 5
                }).map((_, j) =>
                <Star key={j} size={16} />
                )}
                </div>
                <p className="mt-3 text-sm text-zinc-700">"{t.quote}"</p>
                <div className="mt-4 text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-zinc-500">{t.role}</div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Let's build your Dubai wealth plan
              </h2>
              <p className="mt-2 text-zinc-600">
                Book a call or drop a message. We'll map your goals and create a
                compliant, data‑driven path.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={calendarLink}>
                  <Calendar size={16} /> Book a Call
                </Button>
                <Button href={whatsappLink} variant="ghost">
                  <Phone size={16} /> WhatsApp
                </Button>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div
                  className="rounded-xl p-4 flex items-center gap-2"
                  style={{
                    border: `1px solid ${colors.secondary}`
                  }}>

                  <Mail size={16} /> hello@aklinvestment.com
                </div>
                <div
                  className="rounded-xl p-4 flex items-center gap-2"
                  style={{
                    border: `1px solid ${colors.secondary}`
                  }}>

                  <Phone size={16} /> +971 50 165 5933
                </div>
                <div
                  className="rounded-xl p-4 flex items-center gap-2"
                  style={{
                    border: `1px solid ${colors.secondary}`
                  }}>

                  <MapPin size={16} /> Dubai, UAE
                </div>
              </div>
            </div>
            <form
              className="rounded-2xl p-6"
              style={{
                backgroundColor: `${colors.secondary}33`,
                border: `1px solid ${colors.secondary}`
              }}>

              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium">Full name</label>
                  <input
                    className="mt-1 w-full rounded-xl border p-3 focus:outline-none"
                    style={{
                      borderColor: colors.secondary
                    }}
                    placeholder="Your name" />

                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-xl border p-3 focus:outline-none"
                    style={{
                      borderColor: colors.secondary
                    }}
                    placeholder="you@email.com" />

                </div>
                <div>
                  <label className="block text-sm font-medium">Message</label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-xl border p-3 focus:outline-none"
                    style={{
                      borderColor: colors.secondary
                    }}
                    placeholder="Tell me about your goals" />

                </div>
                <button
                  type="button"
                  className="rounded-2xl px-5 py-3 font-semibold"
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.white
                  }}>

                  Send message
                </button>
              </div>
              <p className="mt-2 text-xs text-zinc-500">
                We reply within 24 hours on business days.
              </p>
            </form>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer
        className="py-10 text-sm"
        style={{
          borderTop: `1px solid ${colors.secondary}`,
          color: '#666'
        }}>

        <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} AKL Investment. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-70">
              Privacy
            </a>
            <a href="#" className="hover:opacity-70">
              Terms
            </a>
          </div>
        </Container>
      </footer>
    </div>);

}
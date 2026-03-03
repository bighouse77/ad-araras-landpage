/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Clock, 
  Calendar, 
  Heart, 
  Users, 
  Music, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Youtube,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-church-bg/80 backdrop-blur-md border-b border-church-olive/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-church-olive rounded-full flex items-center justify-center text-white font-serif text-xl">
            <img src="./src/assets/img/logo.jpeg" alt="Igreja Assembleia de Deus Ministério Araras" className="w-full h-full object-cover rounded-full" />
          </div>
          <span className="font-serif text-2xl font-semibold tracking-tight">Assembleia de Deus Ministério Araras</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-sm font-medium hover:text-church-olive transition-colors">Início</a>
          <a href="#sobre" className="text-sm font-medium hover:text-church-olive transition-colors">Sobre Nós</a>
          <a href="#cultos" className="text-sm font-medium hover:text-church-olive transition-colors">Cultos</a>
          <a href="#ministerios" className="text-sm font-medium hover:text-church-olive transition-colors">Ministérios</a>
          <a href="#contato" className="olive-button text-sm">Visite-nos</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-church-bg border-b border-church-olive/10 px-6 py-8 flex flex-col gap-6"
        >
          <a href="#inicio" onClick={() => setIsOpen(false)} className="text-lg font-medium">Início</a>
          <a href="#sobre" onClick={() => setIsOpen(false)} className="text-lg font-medium">Sobre Nós</a>
          <a href="#cultos" onClick={() => setIsOpen(false)} className="text-lg font-medium">Cultos</a>
          <a href="#ministerios" onClick={() => setIsOpen(false)} className="text-lg font-medium">Ministérios</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="olive-button text-center">Visite-nos</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="inicio" className="pt-32 pb-20 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-church-olive font-medium tracking-widest uppercase text-xs mb-4 block">Bem-vindo à nossa comunidade</span>
        <h1 className="section-title mb-6">Um lugar para pertencer, crescer e amar.</h1>
        <p className="text-lg text-church-ink/70 mb-8 max-w-lg">
          Somos uma família dedicada a seguir os ensinamentos de Jesus, servindo nossa cidade com amor e compaixão. Junte-se a nós nesta jornada de fé.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="olive-button flex items-center gap-2">
            Ver Horários <ChevronRight size={18} />
          </button>
          <button className="px-8 py-3 rounded-full border border-church-olive/20 hover:bg-church-olive/5 transition-all text-sm font-medium">
            Nossa História
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="grid grid-cols-2 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=600" 
            alt="Igreja interior" 
            className="pill-image w-full h-[400px] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col gap-4 mt-12">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600" 
              alt="Comunidade" 
              className="pill-image w-full h-[280px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="bg-church-olive/10 p-8 rounded-[32px] flex flex-col justify-center items-center text-center">
              <Heart className="text-church-olive mb-2" />
              <span className="font-serif text-2xl">+500</span>
              <span className="text-xs uppercase tracking-wider opacity-60">Vidas Transformadas</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const AboutUs = () => (
  <section id="sobre" className="py-20 px-6 bg-gradient-to-b from-church-bg to-white/30">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title mb-6">Sobre Nós</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-serif text-2xl mb-3 text-church-olive">Nossa História</h3>
            <p className="text-church-ink/70 leading-relaxed">
              A Igreja Viva foi fundada com uma visão clara: ser um lugar onde todos possam encontrar paz, propósito e comunidade. Há mais de 20 anos, servimos nossa cidade com dedicação e amor ao próximo.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-3 text-church-olive">Nossa Missão</h3>
            <p className="text-church-ink/70 leading-relaxed">
              Pregar o Evangelho de Jesus Cristo, fazer discípulos e transformar vidas através do poder do Espírito Santo, servindo com compaixão e integridade.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-3 text-church-olive">Nossa Visão</h3>
            <p className="text-church-ink/70 leading-relaxed">
              Ser uma igreja que impacta profundamente nossa cidade e o mundo, refletindo o amor de Jesus Cristo em cada ação, palavra e relacionamento.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="grid gap-4"
      >
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400" 
          alt="Comunidade Igreja Viva" 
          className="pill-image w-full h-[350px] object-cover rounded-[32px]"
          referrerPolicy="no-referrer"
        />
        <div className="grid grid-cols-3 gap-4">
          <div className="card p-6 text-center">
            <p className="font-serif text-3xl text-church-olive font-bold mb-2">20+</p>
            <p className="text-xs uppercase tracking-wider opacity-60">Anos de Ministério</p>
          </div>
          <div className="card p-6 text-center">
            <p className="font-serif text-3xl text-church-olive font-bold mb-2">500+</p>
            <p className="text-xs uppercase tracking-wider opacity-60">Membros Ativos</p>
          </div>
          <div className="card p-6 text-center">
            <p className="font-serif text-3xl text-church-olive font-bold mb-2">10+</p>
            <p className="text-xs uppercase tracking-wider opacity-60">Ministérios</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ServiceTimes = () => (
  <section id="cultos" className="py-20 bg-white/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="section-title mb-4">Nossos Cultos</h2>
        <p className="text-church-ink/60 max-w-xl mx-auto italic font-serif text-xl">
          "Onde dois ou três estiverem reunidos em meu nome, ali eu estarei no meio deles."
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { day: 'Domingo', time: '09:00 & 18:00', title: 'Celebração da Família', icon: <Users className="text-church-olive" /> },
          { day: 'Quarta-feira', time: '19:30', title: 'Noite de Oração', icon: <Heart className="text-church-olive" /> },
          { day: 'Sábado', time: '19:00', title: 'Culto de Jovens', icon: <Music className="text-church-olive" /> },
        ].map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card p-8 text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 bg-church-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              {service.icon}
            </div>
            <h3 className="font-serif text-2xl mb-2">{service.title}</h3>
            <p className="text-church-olive font-medium mb-1">{service.day}</p>
            <p className="text-sm opacity-60 flex items-center justify-center gap-2">
              <Clock size={14} /> {service.time}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Ministries = () => (
  <section id="ministerios" className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="section-title mb-4">Nossos Ministérios</h2>
          <p className="text-church-ink/70">
            Existem muitas formas de servir e se conectar. Encontre o lugar onde seus talentos podem brilhar.
          </p>
        </div>
        <button className="text-church-olive font-medium flex items-center gap-2 border-b border-church-olive/30 pb-1">
          Ver todos os ministérios <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {[
          { title: 'Crianças', img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400' },
          { title: 'Música', img: 'https://images.unsplash.com/photo-1514525253361-bee8718a340b?auto=format&fit=crop&q=80&w=400' },
          { title: 'Social', img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=400' },
          { title: 'Ensino', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400' },
        ].map((m, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="relative h-80 rounded-[32px] overflow-hidden group cursor-pointer"
          >
            <img 
              src={m.img} 
              alt={m.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-church-ink/80 to-transparent flex items-end p-8">
              <h3 className="text-white font-serif text-2xl">{m.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contato" className="py-20 px-6 bg-church-olive text-white rounded-t-[64px]">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
      <div>
        <h2 className="section-title text-white mb-8">Visite-nos</h2>
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <MapPin />
            </div>
            <div>
              <h4 className="font-medium text-lg mb-1">Endereço</h4>
              <p className="opacity-70">Av. da Esperança, 123 - Centro<br />São Paulo, SP</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Calendar />
            </div>
            <div>
              <h4 className="font-medium text-lg mb-1">Próximos Eventos</h4>
              <p className="opacity-70">Conferência de Mulheres - 15 de Março<br />Batismo nas Águas - 28 de Março</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-church-olive transition-all"><Instagram size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-church-olive transition-all"><Facebook size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-church-olive transition-all"><Youtube size={20} /></a>
        </div>
      </div>

      <div className="bg-white rounded-[32px] p-8 md:p-12 text-church-ink">
        <h3 className="font-serif text-3xl mb-6">Mande uma mensagem</h3>
        <form className="space-y-4">
          <div>
            <label className="text-xs uppercase tracking-widest font-semibold opacity-50 block mb-2">Nome</label>
            <input type="text" className="w-full p-4 bg-church-bg rounded-2xl border-none focus:ring-2 focus:ring-church-olive/20" placeholder="Seu nome completo" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest font-semibold opacity-50 block mb-2">E-mail</label>
            <input type="email" className="w-full p-4 bg-church-bg rounded-2xl border-none focus:ring-2 focus:ring-church-olive/20" placeholder="seu@email.com" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest font-semibold opacity-50 block mb-2">Mensagem</label>
            <textarea className="w-full p-4 bg-church-bg rounded-2xl border-none focus:ring-2 focus:ring-church-olive/20 h-32" placeholder="Como podemos orar por você?"></textarea>
          </div>
          <button className="olive-button w-full py-4 text-lg font-medium">Enviar Mensagem</button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-church-olive py-12 px-6 border-t border-white/10 text-white/50 text-center">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-6 text-white">
        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center font-serif text-sm">
            <img src="./src/assets/img/logo.jpeg" alt="Igreja Assembleia de Deus Ministério Araras" className="w-full h-full object-cover rounded-full" />
        </div>
        <span className="font-serif text-xl font-semibold">Assembleia de Deus Ministério Araras</span>
      </div>
      <p className="text-sm mb-4">© {new Date().getFullYear()} Assembleia de Deus Ministério Araras. Todos os direitos reservados.</p>
      <p className="text-xs italic">"Ide or todo o mundo e pregai o evangelho a toda criatura." - Marcos 16:15</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-church-olive selection:text-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <ServiceTimes />
      <Ministries />
      <Contact />
      <Footer />
    </div>
  );
}

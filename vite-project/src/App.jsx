import img1 from "./assets/rasm1.png"
import img2 from "./assets/image2.png"
import img3 from "./assets/image3.png"

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Briefcase,
  Send,
  ChevronRight, 
  Menu,
  X,
  Terminal,
  Layers,
  Star,
  Play,
  Instagram
} from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Asosiy', href: '#home' },
    { name: 'Haqimda', href: '#about' },
    { name: 'Ko\'nikmalar', href: '#skills' },
    { name: 'Loyihalar', href: '#projects' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
      <a href="#home" className="text-2xl font-black tracking-tighter flex items-center gap-3 group">
  {/* MINIMAL N */}
  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-500/25 group-hover:shadow-indigo-500/50 group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
    {/* N harfi - Qalin */}
   <span className="text-white text-3xl font-black italic
               transform -skew-x-12 rotate-6
               group-hover:skew-x-6 group-hover:rotate-12">
  N
</span>
    
    {/* Yorug'lik effekti */}
    <div className="absolute top-0 -left-10 w-20 h-full bg-white/20 transform rotate-45 group-hover:translate-x-20 transition-transform duration-700"></div>
  </div>
  
  <span className="hidden sm:inline text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-300 uppercase tracking-tighter font-black text-2xl">
    NABINUR
  </span>
</a>

        <nav className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-[11px] font-bold text-slate-400 hover:text-white transition-colors tracking-[0.2em] uppercase">
              {item.name}
            </a>
          ))}
          <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3.5 rounded-2xl text-[10px] font-black tracking-[0.2em] transition-all shadow-xl shadow-indigo-500/20 active:scale-95 text-white uppercase">
            BOG'LANISH
          </a>
        </nav>

        <button className="md:hidden p-2 glass rounded-xl text-white" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      <div className={`fixed inset-0 z-[60] bg-slate-950 transition-all duration-500 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex justify-between items-center border-b border-white/5">
          <span className="text-2xl font-black tracking-tighter">NABINUR</span>
          <button onClick={() => setMobileMenuOpen(false)} className="p-3 glass rounded-full hover:bg-white/10 transition-colors">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col p-12 gap-6">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-5xl font-black text-slate-200 hover:text-indigo-500 transition-colors uppercase tracking-tighter" onClick={() => setMobileMenuOpen(false)}>
              {item.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-indigo-600 text-center py-6 rounded-3xl text-xl font-black tracking-[0.2em] transition-all shadow-xl shadow-indigo-500/20 text-white mt-8 uppercase">
            BOG'LANISH
          </a>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen pt-48 pb-20 px-6 relative flex flex-col items-center justify-center text-center overflow-hidden">
    <div className="hero-glow top-20 left-1/2 -translate-x-1/2 opacity-60"></div>
    <div className="relative z-10 max-w-6xl mx-auto">
      <div className="inline-flex items-center gap-2 px-6 py-2.5 mb-10 glass rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 border border-indigo-500/20 shadow-2xl">
        <Star size={14} className="fill-current animate-pulse text-indigo-500" /> 
        Frontend Muhandisi & UI Dizayner
      </div>
      <h1 className="text-7xl md:text-[140px] font-black mb-10 tracking-tighter leading-[0.85] text-white uppercase">
        ZAMONAVIY <br />
        <span className="text-gradient">RAQAMLI</span> <br />
        DUNYOLAR
      </h1>
      <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
        Men Nabinurman. Murakkab g'oyalarni sodda, chiroyli va yuqori unumdorlikka ega interfeyslarga aylantiraman.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a href="#projects" className="group bg-white text-black hover:bg-indigo-50 px-12 py-6 rounded-[32px] font-black transition-all shadow-2xl flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95 text-xs tracking-widest uppercase">
          LOYIHALAR <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="#about" className="glass hover:bg-white/10 px-12 py-6 rounded-[32px] font-black transition-all flex items-center justify-center gap-3 text-white text-xs tracking-widest uppercase border-white/10">
          HAQIMDA
        </a>
      </div>
    </div>
<div className="mt-28 flex gap-12 text-slate-500 animate-float">
  <a href="https://github.com/nabinursharopv" target="_blank" rel="noopener noreferrer"><Github size={26} className="hover:text-white transition-colors" /></a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={26} className="hover:text-white transition-colors" /></a>
  {/* GMAILGA TO'G'RIDAN-TO'G'RI */}
  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nabinush123@gmail.com" target="_blank" rel="noopener noreferrer">
    <Mail size={26} className="hover:text-white transition-colors" />
  </a>
</div>
  </section>
);

const About = () => (
  <section id="about" className="py-40 px-6">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-24 items-center text-left">
        <div className="relative group">
          <div className="absolute -inset-10 bg-indigo-500/10 rounded-full blur-[100px] group-hover:bg-indigo-500/20 transition-all duration-1000"></div>
          <div className="glass aspect-square rounded-[60px] flex items-center justify-center relative overflow-hidden border-white/5 shadow-2xl">
            <Terminal size={160} className="text-indigo-500/20 group-hover:scale-110 transition-all duration-1000" />
            <div className="absolute bottom-16 left-16">
              <h3 className="text-6xl font-black text-white tracking-tighter uppercase">NABINUR</h3>
              <p className="text-indigo-400 font-black uppercase tracking-[0.5em] mt-3 text-xs">Frontend Dev</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter text-white uppercase leading-none">Mening <br /> <span className="text-indigo-500">Prinsipim</span></h2>
          <div className="space-y-8 text-xl text-slate-400 font-medium leading-relaxed">
            <p>Men nafaqat kod yozaman, balki foydalanuvchi bilan muloqot qiladigan mahsulotlar yarataman.</p>
            <p>Frontend olami doimo o'zgarib turadi, shuning uchun men har kuni yangi texnologiyalarni o'rganaman.</p>
          </div>
          <div className="flex gap-8 mt-16">
            <div className="flex-1 glass p-10 rounded-[40px] border-indigo-500/10 text-center">
              <p className="text-white font-black text-5xl mb-2">1+</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Tajriba</p>
            </div>
            <div className="flex-1 glass p-10 rounded-[40px] border-cyan-500/10 text-center">
              <p className="text-white font-black text-5xl mb-2">44+</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">Loyihalar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const groups = [
    { title: 'Core', list: ['HTML5', 'CSS3', 'Sass', 'BEM', 'Responsive'], icon: <Layers size={22} /> },
    { title: 'JavaScript', list: ['TypeScript', 'React', 'Next.js', 'Redux', 'Zustand'], icon: <Code2 size={22} /> },
    { title: 'Design', list: ['Figma', 'Tailwind', 'Motion', 'UI/UX'], icon: <Briefcase size={22} /> },
  ];
  return (
    <section id="skills" className="py-40 px-6 bg-slate-900/10">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase text-center mb-24">Texnik <span className="text-indigo-500">Bilimlar</span></h2>
        <div className="grid md:grid-cols-3 gap-10">
          {groups.map((group, idx) => (
            <div key={idx} className="glass p-12 rounded-[50px] border-white/5 hover:border-indigo-500/40 transition-all group text-left">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-500 mb-10 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-xl">{group.icon}</div>
              <h3 className="text-2xl font-black mb-8 text-white uppercase">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.list.map(s => <span key={s} className="px-4 py-2 bg-white/5 rounded-2xl text-[10px] font-bold text-slate-400 border border-white/5 uppercase tracking-widest">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projs = [
    { 
      title: 'GreenShop', 
      type: 'E-Commerce Platform', 
      tech: 'React.js', 
      image: img1,
      desc: 'Zamonaviy va xavfsiz onlayn savdo platformasi.',
      path: "https://green-shop-kjz7.vercel.app/"
    },
    { 
      title: 'Marketplace', 
      type: 'Web Application', 
      tech: 'React, Tailwind', 
      image: img2,
      desc: 'Texnalogiya savdosiga ixtisoslashgan internet do\'koni.',
      path: "https://react-router-2-grsz.vercel.app/"
    },
    { 
      title: 'Crypto Nest', 
      type: 'FinTech Dashboard', 
      tech: 'TypeScript, React', 
      image: img3,
      desc: 'Kriptovalyuta aktivlarini boshqarish uchun professional dashboard.',
      path: "https://react-13-taupe.vercel.app"
    },
  ];

  return (
    <section id="projects" className="py-40 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 text-left">
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            Tanlangan <br /> <span className="text-indigo-500">Ishlarim</span>
          </h2>
          <a 
            href="https://github.com/nabinursharopv" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white/5 px-10 py-5 rounded-2xl border border-white/10 uppercase font-black text-[10px] tracking-widest flex items-center gap-2 hover:bg-white/10 transition-all shadow-xl shadow-indigo-500/5 text-white"
          >
            GITHUB <ExternalLink size={16} />
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {projs.map((p, i) => (
            <div key={i} className="group glass rounded-[60px] overflow-hidden hover:-translate-y-4 transition-all duration-700 text-left bg-slate-900/20 border-white/5 shadow-2xl">
              <div className="h-72 bg-indigo-950/20 relative overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>
              </div>
              <div className="p-14">
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-4">{p.type}</p>
                <h3 className="text-4xl font-black text-white mb-6 tracking-tighter uppercase">{p.title}</h3>
                <p className="text-slate-500 font-medium mb-10 leading-relaxed min-h-[60px]">
                  {p.tech} texnologiyalari yordamida yaratilgan zamonaviy loyiha. {p.desc}
                </p>
                <a href={p.path} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-white font-black text-[10px] tracking-widest uppercase border-b-2 border-indigo-500 pb-2 hover:border-white transition-all">
                  KO'RISH <ChevronRight size={18} /> 
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const sendToTelegram = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitStatus('');

    const name = e.target.name.value;
    const message = e.target.message.value;

   const BOT_TOKEN = "8546998499:AAFEXAmRq3sCNtkB0p3IR2tEooEvv1U6z_k";
   const CHAT_ID = "5494316144";  
   
   const text = `📬 **Yangi xabar portfolio saytidan!**\n\n👤 **Ism:** ${name}\n💬 **Xabar:** ${message}\n🕐 ${new Date().toLocaleString('uz-UZ')}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: 'Markdown'
        })
      });

      const data = await response.json();
      
      if (data.ok) {
        setSubmitStatus('success');
        e.target.reset();
        setTimeout(() => setSubmitStatus(''), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(''), 3000);
      }
    } catch (error) {
      console.error('Xatolik:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-40 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="glass p-16 md:p-32 rounded-[90px] text-left relative overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-24 relative z-10">
           
            <div>
              <h2 className="text-6xl md:text-8xl font-black mb-12 text-white tracking-tighter uppercase leading-none">
                Biznesingizni <br /> <span className="text-gradient">Yangilang</span>
              </h2>
              <p className="text-slate-400 text-xl font-medium mb-16 max-w-lg leading-relaxed">
                Sizga zamonaviy veb-sayt kerakmi? Menga yozing.
              </p>
              <div className="space-y-8">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nabinush123@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-6 group cursor-pointer relative z-40 p-2 rounded-3xl hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-xl border border-white/5">
                    <Mail size={24} />
                  </div>
                  <span className="text-2xl font-black text-white group-hover:text-indigo-400 transition-colors duration-300">
                    nabinush123@gmail.com
                  </span>
                </a>  

 <a
      href="https://www.instagram.com/nabinurcoding/" 
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-6 group cursor-pointer relative z-40 p-2 rounded-3xl hover:bg-white/5 transition-colors duration-300"
    >
      <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center text-pink-500 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 shadow-xl border border-white/5">
        <Instagram size={24} />  
      </div>
      <span className="text-2xl font-black text-white group-hover:text-pink-400 transition-colors duration-300">
        @nabinurcoding
      </span>
    </a>


              </div>
            </div>
            
            <div className="glass p-12 rounded-[60px] border-white/5">
              <form onSubmit={sendToTelegram} className="space-y-8">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Ismingiz" 
                  required 
                  disabled={isSending}
                  className="w-full bg-white/5 border border-white/10 p-8 rounded-[32px] focus:outline-none focus:border-indigo-500 text-white font-bold placeholder:text-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <textarea 
                  name="message"
                  placeholder="Loyiha haqida..." 
                  rows={4} 
                  required 
                  disabled={isSending}
                  className="w-full bg-white/5 border border-white/10 p-8 rounded-[32px] focus:outline-none focus:border-indigo-500 text-white font-bold placeholder:text-white/40 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                ></textarea>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/50 p-4 rounded-2xl text-green-400 font-bold text-center">
                    ✅ Xabar muvaffaqiyatli yuborildi!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500/50 p-4 rounded-2xl text-red-400 font-bold text-center">
                    ❌ Xatolik yuz berdi. Qayta urinib ko'ring.
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={isSending}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 py-8 rounded-[32px] font-black text-xs tracking-[0.3em] transition-all text-white flex items-center justify-center gap-3 uppercase shadow-xl shadow-indigo-600/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? 'YUBORILMOQDA...' : 'TELEGRAM'} 
                  {!isSending && <Send size={20} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const Footer = () => (
  <footer className="py-20 text-center border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="mb-10 text-2xl font-black tracking-tighter uppercase">NABINUR</div>
      <p className="text-[10px] font-bold tracking-[0.5em] text-slate-600 uppercase">© {new Date().getFullYear()} NABINUR. BARCHA HUQUQLAR HIMOYALANGAN.</p>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

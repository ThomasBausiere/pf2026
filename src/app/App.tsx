import React, { useEffect, useState } from 'react';
import { Header } from '@/app/components/Header';
import { NeonButton } from '@/app/components/NeonButton';
import { NeonCard } from '@/app/components/NeonCard';
import { SectionTitle } from '@/app/components/SectionTitle';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Mock submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToSection = (anchor: string) => {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050607] text-[#F5F7FA]">
      <Header />

      {/* Hero Section */}
      <section id="home" className="pt-20 md:pt-24 pb-11 md:pb-14">
        <div className="max-w-[860px] mx-auto px-4 md:px-6 text-center">
          <div className="reveal flex flex-col items-center gap-4 mb-6">
            {/* Avatar with neon ring */}
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-full blur-xl"
                style={{ background: 'radial-gradient(circle, rgba(57, 255, 20, 0.30) 0%, transparent 70%)' }}
              />
              <ImageWithFallback
                src="https://media.licdn.com/dms/image/v2/D4E03AQHiI2wi4IDO-Q/profile-displayphoto-crop_800_800/B4EZrf2mrjIIAI-/0/1764692227144?e=1770249600&v=beta&t=0oy5x9mbeo1o9HtPkqxaOX-q07hJjOpRWXz2PhxMHpw"
                alt="Portrait"
                className="relative w-[104px] h-[104px] md:w-[120px] md:h-[120px] lg:w-[136px] lg:h-[136px] rounded-full object-cover border-2 border-[rgba(57,255,20,0.30)]"
                style={{ boxShadow: '0 0 30px rgba(57, 255, 20, 0.25)' }}
              />
            </div>
          </div>

          <h1 className="reveal text-[32px] md:text-[38px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4">
            Développeur Java - Angular
          </h1>
          
          <p className="reveal text-lg md:text-xl font-semibold text-[rgba(245,247,250,0.85)] mb-3">
          À la recherche d’une entreprise pour réaliser mon alternance et continuer à développer mes compétences.
          </p>
          
          <p className="reveal text-[15px] md:text-base text-[rgba(245,247,250,0.72)] leading-[1.65] max-w-[680px] mx-auto mb-8">
             Je suis avant tout un développeur passionné et curieux! Le code n’est qu’un moyen, trouver la bonne solution est toujours mon réel objectif. 
          </p>

          <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton variant="primary" onClick={() => scrollToSection('#projets')}>
              Voir mes projets
            </NeonButton>
            <NeonButton variant="secondary" >
              <a href="mailto:t.bausiere@gmail.com">Me contacter             
           
          </a>
            </NeonButton>
          </div>
        </div>
      </section>

      {/* Profil Section */}
      <section id="profil" className="py-14 md:py-[72px] lg:py-[88px]">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <SectionTitle>PROFIL</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <NeonCard className="reveal">
              <div className="border-l-[3px] border-[rgba(57,255,20,0.55)] pl-5" style={{  }}>
                <h3 className="text-lg md:text-xl font-bold text-[#39FF14] mb-3" style={{ textShadow: '0 0 14px rgba(57, 255, 20, 0.40)' }}>
                  Objectif
                </h3>
                <p className="text-[rgba(245,247,250,0.72)] leading-[1.65]">
                  Trouver une alternance en tant que développeur back-end Java, front-end Angular ou full stack
                </p>
              </div>
            </NeonCard>

            <NeonCard className="reveal">
              <div className="border-l-[3px] border-[rgba(57,255,20,0.55)] pl-5" style={{  }}>
                <h3 className="text-lg md:text-xl font-bold text-[#39FF14] mb-3" style={{ textShadow: '0 0 14px rgba(57, 255, 20, 0.40)' }}>
                  Orientation métier
                </h3>
                <p className="text-[rgba(245,247,250,0.72)] leading-[1.65]">
                  Concepteur développeur d'applications
                </p>
              </div>
            </NeonCard>

            <NeonCard className="reveal md:col-span-2">
              <div className="border-l-[3px] border-[rgba(57,255,20,0.55)] pl-5" style={{  }}>
                <h3 className="text-lg md:text-xl font-bold text-[#39FF14] mb-3" style={{ textShadow: '0 0 14px rgba(57, 255, 20, 0.40)' }}>
                  Motivation
                </h3>
                <p className="text-[rgba(245,247,250,0.72)] leading-[1.65]">
                  Passion de longue date pour l'informatique et la création, reconversion professionnelle volontaire vers le développement logiciel
                </p>
              </div>
            </NeonCard>
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section id="competences" className="py-14 md:py-[72px] lg:py-[88px] bg-[#0B0E10]/30">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <SectionTitle>COMPÉTENCES TECHNIQUES</SectionTitle>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                name: 'Back-end',
                items: ['Java', 'Spring Boot', 'Création d\'entités', 'CRUD complet', 'Gestion des utilisateurs (inscription, connexion, déconnexion)', 'Sécurité (JWT)', 'API REST']
              },
              {
                name: 'Front-end',
                items: ['Angular', 'SPA (Single Page Application)', 'HTML', 'CSS', 'JavaScript', 'Responsive design', 'Vanilla JS']
              },
              {
                name: 'Bases de données',
                items: ['MySQL', 'SQL']
              },
              {
                name: 'Outils & DevOps',
                items: ['Git / GitHub', 'CI/CD (GitHub Actions)', 'Docker', 'Déploiement et hébergement']
              },
              {
                name: 'Autres technologies',
                items: ['PHP (bases)', 'C#', 'Blazor', 'Vue.js (bases)', 'React (bases)']
              }
            ].map((group, idx) => (
              <NeonCard key={idx} className="reveal">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#39FF14] mb-4" style={{ textShadow: '0 0 14px rgba(57, 255, 20, 0.40)' }}>
                  {group.name}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[rgba(245,247,250,0.72)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] mt-2 flex-shrink-0" style={{ boxShadow: '0 0 8px rgba(57, 255, 20, 0.6)' }} />
                      <span className="text-sm md:text-[15px] leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section id="projets" className="py-14 md:py-[72px] lg:py-[88px]">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <SectionTitle>PROJETS</SectionTitle>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {/* Project 1 */}
            <NeonCard className="reveal flex flex-col">
              <div className="relative mb-4 overflow-hidden rounded-lg" style={{ aspectRatio: '16/10' }}>
                <ImageWithFallback
                  src="/images/gw.jpg"
                  alt="Aperçu projet GW-SH"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B0E10] to-transparent" />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold mb-2">Projet Full Stack (principal)</h3>
              <p className="text-sm text-[rgba(245,247,250,0.56)] mb-3">Projet personnel réalisé en autonomie</p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {['Java Spring Boot', 'Angular', 'MySQL'].map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 rounded-full bg-[rgba(57,255,20,0.10)] text-[#39FF14] border border-[rgba(57,255,20,0.20)]">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-1.5 mb-3 flex-grow">
                {['Authentification et autorisation avec JWT', 'Gestion des membres', 'CRUD complet', 'Application SPA', 'API sécurisée'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[rgba(245,247,250,0.72)]">
                    <span className="w-1 h-1 rounded-full bg-[#39FF14] mt-1.5 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(57, 255, 20, 0.6)' }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-[rgba(245,247,250,0.56)] mb-4">
                Infrastructure : CI/CD via GitHub, Dockerisation, Hébergement en ligne
              </p>

              <a 
                href="https://gw-sh.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <NeonButton variant="primary" className="w-full flex items-center justify-center gap-2">
                  Visiter <ExternalLink size={16} />
                </NeonButton>
              </a>
            </NeonCard>

            {/* Project 2 */}
            <NeonCard className="reveal flex flex-col">
              <div className="relative mb-4 overflow-hidden rounded-lg" style={{ aspectRatio: '16/10' }}>
                <ImageWithFallback
                  src="/images/ac.jpg"
                  alt="Aperçu projet freelance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B0E10] to-transparent" />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold mb-2">Projet Freelance (Vanilla)</h3>
              <p className="text-sm text-[rgba(245,247,250,0.56)] mb-3">Projet client freelance</p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 rounded-full bg-[rgba(57,255,20,0.10)] text-[#39FF14] border border-[rgba(57,255,20,0.20)]">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-1.5 mb-4 flex-grow">
                {['Site responsive', 'Développement front-end sans framework'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[rgba(245,247,250,0.72)]">
                    <span className="w-1 h-1 rounded-full bg-[#39FF14] mt-1.5 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(57, 255, 20, 0.6)' }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="https://thomasbausiere.github.io/ac-immo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <NeonButton variant="primary" className="w-full flex items-center justify-center gap-2">
                  Visiter <ExternalLink size={16} />
                </NeonButton>
              </a>
            </NeonCard>

            {/* Project 3 */}
            <NeonCard className="reveal flex flex-col">
              <div className="relative mb-4 overflow-hidden rounded-lg" style={{ aspectRatio: '16/10' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc2ODI4NDQ3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Aperçu portfolio graphiste"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B0E10] to-transparent" />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold mb-2">Portfolio Graphiste (en cours)</h3>
              <p className="text-sm text-[rgba(245,247,250,0.56)] mb-3">Projet front-end</p>
              
              <p className="text-sm text-[rgba(245,247,250,0.72)] mb-3">
                Portfolio pour une graphiste motion designer
              </p>

              <ul className="space-y-1.5 mb-4 flex-grow">
                <li className="flex items-start gap-2 text-sm text-[rgba(245,247,250,0.72)]">
                  <span className="w-1 h-1 rounded-full bg-[#39FF14] mt-1.5 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(57, 255, 20, 0.6)' }} />
                  Objectif : intégration dans le portfolio personnel
                </li>
              </ul>

              <NeonButton variant="secondary" className="w-full mt-auto">
                En cours
              </NeonButton>
            </NeonCard>
          </div>
        </div>
      </section>

      {/* Parcours Section */}
      <section id="parcours" className="py-14 md:py-[72px] lg:py-[88px] bg-[#0B0E10]/30">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <SectionTitle>PARCOURS PROFESSIONNEL</SectionTitle>

              <NeonCard>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[#39FF14]" style={{ boxShadow: '0 0 12px rgba(57, 255, 20, 0.7)' }} />
                      <div className="w-[2px] h-full bg-[rgba(245,247,250,0.12)] mt-2" />
                    </div>
                    <div className="flex-1 pb-4">
                      <h4 className="font-bold text-lg mb-2">Développeur Front-End </h4>
                      <p className="text-[rgba(245,247,250,0.56)] text-sm mb-3"> Freelance</p>
                      <ul className="space-y-1.5">
                        {['Conception et développement de sites web front-end (HTML, CSS, JavaScript)', 'Travail à partir de maquettes fournies par une graphiste (respect du design, responsive, mobile-first)', 'Échanges avec le client : compréhension du besoin, retours, ajustements', 'Choix techniques adaptés au projet et aux contraintes', 'Livraison, mise en ligne et maintenance'].map((comp, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[rgba(245,247,250,0.72)]">
                            <span className="w-1 h-1 rounded-full bg-[#39FF14] mt-1.5 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(57, 255, 20, 0.6)' }} />
                            {comp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </NeonCard>
                      {/* Pendant reconversion */}
            <div className="reveal">
              <h3 className="text-xl font-bold text-[#39FF14] mb-6" style={{ textShadow: '0 0 14px rgba(57, 255, 20, 0.40)' }}>
              </h3>
              
              <NeonCard>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[#39FF14]" style={{ boxShadow: '0 0 12px rgba(57, 255, 20, 0.7)' }} />
                      <div className="w-[2px] h-full bg-[rgba(245,247,250,0.12)] mt-2" />
                    </div>
                    <div className="flex-1 pb-4">
                      <h4 className="font-bold text-lg mb-2">Développeur C# Junior</h4>
                      <p className="text-[rgba(245,247,250,0.56)] text-sm mb-3">DLPK (stage) </p>
                      <ul className="space-y-1.5">
                        {['Développement front-end avec Blazor (C#)', 'Participation à l’évolution d’outils internes', 'Travail sur des logiques back-end et bases de données', 'Intégration dans une équipe et respect de contraintes métier'].map((comp, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[rgba(245,247,250,0.72)]">
                            <span className="w-1 h-1 rounded-full bg-[#39FF14] mt-1.5 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(57, 255, 20, 0.6)' }} />
                            {comp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </NeonCard>
             
            </div>
          
          <div className="space-y-8">
            {/* Avant reconversion */}
            <div className="reveal">
              <h3 className="text-xl font-bold text-[#39FF14] mb-6" style={{ textShadow: '0 0 14px rgba(57, 255, 20, 0.40)' }}>
              </h3>
              <div className="space-y-6">


                <NeonCard>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[#39FF14]" style={{ boxShadow: '0 0 12px rgba(57, 255, 20, 0.7)' }} />
                      <div className="w-[2px] h-full bg-[rgba(245,247,250,0.12)] mt-2" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2">Chargé de relation client</h4>
                      <p className="text-[rgba(245,247,250,0.56)] text-sm mb-3">Établissement de crédit, banque en ligne</p>
                      <ul className="space-y-1.5">
                        {['Recouvrement', 'Relation client multicanale', 'Gestion de situations complexes', 'Autonomie, communication professionnelle'].map((comp, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[rgba(245,247,250,0.72)]">
                            <span className="w-1 h-1 rounded-full bg-[#39FF14] mt-1.5 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(57, 255, 20, 0.6)' }} />
                            {comp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </NeonCard>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section id="formation" className="py-14 md:py-[72px] lg:py-[88px]">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <SectionTitle>FORMATIONS</SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">

            <NeonCard className="reveal">
              <h3 className="text-lg md:text-xl font-bold text-[#39FF14] mb-4" style={{ textShadow: '0 0 14px rgba(57, 255, 20, 0.40)' }}>
                      Formation professionnelle <br/>Développeur Fullstack - Java / Angular 
              </h3>
              <ul className="space-y-2 mb-4">
                {['Développement d’applications Web Java EE avec Spring Boot, Hibernate et JPA', 'Conception back-end structurée (Spring MVC, Security, JDBC)', 'Création d’interfaces front responsive avec Angular', 'Tests avec JUnit, Mockito, TDD', 'Gestion de projet Agile (Scrum)'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[rgba(245,247,250,0.72)]">
                    <span className="w-1 h-1 rounded-full bg-[#39FF14] mt-1.5 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(57, 255, 20, 0.6)' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-t border-[rgba(245,247,250,0.10)] pt-4">
                <p className="text-sm font-semibold text-[rgba(245,247,250,0.85)] mb-2">Avril 2025 à septembre 2025 </p>
                <p className="text-sm text-[rgba(245,247,250,0.72)] mb-2">M2i formation</p>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'Spring','Spring Security','Linux', 'Docker', 'Scrum','Figma','JEE/Jakarta','Moskito','Junit','Angular', 'TypeScript','SQL','UML','JDBC', 'JPA Hibernate', 'Design Pattern','CI-CD'].map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-full bg-[rgba(57,255,20,0.10)] text-[#39FF14] border border-[rgba(57,255,20,0.20)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </NeonCard>
            <NeonCard className="reveal">
              <h3 className="text-lg md:text-xl font-bold text-[#39FF14] mb-4" style={{ textShadow: '0 0 14px rgba(57, 255, 20, 0.40)' }}>
                Titre professionnel RNCP niveau 5<br/>
                Développeur Web et Web Mobile 
              </h3>
              <ul className="space-y-2 mb-4">
                {['Maîtrise du développement web de A à Z : déploiement d’environnements techniques', 'Conception d’interfaces UX/UI intuitives ', 'Développement front-end interactif', 'Gestion avancée des bases de données ','Sécurité Web: Protection contre XSS, CSRF, injection SQL et Bruteforce.'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[rgba(245,247,250,0.72)]">
                    <span className="w-1 h-1 rounded-full bg-[#39FF14] mt-1.5 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(57, 255, 20, 0.6)' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-t border-[rgba(245,247,250,0.10)] pt-4">
                <p className="text-sm font-semibold text-[rgba(245,247,250,0.85)] mb-2">Septembre 2023 à juin 2024 </p>
                <p className="text-sm text-[rgba(245,247,250,0.72)] mb-2">AFCI Formation</p>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript','Php','C#', 'Blazor', 'SQL','VueJs','Git','Github'].map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-full bg-[rgba(57,255,20,0.10)] text-[#39FF14] border border-[rgba(57,255,20,0.20)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </NeonCard>

                        

            
                        <NeonCard className="reveal">
              <h3 className="text-lg md:text-xl font-bold text-[#39FF14] mb-4" style={{ textShadow: '0 0 14px rgba(57, 255, 20, 0.40)' }}>
                  BTS communication
              </h3>
              <ul className="space-y-2 mb-4">
                {['Création de contenus et de solutions de communication', 'Conseil aux annonceurs dans la mise en œuvre de solutions media et digitales innovantes', 'Elaboration du plan de communication dans un environnement digitalisé', 'Veille créative et technologique au service de la demande', 'Concevoir et mettre en œuvre des solutions de communication'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[rgba(245,247,250,0.72)]">
                    <span className="w-1 h-1 rounded-full bg-[#39FF14] mt-1.5 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(57, 255, 20, 0.6)' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-t border-[rgba(245,247,250,0.10)] pt-4">
                <p className="text-sm font-semibold text-[rgba(245,247,250,0.85)] mb-2">septembre 2016 à juin 2018 </p>
                <p className="text-sm text-[rgba(245,247,250,0.72)] mb-2">Saint Rémi Roubaix</p>
                <div className="flex flex-wrap gap-2">
                  {['Photoshop','Excel','Word','Canva','PowerPoint'].map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-full bg-[rgba(57,255,20,0.10)] text-[#39FF14] border border-[rgba(57,255,20,0.20)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </NeonCard>


          </div>
        </div>
      </section>





      {/* Contact Section */}
      <section id="contact" className="py-14 md:py-[72px] lg:py-[88px]">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <SectionTitle>CONTACT</SectionTitle>
          
          {/* <NeonCard className="reveal" hover={false}>
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nom *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full h-11 px-4 rounded-[14px] bg-[rgba(245,247,250,0.04)] border border-[rgba(245,247,250,0.12)] text-[#F5F7FA] placeholder:text-[rgba(245,247,250,0.45)] focus:outline-none focus:border-[rgba(57,255,20,0.45)] focus:ring-[3px] focus:ring-[rgba(57,255,20,0.22)] transition-all"
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-11 px-4 rounded-[14px] bg-[rgba(245,247,250,0.04)] border border-[rgba(245,247,250,0.12)] text-[#F5F7FA] placeholder:text-[rgba(245,247,250,0.45)] focus:outline-none focus:border-[rgba(57,255,20,0.45)] focus:ring-[3px] focus:ring-[rgba(57,255,20,0.22)] transition-all"
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full h-11 px-4 rounded-[14px] bg-[rgba(245,247,250,0.04)] border border-[rgba(245,247,250,0.12)] text-[#F5F7FA] placeholder:text-[rgba(245,247,250,0.45)] focus:outline-none focus:border-[rgba(57,255,20,0.45)] focus:ring-[3px] focus:ring-[rgba(57,255,20,0.22)] transition-all"
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-[14px] bg-[rgba(245,247,250,0.04)] border border-[rgba(245,247,250,0.12)] text-[#F5F7FA] placeholder:text-[rgba(245,247,250,0.45)] focus:outline-none focus:border-[rgba(57,255,20,0.45)] focus:ring-[3px] focus:ring-[rgba(57,255,20,0.22)] transition-all resize-none"
                  autoComplete="off"
                />
              </div>

              {formStatus === 'success' && (
                <div className="p-4 rounded-lg bg-[rgba(57,255,20,0.10)] border border-[rgba(57,255,20,0.30)] text-[#39FF14]">
                  Message envoyé avec succès !
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-4 rounded-lg bg-[rgba(255,59,59,0.10)] border border-[rgba(255,59,59,0.30)] text-[#FF3B3B]">
                  Erreur lors de l'envoi. Veuillez réessayer.
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <NeonButton 
                  type="submit" 
                  variant="primary" 
                  className="flex-1 flex items-center justify-center gap-2"
                >
                  {formStatus === 'loading' ? 'Envoi…' : 'Envoyer'}
                  {formStatus === 'idle' && <Mail size={16} />}
                </NeonButton>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <NeonButton variant="secondary" className="w-full flex items-center justify-center gap-2">
                    GitHub <Github size={16} />
                  </NeonButton>
                </a>
              </div>
            </form>
          </NeonCard> */}

          <div className="grid md:grid-cols-3 gap-5 md:gap-20">
            <div className="flex items-center gap-4">
              <div className="text-xs px-2 py-1 rounded-full bg-[rgba(57,255,20,0.10)] text-[#39FF14] border border-[rgba(57,255,20,0.20)]">
                <Mail className="size-5 text-[#39FF14]-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-sm sm:text-base">t.bausiere@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-xs px-2 py-1 rounded-full bg-[rgba(57,255,20,0.10)] text-[#39FF14] border border-[rgba(57,255,20,0.20)]">
                <Phone className="size-5 text-[#39FF14]-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Téléphone</p>
                <p className="text-sm sm:text-base">06 59 51 53 76</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-xs px-2 py-1 rounded-full bg-[rgba(57,255,20,0.10)] text-[#39FF14] border border-[rgba(57,255,20,0.20)]">
                <MapPin className="size-5 text-[#39FF14]-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Localisation</p>
                <p className="text-sm sm:text-base">Métropole lilloise </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[rgba(245,247,250,0.10)] bg-[#050607] py-8">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[rgba(245,247,250,0.62)]">
              © 2026 — Portfolio Alternance Java / Angular
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/thomasbausiere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(245,247,250,0.62)] hover:text-[#39FF14] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/thomasbausiere/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(245,247,250,0.62)] hover:text-[#39FF14] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
            href="mailto:t.bausiere@gmail.com"
            className="text-[rgba(245,247,250,0.62)] hover:text-[#39FF14] transition-colors"
          >
            <Mail className="size-6" />
          </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 320ms cubic-bezier(0.2, 0, 0, 1) forwards;
        }
      `}</style>
    </div>
  );
}
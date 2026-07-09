import React, { useState, useEffect } from 'react';

// --- Subcomponents ---

interface FAQProps {
  question: string;
  answer: string;
}

const FAQAccordionItem: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-outline-variant rounded-xl overflow-hidden bg-white">
      <button
        className="w-full px-lg py-md text-left flex justify-between items-center hover:bg-surface-container-low transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold">{question}</span>
        <span
          className={`material-symbols-outlined transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          expand_more
        </span>
      </button>
      {isOpen && (
        <div className="px-lg pb-md text-on-surface-variant">
          {answer}
        </div>
      )}
    </div>
  );
};

// --- Main Page Component ---

export default function ResearchHubLanding() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      question: 'How accurate is the semantic search?',
      answer: "Our search engine uses state-of-the-art transformer models to understand the context of your query beyond simple keywords, ensuring you find the most relevant papers even if they don't share identical terminology."
    },
    {
      question: 'Is my research data private?',
      answer: 'Absolutely. All your notes, collections, and reading habits are encrypted and never shared. We adhere to the strictest academic privacy standards and GDPR compliance.'
    },
    {
      question: 'Can I collaborate with a team?',
      answer: 'Yes, ResearchHub Teams allows you to create shared collections, co-annotate papers, and sync reading progress across your entire laboratory or study group.'
    },
    {
      question: 'Do you support BibTeX exports?',
      answer: 'We support standard citation formats including BibTeX, APA, MLA, and Chicago. You can export individual citations or entire collection bibliographies with one click.'
    }
  ];

  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* Sticky Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-outline shadow-sm transition-all duration-300 ${
          isScrolled ? 'py-sm' : 'py-md'
        }`}
      >
        <div className="flex justify-between items-center px-lg max-w-7xl mx-auto">
          <div className="flex items-center gap-sm">
            <span
              className="material-symbols-outlined text-primary text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              hub
            </span>
            <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">
              ResearchHub
            </span>
          </div>
          <div className="hidden md:flex items-center gap-xl">
            <a className="font-body-md text-body-md text-on-surface-variant dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#features">Features</a>
            <a className="font-body-md text-body-md text-on-surface-variant dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#about">About</a>
            <a className="font-body-md text-body-md text-on-surface-variant dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#faq">FAQ</a>
            <a className="font-body-md text-body-md text-on-surface-variant dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-md">
            <button className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors px-md py-xs">Login</button>
            <button className="bg-primary-container text-on-primary-container px-lg py-sm rounded-lg font-bold hover:opacity-90 active:scale-95 transition-all shadow-md">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative pt-xxxl pb-xxl px-lg overflow-hidden mt-xl"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #e2e8f0 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-xxl pt-xl">
          <div className="flex-1 text-center lg:text-left z-10">
            <h1 className="font-display text-display text-on-surface mb-md max-w-2xl mx-auto lg:mx-0">
              The Intelligent Way to Manage <span className="text-primary-container">Academic Research</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-xl mx-auto lg:mx-0">
              Discover, organize, annotate, and manage research papers—all in one place. Built for researchers, students, and professionals seeking clarity in the age of information.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center lg:justify-start">
              <button className="bg-primary text-on-primary px-xxl py-md rounded-xl font-bold text-lg hover:shadow-lg active:scale-95 transition-all">Get Started</button>
              <button className="bg-secondary-container text-on-secondary-container px-xxl py-md rounded-xl font-bold text-lg hover:bg-opacity-80 active:scale-95 transition-all flex items-center justify-center gap-sm">
                <span className="material-symbols-outlined">explore</span>
                Explore Papers
              </button>
            </div>
          </div>
          <div className="flex-1 relative w-full max-w-2xl">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-outline-variant">
              <img
                className="w-full aspect-video object-cover"
                alt="A premium 3D abstract digital sculpture representing a network of knowledge"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3rwC3LpaeJ-rcGHK5bEEAF8roaTybIxI7AQtX-l-zrYcKDEubEH6CS7mlPaDKo9m_QWFgUNI0rS9q0wzTIMOdXBTPGaYmtzUl8L6e1-sHtHrGL3R1wRIapu11z279VdyVWihn4RfcwfJUohag_EvApqx9nz4T1HGE2b1_2ctcUQMlEJct3Y0SRc5Lnd5WjY0yE1GCOqJO317qBCOria4cg7HGbp3xWI9xrS0xE6opzDwerIMplCw33uxGV4icTMS-SGDxcVYSK4cl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-xxl px-lg bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-xxl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Everything you need in one dashboard</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Designed for deep focus and analytical rigor.</p>
          </div>
          <div
            className="rounded-xl shadow-2xl overflow-hidden flex h-[600px] border border-outline-variant"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(12px)'
            }}
          >
            {/* Sidebar */}
            <aside className="w-64 border-r border-outline-variant bg-surface-container-lowest p-md flex flex-col gap-md">
              <div className="flex items-center gap-sm px-sm mb-lg">
                <div className="w-8 h-8 bg-primary rounded-lg"></div>
                <span className="font-bold">Library</span>
              </div>
              <nav className="flex flex-col gap-xs">
                <div className="flex items-center gap-sm p-sm bg-primary-container text-on-primary-container rounded-lg">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
                  <span className="text-label-md">All Papers</span>
                </div>
                <div className="flex items-center gap-sm p-sm text-on-surface-variant hover:bg-surface-variant rounded-lg transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">folder</span>
                  <span className="text-label-md">Collections</span>
                </div>
                <div className="flex items-center gap-sm p-sm text-on-surface-variant hover:bg-surface-variant rounded-lg transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">bookmark</span>
                  <span className="text-label-md">Favorites</span>
                </div>
                <div className="flex items-center gap-sm p-sm text-on-surface-variant hover:bg-surface-variant rounded-lg transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">analytics</span>
                  <span className="text-label-md">Analytics</span>
                </div>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden bg-white">
              <header className="h-16 border-b border-outline-variant flex items-center px-lg justify-between">
                <div className="relative w-96">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                  <input
                    className="w-full pl-10 pr-md py-sm bg-surface-container rounded-full border-none text-body-sm focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Search across 250M+ papers..."
                    type="text"
                  />
                </div>
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">notifications</span>
                  <div className="w-8 h-8 bg-tertiary-container rounded-full border border-outline"></div>
                </div>
              </header>
              <div className="flex-1 p-lg overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                  {/* Paper Card 1 */}
                  <div className="bg-white border border-outline-variant p-md rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-sm">
                      <span className="px-sm py-xs bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold uppercase tracking-wider">Peer Reviewed</span>
                      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_vert</span>
                    </div>
                    <h4 className="font-bold text-on-surface mb-xs">Generative AI in Modern Academic Workflows</h4>
                    <p className="text-body-sm text-on-surface-variant mb-md">Smith, J. et al. (2024)</p>
                    <div className="flex gap-sm flex-wrap">
                      <span className="bg-surface-variant px-xs py-1 rounded text-[10px]">#MachineLearning</span>
                      <span className="bg-surface-variant px-xs py-1 rounded text-[10px]">#Education</span>
                    </div>
                  </div>
                  {/* Paper Card 2 */}
                  <div className="bg-white border border-outline-variant p-md rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-sm">
                      <span className="px-sm py-xs bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-[10px] font-bold uppercase tracking-wider">In Press</span>
                      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_vert</span>
                    </div>
                    <h4 className="font-bold text-on-surface mb-xs">Neural Plasticity and Deep Learning Architectures</h4>
                    <p className="text-body-sm text-on-surface-variant mb-md">Chen, L. &amp; Rossi, M. (2023)</p>
                    <div className="flex gap-sm flex-wrap">
                      <span className="bg-surface-variant px-xs py-1 rounded text-[10px]">#Neuroscience</span>
                      <span className="bg-surface-variant px-xs py-1 rounded text-[10px]">#AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            {/* Right Stats Panel */}
            <aside className="w-72 border-l border-outline-variant bg-surface-container-low p-md hidden xl:block">
              <h5 className="font-bold mb-md">Reading Progress</h5>
              <div className="bg-white rounded-xl p-md shadow-sm border border-outline-variant mb-lg">
                <div className="flex items-end justify-between mb-xs">
                  <span className="text-headline-md font-bold text-primary">74%</span>
                  <span className="text-body-sm text-on-surface-variant">12 Papers this week</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[74%]"></div>
                </div>
              </div>
              <h5 className="font-bold mb-md">Recent Notes</h5>
              <div className="space-y-sm">
                <div className="p-sm bg-white rounded-lg border border-outline-variant text-body-sm italic text-on-surface-variant">
                  "Crucial evidence on page 42 regarding the latency of transformer models..."
                </div>
                <div className="p-sm bg-white rounded-lg border border-outline-variant text-body-sm italic text-on-surface-variant">
                  "Need to cross-reference the citation from the MIT study..."
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-xxl px-lg bg-surface" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-xxl">
            <span className="text-primary font-bold tracking-widest text-label-md uppercase mb-sm block">Core Capabilities</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Powerful Tools for Serious Minds</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
            {/* Feature Cards */}
            {[
              { icon: 'search_spark', title: 'Smart Search', desc: 'Semantic discovery engine that finds not just keywords, but relevant concepts and related research.' },
              { icon: 'favorite', title: 'Favorites', desc: 'One-click archiving for the foundational papers that form the backbone of your current project.' },
              { icon: 'folder_managed', title: 'Collections', desc: 'Create nested topical hierarchies to organize thousands of documents into manageable streams.' },
              { icon: 'edit_note', title: 'Personal Notes', desc: 'A integrated markdown environment for capturing insights directly alongside your research materials.' },
              { icon: 'history', title: 'Reading History', desc: 'Never lose your place. Automated tracking across devices ensures you can pick up exactly where you left off.' },
              { icon: 'monitoring', title: 'Analytics Dashboard', desc: 'Visualize your research throughput, citation networks, and topic clusters with advanced reporting.' }
            ].map((feature, i) => (
              <div key={i} className="p-lg bg-surface-container-lowest border border-outline-variant rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary-container text-2xl">{feature.icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-sm">{feature.title}</h3>
                <p className="text-on-surface-variant">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-xxl px-lg bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-center mb-xxl">Streamline Your Scientific Journey</h2>
          <div className="relative flex flex-col md:flex-row justify-between items-start gap-xl">
            <div className="absolute top-10 left-0 w-full h-[2px] bg-outline-variant hidden md:block"></div>
            
            <div className="flex-1 text-center relative z-10">
              <div className="w-20 h-20 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto mb-md shadow-lg font-bold text-2xl">1</div>
              <h4 className="font-bold text-lg mb-xs">Search</h4>
              <p className="text-on-surface-variant text-body-sm">Access millions of papers via our lightning-fast API.</p>
            </div>
            <div className="flex-1 text-center relative z-10">
              <div className="w-20 h-20 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto mb-md shadow-lg font-bold text-2xl">2</div>
              <h4 className="font-bold text-lg mb-xs">Save</h4>
              <p className="text-on-surface-variant text-body-sm">One-click import into your local, cloud-synced library.</p>
            </div>
            <div className="flex-1 text-center relative z-10">
              <div className="w-20 h-20 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto mb-md shadow-lg font-bold text-2xl">3</div>
              <h4 className="font-bold text-lg mb-xs">Organize</h4>
              <p className="text-on-surface-variant text-body-sm">Categorize with tags, collections, and smart filters.</p>
            </div>
            <div className="flex-1 text-center relative z-10">
              <div className="w-20 h-20 bg-primary-fixed-dim text-on-primary-fixed rounded-full flex items-center justify-center mx-auto mb-md shadow-lg font-bold text-2xl">4</div>
              <h4 className="font-bold text-lg mb-xs">Analyze</h4>
              <p className="text-on-surface-variant text-body-sm">Synthesize data and generate automated summaries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-xxl px-lg bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-lg">
            {[
              { value: '250M+', label: 'Papers Indexed' },
              { value: '50K+', label: 'Active Users' },
              { value: '1M+', label: 'Research Notes' },
              { value: '300K+', label: 'Collections' }
            ].map((stat, i) => (
              <div key={i} className="p-xl bg-white border border-outline-variant rounded-xl text-center shadow-sm">
                <div className="text-display text-primary mb-xs">{stat.value}</div>
                <div className="font-bold text-on-surface-variant uppercase tracking-widest text-label-md">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-xxl px-lg bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-center mb-xxl">Trusted by Global Minds</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
            {[
              {
                name: 'Dr. Sarah Jenkins',
                role: 'Senior Research Lead',
                quote: "ResearchHub has fundamentally changed how my team handles literature reviews. The organization features are unparalleled.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9QhExTqZ9FkKEDrMp--dqH2aZu5oQpGeyhBe6PVKLwsJDFRBlbAi2ynYf651PSAMUkkmHQtFKDbwc6En0-wDnSEG0Fpk2VMondy6qiuk1Ei1gi2dyM8xxjVrZX8VfjPD_EDUbyJuAHX9md5zVBRrZ_VGIvpLnVnq3M7y0zum6VGW9sDYGoj4rHNtns89rbmzWS2ZmtkQpk6ep2m5PWv73wO0kZnF_UVESRDu-gZv0TbiMmGx1q1M-w1naNUUVBW2Czt7Au5RMSn5Q"
              },
              {
                name: 'Marcus Thorne',
                role: 'Data Scientist',
                quote: "The search accuracy and concept mapping saves me hours every week. It's the most polished tool in my academic stack.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ96iyGC7o-4LFdpxuSOPTE_nJryaZ9aCUtLGgnysAYM-LmVVDd97pkV7ePUCiWw9Elzi7vJuzWh9M9B5YylA-K7u_on9KAHdXW0jAoC0XbM9f-H-uYqt1bi46yG8Vtf6e3nLXYM9H-NJMCSC236818gbt-qseGwHq16G3jDC-FN8d1cl6p8YfArXgHxXEuQ9YuNo929NCTJszo9yHK86PTUBBgicTW8cpvOVXxiZlkxouzMjxmNE8fGS_OOY-e15S43h0E3hsSoBg"
              },
              {
                name: 'Prof. Elena Vance',
                role: 'University Professor',
                quote: "I recommend this to all my graduate students. It teaches them how to structure their thoughts and their bibliography simultaneously.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTDxf77XsIlB-LBholwdSlMVGp7U4d1Lz5RTPAFXBarPLWBcEM7RqBIw0rh0iVhQmOMo8Mr94ciBwiVsdmWPHU0FiDNIpm4Gewsb96hJ2jbD1X53ZoyVHefpwf7FdQoeFQkPz3MGsHeuoSpW_I-3M0VCHwLCcgkfS-qP0e0T2lqLPOvJMUiQbs-LQoopJmeiSDKsHdEHSFZEyS57W4Axz6SnwsxpO288m9Uoc8_VY8eLm_2rUwI6NxrIpMzCB29hNGkQrCxu2qBpn4"
              }
            ].map((testimonial, i) => (
              <div key={i} className="p-lg bg-white rounded-xl shadow-md border border-outline-variant">
                <div className="flex items-center gap-md mb-md">
                  <img className="w-12 h-12 rounded-full object-cover" alt={`Portrait of ${testimonial.name}`} src={testimonial.img} />
                  <div>
                    <h5 className="font-bold">{testimonial.name}</h5>
                    <p className="text-label-md text-on-surface-variant">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-body-md italic text-on-surface-variant">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-xxl px-lg bg-surface" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-center mb-xl">Frequently Asked Questions</h2>
          <div className="space-y-md">
            {faqs.map((faq, index) => (
              <FAQAccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-xxxl px-lg bg-primary-container text-on-primary-container relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-display mb-md">Ready to elevate your research?</h2>
          <p className="font-body-lg text-body-lg mb-xl opacity-90">Join 50,000+ researchers who have already transformed their workflow with ResearchHub.</p>
          <div className="flex flex-col sm:flex-row gap-md justify-center">
            <button className="bg-white text-primary-container px-xxl py-md rounded-xl font-bold text-lg hover:shadow-xl active:scale-95 transition-all">Create Free Account</button>
            <button className="border border-white/30 bg-white/10 text-white px-xxl py-md rounded-xl font-bold text-lg hover:bg-white/20 active:scale-95 transition-all">Explore Research</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-surface-container-low dark:bg-on-surface">
        <div className="flex flex-col md:flex-row justify-between items-start px-lg py-xxl gap-lg max-w-7xl mx-auto">
          <div className="max-w-xs">
            <div className="flex items-center gap-sm mb-md">
              <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
              <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">ResearchHub</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-secondary-fixed-variant mb-md">The modern standard for academic knowledge management. Precision tools for brilliant minds.</p>
            <div className="flex gap-md">
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">public</span>
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">alternate_email</span>
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">link</span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-xl w-full md:w-auto">
            <div>
              <h6 className="font-bold mb-md text-on-surface dark:text-white">Product</h6>
              <ul className="space-y-sm">
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Features</a></li>
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Pricing</a></li>
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold mb-md text-on-surface dark:text-white">Company</h6>
              <ul className="space-y-sm">
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">About</a></li>
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Careers</a></li>
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Press</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold mb-md text-on-surface dark:text-white">Legal</h6>
              <ul className="space-y-sm">
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Privacy</a></li>
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Terms</a></li>
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-lg py-md border-t border-outline-variant/30 text-center md:text-left">
          <span className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-secondary-fixed-variant opacity-80">© 2024 ResearchHub. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
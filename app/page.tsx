import React from 'react';
import { 
  CheckCircle, 
  Zap, 
  Globe, 
  MessageSquare, 
  Layout, 
  Calendar, 
  BarChart, 
  ChevronRight,
  ShieldCheck,
  Clock
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 selection:bg-blue-100">
      {/* Header / Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl italic">V</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">VirtuaFlow</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">Process</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
          </div>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all active:scale-95 shadow-sm">
            Book a Call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              NOW ACCEPTING NEW CLIENTS
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[1.05] mb-8">
              Scale faster with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">elite support.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl">
              We provide highly trained virtual assistants for visionary founders. 
              Offload your admin, operations, and technical tasks to a team that thinks like you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-2">
                Get Started <ChevronRight className="w-5 h-5" />
              </button>
              <button className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                Explore Services
              </button>
            </div>
          </div>
        </div>
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -z-0 opacity-20">
          <div className="w-[600px] h-[600px] bg-blue-400 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-slate-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">Trusted by founders from</p>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50 contrast-125">
             <span className="text-2xl font-bold italic">Stripe</span>
             <span className="text-2xl font-bold italic">Airbnb</span>
             <span className="text-2xl font-bold italic">Linear</span>
             <span className="text-2xl font-bold italic">Vercel</span>
             <span className="text-2xl font-bold italic">Notion</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Everything you need to grow.</h2>
            <p className="text-slate-500 text-lg max-w-xl">Focus on high-leverage tasks while we handle the execution.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<MessageSquare className="w-6 h-6" />}
              title="Inbox & CRM"
              description="Managing high-volume communications and ensuring your customer data is always up to date."
            />
            <ServiceCard 
              icon={<Calendar className="w-6 h-6" />}
              title="Executive Scheduling"
              description="Complex calendar management across timezones. We protect your time like it's our own."
            />
            <ServiceCard 
              icon={<Layout className="w-6 h-6" />}
              title="Technical Ops"
              description="Setting up automations, managing CMS platforms, and basic technical troubleshooting."
            />
            <ServiceCard 
              icon={<BarChart className="w-6 h-6" />}
              title="Data & Research"
              description="Market research, competitor analysis, and clean data reporting for your weekly reviews."
            />
            <ServiceCard 
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Compliance & Admin"
              description="Handling document signatures, basic invoicing, and essential administrative workflows."
            />
            <ServiceCard 
              icon={<Clock className="w-6 h-6" />}
              title="24/7 Availability"
              description="Global teams ensuring someone is always online to handle urgent requests as they arrive."
            />
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section id="how-it-works" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">How we get you your time back.</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">Three simple steps to scaling your output without increasing your workload.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="relative z-10 bg-white p-10 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-blue-200">1</div>
              <h3 className="text-xl font-bold mb-4">Efficiency Audit</h3>
              <p className="text-slate-500 leading-relaxed">
                We hop on a 15-minute call to identify the recurring tasks that are draining your energy and blocking your growth.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 bg-white p-10 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-blue-200">2</div>
              <h3 className="text-xl font-bold mb-4">Elite Matching</h3>
              <p className="text-slate-500 leading-relaxed">
                We pair you with a VA from our top 1% talent pool who has specific experience in your industry and toolstack.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 bg-white p-10 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-blue-200">3</div>
              <h3 className="text-xl font-bold mb-4">Seamless Handoff</h3>
              <p className="text-slate-500 leading-relaxed">
                Your new VA integrates into your Slack/Notion and starts taking over tasks on day one. You just watch the progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Stats Section */}
      <section className="bg-slate-900 py-32 rounded-[3rem] mx-4 mb-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                We aren't just assistants. We're an extension of your brain.
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Rigorous Vetting</h4>
                    <p className="text-slate-400">Only the top 1% of applicants join our agency after a 4-week trial.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Tech-Native Teams</h4>
                    <p className="text-slate-400">Fluent in Slack, Notion, Linear, HubSpot, and modern AI tools.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl">
                <div className="text-4xl font-bold text-white mb-2">40h+</div>
                <div className="text-slate-400 text-sm font-medium">Weekly hours saved per founder</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl mt-8">
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-slate-400 text-sm font-medium">Client retention rate</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-600/10 to-transparent"></div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing.</h2>
          <p className="text-slate-500 mb-16">No hidden fees. No long-term contracts. Just elite support.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="p-8 rounded-3xl border border-slate-100 text-left hover:border-blue-200 transition-all">
              <h3 className="font-bold text-lg mb-2">Growth</h3>
              <div className="text-4xl font-bold mb-6">$800<span className="text-sm text-slate-400 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 text-sm text-slate-600">
                <li className="flex items-center gap-2">✅ 20 hours of support/mo</li>
                <li className="flex items-center gap-2">✅ Dedicated VA Match</li>
                <li className="flex items-center gap-2">✅ Daily Updates</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-slate-200 font-bold hover:bg-slate-50 transition-colors">Get Started</button>
            </div>

            {/* Scale Plan (Recommended) */}
            <div className="p-8 rounded-3xl border-2 border-blue-600 text-left relative shadow-xl shadow-blue-50">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">MOST POPULAR</div>
              <h3 className="font-bold text-lg mb-2">Scale</h3>
              <div className="text-4xl font-bold mb-6">$1,500<span className="text-sm text-slate-400 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 text-sm text-slate-600">
                <li className="flex items-center gap-2 font-bold text-slate-900">✅ 40 hours of support/mo</li>
                <li className="flex items-center gap-2">✅ Priority Response Time</li>
                <li className="flex items-center gap-2">✅ Advanced Technical Ops</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors">Get Started</button>
            </div>

            {/* Custom Plan */}
            <div className="p-8 rounded-3xl border border-slate-100 text-left hover:border-blue-200 transition-all">
              <h3 className="font-bold text-lg mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-6">Custom</div>
              <ul className="space-y-4 mb-8 text-sm text-slate-600">
                <li className="flex items-center gap-2">✅ Full-time Dedicated VA</li>
                <li className="flex items-center gap-2">✅ Custom Workflow Setup</li>
                <li className="flex items-center gap-2">✅ Quarterly Strategy Calls</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-slate-200 font-bold hover:bg-slate-50 transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tight">
              Ready to reclaim 20+ hours a week?
            </h2>
            <p className="text-blue-100 text-lg mb-0 max-w-xl mx-auto">
              Join founders from top tech companies who have offloaded their operations to VirtuaFlow. 
              Scroll down to secure your consultation instantly.
            </p>
          </div>
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        </div>
      </section>
{/* Booking Embed Section */}
      <section id="book-now" className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">
              Secure your slot. <span className="text-blue-600">Pick a time.</span>
            </h2>
            <p className="text-slate-500 text-lg">No back-and-forth emails. Just a direct line to our team.</p>
          </div>
          
          {/* DESKTOP VIEW: Clean Embed */}
          <div className="hidden md:block rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl shadow-blue-100/50 overflow-hidden min-h-[750px] relative">
            <iframe 
              src="https://zcal.co/i/JRqUf9_T?embed=1" 
              loading="lazy" 
              className="w-full h-[750px] border-none"
              title="Schedule a meeting"
            />
          </div>

          {/* MOBILE VIEW: High-Conversion CTA Card */}
          <div className="md:hidden bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Book your 15-min discovery call</h3>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              To give you the best booking experience on mobile, we'll open our calendar in a new, secure tab.
            </p>
            <a 
              href="https://zcal.co/i/JRqUf9_T" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-95 transition-all"
            >
              Open Calendar
            </a>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
              Fast • Secure • Easy
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-100">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm italic">V</span>
              </div>
              <span className="font-bold tracking-tight">VirtuaFlow</span>
            </div>
            <p className="text-slate-500 max-w-xs">Premium support for the next generation of builders.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h5 className="font-bold mb-4">Platform</h5>
              <ul className="text-slate-500 space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-600">Services</a></li>
                <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-600">Apply as VA</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Company</h5>
              <ul className="text-slate-500 space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-600">About</a></li>
                <li><a href="#" className="hover:text-blue-600">Journal</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-slate-100 text-slate-400 text-xs flex justify-between">
          <p>© 2026 VirtuaFlow Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300">
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

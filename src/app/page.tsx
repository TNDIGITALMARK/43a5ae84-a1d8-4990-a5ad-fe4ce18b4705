import Link from 'next/link';
import { Brain, Cpu, Zap, Lock, Globe, Rocket, BarChart3, Shield, Cloud, Code, Database, Sparkles } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">TechAI</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="#solutions" className="text-white/80 hover:text-white transition-smooth">
                Solutions
              </Link>
              <Link href="#features" className="text-white/80 hover:text-white transition-smooth">
                Features
              </Link>
              <Link href="#technology" className="text-white/80 hover:text-white transition-smooth">
                Technology
              </Link>
              <Link href="#contact" className="text-white/80 hover:text-white transition-smooth">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="#contact"
                className="px-6 py-2.5 bg-primary text-white rounded-md font-medium hover:brightness-110 transition-smooth"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Next-Generation AI Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"> Artificial Intelligence</span>
            </h1>

            <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Harness the power of cutting-edge AI technology to automate processes,
              gain insights, and drive innovation across your organization.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#contact"
                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:brightness-110 transition-smooth shadow-lg shadow-primary/20"
              >
                Start Free Trial
              </Link>
              <Link
                href="#solutions"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-smooth"
              >
                Explore Solutions
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm text-white/60">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50M+</div>
                <div className="text-sm text-white/60">API Calls/Day</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">10K+</div>
                <div className="text-sm text-white/60">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">150+</div>
                <div className="text-sm text-white/60">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section id="features" className="py-24 bg-background-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful AI Capabilities
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Advanced machine learning and AI technologies designed to solve complex business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Machine Learning */}
            <div className="card-dark group hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Machine Learning</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Advanced ML models that learn from your data and continuously improve performance over time.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Predictive Analytics
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Pattern Recognition
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Anomaly Detection
                </li>
              </ul>
            </div>

            {/* Natural Language Processing */}
            <div className="card-dark group hover:border-secondary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Natural Language AI</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Understand and generate human language with state-of-the-art NLP capabilities.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Sentiment Analysis
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Text Generation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Language Translation
                </li>
              </ul>
            </div>

            {/* Computer Vision */}
            <div className="card-dark group hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Computer Vision</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Extract insights from images and videos with advanced visual recognition systems.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Object Detection
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Facial Recognition
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Image Classification
                </li>
              </ul>
            </div>

            {/* Automation */}
            <div className="card-dark group hover:border-secondary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Intelligent Automation</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Automate complex workflows and decision-making processes with AI-powered systems.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Process Automation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Smart Workflows
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Decision Intelligence
                </li>
              </ul>
            </div>

            {/* Data Analytics */}
            <div className="card-dark group hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI-Powered Analytics</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Transform raw data into actionable insights with intelligent analytics platforms.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Real-time Insights
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Predictive Models
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Custom Dashboards
                </li>
              </ul>
            </div>

            {/* Security AI */}
            <div className="card-dark group hover:border-secondary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI Security</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Protect your systems with AI-driven threat detection and prevention mechanisms.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Threat Detection
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Fraud Prevention
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Behavioral Analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="technology" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise-Grade Technology
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Built on robust, scalable infrastructure trusted by industry leaders
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-smooth">
              <Cloud className="w-12 h-12 text-primary" />
              <div className="text-center">
                <div className="font-semibold text-white mb-1">Cloud Native</div>
                <div className="text-sm text-white/60">Scalable Infrastructure</div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-secondary/50 transition-smooth">
              <Lock className="w-12 h-12 text-secondary" />
              <div className="text-center">
                <div className="font-semibold text-white mb-1">Enterprise Security</div>
                <div className="text-sm text-white/60">SOC 2 Compliant</div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-smooth">
              <Database className="w-12 h-12 text-primary" />
              <div className="text-center">
                <div className="font-semibold text-white mb-1">Big Data</div>
                <div className="text-sm text-white/60">Petabyte Scale</div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-secondary/50 transition-smooth">
              <Code className="w-12 h-12 text-secondary" />
              <div className="text-center">
                <div className="font-semibold text-white mb-1">Developer APIs</div>
                <div className="text-sm text-white/60">RESTful & GraphQL</div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-secondary/50 transition-smooth">
              <Globe className="w-12 h-12 text-secondary" />
              <div className="text-center">
                <div className="font-semibold text-white mb-1">Global CDN</div>
                <div className="text-sm text-white/60">Low Latency</div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-smooth">
              <Zap className="w-12 h-12 text-primary" />
              <div className="text-center">
                <div className="font-semibold text-white mb-1">Real-Time</div>
                <div className="text-sm text-white/60">Instant Processing</div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-secondary/50 transition-smooth">
              <Cpu className="w-12 h-12 text-secondary" />
              <div className="text-center">
                <div className="font-semibold text-white mb-1">GPU Accelerated</div>
                <div className="text-sm text-white/60">High Performance</div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-smooth">
              <Shield className="w-12 h-12 text-primary" />
              <div className="text-center">
                <div className="font-semibold text-white mb-1">99.9% SLA</div>
                <div className="text-sm text-white/60">Guaranteed Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-background-dark/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="card-dark p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Join thousands of companies already using our AI solutions to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#contact"
                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:brightness-110 transition-smooth shadow-lg shadow-primary/20"
              >
                Start Free Trial
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-smooth"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">TechAI</span>
              </div>
              <p className="text-white/60 text-sm">
                Enterprise AI solutions for the modern business.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="#" className="hover:text-white transition-smooth">Machine Learning</Link></li>
                <li><Link href="#" className="hover:text-white transition-smooth">Natural Language AI</Link></li>
                <li><Link href="#" className="hover:text-white transition-smooth">Computer Vision</Link></li>
                <li><Link href="#" className="hover:text-white transition-smooth">Automation</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="#" className="hover:text-white transition-smooth">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-smooth">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-smooth">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-smooth">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="#" className="hover:text-white transition-smooth">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-smooth">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white transition-smooth">Security</Link></li>
                <li><Link href="#" className="hover:text-white transition-smooth">Compliance</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-white/60 text-sm">© 2025 TechAI. All rights reserved.</span>
              <div className="flex gap-6">
                <Link href="#" className="text-white/60 hover:text-white text-sm transition-smooth">
                  Twitter
                </Link>
                <Link href="#" className="text-white/60 hover:text-white text-sm transition-smooth">
                  LinkedIn
                </Link>
                <Link href="#" className="text-white/60 hover:text-white text-sm transition-smooth">
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export const dynamic = 'force-dynamic';

const templates = [
  {
    id: 'restaurant',
    name: 'Italian Restaurant',
    category: 'Food & Dining',
    image: '/generated/preview-restaurant.png',
    prompt: 'Build a restaurant website with menu showcase, online ordering, and reservation system',
    features: ['Menu Display', 'Online Orders', 'Reservations', 'Location Map'],
  },
  {
    id: 'tech',
    name: 'SaaS Dashboard',
    category: 'Technology',
    image: '/generated/preview-tech.png',
    prompt: 'Create a tech startup landing page with product features, pricing table, and testimonials',
    features: ['Feature Showcase', 'Pricing Table', 'Testimonials', 'CTA Sections'],
  },
  {
    id: 'cafe',
    name: 'Coffee Shop',
    category: 'Food & Dining',
    image: '/generated/preview-cafe.png',
    prompt: 'Design a cozy cafe website with ambiance photos, menu items, and opening hours',
    features: ['Photo Gallery', 'Menu Items', 'Hours', 'Contact Info'],
  },
  {
    id: 'fitness',
    name: 'Fitness Center',
    category: 'Health & Fitness',
    image: '/generated/preview-fitness.png',
    prompt: 'Build a fitness gym website with class schedules, trainer profiles, and membership plans',
    features: ['Class Schedule', 'Trainers', 'Pricing', 'Sign Up Forms'],
  },
];

const promptExamples = [
  {
    category: 'E-Commerce',
    prompts: [
      'Build an online boutique with product catalog and shopping cart',
      'Create a fashion store with size guides and wishlist functionality',
      'Design a jewelry shop with high-quality image galleries',
    ],
  },
  {
    category: 'Professional Services',
    prompts: [
      'Build a law firm website with attorney bios and practice areas',
      'Create a consulting agency site with case studies and client testimonials',
      'Design an accounting firm website with service packages',
    ],
  },
  {
    category: 'Creative Portfolio',
    prompts: [
      'Build a photographer portfolio with full-screen image galleries',
      'Create a graphic designer showcase with project case studies',
      'Design an artist portfolio with exhibition history',
    ],
  },
  {
    category: 'Hospitality',
    prompts: [
      'Build a hotel website with room bookings and virtual tours',
      'Create a bed & breakfast site with availability calendar',
      'Design a spa website with treatment menus and booking',
    ],
  },
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/generated/logo.png"
                alt="BUILD.AI"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-white">BUILD.AI</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-white/80 hover:text-white transition-smooth">
                Home
              </Link>
              <Link href="/generator" className="text-white/80 hover:text-white transition-smooth">
                Generator
              </Link>
              <Link href="/templates" className="text-white hover:text-white transition-smooth">
                Templates
              </Link>
            </nav>

            <Link
              href="/generator"
              className="px-6 py-2.5 bg-primary text-white rounded-md font-medium hover:brightness-110 transition-smooth"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary font-medium text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Template Gallery
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Choose Your Template
            <br />
            or Start from Scratch
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Browse our collection of professionally designed templates or use our AI to create
            something completely custom for your business.
          </p>
        </div>

        {/* Template Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {templates.map((template) => (
              <div
                key={template.id}
                className="card-dark overflow-hidden group hover:scale-105 transition-smooth cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={template.image}
                    alt={template.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
                    <Link
                      href="/generator"
                      className="w-full px-6 py-3 bg-primary text-white rounded-md font-semibold hover:brightness-110 transition-smooth flex items-center justify-center gap-2"
                    >
                      Use This Template
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white">{template.name}</h3>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      {template.category}
                    </span>
                  </div>
                  <p className="text-white/70 mb-4 text-sm">{template.prompt}</p>
                  <div className="flex flex-wrap gap-2">
                    {template.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-white/5 text-white/80 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prompt Examples */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-full text-secondary font-medium text-sm mb-6">
              <Zap className="w-4 h-4" />
              Prompt Ideas
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Inspiration? Try These Prompts
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Use these example prompts with our AI generator to create the perfect website for
              your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promptExamples.map((category) => (
              <div key={category.category} className="card-dark p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.prompts.map((prompt, idx) => (
                    <li
                      key={idx}
                      className="group cursor-pointer p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-smooth"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-semibold flex-shrink-0">
                          {idx + 1}.
                        </span>
                        <p className="text-white/80 group-hover:text-white text-sm flex-1">
                          {prompt}
                        </p>
                        <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-smooth flex-shrink-0" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center card-dark p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Website?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Choose a template to customize or let our AI create something unique based on your
            specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/generator"
              className="px-8 py-4 bg-primary text-white rounded-md font-semibold text-lg hover:brightness-110 transition-smooth inline-flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Start with AI Generator
            </Link>
            <Link
              href="/templates"
              className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-md font-semibold text-lg hover:bg-white/20 transition-smooth inline-flex items-center justify-center gap-2"
            >
              Browse All Templates
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/generated/logo.png"
                alt="BUILD.AI"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-white/80 text-sm">© 2025 BUILD.AI. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <Link
                href="/templates"
                className="text-white/60 hover:text-white text-sm transition-smooth"
              >
                Privacy
              </Link>
              <Link
                href="/templates"
                className="text-white/60 hover:text-white text-sm transition-smooth"
              >
                Terms
              </Link>
              <Link
                href="/templates"
                className="text-white/60 hover:text-white text-sm transition-smooth"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Zap, Palette } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Header Navigation */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/generated/logo.png"
                alt="BUILD.AI"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-white">BUILD.AI</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/templates" className="text-white/80 hover:text-white transition-smooth">
                Templates
              </Link>
              <Link href="/templates" className="text-white/80 hover:text-white transition-smooth">
                Pricing
              </Link>
              <Link href="/templates" className="text-white/80 hover:text-white transition-smooth">
                Support
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/generator"
                className="px-6 py-2.5 bg-primary text-white rounded-md font-medium hover:brightness-110 transition-smooth"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Launch Your Dream
            <br />
            Website in Minutes
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Answer a few simple questions about your business and watch our AI generate a beautiful,
            professional website instantly. No coding required.
          </p>
          <Link
            href="/generator"
            className="inline-block px-8 py-4 bg-primary text-white rounded-md font-semibold text-lg hover:brightness-110 transition-smooth shadow-lg"
          >
            Start Building for Free
          </Link>
        </div>

        {/* Website Examples Grid */}
        <div className="card-dark p-8 mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">
            AI-Powered Websites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Restaurant Example */}
            <div className="group cursor-pointer">
              <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-smooth">
                <Image
                  src="/generated/preview-restaurant.png"
                  alt="Italian Restaurant Website"
                  width={600}
                  height={400}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-semibold">Italian Restaurant</h3>
                    <p className="text-sm text-white/80">Generated in 2 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Startup Example */}
            <div className="group cursor-pointer">
              <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-smooth">
                <Image
                  src="/generated/preview-tech.png"
                  alt="Tech Startup Website"
                  width={600}
                  height={400}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-semibold">SaaS Dashboard</h3>
                    <p className="text-sm text-white/80">Generated in 3 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cafe Example */}
            <div className="group cursor-pointer">
              <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-smooth">
                <Image
                  src="/generated/preview-cafe.png"
                  alt="Coffee Shop Website"
                  width={600}
                  height={400}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-semibold">Coffee Shop</h3>
                    <p className="text-sm text-white/80">Generated in 2 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fitness Example */}
            <div className="group cursor-pointer">
              <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-smooth">
                <Image
                  src="/generated/preview-fitness.png"
                  alt="Fitness Gym Website"
                  width={600}
                  height={400}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-semibold">Fitness Center</h3>
                    <p className="text-sm text-white/80">Generated in 3 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI-Powered Features */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-12">
            AI-Powered Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-dark text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Smart AI Generation
              </h3>
              <p className="text-white/70">
                Our AI understands your business and creates tailored content, layouts, and designs automatically.
              </p>
            </div>

            <div className="card-dark text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Instant Deployment
              </h3>
              <p className="text-white/70">
                Your website goes live in seconds with optimized hosting, SSL security, and global CDN.
              </p>
            </div>

            <div className="card-dark text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Easy Customization
              </h3>
              <p className="text-white/70">
                Drag, drop, and edit anything. Our intuitive editor gives you full control without code.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <Link
            href="/generator"
            className="inline-block px-8 py-4 bg-primary text-white rounded-md font-semibold text-lg hover:brightness-110 transition-smooth shadow-lg"
          >
            Start Building for Free
          </Link>
        </div>
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
              <Link href="/templates" className="text-white/60 hover:text-white text-sm transition-smooth">
                Privacy
              </Link>
              <Link href="/templates" className="text-white/60 hover:text-white text-sm transition-smooth">
                Terms
              </Link>
              <Link href="/templates" className="text-white/60 hover:text-white text-sm transition-smooth">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

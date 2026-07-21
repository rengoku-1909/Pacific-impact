import NavigationBar from '@/components/sections/navigation-bar';
import Footer from '@/components/sections/footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About This Project</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            A Student's Journey Through History
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi everyone! I am Rian. I'm in 8th grade and this is my Crimson Rise Capstone project. I've always been interested in history, but there are many others who don't share the same passion as me in the subject. I strongly believe I can relate to them benefiting their education.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I love history and I've always been interested in the impacts of World War 2 beyond the West; I would like to look closely at how WW2 impacted Asian countries, including Japan, China, Vietnam and more.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thank you for reading my article!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
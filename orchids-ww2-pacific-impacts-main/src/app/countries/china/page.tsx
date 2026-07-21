import NavigationBar from '@/components/sections/navigation-bar';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function ChinaPage() {
  return (
    <main className="min-h-screen bg-background">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">China</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Civil War and Communist Victory
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6">From War's End to Communist Victory</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Japan's defeat in 1945 didn't bring peace to China—instead, it reignited the civil war between Chiang Kai-shek's Nationalist government (Kuomintang/KMT) and Mao Zedong's Communist forces (CCP). Four years of brutal conflict ended with Communist victory in 1949, fundamentally reshaping East Asian geopolitics and creating the People's Republic of China.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The war's toll on China was devastating. According to estimates, China suffered 14 million casualties during World War II, a number included in the approximately 35 million Chinese people who were killed or wounded during over a decade of Japanese occupation. Out of the thousands of Chinese captured by the Japanese army and made prisoners of war, only 56 were found alive after the war ended—a testament to the brutal treatment endured under occupation.
            </p>
            
            {/* Civil War Image */}
            <div className="my-8 rounded-xl overflow-hidden border shadow-lg">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7/generated_images/historical-photograph-of-chinese-civil-w-074d3a52-20251022123740.jpg"
                alt="Chinese Civil War soldiers 1948"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="bg-muted/50 px-4 py-2">
                <p className="text-sm text-muted-foreground">Communist and Nationalist forces clash during the Chinese Civil War, 1948</p>
              </div>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card border rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-2xl font-bold mb-2">1945-1949</h3>
              <p className="text-sm text-muted-foreground">Civil War</p>
            </div>
            <div className="bg-card border rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-2xl font-bold mb-2">Communist Victory</h3>
              <p className="text-sm text-muted-foreground">People's Republic Founded</p>
            </div>
            <div className="bg-card border rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-2xl font-bold mb-2">Land Reform</h3>
              <p className="text-sm text-muted-foreground">Social Revolution</p>
            </div>
          </div>

          {/* Impact Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card border rounded-xl p-6">
              <h4 className="font-semibold mb-2">Political Impact</h4>
              <p className="text-sm text-muted-foreground">One-party communist state, Taiwan split, Cold War alignment</p>
            </div>
            <div className="bg-card border rounded-xl p-6">
              <h4 className="font-semibold mb-2">Economic Impact</h4>
              <p className="text-sm text-muted-foreground">Land redistribution, collectivization, planned economy foundation</p>
            </div>
            <div className="bg-card border rounded-xl p-6">
              <h4 className="font-semibold mb-2">Social Impact</h4>
              <p className="text-sm text-muted-foreground">Class struggle campaigns, landlord elimination, peasant mobilization</p>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-12">
            
            {/* Civil War Resumes */}
            <div>
              <h3 className="text-2xl font-bold mb-4">The Chinese Civil War Resumes</h3>
              <div className="bg-muted/30 rounded-lg p-6 mb-4">
                <h4 className="font-semibold mb-3">1945-1949: Battle for China's Future</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When Japan surrendered, both Nationalist and Communist forces rushed to occupy former Japanese-controlled territories. Despite American mediation efforts led by George Marshall, the fragile truce collapsed by mid-1946, plunging China into full-scale civil war.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Nationalist (KMT) Strengths</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>International recognition</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>American military aid</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Control of major cities</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Superior equipment initially</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Communist (CCP) Strengths</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Popular support in countryside</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Disciplined organization</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Land reform appeal</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Guerrilla warfare expertise</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Communists Won */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Why the Communists Won</h3>
              <div className="space-y-4">
                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Nationalist Weaknesses</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Corruption, inflation, incompetent military leadership, and loss of popular support undermined KMT effectiveness. Hyperinflation destroyed middle-class savings, alienating key constituencies.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Communist Advantages</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Land reform promised peasants their own farms, winning rural support. Strict discipline contrasted with Nationalist corruption. Effective guerrilla tactics wore down KMT forces.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Soviet Support</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Soviet occupation of Manchuria allowed CCP to acquire Japanese weapons and establish bases in China's industrial heartland.
                  </p>
                </div>
              </div>
            </div>

            {/* Founding of PRC */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Founding of the People's Republic</h3>
              <div className="bg-muted/30 rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  On October 1, 1949, Mao Zedong proclaimed the People's Republic of China from Tiananmen Gate in Beijing. Chiang Kai-shek and remaining Nationalist forces retreated to Taiwan, where they established a rival government claiming to represent all China.
                </p>
                
                {/* PRC Founding Image */}
                <div className="my-6 rounded-xl overflow-hidden border shadow-lg">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7/generated_images/historical-photograph-of-mao-zedong-proc-dbd6f2e9-20251022123741.jpg"
                    alt="Mao Zedong proclaiming the People's Republic of China 1949"
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                  />
                  <div className="bg-muted/50 px-4 py-2">
                    <p className="text-sm text-muted-foreground">Mao Zedong proclaims the People's Republic of China at Tiananmen Gate, October 1, 1949</p>
                  </div>
                </div>
                
                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Immediate Consequences</h5>
                  <p className="text-sm text-muted-foreground">
                    The Communist victory shocked Western powers, altered Cold War dynamics in Asia, and set stage for decades of tension across the Taiwan Strait. It also marked emergence of China as a major communist power alongside the Soviet Union.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Key Events Timeline</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold mb-1">August 1945</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">Japan Surrenders</p>
                <p className="text-sm text-muted-foreground">Both KMT and CCP forces race to occupy Japanese-controlled territories. Civil war resumes.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold mb-1">1946-1947</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">Nationalist Offensive Fails</p>
                <p className="text-sm text-muted-foreground">KMT initial military successes followed by Communist counteroffensives. Tide begins turning.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold mb-1">1948-1949</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">Communist Victory</p>
                <p className="text-sm text-muted-foreground">Major battles (Liaoshen, Huaihai, Pingjin) result in decisive Communist victories. KMT collapses.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold mb-1">October 1949</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">People's Republic Founded</p>
                <p className="text-sm text-muted-foreground">Mao proclaims PRC from Tiananmen. Chiang retreats to Taiwan with remaining forces.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold mb-1">1950-1952</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">Land Reform Campaign</p>
                <p className="text-sm text-muted-foreground">Violent redistribution of land eliminates landlord class, wins peasant support for CCP.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold mb-1">1950-1953</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">Korean War</p>
                <p className="text-sm text-muted-foreground">Chinese intervention against UN forces cements Cold War divisions and China's isolation from West.</p>
              </div>
            </div>
          </div>

          {/* Legacy */}
          <div className="mt-16 bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Lasting Legacy</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Communist victory fundamentally reshaped not just China but East Asian geopolitics. The Taiwan Strait divide persists today. The social and economic transformations of 1949-1955 laid groundwork for both the Great Leap Forward's disasters and later reform and opening.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              China's "loss" to communism shocked American policymakers, influencing U.S. Cold War strategy throughout Asia. The question "Who lost China?" haunted American politics for decades. Meanwhile, the PRC's establishment created a second major communist power, initially allied with but later rivaling the Soviet Union.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The post-war period's violent class struggle and revolutionary transformation created traumas that shaped Chinese society for generations, even as economic opening beginning in 1978 moved China in dramatically different directions.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
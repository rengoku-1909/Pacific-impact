import NavigationBar from '@/components/sections/navigation-bar';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function JapanPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Japan</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            From Defeat to Democratic Miracle
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6">Post-War Transformation</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Japan's surrender on August 15, 1945, marked not just the end of World War II but the beginning of one of history's most remarkable national transformations. Under Allied occupation led by General Douglas MacArthur, Japan underwent sweeping political, economic, and social reforms that fundamentally restructured the nation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              World War II left Japan profoundly devastated, reshaping every dimension of its society, politics, and economy. By 1945, an estimated 3.1 million Japanese had died, including about 2.1 million soldiers and over 800,000 civilians. The atomic bombings of Hiroshima and Nagasaki alone killed nearly 200,000 people by the end of 1945, while survivors, known as hibakusha, continued to suffer radiation-related illnesses for decades.
            </p>
            
            {/* MacArthur Image */}
            <div className="my-8 rounded-xl overflow-hidden border shadow-lg">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7/generated_images/historical-photograph-style-image-of-gen-aab2a456-20251022123740.jpg"
                alt="General MacArthur arriving in Japan 1945"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
              <div className="bg-muted/50 px-4 py-2">
                <p className="text-sm text-muted-foreground">Allied occupation begins under General Douglas MacArthur, 1945</p>
              </div>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card border rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-2xl font-bold mb-2">1945-1952</h3>
              <p className="text-sm text-muted-foreground">Allied Occupation</p>
            </div>
            <div className="bg-card border rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-2xl font-bold mb-2">Democratic Constitution</h3>
              <p className="text-sm text-muted-foreground">Foundation of Modern Japan</p>
            </div>
            <div className="bg-card border rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-2xl font-bold mb-2">Economic Reform</h3>
              <p className="text-sm text-muted-foreground">Path to Prosperity</p>
            </div>
          </div>

          {/* Impact Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card border rounded-xl p-6">
              <h4 className="font-semibold mb-2">Political Impact</h4>
              <p className="text-sm text-muted-foreground">Democratic constitution, parliamentary system, pacifist principles</p>
            </div>
            <div className="bg-card border rounded-xl p-6">
              <h4 className="font-semibold mb-2">Economic Impact</h4>
              <p className="text-sm text-muted-foreground">Land reform, zaibatsu dissolution, economic miracle foundation</p>
            </div>
            <div className="bg-card border rounded-xl p-6">
              <h4 className="font-semibold mb-2">Social Impact</h4>
              <p className="text-sm text-muted-foreground">Women's suffrage, educational reform, cultural transformation</p>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-12">
            
            {/* Social Impact Section - NEW */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Social Impact and Transformation</h3>
              <div className="bg-muted/30 rounded-lg p-6 mb-4">
                <h4 className="font-semibold mb-3">A Society Remade</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Beyond the immediate destruction of war, Japan experienced profound social transformation. The announcement of surrender released Japanese citizens from their obligation to repay the Emperor for everything the state had done for them, fundamentally altering the social contract that had governed wartime society.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The war's human cost was staggering: nearly 6 million men from the home islands and empire served in the Japanese military, and 2.12 million died. In Tokyo alone, the March 1945 firebombing killed more than 100,000 civilians in a single night, highlighting the scale of social trauma the population endured.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Dismantling Militaristic Ideology</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Before 1945, Japan's army and navy dominated politics and pushed the country into aggressive expansion. The surrender collapsed this ideology entirely. Intense government control during wartime—including propaganda, community mobilization, surveillance, and social obligations—unraveled after Japan's defeat.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Loss of trust in military leadership among the population</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Emperor's credibility decreased significantly after surrender announcement</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Shift from militarism to peaceful democracy as national identity</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Psychological and Social Trauma</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Millions faced the grief of losing loved ones, while displaced families and starving communities struggled to rebuild their lives. Hibakusha (atomic bomb survivors) faced both physical suffering and social stigma. Yet this very devastation laid the groundwork for determined recovery.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Social Rebuilding and New Norms</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Between 1945 and 1952, the Allied Occupation supported reconstruction. Despite food shortages and economic collapse, communal resilience was evident. Sweeping reforms fostered new social norms emphasizing equality, independent thinking, and democratic participation rather than blind loyalty to the state.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Women's suffrage introduced in 1946, transforming political participation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Land reforms redistributed farmland to nearly 3 million rural families</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Educational reforms emphasized critical thinking and equality</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>By mid-1950s, industrial production surpassed prewar levels</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* New Constitution */}
            <div>
              <h3 className="text-2xl font-bold mb-4">The New Constitution (1947)</h3>
              <div className="bg-muted/30 rounded-lg p-6 mb-4">
                <h4 className="font-semibold mb-3">Foundation of Democratic Japan</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The 1947 Constitution, drafted under MacArthur's direction, fundamentally redefined Japan's political system. Emperor Hirohito transitioned from divine sovereign to symbolic figurehead, while sovereignty was transferred to the Japanese people.
                </p>
              </div>

              {/* Constitution Image */}
              <div className="my-8 rounded-xl overflow-hidden border shadow-lg">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7/generated_images/historical-photograph-of-japanese-civili-ddf34383-20251022123741.jpg"
                  alt="Japanese citizens reading the new democratic constitution 1947"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
                <div className="bg-muted/50 px-4 py-2">
                  <p className="text-sm text-muted-foreground">Japanese citizens learn about their new democratic constitution, 1947</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Article 9: Pacifism</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Japan renounced war and the maintenance of military forces, committing to peaceful resolution of international disputes.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Universal Suffrage</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Women gained voting rights, dramatically expanding democratic participation and transforming political culture.
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Political Purges and Reforms</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Allied authorities removed approximately 200,000 individuals from public office, including military officers, ultranationalists, and wartime government officials. This purge created space for new political leadership committed to democratic principles.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Dismantling of military apparatus and dissolution of armed forces</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>War crimes trials, including the Tokyo Trials (1946-1948)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Reform of educational system to remove militaristic content</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Path to Independence */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Path to Independence</h3>
              <div className="bg-muted/30 rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The San Francisco Peace Treaty (1951) formally ended the Allied occupation, with Japan regaining sovereignty on April 28, 1952. Simultaneously, the U.S.-Japan Security Treaty established a defensive alliance that continues today, allowing American military bases in exchange for security guarantees.
                </p>
                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Key Milestone</h5>
                  <p className="text-sm text-muted-foreground">
                    By 1952, Japan had transformed from militaristic empire to parliamentary democracy, setting the stage for its emergence as a peaceful economic powerhouse.
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
                <p className="text-sm font-medium text-muted-foreground mb-2">Surrender and Occupation Begins</p>
                <p className="text-sm text-muted-foreground">Japan accepts Potsdam Declaration terms. MacArthur arrives to begin Allied occupation.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold mb-1">May 1947</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">New Constitution Takes Effect</p>
                <p className="text-sm text-muted-foreground">Democratic constitution establishes parliamentary democracy, renounces war, guarantees human rights.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold mb-1">1946-1950</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">Major Reforms Implemented</p>
                <p className="text-sm text-muted-foreground">Land redistribution, zaibatsu dissolution, educational reform, and women's suffrage transform society.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold mb-1">1950-1953</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">Korean War Economic Boom</p>
                <p className="text-sm text-muted-foreground">American procurement orders jumpstart economic recovery and industrial rebuilding.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold mb-1">April 1952</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">Sovereignty Restored</p>
                <p className="text-sm text-muted-foreground">San Francisco Peace Treaty takes effect. Japan regains independence while maintaining U.S. alliance.</p>
              </div>
            </div>
          </div>

          {/* Legacy */}
          <div className="mt-16 bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Lasting Legacy</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Japan's post-war transformation established patterns that defined its development for decades. The pacifist constitution shaped foreign policy. Democratic institutions proved resilient. Economic reforms created foundation for the "economic miracle" of the 1960s-1980s.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Yet challenges remained: debates over constitutional revision, particularly Article 9; reconciliation with neighboring nations over wartime actions; and evolution of U.S.-Japan alliance. These issues, rooted in the occupation period, continue shaping Japanese politics and society today.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
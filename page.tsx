import NavigationBar from '@/components/sections/navigation-bar';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function OverviewPage() {
  return (
    <main className="min-h-screen bg-background">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">WW2 Pacific War Overview</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            A Comprehensive Top-Down View of the Pacific Theater
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Why This Website?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm creating this website as part of my Rise Capstone project and because of my personal interest in history, particularly aligned with World War II. I want to explore the effects and afterimages that played out in Asian countries after World War 2 in a simpler and more easily understandable way. I would like to share my passion for history and WW2 in a digestible manner.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I hypothesize that China, Japan, and Vietnam were the countries most affected by WW2, in turn affecting the whole of Asia, and that these countries maintain the most aftermath even today. This website chronicles the effects that the World War 2 Pacific theatre had on these nations, along with Korea and Thailand.
            </p>
          </div>
          
          <div className="space-y-6 mt-12">
            <h2 className="text-3xl font-bold mb-6">The Pacific Theater: 1941-1945</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Pacific War was a major theater of World War II that encompassed a vast geographic area stretching from the Indian Ocean to the central Pacific, and from Southeast Asia to China. Beginning with Japan's attack on Pearl Harbor in December 1941, the conflict would reshape the political, economic, and social landscape of Asia for decades to come.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unlike the European theater, the Pacific War was characterized by island-hopping campaigns, naval battles, and conflicts that directly affected civilian populations across multiple nations. The war's conclusion in 1945 marked not just the end of hostilities, but the beginning of profound transformations across the region.
            </p>
          </div>
        </div>
      </section>

      {/* Key Phases */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Phases of the Pacific War</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <div className="text-2xl font-bold text-primary mb-3">1941-1942</div>
              <h3 className="text-xl font-semibold mb-3">Japanese Expansion</h3>
              <p className="text-muted-foreground">
                Rapid territorial gains across Southeast Asia and the Pacific. Japan captured Singapore, the Philippines, Burma, and numerous Pacific islands, establishing the Greater East Asia Co-Prosperity Sphere.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <div className="text-2xl font-bold text-primary mb-3">1942-1944</div>
              <h3 className="text-xl font-semibold mb-3">Turning Point</h3>
              <p className="text-muted-foreground">
                Allied counteroffensive begins. Key battles at Midway, Guadalcanal, and across the Pacific turn the tide. Island-hopping strategy progressively weakens Japanese positions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <div className="text-2xl font-bold text-primary mb-3">1944-1945</div>
              <h3 className="text-xl font-semibold mb-3">Final Campaigns</h3>
              <p className="text-muted-foreground">
                Liberation of the Philippines, battles for Iwo Jima and Okinawa, and ultimately Japan's surrender following atomic bombings and Soviet entry into the war.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Impact */}
      <section className="py-20">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Regional Impact by Country</h2>
          <div className="space-y-8">
            {/* Japan */}
            <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-blue-600">Japan</h3>
                  <p className="text-muted-foreground mb-4">
                    From militaristic empire to occupied nation, Japan underwent the most dramatic transformation. American occupation (1945-1952) dismantled the military state, introduced democratic reforms, and rewrote the constitution. The country emerged as an economic powerhouse and U.S. ally in the Pacific.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>Complete demilitarization and democratic constitution</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>Land reforms and women's suffrage</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>Economic recovery through Marshall-style aid</span>
                    </li>
                  </ul>
                </div>
                <Link href="/countries/japan" className="shrink-0">
                  <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors group">
                    Explore Japan
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>

            {/* China */}
            <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-red-600">China</h3>
                  <p className="text-muted-foreground mb-4">
                    Japan's invasion and occupation (1937-1945) devastated China, but the war's end triggered a civil war between Nationalists and Communists. The Communist victory in 1949 established the People's Republic of China, fundamentally altering the nation's political and economic trajectory.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>Civil War (1945-1949) and Communist victory</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>Establishment of People's Republic of China</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>Land reforms and socialist transformation</span>
                    </li>
                  </ul>
                </div>
                <Link href="/countries/china" className="shrink-0">
                  <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors group">
                    Explore China
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Korea */}
            <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-green-600">Korea</h3>
                  <p className="text-muted-foreground mb-4">
                    Liberation from 35 years of Japanese colonial rule brought hope, but Cold War divisions led to partition at the 38th parallel. The Korean War (1950-1953) cemented the split, creating two distinct nations with vastly different political and economic systems.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>Division at 38th parallel (Soviet/US occupation)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>Korean War (1950-1953) and permanent division</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>Separate development: capitalism vs. communism</span>
                    </li>
                  </ul>
                </div>
                <Link href="/countries/korea" className="shrink-0">
                  <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors group">
                    Explore Korea
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Vietnam */}
            <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-yellow-600">Vietnam</h3>
                  <p className="text-muted-foreground mb-4">
                    Japanese occupation displaced French colonial rule, empowering nationalist movements. The power vacuum after Japan's surrender sparked independence movements, leading to the First Indochina War and eventually the Vietnam War decades later.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>End of French colonial rule and independence struggle</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>First Indochina War (1946-1954)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>Division at Geneva Conference (1954)</span>
                    </li>
                  </ul>
                </div>
                <Link href="/countries/vietnam" className="shrink-0">
                  <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors group">
                    Explore Vietnam
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Thailand */}
            <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-purple-600">Thailand</h3>
                  <p className="text-muted-foreground mb-4">
                    The only Southeast Asian nation to avoid colonization, Thailand navigated the war through complex diplomacy. Its forced alliance with Japan and subsequent post-war positioning shaped its role as a key U.S. ally during the Cold War.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>Maintained sovereignty through strategic diplomacy</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>Post-war alignment with Western powers</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>Economic development and modernization</span>
                    </li>
                  </ul>
                </div>
                <Link href="/countries/thailand" className="shrink-0">
                  <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors group">
                    Explore Thailand
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lasting Legacy */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Lasting Legacy</h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Pacific War's conclusion in 1945 was not an ending, but a beginning. The decade that followed (1945-1955) saw unprecedented political, economic, and social transformations across the region. Colonial empires collapsed, new nations emerged, and the Cold War's arrival created new divisions and alliances.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              These transformations continue to shape modern Asia. Japan's pacifist constitution, the division of Korea, China's Communist government, and Southeast Asian independence movements all trace their origins to the immediate post-war period. Understanding this critical decade is essential to comprehending contemporary Asian politics, economics, and international relations.
            </p>
            <div className="pt-8 text-center">
              <Link href="/timeline">
                <button className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors group">
                  View Complete Timeline
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
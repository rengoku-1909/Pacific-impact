import NavigationBar from '@/components/sections/navigation-bar';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function KoreaPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Korea</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Division, War, and Divergent Destinies
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6">Korea</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Japan's surrender in August 1945 ended 35 years of brutal colonial rule over Korea, but liberation did not bring unity. Instead, the Korean peninsula became a Cold War battleground, divided at the 38th parallel between Soviet and American occupation zones. This temporary administrative division hardened into permanent separation, culminating in the devastating Korean War (1950-1953).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The impacts of WW2 on Korea are particularly interesting because it led up to the development of the Korean War.
            </p>
          </div>

          {/* Three Clear Points */}
          <div className="space-y-12">
            
            {/* Point 1: End of Japanese Colonial Rule */}
            <div className="bg-white rounded-xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-4">End of Japanese Colonial Rule (1910–1945)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Liberation from Japanese rule in August 1945 left Korea in a state of political chaos, as the withdrawal of Japanese authorities created an immediate power vacuum and a scramble to establish new leadership. The U.S. and the Soviet Union divided the peninsula at the 38th parallel for administrative purposes, each supporting rival governments: the American-backed Republic of Korea in the South, and the Soviet-backed Democratic People's Republic of Korea in the North. The original intention was a temporary occupation and trusteeship, but Cold War tensions made unification impossible. Separate elections held in 1948 formalized the division, with Syngman Rhee elected president in the South and Kim Il Sung taking power in the North, setting the stage for the enduring separation and eventual outbreak of the Korean War.
              </p>
            </div>

            {/* Point 2: Division of the Peninsula */}
            <div className="bg-white rounded-xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Division of the Peninsula</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the days after Japan's surrender, the Allied powers moved quickly:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                  <span className="text-muted-foreground"><strong>Soviet Union:</strong> Occupied the north</span>
                </li>
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                  <span className="text-muted-foreground"><strong>United States:</strong> Occupied the south</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                They agreed to divide Korea temporarily along the 38th parallel for the purpose of accepting Japan's surrender. What began as an administrative line soon hardened into a political and ideological frontier.
              </p>
            </div>

            {/* Point 3: Path to Korean War */}
            <div className="bg-white rounded-xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-4">The Path to the Korean War</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The division at the 38th parallel created two opposing Korean states with radically different political systems:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold mb-2">North Korea</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Communist government under Kim Il-sung</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Soviet military and economic support</span>
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold mb-2">South Korea</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Republic under Syngman Rhee</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>American military and economic aid</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                On June 25, 1950, North Korean forces invaded South Korea, triggering the Korean War. The conflict drew in major powers—the United States led UN forces supporting the South, while China intervened on behalf of the North. The war ended in 1953 with an armistice, but no peace treaty was ever signed. The peninsula remains divided to this day, with the Demilitarized Zone (DMZ) serving as a stark reminder of the unresolved conflict that began with WWII's end.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
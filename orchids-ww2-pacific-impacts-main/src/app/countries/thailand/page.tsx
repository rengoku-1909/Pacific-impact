import NavigationBar from '@/components/sections/navigation-bar';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function ThailandPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Thailand</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Strategic Independence and Cold War Alignment
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6">Thailand</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Thailand (known as Siam until 1939) was the only Southeast Asian nation never colonized by European powers. During World War II, it navigated complex diplomacy through a nominal alliance with Japan while maintaining internal resistance, allowing it to preserve sovereignty and avoid the devastating consequences faced by its neighbors.
            </p>
          </div>

          {/* Three Clear Points */}
          <div className="space-y-12">
            
            {/* Point 1: Political Alliance with Japan */}
            <div className="bg-white rounded-xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Political</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Thailand initially declared neutrality but allied with Japan, allowing Japanese troop movements to British Malaya and Burma.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                During the war, the authoritarian government under Prime Minister Plaek Phibunsongkhram promoted nationalism and militarism and pursued territorial expansion in neighboring countries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                During the war, the authoritarian government under Prime Minister Plaek Phibunsongkhram aggressively promoted nationalism and militarism as cornerstones of its domestic and foreign policy. Emphasizing a unified national identity and military strength, the regime sought to restore Thailand's prestige and expand its influence in the region. Leveraging the opportunity presented by Japanese expansion and the weakening of European colonial powers, Thailand pursued territorial expansion into neighboring countries such as Laos, Cambodia, and parts of Malaysia, reclaiming lands lost in previous colonial conflicts. Thailand allied with Japan during World War II, allowing Japanese troops to use its territory and regaining disputed lands. This alliance led Thailand to declare war on the Allies, while also sparking internal resistance against the pro-Japanese government. This included a series of border conflicts with French Indochina, which were partially driven by a desire to reclaim historically Thai territories.
              </p>
              <div className="mt-4">
                <a 
                  href="https://www.thesecondworldwar.org/the-axis-powers/thailand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  Source: The Second World War - Thailand and the Axis Powers ↗
                </a>
              </div>
            </div>

            {/* Point 2: Free Thai Movement */}
            <div className="bg-white rounded-xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-4">The Influence of the Free Thai Movement in Post-War Negotiations</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Free Thai Movement was a significant internal resistance group that opposed the Japanese occupation and the pro-Japanese government during World War II. Supported by Allied intelligence agencies such as the OSS and British Force 136, the movement provided crucial military intelligence and engaged in activities including espionage and sabotage.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Its efforts helped engineer the downfall of Prime Minister Plaek Phibunsongkhram's regime in 1944 and positioned Thailand favorably in the eyes of the Allies. As a result, during post-war peace talks, the Allies—particularly the United States—considered Thailand more leniently, allowing the country to avoid harsh penalties despite its wartime alliance with Japan.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This resistance thus played a key role in safeguarding Thailand's sovereignty and political stability after the war.
              </p>
              <div className="mt-4">
                <a 
                  href="https://www.cambridge.org/core/books/abs/legacies-of-world-war-ii-in-south-and-east-asia/world-war-ii-and-thailand-after-sixty-years-legacies-and-latent-side-effects/110EA58EE0C5A671CD1B2EBD8E89A481"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  Source: Cambridge - Legacies of World War II in South and East Asia ↗
                </a>
              </div>
            </div>

            {/* Point 3: Post-War Democracy */}
            <div className="bg-white rounded-xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Post-War Democracy and Political Instability</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                After World War II, the removal of Phibunsongkhram ushered in a brief democratic era led by Pridi Banomyong, who became Thailand's first democratically elected prime minister in 1946 and oversaw the adoption of a new constitution aiming for a fully elected legislature.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                However, this period of reform was marred by political polarization and elite rivalries, quickly destabilizing civilian rule. Accusations against Pridi after King Ananda Mahidol's mysterious death, poor economic conditions, and strong military factions led to coups, suppression of democratic movements, and Pridi's exile. Military influence persisted, and subsequent power struggles set the stage for further instability and authoritarian resurgence in Thailand's post-war politics.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
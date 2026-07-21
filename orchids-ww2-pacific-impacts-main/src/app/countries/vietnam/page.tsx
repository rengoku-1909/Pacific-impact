import NavigationBar from '@/components/sections/navigation-bar';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function VietnamPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Vietnam</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Struggle for Independence and Unification
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6">From Colonial Rule to Independence</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              World War II shattered French colonial control over Indochina, creating an opportunity for Vietnamese nationalists. When Japan surrendered in August 1945, Ho Chi Minh declared independence, but France's attempt to reassert control sparked the First Indochina War (1946-1954). The conflict's resolution—temporary partition at the 17th parallel—set the stage for escalating American involvement and the devastating Vietnam War (1955-1975).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vietnam's post-WW2 history is defined by continuous warfare spanning three decades, followed by reunification under communist rule in 1975. The wars killed millions, devastated the country, and left lasting impacts on Vietnamese society, American politics, and Cold War dynamics. Today, Vietnam has emerged as a rapidly developing nation, having moved from wartime devastation to market-oriented economic growth while maintaining one-party communist rule.
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card border rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-2xl font-bold mb-2">1945-1954</h3>
              <p className="text-sm text-muted-foreground">French Indochina War</p>
            </div>
            <div className="bg-card border rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-2xl font-bold mb-2">1955-1975</h3>
              <p className="text-sm text-muted-foreground">Vietnam War</p>
            </div>
            <div className="bg-card border rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-2xl font-bold mb-2">1975-Present</h3>
              <p className="text-sm text-muted-foreground">Reunified Vietnam</p>
            </div>
          </div>

          {/* Impact Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card border rounded-xl p-6">
              <h4 className="font-semibold mb-2">Political Impact</h4>
              <p className="text-sm text-muted-foreground">Communist victory unified nation, influenced American Cold War policy</p>
            </div>
            <div className="bg-card border rounded-xl p-6">
              <h4 className="font-semibold mb-2">Economic Impact</h4>
              <p className="text-sm text-muted-foreground">War devastation followed by Doi Moi reforms and rapid growth</p>
            </div>
            <div className="bg-card border rounded-xl p-6">
              <h4 className="font-semibold mb-2">Social Impact</h4>
              <p className="text-sm text-muted-foreground">Millions killed, families divided, environmental damage, refugee crisis</p>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-12">
            
            {/* Japanese Occupation Impact */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Japanese Occupation and Its Aftermath (1940-1945)</h3>
              <div className="bg-muted/30 rounded-lg p-6 mb-4">
                <h4 className="font-semibold mb-3">Exploitation and Oppression Under Japanese Rule</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Prior to World War II, Vietnam had been under French colonial rule since the late 19th century. When Japan occupied French Indochina in 1940, they initially left French administrators in place but gradually took direct control. The Japanese occupation brought devastating consequences that would fundamentally reshape Vietnamese society and politics.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Economic Exploitation and Famine</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Vietnam was ruthlessly exploited as a supply base for Japanese military campaigns throughout Southeast Asia. The Japanese military requisitioned rice and other crops to feed their armies, severely disrupting the economy and food logistics.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Forced conversion of rice paddies to jute and other war materials</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>The Vietnamese Famine of 1945 killed an estimated 1-2 million people in the north</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Food stocks diverted to Japanese military while population starved</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Infrastructure destruction from Allied bombing compounded the crisis</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Atrocities and Repression</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Japanese forces committed widespread atrocities against the Vietnamese population, including pillaging, burning villages, and massacring civilians. This brutal treatment deepened resentment among locals and fueled resistance movements.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Harsh repression of any Vietnamese resistance or dissent</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Forced labor conscription for military projects</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Village destruction campaigns in areas suspected of harboring resistance</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Rise of Vietnamese Nationalism and the Viet Minh</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    The chaos and brutality of Japanese occupation created a power vacuum that allowed resistance movements to flourish. The Viet Minh, led by Ho Chi Minh, gained significant strength by organizing peasants, providing relief during the famine, and fighting against both Japanese and French colonial forces.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Viet Minh provided famine relief, building popular support</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Japanese occupation dismantled many French colonial economic structures</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>This enabled Vietnamese demands for independence after the war</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>By August 1945, Viet Minh controlled much of rural Vietnam</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* First Indochina War */}
            <div>
              <h3 className="text-2xl font-bold mb-4">First Indochina War (1946-1954)</h3>
              <div className="bg-muted/30 rounded-lg p-6 mb-4">
                <h4 className="font-semibold mb-3">France's Failed Attempt to Reclaim Colony</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  After declaring independence in September 1945, Ho Chi Minh's Viet Minh government faced French forces determined to restore colonial rule. Initial negotiations collapsed, and full-scale war erupted in December 1946. The conflict combined guerrilla warfare with conventional battles, culminating in the decisive Battle of Dien Bien Phu (1954).
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Viet Minh Strategy</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Guerrilla tactics and popular mobilization</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Chinese communist support after 1949</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Nationalist appeal resonated with population</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Geneva Conference (1954)</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    After Dien Bien Phu's fall, the Geneva Accords temporarily divided Vietnam at the 17th parallel. Ho Chi Minh's government controlled the North, while a non-communist government led by Ngo Dinh Diem ruled the South. Planned reunification elections never occurred, as Diem refused to participate, fearing communist victory.
                  </p>
                </div>
              </div>
            </div>

            {/* Vietnam War */}
            <div>
              <h3 className="text-2xl font-bold mb-4">The Vietnam War (1955-1975)</h3>
              <div className="bg-muted/30 rounded-lg p-6 mb-4">
                <h4 className="font-semibold mb-3">America's Longest War</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  What began as American advisory support for South Vietnam escalated into massive military intervention. By 1968, over 500,000 U.S. troops were deployed. Despite superior firepower, American forces struggled against guerrilla tactics and faced growing domestic opposition. The war expanded into Cambodia and Laos, destabilizing the entire region.
                </p>
              </div>

              {/* Vietnam War Image */}
              <div className="my-8 rounded-xl overflow-hidden border shadow-lg">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7/generated_images/historical-photograph-of-vietnam-war-era-f98b3dbf-20251022123740.jpg"
                  alt="Vietnam War 1960s-1970s"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
                <div className="bg-muted/50 px-4 py-2">
                  <p className="text-sm text-muted-foreground">The Vietnam War brings devastation to the Vietnamese countryside, 1960s-1970s</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Major Turning Points</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Tet Offensive (1968) shocked American public</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>My Lai Massacre exposed war atrocities</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Nixon's Vietnamization policy began U.S. withdrawal</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Devastating Impact</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>1-3 million Vietnamese killed</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>58,000 American troops died</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Agent Orange and bombing left lasting damage</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border rounded-lg p-4">
                <h5 className="font-semibold mb-2">Fall of Saigon (1975)</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  After American withdrawal following the Paris Peace Accords (1973), North Vietnamese forces launched a final offensive. Saigon fell on April 30, 1975, ending the war. Dramatic images of helicopters evacuating the last Americans from the U.S. Embassy symbolized America's first major military defeat.
                </p>
              </div>

              {/* Fall of Saigon Image */}
              <div className="my-8 rounded-xl overflow-hidden border shadow-lg">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7/generated_images/historical-photograph-of-fall-of-saigon--c92a872d-20251022123740.jpg"
                  alt="Fall of Saigon April 1975"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
                <div className="bg-muted/50 px-4 py-2">
                  <p className="text-sm text-muted-foreground">The Fall of Saigon marks the end of the Vietnam War, April 30, 1975</p>
                </div>
              </div>
            </div>

            {/* Reunified Vietnam */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Reunified Vietnam: Challenges and Transformation</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Post-War Reconstruction (1975-1986)</h4>
                  <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2">Initial Hardships</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        Reunification under communist rule in 1976 brought immense challenges. The new government imposed harsh re-education camps on former South Vietnamese officials and soldiers. Economic mismanagement, international isolation, and war with Cambodia (1978-1979) and China (1979) worsened conditions.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>Over 1 million "boat people" fled as refugees</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>Collectivization policies damaged agriculture</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>American embargo isolated economy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">Doi Moi Reforms (1986-Present)</h4>
                  <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2">Economic Liberalization</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        Recognizing economic failure, the Communist Party launched Doi Moi ("Renovation") reforms in 1986. These market-oriented policies—similar to China's reforms—transformed Vietnam's economy while maintaining political control under one-party rule.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>Shift from command economy to market socialism</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>Foreign investment encouraged</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>Vietnam became major exporter and manufacturing hub</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>Normalized relations with U.S. (1995) and joined WTO (2007)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Key Events Timeline</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold mb-1">September 1945</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">Independence Declared</p>
                <p className="text-sm text-muted-foreground">Ho Chi Minh proclaims independence. France refuses to recognize, leading to conflict.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold mb-1">1946-1954</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">First Indochina War</p>
                <p className="text-sm text-muted-foreground">Viet Minh defeat France. Geneva Accords divide Vietnam at 17th parallel.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold mb-1">1955-1964</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">Growing American Involvement</p>
                <p className="text-sm text-muted-foreground">U.S. supports South Vietnam. Insurgency grows. Gulf of Tonkin incident triggers escalation.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold mb-1">1965-1973</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">Full-Scale American War</p>
                <p className="text-sm text-muted-foreground">Massive U.S. troop deployment. Tet Offensive (1968) turns American opinion. Paris Peace Accords (1973) end U.S. involvement.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold mb-1">April 1975</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">Fall of Saigon</p>
                <p className="text-sm text-muted-foreground">North Vietnamese forces capture Saigon. War ends with communist victory and reunification.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold mb-1">1986</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">Doi Moi Reforms Begin</p>
                <p className="text-sm text-muted-foreground">Market-oriented reforms launched, transforming Vietnam's economy while maintaining communist rule.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold mb-1">1995-Present</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">Integration and Growth</p>
                <p className="text-sm text-muted-foreground">U.S. normalization (1995), ASEAN membership, WTO entry (2007). Rapid economic development continues.</p>
              </div>
            </div>
          </div>

          {/* Legacy */}
          <div className="mt-16 bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Lasting Legacy</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vietnam's thirty-year struggle for independence and unity profoundly shaped modern history. The Vietnam War remains America's most controversial military intervention, influencing U.S. foreign policy for decades through the "Vietnam Syndrome"—reluctance to commit ground forces abroad. The war divided American society, sparked massive protests, and left lasting scars on veterans and civilian populations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For Vietnam, the cost was staggering: millions dead, families torn apart, infrastructure destroyed, and environmental damage (particularly from Agent Orange) that persists today. The boat people refugee crisis dispersed Vietnamese communities worldwide, creating global diaspora populations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Yet Vietnam has achieved remarkable recovery. Doi Moi reforms transformed a war-ravaged command economy into one of Southeast Asia's fastest-growing markets. Today's Vietnam—young, dynamic, and increasingly prosperous—illustrates both the resilience of its people and the long journey from wartime devastation to economic development. The country has normalized relations with former enemies while maintaining its communist political system, offering a unique model of market socialism.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
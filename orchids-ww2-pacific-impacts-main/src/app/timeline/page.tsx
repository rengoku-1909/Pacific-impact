import NavigationBar from '@/components/sections/navigation-bar';
import Footer from '@/components/sections/footer';

export default function TimelinePage() {
  const timelineEvents = [
    {
      date: "August 15, 1945",
      title: "Japan Announces Surrender",
      description: "Emperor Hirohito broadcasts Japan's acceptance of the Potsdam Declaration, ending World War II in the Pacific.",
      country: "Japan",
      impact: "Allied occupation begins under General MacArthur"
    },
    {
      date: "August-September 1945",
      title: "Chinese Civil War Resumes",
      description: "Communist (CCP) and Nationalist (KMT) forces race to occupy Japanese-controlled territories as Japan withdraws.",
      country: "China",
      impact: "Four-year struggle for control of China begins"
    },
    {
      date: "September 2, 1945",
      title: "Japanese Formal Surrender",
      description: "Japan signs surrender documents aboard USS Missouri in Tokyo Bay, formally ending WWII.",
      country: "Japan",
      impact: "Allied occupation officially begins"
    },
    {
      date: "September 8, 1945",
      title: "Korea Divided at 38th Parallel",
      description: "Soviet forces occupy northern Korea, U.S. forces occupy southern Korea, creating temporary division.",
      country: "Korea",
      impact: "Temporary split becomes permanent Cold War division"
    },
    {
      date: "September 1945",
      title: "Vietnam Declares Independence",
      description: "Ho Chi Minh proclaims the Democratic Republic of Vietnam in Hanoi as French colonial rule crumbles.",
      country: "Vietnam",
      impact: "Sets stage for First Indochina War"
    },
    {
      date: "1945-1946",
      title: "Political Purges in Japan",
      description: "Allied authorities remove 200,000+ individuals from public office, including military officers and ultranationalists.",
      country: "Japan",
      impact: "Creates space for new democratic leadership"
    },
    {
      date: "1946",
      title: "First Indochina War Begins",
      description: "Full-scale war erupts between French colonial forces and Viet Minh independence movement.",
      country: "Vietnam",
      impact: "Eight-year conflict results in French defeat"
    },
    {
      date: "May 3, 1947",
      title: "Japanese Constitution Takes Effect",
      description: "New democratic constitution transforms Japan's government, renounces war, guarantees human rights, grants women suffrage.",
      country: "Japan",
      impact: "Foundation of modern democratic Japan"
    },
    {
      date: "1946-1948",
      title: "Tokyo War Crimes Trials",
      description: "International Military Tribunal prosecutes Japanese military and political leaders for war crimes.",
      country: "Japan",
      impact: "Accountability for wartime actions established"
    },
    {
      date: "August 15, 1948",
      title: "Republic of Korea Founded",
      description: "South Korea established with Syngman Rhee as first president under U.S. sponsorship.",
      country: "Korea",
      impact: "North-South division formalized"
    },
    {
      date: "September 9, 1948",
      title: "North Korea Founded",
      description: "Democratic People's Republic of Korea established with Kim Il-sung as premier under Soviet sponsorship.",
      country: "Korea",
      impact: "Two competing Korean governments emerge"
    },
    {
      date: "1948-1949",
      title: "Communist Victory in China",
      description: "Decisive battles (Liaoshen, Huaihai, Pingjin) result in Communist victories and Nationalist collapse.",
      country: "China",
      impact: "KMT retreats to Taiwan, CCP takes mainland"
    },
    {
      date: "October 1, 1949",
      title: "People's Republic of China Founded",
      description: "Mao Zedong proclaims PRC from Tiananmen Gate in Beijing as Nationalists flee to Taiwan.",
      country: "China",
      impact: "Communist China emerges as major power"
    },
    {
      date: "1949-1950",
      title: "Bao Dai Government in Vietnam",
      description: "France establishes State of Vietnam under Emperor Bao Dai to counter Viet Minh.",
      country: "Vietnam",
      impact: "Creates rival Vietnamese government"
    },
    {
      date: "1950-1953",
      title: "Korean War",
      description: "North Korea invades South on June 25, 1950. UN forces intervene, China enters war, fighting ends in stalemate.",
      country: "Korea",
      impact: "Millions killed, division becomes permanent"
    },
    {
      date: "1950-1953",
      title: "Korean War Economic Boom in Japan",
      description: "American procurement orders for Korean War jumpstart Japan's economic recovery and industrial rebuilding.",
      country: "Japan",
      impact: "Foundation for Japan's economic miracle"
    },
    {
      date: "1950-1952",
      title: "Land Reform Campaign in China",
      description: "Violent redistribution of land eliminates landlord class, consolidates Communist control in countryside.",
      country: "China",
      impact: "Fundamental restructuring of rural society"
    },
    {
      date: "September 8, 1951",
      title: "San Francisco Peace Treaty",
      description: "48 nations sign peace treaty with Japan, formally ending Allied occupation and restoring sovereignty.",
      country: "Japan",
      impact: "Japan regains independence April 28, 1952"
    },
    {
      date: "September 8, 1951",
      title: "U.S.-Japan Security Treaty",
      description: "Defensive alliance signed simultaneously with peace treaty, allows U.S. military bases in Japan.",
      country: "Japan",
      impact: "Foundation of postwar U.S.-Japan alliance"
    },
    {
      date: "1950-1954",
      title: "Thailand's Cold War Alignment",
      description: "Thailand aligns firmly with United States, receives military aid, becomes anti-communist bulwark.",
      country: "Thailand",
      impact: "Shapes Thai foreign policy for decades"
    },
    {
      date: "April 28, 1952",
      title: "Japanese Sovereignty Restored",
      description: "San Francisco Peace Treaty takes effect, ending Allied occupation. Japan regains full independence.",
      country: "Japan",
      impact: "Democratic Japan emerges on world stage"
    },
    {
      date: "July 27, 1953",
      title: "Korean War Armistice",
      description: "Fighting ends with armistice agreement, but no peace treaty. DMZ established at 38th parallel.",
      country: "Korea",
      impact: "Korea remains divided to present day"
    },
    {
      date: "May 7, 1954",
      title: "Dien Bien Phu Falls",
      description: "Viet Minh victory over French forces at Dien Bien Phu ends French colonial rule in Indochina.",
      country: "Vietnam",
      impact: "France withdraws from Vietnam"
    },
    {
      date: "July 1954",
      title: "Geneva Accords Divide Vietnam",
      description: "International agreement temporarily divides Vietnam at 17th parallel pending reunification elections.",
      country: "Vietnam",
      impact: "Temporary division becomes permanent split"
    },
    {
      date: "September 1954",
      title: "SEATO Alliance Formed",
      description: "Southeast Asia Treaty Organization established with U.S., Thailand, Philippines and others for regional defense.",
      country: "Thailand",
      impact: "Thailand central to anti-communist alliance"
    },
    {
      date: "1955",
      title: "Republic of Vietnam Established",
      description: "Ngo Dinh Diem consolidates power in South Vietnam with U.S. backing, refuses reunification elections.",
      country: "Vietnam",
      impact: "Sets stage for American involvement"
    }
  ];

  const countryColors = {
    Japan: "bg-blue-500",
    China: "bg-red-500",
    Korea: "bg-green-500",
    Vietnam: "bg-yellow-500",
    Thailand: "bg-purple-500"
  };

  return (
    <main className="min-h-screen bg-background">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Timeline</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Key Events in the Pacific Theater's Post-War Period (1945-1955)
          </p>
        </div>
      </section>

      {/* Timeline Content */}
      <section className="py-20">
        <div className="container max-w-5xl">
          {/* Introduction */}
          <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              The decade following Japan's surrender witnessed dramatic transformations across the Pacific region. 
              From occupation and constitution-making in Japan, to civil war in China, partition in Korea and Vietnam, 
              this timeline traces the interconnected events that reshaped Asia and defined the Cold War in the Pacific.
            </p>
            
            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {Object.entries(countryColors).map(([country, colorClass]) => (
                <div key={country} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${colorClass}`} />
                  <span className="text-muted-foreground">{country}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Events */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            {/* Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -ml-4 flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full ${countryColors[event.country as keyof typeof countryColors]} border-4 border-background shadow-lg`} />
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} ml-12 md:ml-0`}>
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                      {/* Date badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-sm font-medium mb-3 ${
                        index % 2 === 0 ? 'md:float-right md:ml-4' : 'md:float-left md:mr-4'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${countryColors[event.country as keyof typeof countryColors]}`} />
                        {event.date}
                      </div>

                      <h3 className="text-xl font-semibold mb-2 clear-both">{event.title}</h3>
                      <p className="text-muted-foreground mb-3">{event.description}</p>
                      <div className="pt-3 border-t border-border">
                        <p className="text-sm font-medium text-foreground">Impact:</p>
                        <p className="text-sm text-muted-foreground">{event.impact}</p>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-20 text-center">
            <div className="bg-muted/50 rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">A Decade of Transformation</h3>
              <p className="text-muted-foreground leading-relaxed">
                By 1955, the Pacific region had been fundamentally reshaped. Japan emerged as a peaceful democracy 
                and future economic powerhouse. China unified under Communist rule while Taiwan remained in Nationalist 
                hands. Korea's division hardened into permanent separation. Vietnam's partition set the stage for 
                decades of conflict. Thailand navigated independence while aligning with Western powers. These events 
                established patterns that continue shaping East Asian politics, economics, and international relations today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
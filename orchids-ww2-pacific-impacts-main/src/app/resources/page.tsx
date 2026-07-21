import NavigationBar from '@/components/sections/navigation-bar';
import Footer from '@/components/sections/footer';
import { ExternalLink, Book, FileText, Globe } from 'lucide-react';

export default function ResourcesPage() {
  const resources = [
    {
      category: "Primary Sources & Archives",
      icon: FileText,
      items: [
        {
          title: "National Archives - World War II in the Pacific",
          description: "Official U.S. government records and documents from the Pacific War",
          url: "https://www.archives.gov/research/military/ww2/pacific"
        },
        {
          title: "MacArthur Memorial Archives",
          description: "Historical documents and records related to General Douglas MacArthur and the occupation of Japan",
          url: "https://www.macarthurmemorial.org/archives"
        },
        {
          title: "Wilson Center Digital Archive - Cold War in Asia",
          description: "Declassified documents on post-war Asia and the Cold War",
          url: "https://digitalarchive.wilsoncenter.org/"
        }
      ]
    },
    {
      category: "Academic & Historical Resources",
      icon: Book,
      items: [
        {
          title: "Asia-Pacific Journal",
          description: "Peer-reviewed articles on modern Asian history and politics",
          url: "https://apjjf.org/"
        },
        {
          title: "Harvard's Program on US-Japan Relations",
          description: "Research and publications on post-war Japan and U.S.-Japan relations",
          url: "https://programs.wcfia.harvard.edu/us-japan"
        },
        {
          title: "The National WWII Museum - Pacific Theater",
          description: "Educational resources and historical overviews of the Pacific War",
          url: "https://www.nationalww2museum.org/war/pacific-theater"
        },
        {
          title: "Stanford's Asia-Pacific Research Center",
          description: "Contemporary research on Asian political and economic development",
          url: "https://aparc.fsi.stanford.edu/"
        },
        {
          title: "Understanding Daily Life in Wartime Japan (1937-1945)",
          description: "Asian Studies publication on government control, propaganda, and social dynamics in wartime Japan",
          url: "https://www.asianstudies.org/publications/eaa/archives/understanding-daily-life-in-wartime-japan-1937-1945/"
        },
        {
          title: "A New Japan? Political, Economic, and Social Aspects",
          description: "The Atlantic analysis of immediate postwar social conditions and reform policies in Japan",
          url: "https://www.theatlantic.com/magazine/archive/1955/01/a-new-japan-political-economic-and-social-aspects-of-postwar-japan/640465/"
        },
        {
          title: "JICA Research - Japan's Modernization",
          description: "Japan International Cooperation Agency's research on postwar modernization and development",
          url: "https://www.jica.go.jp/Resource/dsp-chair/english/chair/modernization/ku57pq00002mpdct-att/modernization_chapter_03.pdf"
        },
        {
          title: "Bloody Memories: Examining Japan's War Memory",
          description: "Colby College research on Japanese war memory and historical reconciliation",
          url: "https://web.colby.edu/walterhatch/files/2022/03/Hatch_bloody-memories_PC-online_6.14.pdf"
        },
        {
          title: "Legacies of WWII in South and East Asia",
          description: "Cambridge University Press - World War II and Thailand after sixty years",
          url: "https://www.cambridge.org/core/books/abs/legacies-of-world-war-ii-in-south-and-east-asia/world-war-ii-and-thailand-after-sixty-years-legacies-and-latent-side-effects/110EA58EE0C5A671CD1B2EBD8E89A481"
        },
        {
          title: "CIL Singapore - WWII in Asia: Justice & Reparations",
          description: "Centre for International Law's analysis of war memory and justice efforts in Asia",
          url: "https://cil.nus.edu.sg/blogs/the-second-world-war-in-asia-justice-efforts-war-memory-and-reparations/"
        }
      ]
    },
    {
      category: "Books & Publications",
      icon: Book,
      items: [
        {
          title: "\"Embracing Defeat\" by John W. Dower",
          description: "Pulitzer Prize-winning account of Japan after World War II",
          url: "https://www.worldcat.org/title/embracing-defeat-japan-in-the-wake-of-world-war-ii/oclc/38622871"
        },
        {
          title: "\"The Cold War in Asia\" edited by Zheng Yangwen",
          description: "Comprehensive analysis of Cold War's impact on Asian nations",
          url: "https://www.brill.com/view/title/32511"
        },
        {
          title: "\"A History of Modern China\" by Jonathan Fenby",
          description: "Detailed coverage of China's civil war and Communist victory",
          url: "https://www.worldcat.org/title/history-of-modern-china/oclc/1124795869"
        },
        {
          title: "\"The Korean War\" by Bruce Cumings",
          description: "Authoritative history of Korea's division and the Korean War",
          url: "https://www.worldcat.org/title/korean-war-a-history/oclc/644757670"
        }
      ]
    },
    {
      category: "Country-Specific Resources",
      icon: Globe,
      items: [
        {
          title: "Britannica - Aftereffects of WWII on China",
          description: "Video and article on China's post-war challenges and transformation",
          url: "https://www.britannica.com/video/aftereffects-World-War-II-China/-254733"
        },
        {
          title: "National WWII Museum - Liberation of China",
          description: "Articles on China's liberation and the Pacific war's conclusion",
          url: "https://www.nationalww2museum.org/war/articles/liberation-china-and-pacific"
        },
        {
          title: "Britannica - Vietnam: World War II and Independence",
          description: "Comprehensive coverage of Vietnam during WWII and independence movements",
          url: "https://www.britannica.com/place/Vietnam/World-War-II-and-independence"
        },
        {
          title: "Britannica - First Indochina War",
          description: "Detailed history of Vietnam's First Indochina War (1946-1954)",
          url: "https://www.britannica.com/event/First-Indochina-War"
        },
        {
          title: "National WWII Museum - Vietnam War Origins",
          description: "How WWII set the stage for the Vietnam War",
          url: "https://www.nationalww2museum.org/war/articles/vietnam-war"
        },
        {
          title: "Britannica - Japan: World War II and Defeat",
          description: "Japan's wartime experience and the aftermath of defeat",
          url: "https://www.britannica.com/place/Japan/World-War-II-and-defeat"
        },
        {
          title: "U.S. State Department - Japan Reconstruction",
          description: "Official history of Japan's postwar reconstruction and U.S. occupation",
          url: "https://history.state.gov/milestones/1945-1952/japan-reconstruction"
        },
        {
          title: "Berkley Center - Impact of WWII on Modern Japan",
          description: "Georgetown University analysis of WWII's lasting impact on Japanese society",
          url: "https://berkleycenter.georgetown.edu/posts/the-impact-of-world-war-ii-on-modern-japan"
        },
        {
          title: "The Second World War - Thailand and the Axis Powers",
          description: "Historical overview of Thailand's wartime alliance with Japan",
          url: "https://www.thesecondworldwar.org/the-axis-powers/thailand"
        },
        {
          title: "The Collector - Major Players in WWII",
          description: "Overview of countries involved in World War II including Pacific nations",
          url: "https://www.thecollector.com/which-countries-were-major-players-in-world-war-ii/"
        }
      ]
    },
    {
      category: "Educational Websites",
      icon: Globe,
      items: [
        {
          title: "BBC History - World War Two",
          description: "Comprehensive articles and multimedia resources on WWII",
          url: "https://www.bbc.co.uk/history/worldwars/wwtwo/"
        },
        {
          title: "Khan Academy - World History",
          description: "Free educational videos and lessons on 20th century Asian history",
          url: "https://www.khanacademy.org/humanities/world-history"
        },
        {
          title: "Britannica - Pacific War",
          description: "Encyclopedia entries on the Pacific War and post-war developments",
          url: "https://www.britannica.com/event/World-War-II/The-war-in-the-Pacific"
        },
        {
          title: "MIT OpenCourseWare - Modern East Asia",
          description: "University-level course materials on East Asian history",
          url: "https://ocw.mit.edu/courses/history/"
        }
      ]
    },
    {
      category: "Museums & Memorials",
      icon: Globe,
      items: [
        {
          title: "Hiroshima Peace Memorial Museum",
          description: "Museum dedicated to documenting the atomic bombing and promoting peace",
          url: "https://hpmmuseum.jp/?lang=eng"
        },
        {
          title: "National Museum of Korean Contemporary History",
          description: "Covers Korea's modern history including liberation and division",
          url: "https://www.much.go.kr/en/main.do"
        },
        {
          title: "War Remnants Museum (Vietnam)",
          description: "Vietnamese perspective on war history and its aftermath",
          url: "https://www.warremnantsmuseum.com/"
        },
        {
          title: "USS Arizona Memorial",
          description: "Commemorates the attack on Pearl Harbor and honors those who served",
          url: "https://www.nps.gov/valr/index.htm"
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Resources & Citations</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Explore our sources and continue your learning journey
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              This project draws upon a wide range of historical sources, academic research, and educational materials to provide accurate and comprehensive information about World War II's impact on the Pacific region. Below you'll find links to primary sources, scholarly publications, museums, and other educational resources that can help you dive deeper into this fascinating period of history.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a student conducting research, an educator looking for teaching materials, or simply someone interested in learning more, these resources offer valuable perspectives and detailed information about the Pacific War and its lasting consequences.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-6xl">
          <div className="space-y-16">
            {resources.map((category, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-8">
                  <category.icon className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">{category.category}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIdx) => (
                    <a
                      key={itemIdx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white rounded-xl p-6 border shadow-sm hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation Guidelines */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">How to Cite This Project</h2>
          <div className="bg-white rounded-xl p-8 border shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">MLA Format:</h3>
                <p className="text-muted-foreground font-mono text-sm bg-muted/50 p-4 rounded">
                  "WW2 Pacific Impact: Exploring the Lasting Effects of World War II on Pacific Nations." 
                  WW2 Pacific Impact, 2024, ww2-pacific-impact-tracker.vercel.app. Accessed [date].
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">APA Format:</h3>
                <p className="text-muted-foreground font-mono text-sm bg-muted/50 p-4 rounded">
                  WW2 Pacific Impact. (2024). Exploring the Lasting Effects of World War II on Pacific Nations. 
                  Retrieved [date], from https://ww2-pacific-impact-tracker.vercel.app
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Chicago Format:</h3>
                <p className="text-muted-foreground font-mono text-sm bg-muted/50 p-4 rounded">
                  "WW2 Pacific Impact: Exploring the Lasting Effects of World War II on Pacific Nations." 
                  Accessed [date]. https://ww2-pacific-impact-tracker.vercel.app.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Note:</strong> This is an educational project created by an 8th grade student for the Crimson Rise Capstone program. 
              While every effort has been made to ensure accuracy, users should verify information with primary sources for academic research.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
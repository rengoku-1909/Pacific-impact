import { ArrowRight } from "lucide-react";
import Link from "next/link";

const countriesData = [
  {
    name: "Japan",
    description: "From devastation to economic miracle - explore Japan's remarkable transformation after defeat.",
    bullets: ["Occupation reforms", "Economic reconstruction", "Democratic transformation"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7-ww2-pacific-impact-tracker-vercel-app/assets/images/images_1.png",
    link: "/countries/japan",
  },
  {
    name: "China",
    description: "Civil war aftermath and the founding of the People's Republic shaped modern China.",
    bullets: ["Communist victory", "Land reforms", "Nation building"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7-ww2-pacific-impact-tracker-vercel-app/assets/images/images_2.png",
    link: "/countries/china",
  },
  {
    name: "Korea",
    description: "Liberation from Japanese rule led to division and the emergence of two rival states.",
    bullets: ["Post-colonial transition", "38th parallel division", "Cold War tensions"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7-ww2-pacific-impact-tracker-vercel-app/assets/images/images_3.png",
    link: "/countries/korea",
  },
  {
    name: "Vietnam",
    description: "Post-war independence struggles and colonial resistance that defined Southeast Asia.",
    bullets: ["Independence movement", "Colonial resistance", "Regional impact"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7-ww2-pacific-impact-tracker-vercel-app/assets/images/images_4.png",
    link: "/countries/vietnam",
  },
  {
    name: "Thailand",
    description: "Strategic neutrality and diplomatic maneuvering in the post-war Pacific order.",
    bullets: ["Strategic position", "Post-war diplomacy", "Regional stability"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7-ww2-pacific-impact-tracker-vercel-app/assets/images/images_5.png",
    link: "/countries/thailand",
  },
];

const CountryCard = ({ country }: { country: (typeof countriesData)[0] }) => (
  <div className="bg-card text-card-foreground flex flex-col rounded-xl border shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
    <div
      className="h-48 bg-cover bg-center"
      style={{ backgroundImage: `url(${country.image})` }}
      role="img"
      aria-label={`${country.name} landscape`}
    />
    <div className="p-6 flex flex-col flex-1">
      <h3 className="font-semibold text-2xl">{country.name}</h3>
      <p className="text-muted-foreground text-base mt-2">{country.description}</p>
      <ul className="space-y-2 my-6">
        {country.bullets.map((bullet, index) => (
          <li key={index} className="text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <a href={country.link} className="mt-auto">
        <button className="group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 w-full">
          Explore {country.name}
          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
        </button>
      </a>
    </div>
  </div>
);


export default function CountriesGridSection() {
    return (
        <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    Explore by Country
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {countriesData.map((country) => (
                        <CountryCard key={country.name} country={country} />
                    ))}
                </div>
            </div>
        </section>
    );
}
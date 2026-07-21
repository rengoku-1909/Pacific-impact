import React from 'react';

type StatCardProps = {
  title: string;
  description: string;
  content: string;
};

const stats: StatCardProps[] = [
  {
    title: "5",
    description: "Countries Explored",
    content: "In-depth analysis of Japan, China, Korea, Vietnam, and Thailand",
  },
  {
    title: "1945-1955",
    description: "Critical Decade",
    content: "The transformative years that shaped modern Asia",
  },
  {
    title: "∞",
    description: "Lasting Legacy",
    content: "Effects that continue to influence the region today",
  },
];

const StatCard = ({ title, description, content }: StatCardProps) => (
  <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center">
    <div className="grid auto-rows-min items-start gap-1.5 px-6">
      <div className="text-3xl font-bold">{title}</div>
      <div className="text-muted-foreground text-sm">{description}</div>
    </div>
    <div className="px-6">
      <p className="text-sm text-muted-foreground">{content}</p>
    </div>
  </div>
);


const UnderstandingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Understanding the Pacific Theater</h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4 text-left">
            <p>
              World War II profoundly transformed Asian countries politically, economically, and socially. Japan's imperial expansion brought brutal occupation over large parts of China, Southeast Asia, and the Pacific, leading to widespread suffering, forced labor, and atrocities. The war's devastation caused millions of civilian deaths, food shortages, and economic collapse, especially in Southeast Asia, where GDP dropped sharply.
            </p>
            <p>
              The defeat of Japan ended its empire and weakened European colonial powers, facilitating the rise of nationalist movements and independence struggles across Asia. China's Nationalist government weakened and was eventually overtaken by communists, who founded the People's Republic of China in 1949. Japan underwent Allied occupation and reform, adopting demilitarization and democracy.
            </p>
            <p>
              Socially, the war disrupted traditional structures, causing mass displacement, poverty, and trauma. It also mobilized populations toward independence and social change. Women's roles expanded as they participated in war efforts and the workforce, even as many faced violence. Cultural shifts accelerated modernization and demands for education and equality.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnderstandingSection;
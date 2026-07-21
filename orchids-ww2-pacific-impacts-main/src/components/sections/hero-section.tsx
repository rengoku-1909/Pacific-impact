import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative flex h-[600px] items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7-ww2-pacific-impact-tracker-vercel-app/assets/images/images_6.png')",
        }}
      />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          The Pacific War's Lasting Impact
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-200 md:text-2xl">
          Exploring how World War II reshaped nations, societies, and futures
          across the Pacific theater
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/overview">
            <button className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-6 text-lg font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
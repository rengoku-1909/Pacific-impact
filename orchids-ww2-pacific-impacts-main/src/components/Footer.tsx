import Link from "next/link";
import Image from "next/image";

const footerLinks = {
    organization: [
      { name: "About Us", href: "/about" },
      { name: "Programs", href: "/programs" },
      { name: "Events", href: "/events" },
      { name: "Media", href: "/media" },
      { name: "Team", href: "/team" },
    ],
  community: [
    { name: "Instagram", href: "https://instagram.com/wesentrepreneurs" },
    { name: "LinkedIn", href: "https://linkedin.com/company/wesleyan-entrepreneurs" },
    { name: "Membership", href: "https://docs.google.com/forms/d/e/1FAIpQLSfQ_SFHlXJ7gzdQEOwZtLxaKl9WB-Fxk-ESqocfOwQWsdII1g/viewform" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-10 transition-transform hover:scale-[1.02]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WesEntrepreneurLogo_Full_Black-2-resized-1769382885494.webp"
                alt="Wesleyan Entrepreneurs Logo"
                width={280}
                height={56}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-dim-grey font-serif text-xl leading-relaxed max-w-md">
              Wesleyan's premier entrepreneurship organization. Where innovation meets opportunity.
            </p>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold text-eerie-black uppercase tracking-[0.2em] mb-8">Organization</h4>
            <ul className="space-y-5">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-dim-grey hover:text-royal-blue transition-colors font-sans text-[14px] font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-eerie-black uppercase tracking-[0.2em] mb-8">Connect</h4>
            <ul className="space-y-5">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-dim-grey hover:text-royal-blue transition-colors font-sans text-[14px] font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100/60 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[13px] text-dim-grey/50 font-sans font-medium">
            &copy; 2025 Wesleyan Entrepreneurs
          </p>
          <div className="flex gap-10">
            <a href="mailto:officialwesentrepreneurs@gmail.com" className="text-[11px] text-dim-grey/50 hover:text-royal-blue transition-colors font-sans font-bold uppercase tracking-[0.15em]">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

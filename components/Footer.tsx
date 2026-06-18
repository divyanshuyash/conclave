import { Facebook, Instagram, Linkedin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { campaignImages } from "@/lib/images";

const socialLinks: Array<{ label: string; href: string; icon: LucideIcon }> = [
  { label: "Instagram", href: "https://www.instagram.com/shobhitransformer/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/shobhit.singhal3", icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shobhitsinghal93/", icon: Linkedin }
];

export function Footer() {
  return (
    <footer className="border-t border-conclave-gold/15 bg-conclave-black px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <Link href="#" className="relative h-14 w-56 overflow-hidden" aria-label="Shobhit Singhal home">
          <Image
            src={campaignImages.shobhitLogo}
            alt="Shobhit Singhal - The Transformer"
            fill
            className="object-cover object-center"
            sizes="224px"
          />
        </Link>

        <p className="text-xs font-black uppercase tracking-[0.2em] text-conclave-muted">
          Learn · Implement · Earn · Impact
        </p>

        <div className="flex items-center gap-2">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center border border-conclave-gold/30 text-conclave-offwhite/65 transition hover:border-conclave-gold/70 hover:bg-conclave-gold/10 hover:text-conclave-gold"
              >
                <Icon aria-hidden="true" size={18} />
              </a>
            );
          })}
          <span className="ml-2 hidden text-[10px] font-black uppercase tracking-[0.12em] text-conclave-muted xl:inline">
            #ChanakyaConclave2026
          </span>
        </div>
      </div>
    </footer>
  );
}

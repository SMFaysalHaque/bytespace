import Image from "next/image";
import { partners } from "@/data/partners";

const GROUPS = 6;

export function Partners() {
  return (
    <section className="bg-surface overflow-hidden py-20">
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused] motion-reduce:animate-none">
        {Array.from({ length: GROUPS }).map((_, group) => (
          <ul
            key={group}
            aria-hidden={group > 0}
            className="flex shrink-0 items-center gap-x-10 pr-10 lg:gap-x-[72px] lg:pr-[72px]"
          >
            {partners.map((partner) => (
              <li key={`${group}-${partner.id}`}>
                <Image
                  src={partner.logo}
                  alt={group === 0 ? partner.name : ""}
                  width={168}
                  height={41}
                  className="h-8 w-auto lg:h-[41px]"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";

const avatars = [1, 2, 3, 4, 5, 6, 7];

export function HappyStudentsCard() {
  return (
    <div className="flex w-[258px] flex-col gap-2 rounded-2xl bg-white p-4 shadow-xl">
      <div className="flex flex-col">
        <p className="text-ink text-base font-medium">Happy Students</p>
        <div className="flex items-center gap-1">
          <p className="text-xs">
            <span className="text-ink">4.5 </span>
            <span className="text-muted">(240)</span>
          </p>
          <Image src="/images/icons/star.svg" alt="" width={13} height={13} className="size-3.5" />
        </div>
      </div>
      <div className="flex items-center -space-x-4">
        {avatars.map((n) => (
          <span
            key={n}
            className="relative size-[43px] shrink-0 overflow-hidden rounded-full ring-2 ring-white"
          >
            <Image src={`/images/hero/avatars/a${n}.png`} alt="" fill className="object-cover" />
          </span>
        ))}
        <span className="bg-accent text-ink relative flex size-[43px] shrink-0 items-center justify-center rounded-full text-xs font-bold ring-2 ring-white">
          2K+
        </span>
      </div>
    </div>
  );
}

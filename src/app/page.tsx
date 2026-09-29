import { fonts } from "@/config/fonts";

export default function HomePage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="text-center">
        <p
          className={`${fonts.heading.className} text-ink text-4xl font-semibold tracking-tight sm:text-6xl`}
        >
          ByteSpace
        </p>
        <p className="text-muted mt-4 text-lg">Get Access to Hundreds Courses Available</p>
      </div>
    </main>
  );
}

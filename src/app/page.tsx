import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center container mx-auto max-w-5xl h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-zinc-400/90 w-4/5 sm:max-w96 mx-auto text-white">
          <h1 className="text-5xl">
            John&apos;s Computer <br />
            Repair Shoppee
          </h1>
          <address>
            123 Main St <br />
            Anytown, USA 12345
            <p>Open Daily: 9am to 5pm</p>
            <Link href="tel:555-555-5555" className="hover:underline">
              555-555-5555
            </Link>
          </address>
        </div>
      </main>
    </div>
  );
}

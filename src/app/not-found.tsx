import Image from "next/image";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full">
      <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl">Page Not Found</h2>

        <Image
          className="rounded-xl m-0"
          src={"/images/not-found.jpeg"}
          alt="notfound"
          height={300}
          width={300}
        />
      </div>
    </div>
  );
}

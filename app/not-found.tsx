import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0D0D0D] px-6 text-center">
      <p
        className="font-display text-[#E63329]"
        style={{ fontSize: "clamp(5rem, 20vw, 12rem)" }}
      >
        404
      </p>
      <h1 className="mt-2 font-display text-3xl text-white sm:text-4xl">
        PAGE NOT FOUND
      </h1>
      <p className="mt-4 max-w-md text-gray-400">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-[#E63329] px-8 py-3 font-semibold text-white transition-colors hover:bg-red-700"
      >
        Back to Home
      </Link>
    </div>
  );
}

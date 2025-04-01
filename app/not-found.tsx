import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center space-y-6 mt-32">
      <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>
      <p className="text-lg">The page you are looking for doesn't exist.</p>
      <Link href="/" className="inline-block bg-grey-900 px-6 py-3 text-lg text-beige-100">
        Back to Home
      </Link>
    </main>
  );
}

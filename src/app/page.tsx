import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Public route</h1>
      <Link href="/protected-route">Go to protected route</Link>
    </main>
  );
}

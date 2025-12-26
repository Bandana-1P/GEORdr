import Link from "next/link";

export default function Header() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/map">Map</Link>
    </nav>
  );
}

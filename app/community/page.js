import Link from "next/link";

export default function CommunityPage() {
  return (
    <>
      <main>
        <div>Community Page</div>
        <div>
          <Link href="/meals">Go to Meals</Link>
        </div>
        <Link href="/meals/share">Go to Meals Share</Link>
      </main>
    </>
  );
}

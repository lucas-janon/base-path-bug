import Link from "next/link";
import React from "react";


export default function IndexPage() {
  return (
    <div>
      <Link href="/test-b">
        <div>Navigate to /test-b</div>
      </Link>
    </div>
  );
}

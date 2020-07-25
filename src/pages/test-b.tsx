import Link from "next/link";
import React from "react";


export default function TestPage() {
  return (
    <div>
      <Link href="/">
        <div>Navigate to /</div>
      </Link>
    </div>
  );
}

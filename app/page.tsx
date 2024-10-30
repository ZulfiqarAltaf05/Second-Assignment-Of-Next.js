import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>HomePage
      <br />
      <hr />
      <Link href="/header">Go to Header page</Link><br /><hr />
      <Link href="/about">Go to About page</Link>
    </div>
  )
}

export default HomePage
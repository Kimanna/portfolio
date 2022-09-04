import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { config } from "process";
import Seo from "../components/Seo";
import { API_KEY } from "../config";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
console.log("🚀 ~ file: index.tsx ~ line 11 ~ Home ~ Home")

  return (
    <>
      <Seo title="main" />
      <Header></Header>
      <Footer></Footer>

    </>
  );
}

// export async function getServerSideProps() {
//   const { results } = await (
//     await fetch(`http://localhost:3000/api/movies`)
//   ).json();
//   return {
//     props: {
//       results,
//     },
//   };
// }
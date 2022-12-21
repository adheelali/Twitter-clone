import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import { getProviders, getSession, useSession } from "next-auth/react";

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();

  return (
    <div className="">
      <Head>
        <title>Twitter clone</title>
      </Head>
      <main className="flex min-h-screen text-white max-w-[1500px] mx-auto ">
        <Sidebar />
        <Feed />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://jsonkeeper.com/b/NKEV");
  const trendingResults = await res.json();

  const response = await fetch("https://jsonkeeper.com/b/NKEV");
  const followResults = await response.json();

  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}

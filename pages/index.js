import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
import { getProviders, getSession, useSession } from "next-auth/react";

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();
  console.log(session)


  if (!session) return <Login providers={providers}/>

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
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );
  
  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );

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

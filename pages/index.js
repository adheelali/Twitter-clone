import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className=''>
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

import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useSession, getSession, getProviders } from "next-auth/react";
import { useRecoilState } from "recoil";
import Feed from "../components/Feed";
import Model from "../components/Model";
import Sidebar from "../components/Sidebar";
import { modelState } from "../atoms/modelAtom";
import { useRouter } from "next/router";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Login from '..components/Login'

function PostPage({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();
  const [isopen, setIsopen] = useRecoilState(modelState);
  const [post, setPost] = useState();
  const router = useRouter();
  const { id } = router.query;

  if (!session) return <Login providers={providers}/>

  useEffect(
    () =>
      onSnapshot(doc(db, "posts", id), (snapshot) => {
        setPost(snapshot.data());
      }),
    [db]
  );

  useEffect(() => {
    console.log(post)
  }, [post])

  return (
    <div className="">
      <Head>
        <title>{post?.username} on twitter: {post?.text}</title>
      </Head>
      <main className="flex min-h-screen text-white max-w-[1500px] mx-auto ">
        <Sidebar />

        {isopen && <Model />}
      </main>
    </div>
  );
}

export default PostPage;

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

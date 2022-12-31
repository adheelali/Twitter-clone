import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useSession, getSession, getProviders } from "next-auth/react";
import { useRecoilState } from "recoil";
import Feed from "../components/Feed";
import Model from "../components/Model";
import Sidebar from "../components/Sidebar";
import { modelState } from "../atoms/modelAtom";
import { useRouter } from "next/router";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import Login from "../components/Login";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Post from "../components/Post";
import Comment from "../components/Comment";
import Widget from "../components/Widget";

function PostPage({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();
  const [isopen, setIsopen] = useRecoilState(modelState);
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  if (!session) return <Login providers={providers} />;

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => {
          setComments(snapshot.docs);
        }
      ),
    [db, id]
  );

  useEffect(
    () =>
      onSnapshot(doc(db, "posts", id), (snapshot) => {
        setPost(snapshot.data());
      }),
    [db]
  );

  useEffect(() => {
    console.log(post);
  }, [post]);

  return (
    <div className="">
      <Head>
        <title>
          {post?.username} on twitter: {post?.text}
        </title>
      </Head>
      <main className="flex min-h-screen text-white max-w-[1500px] mx-auto ">
        <Sidebar />
        <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
          <div className="flex items-center px-1.5 py-2 border-b border-r border-gray-700 text-[#d9d9d9] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-black">
            <div
              className="hoverAnimation w-9 h-9 felx items-center justify-center xl:px-0"
              onClick={() => router.push("/")}
            >
              <ArrowBackIcon className="h-5 text-white" />
            </div>
            Tweet
          </div>

          <Post id={id} post={post} postPage />

          {comments.length > 0 && (
            <div className="pb-72">
              {comments.map((comment) => (
                <Comment
                  key={comment.id}
                  commentId={comment.id}
                  id={id}
                  comment={comment.data()}
                />
              ))}
            </div>
          )}
        </div>
        <Widget
          trendingResults={trendingResults}
          followResults={followResults}
        />

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

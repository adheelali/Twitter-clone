import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/react";

function Comment({ id, commentId, comment }) {
  const { data: session } = useSession()
  const [likes, setLikes] = useState([]);
  const [liked, setliked] = useState(false);

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "comments", commentId, 'likes'), (snapshot) => {
        setLikes(snapshot.docs);
      }),
    [db, id]
  );

  useEffect(
    () =>
      setliked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );
  
  const likePost = async () => {
    if (liked) {
      await deleteDoc(doc(db, "posts", id, "comments", commentId, 'likes', session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "comments", commentId, 'likes', session.user.uid), {
        username: session.user.name,
      });
    }
  };

  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700">
      <img
        src={comment?.userImg}
        alt=""
        className="h-11 w-11 rounded-full mr-4"
      />
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex justify-between">
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <h4 className="font-bold text-[#d9d9d9] text-[15px] sm:text-base inline-block group-hover:underline">
                {comment?.username}
              </h4>
              <span className="ml-1.5 text-sm sm:text-[15px]">
                @{comment?.tag}{" "}
              </span>
            </div>{" "}
            ·{" "}
            <span className="hover:underline text-sm sm:text-[15px]">
              <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
            </span>
            <p className="scrollbar-hide text-[#d9d9d9] mt-0.5 max-w-lg overflow-scroll text-[15px] sm:text-base">
              {comment?.comment}
            </p>
          </div>
          <div className="icon group flex-shrink-0">
            <MoreHorizIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>

        <div className="text-[#6e767d] flex justify-between w-10/12">
          <div className="icon group">
            <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>

          <div className="flex items-center space-x-1 group" onClick={likePost}>
            <div className="icon group-hover:bg-pink-600/10">
              {liked ? (
                <FavoriteIcon className="h-5 text-pink-600" />
              ) : (
                <FavoriteBorderIcon className="h-5 group-hover:text-pink-600" />
              )}
            </div>
            {likes.length > 0 && (
              <span
                className={`group-hover:text-pink-600 text-sm ${
                  liked && "text-pink-600"
                }`}
              >
                {likes.length}
              </span>
            )}
          </div>

          <div className="icon group">
            <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
          <div className="icon group">
            <BarChartIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;

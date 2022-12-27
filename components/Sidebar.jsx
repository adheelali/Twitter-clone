import SidebarLink from "./SidebarLink";
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import { signOut, useSession } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="hidden p-2 sm:flex flex-col align-center xl:items-start xl:w-[340px] fixed h-full ">
      <div className="flex items-center justify-center w-14 h-14 p-0 hoverAnimation xl:ml-24">
        <img src="https://rb.gy/ogau5a" alt="" width={30} height={30} />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24 ">
        <SidebarLink text="Home" Icon={HomeIcon} />
        <SidebarLink text="Explore" Icon={TagIcon} />
        <SidebarLink text="Notifications" Icon={NotificationsNoneIcon} />
        <SidebarLink text="Messages" Icon={InboxOutlinedIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkBorderOutlinedIcon} />
        <SidebarLink text="Lists" Icon={ListAltOutlinedIcon} />
        <SidebarLink text="Profile" Icon={PersonOutlinedIcon} />
        <SidebarLink text="More" Icon={PendingOutlinedIcon} />
      </div>
      <button
        className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold
       shadow-md hover:bg-[#1a8cd8] "
      >
        Tweet
      </button>
      <div
        className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto"
        onClick={signOut}
      >
        <img
          src={session.user.image}
          className="w-10 h-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="text-[#6e767d]">{session.user.tag}</p>
        </div>
        <MoreHorizIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
}

export default Sidebar;

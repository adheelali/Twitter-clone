import SidebarLink from "./SidebarLink";
import {
  Home,
  Tag,
  NotificationsNone,
  PersonOutlined,
  InboxOutlined,
  BookmarkBorderOutlined,
  PendingOutlined,
  MoreHoriz,
  ListAltOutlined
} from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="hidden p-2 sm:flex flex-col align-center xl:items-start xl:w-[340px] fixed h-full ">
      <div className="flex items-center justify-center w-14 h-14 p-0 hoverAnimation xl:ml-24">
        <img src="https://rb.gy/ogau5a" alt="" width={30} height={30} />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24 ">
        <SidebarLink text="Home" Icon={Home} active />
        <SidebarLink text="Explore" Icon={Tag} />
        <SidebarLink text="Notifications" Icon={NotificationsNone} />
        <SidebarLink text="Messages" Icon={InboxOutlined} />
        <SidebarLink text="Bookmarks" Icon={BookmarkBorderOutlined} />
        <SidebarLink text="Lists" Icon={ListAltOutlined} />
        <SidebarLink text="Profile" Icon={PersonOutlined} />
        <SidebarLink text="More" Icon={PendingOutlined} />
      </div>
      <button
        className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold
       shadow-md hover:bg-[#1a8cd8] "
      >
        Tweet
      </button>
      <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto">
        <img
          src="https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-72.jpg?w=2000"
          className="w-10 h-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">some@</h4>
          <p className="text-[#6e767d]">some@</p>
        </div>
        <MoreHoriz className="h-5 hidden xl:inline ml-10"/>
      </div>
    </div>
  );
}

export default Sidebar;

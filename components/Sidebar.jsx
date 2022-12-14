import SidebarLink from "./SidebarLink";
import {
  Home,
  Tag,
  NotificationsNone,
  Inbox,
  Bookmark,
  Person,
  AdjustOutlinedIcon,
  AssessmentOutlined,
} from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="hidden p-2 sm:flex flex-column align-center xl:items-start xl:w-[340px] fixed h-full ">
      <div className="flex items-center justify-center w-14 h-14 p-0 hoverAnimaiton xl:ml-24">
        <img src="https://rb.gy/ogau5a" alt="" width={30} height={30} />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24 ">
        <SidebarLink text="Home" Icon={Home} />
        {/* <SidebarLink text="Explore" Icon={Tag} />
          <SidebarLink text="Notifications" Icon={NotificationsNone} />
          <SidebarLink text="Messages" Icon={Inbox} />
          <SidebarLink text="Bookmarks" Icon={Bookmark} />
          <SidebarLink text="Lists" Icon={AssessmentOutlined} />
          <SidebarLink text="Profile" Icon={Person} />
          <SidebarLink text="More" Icon={AdjustOutlinedIcon} /> */}
      </div>
    </div>
  );
}

export default Sidebar;

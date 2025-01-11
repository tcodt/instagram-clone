import { Link } from "react-router";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { Avatar, Tooltip, Zoom } from "@mui/material";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} color="white" />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notification",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: (
        <Avatar
          sizes="sm"
          alt="Ramy Sharp"
          src="/profilepic.png"
          className="border border-gray-600 w-[25px] h-[25px] object-contain"
        />
      ),
      text: "Profile",
      link: "/asprogrammer",
    },
  ];

  return (
    <aside className="h-screen border-r border-gray-600 py-6 sticky top-0 left-0 px-2 md:px-4">
      <div className="flex flex-col items-center md:items-start gap-12 w-full h-full">
        <Link to="/" className="pl-2 hidden md:block">
          <InstagramLogo />
        </Link>
        <Link to="/" className="p-2 block md:hidden rounded-md">
          <InstagramMobileLogo />
        </Link>
        <div className="flex flex-col gap-8">
          {sidebarItems.map((item, index) => (
            <Tooltip
              title={item.text}
              placement="right"
              slots={{ transition: Zoom }}
              arrow
              key={index}
              className="flex"
            >
              <Link
                to={item.link || null}
                className="flex items-center justify-center md:justify-start gap-4 hover:bg-gray-600 py-1 px-3 rounded transition"
              >
                {item.icon}{" "}
                <div className="hidden md:block text-white">{item.text}</div>
              </Link>
            </Tooltip>
          ))}
        </div>
        <Tooltip
          title="Logout"
          placement="right"
          slots={{ transition: Zoom }}
          arrow
          className="flex"
        >
          <Link
            to="/auth"
            className="flex items-center justify-center md:justify-start mt-auto gap-4 hover:bg-gray-600 py-1 px-3 rounded transition"
          >
            <BiLogOut size={25} color="white" />
            <div className="hidden md:block text-white">Logout</div>
          </Link>
        </Tooltip>
      </div>
    </aside>
  );
};

export default Sidebar;

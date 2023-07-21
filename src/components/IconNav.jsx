import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  PowerIcon,
  InboxArrowDownIcon,
  UserCircleIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import { Link, Navigate } from "react-router-dom";

export default function IconNav({sesion}) {
  const userImage = "/svg/user.svg"
  return (
    <Menu className="">
      <MenuHandler>
        <Avatar
          variant="circular"
          alt="tania andrew"
          className="cursor-pointer"
          src={sesion ? "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" : userImage}
        />
      </MenuHandler>
      <MenuList className="">
        {/* <Link>
          <MenuItem className="flex items-center gap-2">
            <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
            <Typography variant="small" className="font-normal">
              My Profile
            </Typography>
          </MenuItem>
        </Link> */}
        {sesion ? (
          <>
            <Link to={"/listchat"} className="">
              <MenuItem className="flex items-center gap-2 ">
                <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" />
                <Typography variant="small" className="font-normal">
                  Chats
                </Typography>
              </MenuItem>
            </Link>
            <Link to={"/regchat"}>
              <MenuItem className="flex items-center gap-2">
                <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" />
                <Typography variant="small" className="font-normal">
                  Crear Chat
                </Typography>
              </MenuItem>
            </Link>
            <hr className="my-2 border-blue-gray-50" />
            <Link to={"/logout"}>
              <MenuItem className="flex items-center gap-2 ">
                <PowerIcon strokeWidth={2} className="h-4 w-4" />
                <Typography variant="small" className="font-normal">
                  Sign Out
                </Typography>
              </MenuItem>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <MenuItem className="flex items-center gap-2">
                <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
                <Typography variant="small" className="font-normal">
                  Login
                </Typography>
              </MenuItem>
            </Link>
            <Link to={"/register"}>
              <MenuItem className="flex items-center gap-2">
                <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
                <Typography variant="small" className="font-normal">
                  Register
                </Typography>
              </MenuItem>
            </Link>
          </>
        )}

        {/* <MenuItem className="flex items-center gap-2">
          <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Inbox
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <LifebuoyIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Help
          </Typography>
        </MenuItem> */}
      </MenuList>
    </Menu>
  );
}

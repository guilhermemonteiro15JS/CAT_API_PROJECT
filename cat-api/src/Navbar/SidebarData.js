import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Breeds",
    path: "/breeds",
    icon: <FaIcons.FaCat />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <AiIcons.AiOutlineInfoCircle />,
    cName: "nav-text",
  },
  {
    title: "Votes",
    path: "/votes",
    icon: <FaIcons.FaVoteYea />,
    cName: "nav-text",
  },
  {
    title: "Favorite",
    path: "/favorite",
    icon: <AiIcons.AiOutlineStar />,
    cName: "nav-text",
  },
];

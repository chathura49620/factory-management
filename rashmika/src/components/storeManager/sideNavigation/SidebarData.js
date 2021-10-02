import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Basic Info",
    path: "/basic-info",
    icon: <IoIcons.IoMdPlay />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Items",
    icon: <RiIcons.RiBookmark3Fill />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Item Lists",
        path: "/items",
        icon: <IoIcons.IoIosListBox />,
        cName: "sub-nav",
      },
      {
        title: "Item Records",
        path: "/itemsrecords",
        icon: <RiIcons.RiBarChartFill />,
        cName: "sub-nav",
      },
    ],
  },

  {
    title: "Returned Product",
    path: "/it/new/returned/product",
    icon: <IoIcons.IoMdTime />,
  },

  {
    title: "Wasted Items",
    path: "/it/new/wasted/item",
    icon: <IoIcons.IoMdColorFill />,
  },
  {
    title: "Item Requests",
    path: "/requests/for/items",
    icon: <IoIcons.IoMdPaperPlane />,
  },

  {
    title: "My Profile",
    path: "/myprofile",
    icon: <IoIcons.IoMdPerson />,
  },
];

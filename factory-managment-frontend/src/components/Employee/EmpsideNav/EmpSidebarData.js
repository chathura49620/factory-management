import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const EmpSidebarData = [
  {
    title: 'Dashboard',
    path: '/employee-dashboard',
    icon: <AiIcons.AiOutlineHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <AiIcons.AiOutlineUser />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  {
    title: 'Assignments',
    path: '/assignments',
    icon: <AiIcons.AiOutlineRead />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  {
    title: 'Payments',
    path: '/payments',
    icon: <AiIcons.AiOutlineCreditCard />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  {
    title: 'Leave',
    path: '/leave',
    icon: <AiIcons.AiOutlineSolution />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  {
    title: 'Calendar',
    path: '/calendar',
    icon: <AiIcons.AiOutlineCalendar />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];

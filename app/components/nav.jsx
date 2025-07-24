"use client"

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import logo from '../assets/bar-chart.png'
import Image from "next/image";
export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function App() {
  return (
    <Navbar isBordered className="mb-[50px] -mt-[70px]"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
        <Link href="/" >
           <Image
                src={logo}
                width={40}
                height={30}
                alt="Edit icon"
                className="mr-3"
            />
            <p className="text-xl text-white">Task Tracker</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex -mr-[125px]" justify="center">
        <NavbarItem>
          <Link className="text-emerald-300 text-lg mr-5 pr-2" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-emerald-300 text-lg" href="/tasksPage">
            My tasks
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

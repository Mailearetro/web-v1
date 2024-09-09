"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { Input } from "@/components/ui/input";

import { Separator } from "@/components/ui/separator";
import { MessageSquare, Send, ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function Chat() {
  const links = [
    {
      label: "Inbox",
      href: "#",
      icon: (
        <MessageSquare className="text-[#4b5563] dark:text-neutral-200 h-10 w-10 flex-shrink-0 hover:bg-[#d1d5db] px-2  rounded-md" />
      ),
    },
    {
      label: "inbox",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-10 w-10 flex-shrink-0 hover:bg-[#d1d5db] px-2  rounded-md" />
      ),
    },
    {
      label: "inbox",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-10 w-10 flex-shrink-0 hover:bg-[#d1d5db] px-2  rounded-md" />
      ),
    },
    {
      label: "inbox",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-10 w-10 flex-shrink-0 hover:bg-[#d1d5db] px-2  rounded-md" />
      ),
    },
    {
      label: "inbox",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-10 w-10 flex-shrink-0 hover:bg-[#d1d5db] px-2  rounded-md" />
      ),
    },
    {
      label: "inbox",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-10 w-10 flex-shrink-0 hover:bg-[#d1d5db] px-2  rounded-md" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-[100vh]" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">
            {open ? <Logo /> : <LogoIcon />}
            <div className=" flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full mx-auto"
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <ContactBox />
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      to="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0 " />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      to="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      {/* <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0 mx-auto" /> */}
      <img src="/LogoSVG.svg" alt="" className="h-8 w-8 mx-auto" />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="">
      <div className="h-[53px] bg-white w-[100vw]  px-6 pt-1">
        <div className="flex items-center gap-3">
          <div>
            <img
              src="https://assets.aceternity.com/manu.png"
              alt="Avatar"
              className="h-9 w-9 rounded-full"
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-[#1f2937]">
              John Doe
            </span>
            <p className="text-[12px] font-semibold text-[#38bdf8]">Online</p>
          </div>
        </div>
      </div>

      <div className="px-6 mt-10 max-h-[80vh]">
        <ul className="space-y-5">
          <li className="max-w-lg flex gap-x-2 sm:gap-x-4 me-11">
            <img
              className="inline-block size-9 rounded-full"
              src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
              alt="Avatar"
            />

            <div>
              <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                <h2 className="font-medium text-gray-800 dark:text-white">
                  How can we help?
                </h2>
                <div className="space-y-1.5">
                  <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
                    You can ask questions like:
                  </p>
                  <ul className="list-disc list-outside space-y-1.5 ps-3.5">
                    <li className="text-sm text-gray-800 dark:text-white">
                      What's Preline UI?
                    </li>

                    <li className="text-sm text-gray-800 dark:text-white">
                      How many Starter Pages & Examples are there?
                    </li>

                    <li className="text-sm text-gray-800 dark:text-white">
                      Is there a PRO version?
                    </li>
                  </ul>
                </div>
              </div>

              <span className="mt-1.5 flex items-center gap-x-1 text-xs text-gray-500 dark:text-neutral-500">
                <svg
                  className="shrink-0 size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 7 17l-5-5"></path>
                  <path d="m22 10-7.5 7.5L13 16"></path>
                </svg>
                Sent
              </span>
            </div>
          </li>

          <li className="flex ms-auto gap-x-2 sm:gap-x-4 max-w-full overflow-x-hidden">
            <div className="lg:ml-[55rem] text-end space-y-3">
              <div className="inline-flex flex-col justify-end max-w-full">
                <div className="inline-block bg-blue-600 rounded-2xl p-4 shadow-sm max-w-full">
                  <p className="text-sm text-white">what's preline ui?</p>
                </div>

                <span className="mt-1.5 ms-auto flex items-center gap-x-1 text-xs text-gray-500 dark:text-neutral-500">
                  <svg
                    className="shrink-0 size-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M18 6 7 17l-5-5"></path>
                    <path d="m22 10-7.5 7.5L13 16"></path>
                  </svg>
                  Sent
                </span>
              </div>
            </div>

            <span className="shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
              <span className="text-sm font-medium text-white leading-none">
                AZ
              </span>
            </span>
          </li>

          <li className="max-w-lg flex gap-x-2 sm:gap-x-4 me-11">
            <img
              className="inline-block size-9 rounded-full"
              src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
              alt="Avatar"
            />

            <div>
              <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                <p className="text-sm text-gray-800 dark:text-white">
                  Preline UI is an open-source set of prebuilt UI components
                  based on the utility-first Tailwind CSS framework.
                </p>
                <div className="space-y-1.5">
                  <p className="text-sm text-gray-800 dark:text-white">
                    Here're some links to get started
                  </p>
                  <ul>
                    <li>
                      <a
                        className="text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500 dark:hover:text-blue-400"
                        href="../docs/index.html"
                      >
                        Installation Guide
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500 dark:hover:text-blue-400"
                        href="../docs/frameworks.html"
                      >
                        Framework Guides
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <span className="mt-1.5 flex items-center gap-x-1 text-xs text-red-500">
                <svg
                  className="shrink-0 size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                Not sent
              </span>
            </div>
          </li>
        </ul>
      </div>
      {/* <div className="bg-white w-[100vw h-[100px] mt-24">

  


      </div> */}
      <CommandDialogDemo />
    </div>
  );
};

const ContactBox = () => {
  return (
    <div className="h-[100vh] w-72 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
      <div className="px-4 py-[8px] flex items-center gap-1">
        <span className="text-lg text-[#1f2937] font-semibold">Inbox</span>
        <div className="ml-auto">
          <DropdownMenu>
            <Button
              variant={"outline"}
              className="font-normal text-[13px] shadow-none text-[#798188]"
            >
              <DropdownMenuTrigger>
                <div className="flex items-center gap-1">
                  Newest <ChevronDown className="h-4 w-4" />
                </div>
              </DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Updated Separator */}
        </div>

        <div className="ml-2">
          <Send className="h-8 w-8 text-[#4b5563] hover:cursor-pointer hover:bg-neutral-200 p-2 rounded-md" />
        </div>
      </div>

      <Separator />
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
        <Input
          className="pl-10 border-none shadow-none "
          placeholder="Search"
        />
      </div>

      <Separator />
      <div className="flex  gap-1 py-2 px-2 ">
        <Button
          variant={"outline"}
          className="text-[12px] px-3 bg-accent border-none shadow-none text-[#1f2937] font-semibold  "
        >
          All
        </Button>

        <Button
          variant={"outline"}
          className="text-[12px] px-3 border-none shadow-none text-[#1f2937] font-semibold  "
        >
          Mentions
        </Button>

        <Button
          variant={"outline"}
          className="text-[12px] px-3 border-none shadow-none text-[#1f2937] font-semibold  "
        >
          Spammed
        </Button>

        <Button
          variant={"outline"}
          className="text-[12px] px-3 border-none shadow-none text-[#1f2937] font-semibold  "
        >
          Blocked
        </Button>
      </div>
      <div className="max-h-[80vh] overflow-auto">
        <Separator />
        <div className="flex items-center gap-2 px-4 py-5 bg-accent  hover:bg-accent/80  hover:cursor-pointer">
          <div className="mr-2">
            <img
              src="https://assets.aceternity.com/manu.png"
              alt="Avatar"
              className="h-9 w-9 rounded-full"
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-[#1f2937]">
              John Doe
            </span>
            <p className="text-[12px] font-semibold text-[#6b7280]">
              Yes you can
            </p>
          </div>
        </div>
        <Separator />

        <div className="flex items-center gap-2 px-4 py-5 ">
          <div className="mr-2">
            <img
              src="https://assets.aceternity.com/manu.png"
              alt="Avatar"
              className="h-9 w-9 rounded-full"
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-[#1f2937]">
              John Doe
            </span>
            <p className="text-[12px] font-semibold text-[#6b7280]">
              Yes you can
            </p>
          </div>
        </div>
        <Separator />
        <div className="flex items-center gap-2 px-4 py-5 ">
          <div className="mr-2">
            <img
              src="https://assets.aceternity.com/manu.png"
              alt="Avatar"
              className="h-9 w-9 rounded-full"
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-[#1f2937]">
              John Doe
            </span>
            <p className="text-[12px] font-semibold text-[#6b7280]">
              Yes you can
            </p>
          </div>
        </div>
        <Separator />
        <div className="flex items-center gap-2 px-4 py-5 ">
          <div className="mr-2">
            <img
              src="https://assets.aceternity.com/manu.png"
              alt="Avatar"
              className="h-9 w-9 rounded-full"
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-[#1f2937]">
              John Doe
            </span>
            <p className="text-[12px] font-semibold text-[#6b7280]">
              Yes you can
            </p>
          </div>
        </div>
        <Separator />
        <div className="flex items-center gap-2 px-4 py-5 ">
          <div className="mr-2">
            <img
              src="https://assets.aceternity.com/manu.png"
              alt="Avatar"
              className="h-9 w-9 rounded-full"
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-[#1f2937]">
              John Doe
            </span>
            <p className="text-[12px] font-semibold text-[#6b7280]">
              Yes you can
            </p>
          </div>
        </div>
        <Separator />
        <div className="flex items-center gap-2 px-4 py-5 ">
          <div className="mr-2">
            <img
              src="https://assets.aceternity.com/manu.png"
              alt="Avatar"
              className="h-9 w-9 rounded-full"
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-[#1f2937]">
              John Doe
            </span>
            <p className="text-[12px] font-semibold text-[#6b7280]">
              Yes you can
            </p>
          </div>
        </div>
        <Separator />
        <div className="flex items-center gap-2 px-4 py-5 ">
          <div className="mr-2">
            <img
              src="https://assets.aceternity.com/manu.png"
              alt="Avatar"
              className="h-9 w-9 rounded-full"
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-[#1f2937]">
              John Doe
            </span>
            <p className="text-[12px] font-semibold text-[#6b7280]">
              Yes you can
            </p>
          </div>
        </div>
        <Separator />
        <div className="flex items-center gap-2 px-4 py-5 ">
          <div className="mr-2">
            <img
              src="https://assets.aceternity.com/manu.png"
              alt="Avatar"
              className="h-9 w-9 rounded-full"
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-[#1f2937]">
              John Doe
            </span>
            <p className="text-[12px] font-semibold text-[#6b7280]">
              Yes you can
            </p>
          </div>
        </div>
        <Separator />
        <div className="flex items-center gap-2 px-4 py-5 ">
          <div className="mr-2">
            <img
              src="https://assets.aceternity.com/manu.png"
              alt="Avatar"
              className="h-9 w-9 rounded-full"
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-[#1f2937]">
              John Doe
            </span>
            <p className="text-[12px] font-semibold text-[#6b7280]">
              Yes you can
            </p>
          </div>
        </div>
        <Separator />
      </div>
    </div>
  );
};

import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {/* <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p> */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <FaceIcon className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <RocketIcon className="mr-2 h-4 w-4" />
              <span>Launch</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <PersonIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              <span>Mail</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GearIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { contacts, threads, user } from "@/lib/dummydata";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholder-and-vanish-input";
import { Textarea } from "@/components/ui/textarea";
import { FileUpload } from "@/components/ui/file-upload";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import DashboardChat from "./Dashboard";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  FaFilePdf,
  FaFileImage,
  FaFileWord,
  FaFileExcel,
  FaFileAlt,
  FaFileVideo,
  FaFileAudio,
  FaFileArchive,
  FaFile,
} from "react-icons/fa";
import { Input } from "@/components/ui/input";

import { Separator } from "@/components/ui/separator";
import {
  MessageSquare,
  Send,
  ChevronDown,
  Search,
  Star,
  Zap,
  CalendarClock,
  OctagonAlert,
  Trash2,
  Captions,
  Paperclip,
  ChevronLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Chat() {
  const [activeCategory, setActiveCategory] = useState("Inbox");
  const [activeContact, setActiveContact] = useState({ name: "", picture: "" });

  const handleCategoryChange = (category: string) =>
    setActiveCategory(category);
  const handleActiveContact = ({
    name,
    picture,
  }: {
    name: string;
    picture: string;
  }) => {
    setActiveContact((prevState) => {
      const newState = { name, picture };
      console.log(prevState);
      return newState;
    });
  };

  const links = [
    {
      label: "Inbox",
      href: "#",
      icon: (
        <MessageSquare className="h-9 w-9 flex-shrink-0 px-2 rounded-md mt-6" />
      ),
    },
    {
      label: "Starred",
      href: "#",
      icon: <Star className="h-9 w-9 flex-shrink-0 px-2 rounded-md" />,
    },
    {
      label: "Important",
      href: "#",
      icon: <Zap className="h-9 w-9 flex-shrink-0 px-2 ml-2 rounded-md" />,
    },
    {
      label: "Scheduled",
      href: "#",
      icon: (
        <CalendarClock className="h-9 w-9 flex-shrink-0 px-2 ml-2 rounded-md" />
      ),
    },
    {
      label: "Spam",
      href: "#",
      icon: <OctagonAlert className="h-9 w-9 flex-shrink-0 px-2 rounded-md" />,
    },
    {
      label: "Bin",
      href: "#",
      icon: <Trash2 className="h-9 w-9 flex-shrink-0 px-2 rounded-md" />,
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-[100vh]"
      )}
    >
      <div className={activeContact.name != "" ? "hidden md:block" : ""}>
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10 ">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {open ? <Logo /> : <LogoIcon />}
              <div className="flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink
                    key={idx}
                    link={{
                      ...link,
                      icon: React.cloneElement(link.icon, {
                        className: cn(
                          link.icon.props.className,
                          activeCategory === link.label
                            ? "text-indigo-600 bg-indigo-100 dark:text-blue-400 dark:bg-blue-900"
                            : "text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                        ),
                      }),
                    }}
                    handleCategories={() => handleCategoryChange(link.label)}
                  />
                ))}
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                {" "}
                <div>
                  <SidebarLink
                    link={{
                      label: "",
                      href: "#",
                      icon: (
                        <img
                          src={user.picture}
                          className="h-7 w-7 flex-shrink-0 rounded-full mx-auto"
                          alt="Avatar"
                        />
                      ),
                    }}
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className="cursor-pointer hover:bg-accent ">
                  Logout
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarBody>
        </Sidebar>
      </div>
      <ContactBox
        activeCategory={activeCategory}
        handleActiveContact={handleActiveContact}
        activeContact={activeContact}
      />
      <Dashboard
        activeContact={activeContact}
        setActiveContact={setActiveContact}
      />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      to="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <img src="LogoSVG.svg" alt="" className="h-6 w-6" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Maileyo
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

const Dashboard = ({
  activeContact,
  setActiveContact,
}: {
  name: string;
  picture: string;
}) => {
  const getFileIcon = (fileName: string) => {
    const fileExtension = fileName.split(".").pop()?.toLowerCase();

    switch (fileExtension) {
      case "pdf":
        return <FaFilePdf className="text-red-500" />;
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
      case "bmp":
      case "svg":
        return <FaFileImage className="text-blue-500" />;
      case "doc":
      case "docx":
        return <FaFileWord className="text-blue-700" />;
      case "xls":
      case "xlsx":
        return <FaFileExcel className="text-green-500" />;
      case "txt":
      case "md":
        return <FaFileAlt className="text-gray-500" />;
      case "mp4":
      case "mkv":
      case "mov":
      case "avi":
        return <FaFileVideo className="text-purple-500" />;
      case "mp3":
      case "wav":
      case "ogg":
        return <FaFileAudio className="text-orange-500" />;
      case "zip":
      case "rar":
      case "7z":
      case "tar":
      case "gz":
        return <FaFileArchive className="text-yellow-500" />;
      default:
        return <FaFile className="text-gray-400" />;
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  console.log("active", activeContact);
  const openDialog = () => setIsOpen(true);
  const [conv, setConv] = useState(0);
  React.useEffect(() => {
    const findConversationIndex = () => {
      for (let i = 0; i < threads.length; i++) {
        if (threads[i].some((item) => item.sender === activeContact.name)) {
          return i;
        }
      }
      return -1; // Return -1 if no conversation is found
    };

    const conversationIndex = findConversationIndex();
    if (conversationIndex !== -1) {
      setConv(conversationIndex);
    }

    console.log("Current conversation:", threads[conversationIndex]);
  }, [activeContact, threads]);

  const [position, setPosition] = React.useState(threads[conv][0].subject);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredThreads, setFilteredThreads] = useState([]);

  useEffect(() => {
    const findConversationIndex = () => {
      for (let i = 0; i < threads.length; i++) {
        if (threads[i].some((item) => item.sender === activeContact.name)) {
          return i;
        }
      }
      return -1;
    };

    const conversationIndex = findConversationIndex();
    if (conversationIndex !== -1) {
      setConv(conversationIndex);
      setFilteredThreads(threads[conversationIndex]);
    }
  }, [activeContact, threads]);

  useEffect(() => {
    if (threads[conv]) {
      const filtered = threads[conv].filter(
        (item) =>
          item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.msg.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredThreads(filtered);
    }
  }, [searchTerm, conv, threads]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return activeContact.name == "" ? (
    <div className="bg-white w-[calc(100vw-26rem)]">
      <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-20">
        {" "}
        <div className="text-center">
          <img
            src="/LogoSVG.svg"
            alt="logo"
            className="w-40 h-40 mx-auto"
          ></img>

          <h1 className="text-3xl font-bold text-gray-800 md:text-5xl mt-10 dark:text-white">
            Work Effortlessly With Maileyo
          </h1>
          <p className="mt-5 text-gray-600 text-xl  dark:text-neutral-400">
            Your AI-powered copilot for the mails
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="md:w-[calc(100vw-26rem)]">
      <div className="md:h-[53px] bg-white   px-2 pt-1">
        <div className="flex items-center gap-1">
          <ChevronLeft
            className="md:hidden"
            onClick={() => setActiveContact({ name: "", picture: "" })}
          />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center space-x-2 cursor-pointer">
                <img
                  src={activeContact.picture}
                  alt="Avatar"
                  className="h-9 w-9 rounded-full"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white rounded-lg shadow-lg p-4 w-64">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={activeContact.picture}
                  alt="Avatar"
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    {activeContact.name}
                  </h3>
                  <p className="text-sm text-gray-500">pranjal@gmail.com</p>
                </div>
              </div>

              <div className=" gap-3 justify-center  items-center flex">
                <Dialog>
                  <DialogTrigger>
                    {" "}
                    <Button className="w-full bg-indigo-500 text-white rounded-md py-2 hover:bg-indigo-600">
                      Compose
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[80vh] overflow-auto">
                    <Compose />
                  </DialogContent>
                </Dialog>

                <Button className="w-[40%] bg-gray-100 text-gray-700 rounded-md py-2 hover:bg-gray-200">
                  Unsubscribe
                </Button>
                {/* <Button className="w-full bg-gray-100 text-gray-700 rounded-md py-2 hover:bg-gray-200">
                  Snooze
                </Button> */}
              </div>

              <div className="mt-4 text-sm text-gray-600">
                {/* <p>Attachments: None</p> */}
                {/* <p>Status: Active</p> */}
                <Table>
                  <h1>Attachments</h1>
                  <TableCaption>
                    A list of your recent attachments.
                  </TableCaption>

                  <TableBody>
                    <Dialog>
                      <DialogTrigger>
                        {" "}
                        <TableRow>
                          <TableCell className="font-medium">
                            <FaFilePdf />
                          </TableCell>
                          <TableCell>file.pdf</TableCell>
                        </TableRow>
                      </DialogTrigger>
                      <DialogContent className="pl-20">
                        <Carousel className="w-80">
                          <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                              <CarouselItem key={index}>
                                <div className="p-1">
                                  <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                      <span className="text-4xl font-semibold">
                                        {index + 1}
                                      </span>
                                    </CardContent>
                                  </Card>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      </DialogContent>
                    </Dialog>

                    <TableRow>
                      <TableCell className="font-medium">
                        <FaFilePdf />
                      </TableCell>
                      <TableCell>file.pdf</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <FaFilePdf />
                      </TableCell>
                      <TableCell>file.pdf</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="mr-auto">
            <span className="text-sm font-semibold text-[#1f2937]">
              {activeContact.name}
            </span>
            {/* <p className="text-[12px] font-semibold text-[#38bdf8]">Online</p> */}
            <p className="text-[12px] font-semibold text-gray-500">
              pranjal@gmail.com
            </p>
          </div>
          <div className="flex  gap-4">
            <Sheet>
              <SheetTrigger>
                <img
                  src="/bot.png"
                  alt=""
                  className="cursor-pointer  w-12 flex-shrink-0 px-2 rounded-md"
                />
              </SheetTrigger>
              <SheetContent className="max-h-lg overflow-auto ">
                <DashboardChat />
              </SheetContent>
            </Sheet>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Captions className="h-9 w-9 flex-shrink-0 px-2 rounded-md hover:bg-accent transition duration-200  focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 mr-24">
                <DropdownMenuLabel>Subjects</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  className="max-h-40 overflow-auto"
                  value={position}
                  onValueChange={setPosition}
                >
                  {threads[conv].map((item, index) => (
                    <DropdownMenuRadioItem key={index} value={item.subject}>
                      {item.subject}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>
                {/* <div className="flex items-center space-x-2 cursor-pointer"> */}
                <Search className="cursor-pointer h-9 w-9 flex-shrink-0 px-2 rounded-md hover:bg-accent" />
                {/* </div> */}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white rounded-lg  p-4 w-64 mr-6  bg-transparent border-none shadow-none">
                <div className="">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[300px] shadow-lg "
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="px-6  pt-10 max-h-[82.5vh] overflow-auto">
        <ul className="space-y-5">
          {filteredThreads.map((item, index) => (
            <li
              key={index}
              className={` gap-x-2 sm:gap-x-4 ${
                item.sender === activeContact.name
                  ? "max-w-lg me-11"
                  : "ms-auto md:max-w-full overflow-x-hidden"
              }`}
            >
              {item.sender === activeContact.name ? (
                <>
                  {/* <img
                    className="inline-block size-9 rounded-full"
                    src={activeContact.picture}
                    alt="Avatar"
                  /> */}
                  <div>
                    <div className="bg-white border border-gray-200 rounded-r-2xl rounded-b-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                      {item.contentType == "plain" ? (
                        <p className="font-normal">{item.msg}</p>
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.msg,
                          }}
                        />
                      )}
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6 7 17l-5-5"></path>
                        <path d="m22 10-7.5 7.5L13 16"></path>
                      </svg>

                      {item.time}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="lg:ml-auto text-end space-y-3">
                    <div className="inline-flex flex-col justify-end max-w-full">
                      <div className="inline-block bg-indigo-600 rounded-l-2xl rounded-b-2xl p-4 shadow-sm max-w-full">
                        {item.contentType == "plain" ? (
                          <p className="font-normal text-white">{item.msg}</p>
                        ) : (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.msg,
                            }}
                          />
                        )}
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
                        {item.time}
                      </span>
                    </div>
                  </div>
                  <div>
                    {/* <img
                      src={user.picture}
                      alt="Avatar"
                      className="h-9 w-9 rounded-full"
                    /> */}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      <CommandDialogDemo />
    </div>
  );
};

const ContactBox = ({ activeCategory, handleActiveContact, activeContact }) => {
  const [toggleProvider, setToggleProvider] = useState("gmail");
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggleProvider = (provider) => {
    setToggleProvider(provider);
  };

  // Function to handle search filtering
  const filteredContacts = contacts.filter(
    (item) =>
      item.provider === toggleProvider &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      activeCategory == item.category
  );

  return (
    <div
      className={`h-[100vh] w-96 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 ${
        activeContact.name === "" ? "" : "hidden sm:block md:block"
      }`}
    >
      <div className="pl-12 md:px-4 py-[8px] flex items-center gap-1">
        <span className="text-lg text-[#1f2937] font-semibold">
          {activeCategory}
        </span>
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
              <DropdownMenuItem className="hover:bg-accent cursor-pointer">
                Oldest
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Dialog>
          <DialogTrigger>
            <Send className="h-8 w-8 text-[#4b5563] hover:cursor-pointer hover:bg-accent p-2 rounded-md" />
          </DialogTrigger>
          <DialogContent className="  w-full max-h-[80vh] overflow-auto">
            <Compose
              ToInput={<Input placeholder="To" />}
              CCInput={<Input placeholder="CC" />}
            />
          </DialogContent>
        </Dialog>
        <div className="ml-2"></div>
      </div>

      <Separator />

      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
        <Input
          className="pl-10 border-none shadow-none"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
        />
      </div>

      <Separator />

      <div className="flex gap-1 py-2 px-2 justify-center">
        <Button
          variant={"outline"}
          className={`text-[12px] px-3 ${
            toggleProvider === "gmail"
              ? "bg-indigo-100 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-600"
              : ""
          } border-none shadow-none  font-semibold`}
          onClick={() => handleToggleProvider("gmail")}
        >
          Gmail
        </Button>

        <Button
          variant={"outline"}
          className={`text-[12px] px-3 ${
            toggleProvider === "outlook"
              ? "bg-indigo-100 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-600"
              : ""
          } border-none shadow-none  font-semibold`}
          onClick={() => handleToggleProvider("outlook")}
        >
          Outlook
        </Button>
      </div>

      {/* Contacts List */}
      <div className="max-h-[80vh] overflow-auto">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((item, index) => (
            <div key={index}>
              <Separator />
              <div
                className={`gap-4 px-4 py-2 ${
                  activeContact.name === item.name
                    ? "bg-indigo-100 hover:bg-indigo-100"
                    : null
                } hover:bg-accent/80 hover:cursor-pointer transition duration-200 ease-in-out`}
                onClick={() =>
                  handleActiveContact({
                    name: item.name,
                    picture: item.profile,
                  })
                }
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 ">
                    <img
                      src={item.profile}
                      alt="Avatar"
                      className="h-10 w-10 rounded-full border-2 border-white shadow-md"
                    />
                    <div>
                      <span className="text-sm font-semibold text-[#1f2937]">
                        {item.name}
                      </span>
                      <span className="text-sm text-gray-500 ml-28  ">
                        {item.time}
                      </span>
                      <p className="text-[12px] text-[#6b7280] flex items-center gap-2">
                        <svg
                          className="shrink-0 size-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 6L7 17l-5-5"></path>
                          <path d="m22 10-7.5 7.5L13 16"></path>
                        </svg>
                        {item.lastSnippet}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-2 mt-4">
                    {item.badge.map((badgeItem, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        className="px-3 py-1 bg-indigo-600 hover:bg-indigo-800 text-white rounded-full shadow-md"
                      >
                        {badgeItem}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-[12px] text-white text-center rounded-full bg-indigo-600 h-5 w-5 mt-4">
                    2
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-4">
            No contacts found.
          </div>
        )}
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
import { DialogTrigger } from "@radix-ui/react-dialog";

export function CommandDialogDemo() {
  const suggestions = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ];
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);

    if (userInput) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(userInput.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  const handleSubmit = () => console.log("submit");

  return (
    <div className="w-full   fixed md:bottom-10 bottom-4 md:left-52  ">
      <div className="relative max-w-2xl mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        {showSuggestions && inputValue && (
          <ul className="absolute left-0 w-full bg-[#f9fafb] border border-gray-300 rounded-t-lg mb-1 max-h-40 overflow-y-auto z-10 bottom-full ">
            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No suggestions found</li>
            )}
          </ul>
        )}

        <PlaceholdersAndVanishInput
          onChange={handleInputChange}
          placeholders={["reply"]}
          onSubmit={handleSubmit}
          Inputvalue={inputValue}
          Icon={
            <Dialog>
              <DialogTrigger>
                {" "}
                <Paperclip className="h-9 w-9 flex-shrink-0 px-2  " />
              </DialogTrigger>
              <DialogContent>
                <FileUploadDemo />
                <div className="flex justify-center gap-3">
                  <DialogClose>
                    <Button variant={"outline"}>Discard</Button>
                  </DialogClose>
                  <DialogClose>
                    <Button>Confirm</Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          }
        />
      </div>
    </div>
  );
}

// For compose

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account";

export function Compose({
  ToInput,
  CCInput,
}: {
  ToInput?: React.FC;
  CCInput?: React;
}) {
  return (
    <Card className="mx-auto  bg-transparent border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-xl">Compose</CardTitle>
        <CardDescription>Compose your mail John Doe</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            {ToInput}
            {CCInput}
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              type="text"
              placeholder="Enter your subject"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">message</Label>
            <Textarea id="message" placeholder="message" />
          </div>
          <FileUploadDemo />
          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-800"
          >
            Send
          </Button>
          {/* <Button variant="outline" className="w-full">
            Sign up with GitHub
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="#" className="underline">
            Sign in
          </Link> */}
        </div>
      </CardContent>
    </Card>
  );
}

function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="w-full max-w-4xl mx-auto max-h-lg border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>
  );
}

// import { Button } from "@/components/ui/button";
// import { ModeToggle } from "./ui/model-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Link, useNavigate } from "react-router-dom";

// import { Menu } from "lucide-react";
import Container from "./Container";
import { useLocation } from "react-router-dom";

// const navItems = [
//   {
//     name: "Home",
//     slug: "/",
//     active: true,
//   },
//   {
//     name: "Integrations",
//     slug: "/integrations",
//     // active: !authStatus,
//   },
//   {
//     name: "Product",
//     slug: "/product",
//     // active: !authStatus,
//   },
//   {
//     name: "Pricing",
//     slug: "/pricing",
//     // active: authStatus,
//   },
// ];

function Header() {
  const path: string = useLocation().pathname;

  return (
    <Container>
      <nav className="bg-black fixed w-full m-auto  z-20 top-0 start-0  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="300" height="300" rx="88" fill="#FF7A00"></rect>
              <path
                d="M200.761 66.0399C200.761 96.9545 192.843 135.059 180.588 160.268C167.605 187.02 149.702 217.353 126.938 213.394C102.777 209.173 105.339 178.054 107.842 162.422C123.765 160.559 138.233 151.681 150.11 136.311C158.348 125.657 180.85 84.8448 155.699 68.1067C134.769 54.1922 115.818 77.6838 103.767 100.302C97.5084 112.062 92.5888 124.376 89.0374 137.097C80.7702 134.768 71.6589 124.056 85.9809 91.511L64.7599 80.915C40.133 135.263 66.7975 156.222 84.1761 160.414C74.4534 224.31 112.238 237.555 131.218 237.555C168.041 237.555 194.298 187.195 200.79 168.972V235.575H224.514V66.0399H200.761ZM143.211 88.2507C147.403 90.4339 137.098 126.064 114.014 136.398C117.274 124.376 137.039 85.0486 143.211 88.2507Z"
                fill="white"
              ></path>
            </svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Unriddle
            </span>
          </a>
          <div className="flex md:order-2  space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* <ModeToggle></ModeToggle> */}
            {/* <Button variant="secondary" className="mr-2 ml-2 rounded-xl">
              Login
            </Button>
            <Button className="rounded-xl ml-2">signup</Button> */}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            {/* <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
             { navItems.map((item,index) => (
              <li key={index}>
                
                  {path === item.slug ?( 
                   <div className="bg-[#27272a] hover:bg-[#27272a] w-24 px-5 py-2 rounded-2xl ">
                   <Link
                    to={item.slug}
                    className=" text-white    rounded  md:p-0 "
                    aria-current="page"
                  >
                    {item.name}
                  </Link>
                  </div>):(
                    <div className=" hover:bg-[#27272a] text-center w-32 px-5 py-2 rounded-2xl">
                     <Link
                     to={item.slug}
                     className=" text-white     rounded  md:p-0 "
                     aria-current="page"
                   >
                     {item.name}
                   </Link>
                   </div>
                  )}
                 
           
              </li>
              ))}
            </ul> */}
          </div>
        </div>
      </nav>
    </Container>
  );
}
export default Header;

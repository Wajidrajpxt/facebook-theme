import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { PiClockClockwiseDuotone } from "react-icons/pi";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

import Story from "./Story";
import Friends from "./Friends";
import { Link } from "react-router-dom";
import Myprofile from "./Myprofile";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { BsMessenger } from "react-icons/bs";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";

export const Profile = () => {
  return (
    <>
      <div class="h-[100] w-[100%]  flex justify-start overflow-scroll ">
        <div class="w-[30%] h-[100vh] overflow-scroll">
          <body class="hidden md:hidden lg:flex xl:flex 2xl:flex min-h-screen bg-[#F0F2F5] flex">
            {/* <!-- Left Sidebar Start --> */}

            <div class="w-80 px-2 min-h-screen flex flex-col py-2">
              <div class="group">
                <div class="text-white mt-1">
                  {/* <div class="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: "50%",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TT7rDnvPC76IEzYBPQ__fNkBt5PLsDMiIA&usqp=CAU"
                        alt=""
                      />
                    </div> */}

                  {/* <div class="flex flex-col justify-center content-start">
                        <Link to={"/profile"}>
                      <h2 class="font-semibold text-[black] ">Wajid  Ali</h2>
                        </Link>
                      <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                        <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                        <span>9+ new</span>
                      </div>
                    </div>
                   */}
                  <a
                    href="#"
                    class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                  >
                    <div class="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: "50%",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TT7rDnvPC76IEzYBPQ__fNkBt5PLsDMiIA&usqp=CAU"
                        alt=""
                      />
                    </div>

                    <div class="flex flex-col justify-center content-start">
                      <Link to={"/Profile"}>
                        <h2 class="font-semibold text-lg text-[black]">
                          Wajid Ali
                        </h2>
                      </Link>
                      <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                        <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                        <span>9+ new</span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                  >
                    <div class="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                      <FaUserFriends
                        style={{ fontSize: "28px", color: "#58CCBD" }}
                      />
                    </div>
                    <div class="flex flex-col justify-center content-start">
                      <h2 class="font-semibold text-xl text-[black]">
                        Friends
                      </h2>
                      <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                        <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                        <span>9+ new</span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                  >
                    <div class="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                      <PiClockClockwiseDuotone
                        style={{ fontSize: "28px", color: "#4088DB" }}
                      />
                    </div>
                    <div class="flex flex-col justify-center content-start">
                      <h2 class="font-semibold text-lg text-[black]">
                        Memories
                      </h2>
                      <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                        <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                        <span>9+ new</span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                  >
                    <div class="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                      <svg
                        className="w-[21px] h-[21px] text-[#1D90EC] dark:text-white "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                          d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"
                        />
                      </svg>
                    </div>
                    <div class="flex flex-col justify-center content-start">
                      <h2 class="font-semibold text-lg text-[black]">Groups</h2>
                      <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                        <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                        <span>1 new</span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                  >
                    <div class="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                      <HiMiniBuildingStorefront
                        style={{ fontSize: "28px", color: "#4088DB" }}
                      />
                    </div>
                    <div class="flex flex-col justify-center content-start">
                      <h2 class="font-semibold text-lg text-[black]">
                        Marketplace
                      </h2>
                      <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                        <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                        <span>1 new</span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                  >
                    <div class="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                      <OndemandVideoOutlinedIcon
                        style={{ fontSize: "28px", color: "#41C5B6" }}
                      />
                    </div>
                    <div class="flex flex-col justify-center content-start">
                      <h2 class="font-semibold text-lg text-[black]">Video</h2>
                      <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                        <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                        <span>1 new</span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                  >
                    <div class="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                      <BsMessenger
                        style={{ fontSize: "28px", color: "#54BCED" }}
                      />
                    </div>
                    <div class="flex flex-col justify-center content-start">
                      <h2 class="font-semibold text-lg text-[black]">
                        Messanger
                      </h2>
                      <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                        <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                        <span>1 new</span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                  >
                    <div class="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                      <BookmarkIcon
                        style={{ fontSize: "28px", color: "#9057E5" }}
                      />
                    </div>
                    <div class="flex flex-col justify-center content-start">
                      <h2 class="font-semibold text-lg text-[black]">Saved</h2>
                      <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                        <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                        <span>1 new</span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    class="px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                  >
                    <div>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography variant="h6" gutterBottom>
                            <h6 class="font-thin  fontSize-[20px] text-[black] bg-inherit">
                              See More
                            </h6>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div class="hover:bg-[#E4E6E9] flex flex-col justify-center content-start">
                            <h2 class="font-semibold text-[#1F2020]">
                              8 Ball Pool
                            </h2>
                            <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                              <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                              <span>9+ Updates</span>
                            </div>
                          </div>
                          <div class="hover:bg-[#E4E6E9]  flex flex-col justify-center content-start">
                            <h2 class="font-semibold text-[#1F2020]">
                              Others Games
                            </h2>
                            <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                              <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                              <span>100+ new</span>
                            </div>
                          </div>
                          <div class="hover:bg-[#E4E6E9]  flex flex-col justify-center content-start">
                            <h2 class="font-semibold text-[#1F2020]">
                              MY vedios
                            </h2>
                            <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                              <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                              <span>29+ new</span>
                            </div>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </a>
                </div>
              </div>

              <div class="border-t border-gray-700 my-2"></div>

              <div class="group flex-1">
                <div class="flex justify-between items-center">
                  <a
                    href="#"
                    class="hover:bg-[#E4E6E9] text-blue-500 p-2 rounded-md opacity-0 group-hover:opacity-100"
                  >
                    Edit
                  </a>
                </div>
                <div class="text-white mt-1">
                  <a
                    href="#"
                    class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                  >
                    <div class="w-10 h-10 rounded-lg overflow-hidden">
                      <img
                        class="w-full"
                        src="https://picsum.photos/200/300?random=1"
                        alt="8 Ball Pool"
                      />
                    </div>
                    <div class="flex flex-col justify-center content-start">
                      <h2 class="font-semibold  text-[22px] text-[#1F2020]">Hill climb</h2>
                      <div class="text-xs text-red-600 flex justify-start items-center space-x-1">
                        <span class="w-2 h-2 bg-red-600 inline-block rounded-full"></span>
                        <span className="font-normal text-sm text-[red]">9+ new</span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                  >
                    <div class="w-10 h-10 rounded-lg overflow-hidden">
                      <img
                        class="w-full h-full object-cover"
                        src="https://picsum.photos/200/300?random=2"
                        alt="L1AA121(Day,Mymensingh)"
                      />
                    </div>
                    <div class="flex flex-col justify-center content-start">
                      <h2 class="font-semibold  text-[22px] text-[#1F2020]">
                        L1AA121(Day,Mymensingh)
                      </h2>
                      <div class="text-xs text-[green] flex justify-start items-center space-x-1">
                        <span class="w-2 h-2 bg-[green] inline-block rounded-full"></span>
                        <span className="font-normal  text-sm text-[green]">9+ new</span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                  >
                    <div class="w-10 h-10 rounded-lg overflow-hidden">
                      <img
                        class="w-full h-full object-cover"
                        src="https://picsum.photos/200/300?random=3"
                        alt="BDSkills.gov.bd"
                      />
                    </div>
                    <div class="flex flex-col justify-center content-start">
                      <h2 class="font-semibold  text-[22px] text-[#1F2020]">
                        L1AA121(Day,Mymensingh)
                      </h2>
                      <div class="text-xs text-[lbue] flex justify-start items-center space-x-1">
                        <span class="w-2 h-2 bg-[blue] inline-block rounded-full"></span>
                        <span className="font-normal  text-sm text-[blue]">9+ new</span>
                      </div>
                    </div>
                    
                    
                  </a>
                  <a
                    href="#"
                    class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                  ></a>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <div class="flex flex-col justify-center content-start">
                        <h3 class="text-gray-500 font-semibold text-lg">
                          Your Shortcuts
                        </h3>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div class="flex flex-col justify-center content-start">
                        <h2 class="font-semibold text-[#1F2020]">
                          Chilakanda - চিলাকান্দা
                        </h2>
                        <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                          <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                          <span>9+ new</span>
                        </div>

                        <div class="flex flex-col justify-center content-start">
                          <h2 class="font-semibold text-[#1F2020]">BDSkills</h2>
                          <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                            <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                            <span>9+ new</span>
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <a
                    href="#"
                    class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                  ></a>
                </div>
              </div>

              <div class="text-gray-500 text-xs space-x-2">
                <a href="#" class="hover:underline cursor-pointer">
                  Privacy
                </a>
                <a href="#" class="hover:underline cursor-pointer">
                  Terms
                </a>
                <a href="#" class="hover:underline cursor-pointer">
                  Advertising
                </a>
                <a href="#" class="hover:underline cursor-pointer">
                  Ad Choices
                </a>
                <a href="#" class="hover:underline cursor-pointer">
                  Cookies
                </a>
                <a href="#" class="hover:underline cursor-pointer">
                  More
                </a>
                <span class="cursor-text">Facebook &copy; 2021</span>
              </div>
            </div>
            {/* Left Sidebar End --> */}
          </body>
        </div>
        <Story />
        <Friends />
      </div>
    </>
  );
};

import React from "react";
// import { FaUserFriends } from "react-icons/fa";
import { PiClockClockwiseDuotone } from "react-icons/pi";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { FaPlus } from "react-icons/fa6";
import { Badge } from "@mui/icons-material";
import { IoSearchSharp } from "react-icons/io5";

const Friends = () => {
  return (
    <>
      <div class="w-[30%] bg-red">
        <div class="h-[100] w-[100%] flex justify-start overflow-scroll ">
          <div class="w-[100%] h-[100vh] overflow-scroll">
            <body class="hidden md:hidden lg:flex xl:flex 2xl:flex min-h-screen bg-[#F0F2F5] flex">
              {/* <!-- Left Sidebar Start --> */}

              <div class="w-80 px-2 min-h-screen flex flex-col py-2">
                <div class="flex justify-around items-center">
                  <h1 class="font-bold  text-[#65676B]">Contacts</h1>
                  <IoSearchSharp
                    style={{ fontSize: "25px", color: "#65676B" }}
                  />
                </div>
                <div class="group">
                  <div class="text-white mt-1 ">
                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                    >
                      <div class="w-12 h-12 rounded-full relative overflow-hidden">
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: "50%",
                          }}
                          src="data:image/jpeg;base64,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"
                          alt=""
                        />
                        <div class="h-[10px] w-[10px] border border-white-1000 rounded-full bg-[#2F9A48] absolute left-[35px] top-[32px] z-[2000]"></div>
                      </div>
                      <div class="flex flex-col justify-center content-start">
                        <h2 class="font-semibold text-[black]">kamran</h2>
                        <div class="text-xs text-blue-400 flex justify-start items-center space-x-1"></div>
                      </div>
                    </a>
                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                    >
                      <div class="w-12 h-12 rounded-full relative  overflow-hidden">
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: "50%",
                          }}
                      src=" https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                          alt=""
                        />
                        <div class="h-[10px] w-[10px] border border-white-1000 rounded-full bg-[#2F9A48] absolute left-[35px] top-[32px] z-[2000]"></div>
                      </div>
                      <div class="flex flex-col justify-center content-start">
                        <h2 class="font-semibold text-[black]">M.Ali</h2>
                        <div class="text-xs text-blue-400 flex justify-start items-center space-x-1"></div>
                      </div>
                    </a>
                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                    >
                      <div class="w-12 h-12 rounded-full relative  overflow-hidden">
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: "50%",
                          }}
                          src="data:image/jpeg;base64,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17HFrmnIcDgg9K2LhcKy5VBqbhVTVM5GDJM8udgcgyVqIg3qK73KgBbQ3GspgeUQzuYD6itaeeapldNUSySyu4ufI4ucfOSvyRB0Wk9Z3zST5DZ6zqcU3/shkbvxuPTg8h8YXn3u9XK/176271klVUO/O84wOgAcAPEAvNRAREQWc2Jf2HQfqk+IqRhyBRzsS/sOg/VJ8RUjDkCDwr1GXN4DnVZrjojUklfUyNtcu6+Z7mklvEEnxq108AkGCMrQfaoyc7vHzIKr9gupfBcvtN+adgupfBcntN+atL1oj70eoJ1pj70eoIKtdgupfBcntN+adgupfBcntN+atL1pj70eoJ1pj70eoIKtdgupfBcntN+adgupfBcntN+atL1pj70eoJ1pj70eoIKtdgupfBcntN+adgupfBcntN+atL1pj70eoJ1pj70eoIKtdgupfBcntN+adgupfBcntN+atL1pj70eoJ1pj70eoIKtdgupfBcntN+adgupfBcntN+atL1pj70eoJ1pj70eoIKtdgupfBcntN+adgupfBcntN+atL1pj70eoJ1pj70eoIKtdgupfBcntN+adgupfBcntN+atL1pj70eoJ1pj70eoIKtdgupfBcntN+adgupfBcntN+atL1pj70eoJ1pj70eoIKtdgupfBcvtN+a+m6D1O44baZifO35q0fWiPvR6gv0jtcbHZDQg5vZJbay1aNo6S4QOgqGOfvRu5RlxXcjgF+cUQjaABhfsgLBCIgxgdCYHQiIGB0JgdCIgYHQmB0IiBgdCYHQiIGB0JgdCIgYHQmB0IiBgdCYHQiIGB0JgdCIgYHQmB0IiDOB0JhEQMLKIg//2Q=="
                          alt=""
                        />
                        <div class="h-[10px] w-[10px] border border-white-1000 rounded-full bg-[#2F9A48] absolute left-[35px] top-[32px] z-[2000]"></div>
                      </div>
                      <div class="flex flex-col justify-center content-start">
                        <h2 class="font-semibold text-[black]">Huzifa</h2>
                        <div class="text-xs text-blue-400 flex justify-start items-center space-x-1"></div>
                      </div>
                    </a>
                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                    ></a>

                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                    >
                      <div class="w-12 h-12 rounded-full relative overflow-hidden">
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: "50%",
                          }}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRORfGBXJ5yve57GcxpeRsnmGMH1sHkRL54Mw&usqp=CAU"
                          alt=""
                        />
                        <div class="h-[10px] w-[10px] border border-white-1000 rounded-full bg-[#2F9A48] absolute left-[35px] top-[32px] z-[2000]"></div>
                      </div>
                      <div class="flex flex-col justify-center content-start">
                        <h2 class="font-semibold text-[black]">Muddsir</h2>
                        <div class="text-xs text-blue-400 flex justify-start items-center space-x-1"></div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* <div class="border-t border-gray-700 my-2"></div> */}

                <div class="group flex-1">
                  {/* <div class="flex justify-between items-center">
                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] text-blue-500 p-2 rounded-md opacity-0 group-hover:opacity-100"
                    >
                      Edit
                    </a>
                  </div> */}
                  <div class="text-white mt-1">
                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                    >
                      <div class="w-12 h-12 rounded-full relative overflow-hidden">
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: "50%",
                          }}
                          src=" data:image/jpeg;base64,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"
                          alt=""
                        />
                        <div class="h-[10px] w-[10px] border border-white-1000 rounded-full bg-[#2F9A48] absolute left-[35px] top-[32px] z-[2000]"></div>
                      </div>
                      <div class="flex flex-col justify-center content-start">
                        <h2 class="font-semibold text-[black]">Amman</h2>
                        <div class="text-xs text-blue-400 flex justify-start items-center space-x-1"></div>
                      </div>
                    </a>

                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                    >
                      <div class="w-12 h-12 rounded-full relative overflow-hidden">
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: "50%",
                          }}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNLl8R2R9pOLsHuS0ljA493CF-OXKCOXXSQ&usqp=CAU"
                          alt=""
                        />
                        <div class="h-[10px] w-[10px] border border-white-1000 rounded-full bg-[#2F9A48] absolute left-[35px] top-[32px] z-[2000]"></div>
                      </div>
                      <div class="flex flex-col justify-center content-start">
                        <h2 class="font-semibold text-[black]">Ahmad</h2>

                        <div class="text-xs text-blue-400 flex justify-start items-center space-x-1"></div>
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
                        <a
                          href="#"
                          class="hover:bg-[#E4E6E9] px-2.5 py-1.5  flex items-center space-x-3 rounded-md"
                        >
                          <div class="w-12 h-12 rounded-full flex justify-center items-center overflow-hidden bg-[silver]">
                            <FaPlus style={{ fontSize: "20px" }} />
                          </div>
                          <div class="flex flex-col justify-center content-start">
                            <h2 class="font-semibold text-[black]">
                              Create New Group
                            </h2>
                            <div class="text-xs text-blue-400 flex justify-start items-center space-x-1"></div>
                          </div>
                        </a>

                        <div class="flex flex-col justify-center content-start">
                          <a
                            href="#"
                            class="hover:bg-[#E4E6E9] px-2.5 py-1.5  flex items-center space-x-3 rounded-md"
                          >
                            <h2 class="font-semibold text-[#1F2020]">
                              Chilakanda - চিলাকান্দা
                            </h2>
                            <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                              <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                              <span>9+ new</span>
                            </div>
                          </a>
                          <a
                            href="#"
                            class="hover:bg-[#E4E6E9] px-2.5 py-1.5  flex items-center space-x-3 rounded-md"
                          >
                            <div class="flex flex-col justify-center content-start">
                              <h2 class="font-semibold text-[#1F2020]">
                                BDSkills
                              </h2>
                              <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                                <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                                <span>9+ new</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </AccordionDetails>
                    </Accordion>

                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                    ></a>
                  </div>
                </div>
              </div>
              {/* Left Sidebar End --> */}
            </body>
          </div>
          {/* <Story />
        <Friends/> */}
        </div>
      </div>
    </>
  );
};

export default Friends;

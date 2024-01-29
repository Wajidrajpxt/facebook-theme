import React from "react";
import { CgGames } from "react-icons/cg";
import { TbGridDots } from "react-icons/tb";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import { Avatar } from "@mui/material";
import { IoMdNotifications } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdHome } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { RiStore2Line } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";

export default function Appbar() {
  return (
    <nav class="bg-[white] p-1 h-15">
      <div class="flex justify-between items-center ">
        {/* <!-- LEFT --> */}
        <div class="flex items-center space-x-2">
          {/* <!-- logo --> */}
          <FaFacebook style={{ fontSize: "40px", color: "#0866FF" }} />
          <input
            class="hidden  sm:hidden md:inline-block lg:inline-block xl:inline-block xxl:inline-block rounded-full h-12 w-[250px] bg-[#F0F2F5]   p-4 text-md text-gray-800 outline-none"
            type="text"
            placeholder="Search Facebook"
          />
          <div class="  sm:visible md:hidden lg:hidden xl:hidden xxl:hidden h-[35px] w-[35px] rounded-full bg-[#F0F2F5] flex jusitfy-center items-center ">
            <HiMagnifyingGlass style={{ fontSize: "30px" }} />
          </div>
        </div>
        {/* <!-- MIDDLE --> */}
        <div class="flex sm:flex md:inline-block  lg:hidden  xl:hidden    justify-center items-center">
          <FaBars style={{ fontSize: "30px" }} />
        </div>
        <div class="  xs:hidden  sm:hidden md:hidden lg:flex xl:flex    relative flex justify-between bp w-[500px] items-center xs:col-4 sm:col-4 md:col-4 lg:col-5 xl:col-5 xxl:col-5">
          <div class="relative group">
            <div class="group-hover:bg-gray-100 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
              <MdHome
                style={{
                  fontSize: "30px",
                  color: "#0866FF",
                  cursor: "pointer",
                }}
              />
              <div class="absolute border-b-2 group-hover:cursor-pointer mt-2 border-blue-500 w-full  "></div>
            </div>

            {/* <div class="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 border-blue-500 w-full transition-all duration-100 ease-in-out "></div> */}
          </div>
          <div class="relative group">
            <div class="group-hover:bg-gray-100 p-1  group-hover:rounded-lg transition-all ease-in-out duration-300 cursor-pointer">
              <HiOutlineUsers
                style={{
                  fontSize: "30px",
                  color: "#606266",
                  cursor: "pointer",
                }}
              />
            </div>
            <div class="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 border-blue-500 w-full transition-all duration-100 ease-in-out"></div>
          </div>
          <div class="relative group">
            <div class="group-hover:bg-gray-100 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
              <GoVideo
                style={{
                  fontSize: "30px",
                  color: "#606266",
                  cursor: "pointer",
                }}
              />
            </div>
            <div class="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 border-blue-500 w-full transition-all duration-100 ease-in-out "></div>
          </div>

          <div class="relative group">
            <div class="group-hover:bg-gray-100 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
              <RiStore2Line
                style={{
                  fontSize: "30px",
                  color: "#606266",
                  cursor: "pointer",
                }}
              />
            </div>
            <div class="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 border-blue-500 w-full transition-all duration-100 ease-in-out "></div>
          </div>

          <div class="relative group">
            <div class="group-hover:bg-gray-100 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
              <CgGames
                style={{
                  fontSize: "30px",
                  color: "#606266",
                  cursor: "pointer",
                }}
              />
            </div>
            <div class="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 border-blue-500 w-full transition-all duration-100 ease-in-out "></div>
          </div>
        </div>
        {/* <!-- RIGHT --> */}
        {/* <div class="flex sm:flex md:inline-block  lg:hidden  xl:hidden    justify-center items-center">
          <FaBars style={{ fontSize: "30px" }} />
        </div> */}
        <div class=" flex justify-evenly w-1/5">
          <div class="h-[50px] w-[50px] rounded-full bg-[#D8DADF] flex justify-center items-center flex-col  ">
            <TbGridDots style={{ fontSize: "25px" }} />
          </div>
          <div class="h-[50px] w-[50px] rounded-full bg-[#D8DADF] flex justify-center items-center flex-col  ">
            <Badge
              badgeContent={4}
              color="primary"
              sx={{ backgrounColor: "red" }}
            >
              <FaFacebookMessenger
                color="action"
                style={{ fontSize: "30px" }}
              />
            </Badge>
          </div>

          <div class="h-[50px] w-[50px] rounded-full bg-[#D8DADF] flex justify-center items-center flex-col  ">
            <Badge
              badgeContent={20}
              color="primary"
              sx={{ backgrounColor: "red" }}
            >
              <IoMdNotifications color="action" style={{ fontSize: "30px" }} />
            </Badge>
          </div>

          <div class="h-[50px] w-[50px] bg-[red] rounded-full flex justify-center items-center flex-col  ">
            <img
              style={{ height: "100%", width: "100%", borderRadius: "50%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TT7rDnvPC76IEzYBPQ__fNkBt5PLsDMiIA&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

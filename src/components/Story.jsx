import React from "react";
import { GoPlus } from "react-icons/go";
import Proinput from "./Proinput";
import { FaEarthAsia } from "react-icons/fa6";
import { FaEllipsisH } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import { MdEmojiEmotions } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import { LuMessageCircle } from "react-icons/lu";
import { TbShare3 } from "react-icons/tb";
function Story() {
  return (
    <>
      <div class="h-screen  w-[44%]  flex bg-[#F0F2F5] p-2  flex-col gap-5 overflow-scroll ">
        <div class=" w-[100%] flex gap-1 p-1 xs:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1  xl:col-span-1  ">
          <div class="h-[40vh] w-[25%] bg-[white]  overflow-hidden rounded-lg cursor-[pointer]">
            <div class="h-[80%] w-[100%] rounded-lg  transition-all  hover:scale-110 hover:opacity-90">
              <img
                style={{ height: "100%", width: "100%" }}
                src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TT7rDnvPC76IEzYBPQ__fNkBt5PLsDMiIA&usqp=CAU"
                alt=""
              />
            </div>
            <div class=" w-[100%] bg-white rounded-lg relative ">
              <div class="absolute w-[45px] h-[45px] border-[5px]  border-blue-500 bg-[white]  rounded-full left-[50px] top-[-24px] cursor-pointer flex justify-center items-center">
                <GoPlus style={{ fontSize: "30px" }} />
              </div>
              <p class="absolute left-[25px] top-[25px] font-weigh  ">
                Create Story
              </p>
            </div>
          </div>
          <div class=" h-[auto] w-[25%]   rounded-lg cursor-[pointer] ">
            <div class="relative grid h-full w-full max-w-[28rem]     flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div class="absolute inset-0 m-0 h-full w-full  hover:scale-110 hover:opacity-80 overflow-hidden transition-all  rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>

                <div class="absolute w-[45px] h-[45px] border-[5px]  border-blue-500  rounded-full left-[10px] top-5 cursor-pointer">
                  <img
                    alt="Ali"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                    class="relative inline-block h-[100%] w-[100%] rounded-full "
                  />
                </div>
              </div>
              <div class="relative p-3 px-3 py-1 md:px-12">
                <h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[white]">
                  Ali
                </h5>
              </div>
            </div>
          </div>
          <div class=" w-[25%] bg-[aqua]  rounded-lg  ">
            <div class="relative grid h-full w-full max-w-[28rem]     flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div class="absolute inset-0 m-0 h-full w-full  hover:scale-110 hover:opacity-80 overflow-hidden transition-all  rounded-none bg-transparent bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg6J6AsUJU01mzUP-ew1kb__B99z5ZrPnKLg&usqp=CAU')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>

                <div class="absolute w-[45px] h-[45px] border-[5px]  border-blue-500  rounded-full left-[10px] top-5 cursor-pointer">
                  <img
                    alt="Kamran"
                    src="data:image/jpeg;base64,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"
                    class="relative inline-block h-[100%] w-[100%] rounded-full "
                  />
                </div>
              </div>
              <div class="relative p-3 px-3 py-1 md:px-12">
                <h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[white]">
                  Kamran
                </h5>
              </div>
            </div>
          </div>
          <div class=" w-[25%] bg-[aqua]  rounded-lg  ">
            <div class="relative grid h-full w-full max-w-[28rem]     flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div class="absolute inset-0 m-0 h-full w-full  hover:scale-110 hover:opacity-80 overflow-hidden transition-all  rounded-none bg-transparent bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjthM8fvfPyD_MCDzj-SMN9gsdm31sDtSRSw&usqp=CAU')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>

                <div class="absolute w-[45px] h-[45px] border-[5px]  border-blue-500  rounded-full left-[10px] top-5 cursor-pointer">
                  <img
                    alt="Kamran"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRORfGBXJ5yve57GcxpeRsnmGMH1sHkRL54Mw&usqp=CAU"
                    class="relative inline-block h-[100%] w-[100%] rounded-full "
                  />
                </div>
              </div>
              <div class="relative p-3 px-3 py-1 md:px-12">
                <h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[white]">
                  Muddasir
                </h5>
              </div>
            </div>
          </div>
        </div>
        <Proinput />
        <div class=" w-[100%]  flex justify-center ">
          <div class=" w-[90%] bg-[white] rounded-md ">
            <div class=" w-[100%] border-5 flex ml-5 items-center ">
              <div class=" h-[50px] w-[50px] rounded-full flex justify-center items-center flex-col  ">
                <img
                  style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div class="w-[30%]  ">
                <h5 class="text-[18px] font-[600] ">Sahil Adeem</h5>
                <span class="text-[13px] text-[gray] font-400 ">1h.</span>
                <FaEarthAsia
                  style={{
                    fontSize: "15px",
                    color: "gray",
                    display: "inline-block",
                  }}
                />
              </div>

              <div class="w-[20%] ml-44  flex justify-between ali">
                <FaEllipsisH style={{ fontSize: "25px", color: "gray" }} />
                <RxCross2 style={{ fontSize: "25px", color: "gray" }} />
              </div>
            </div>
            <div class="h-[auto] w-[100%] py-3">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABoMhO-lpmmTagIVvnNnYlt3wc9jX9jDQEw&usqp=CAU" alt="" />
              {/* <video src="c:\Users\Lenovo\Documents\wajid.mp4 "></video> */}
            </div>
            <div class=" w-[100%] rounded-lg flex justify-center items-center flex-col ">
              <div class="w-[100%] flex  items-center px-8">
                <div class="h-[25px] w-[25px] rounded-full flex justify-center items-center bg-[#408EFF]">
                  <ThumbUpOffAltOutlinedIcon style={{ fontSize: "20px", color: "white" }} />
                </div>
                <div class=" w-[35px] rounded-full flex justify-center items-center bg-[white] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#F9AC4C" }}
                  />
                </div>

                <div class=" w-[100px] flex justify-center items-center   ml-[300px] ">
                  <span>5</span>
                  <BiSolidMessageRounded
                    style={{ fontSize: "25px", color: "gray" }}
                  />
                </div>
              </div>
              <div class="h-[1px] w-[90%]  bg-[gray]  "></div>
              <div class="w-[90%] flex justify-around gap-5  items-center p-3">
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#E42645" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">Emoji</span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <LuMessageCircle
                    style={{ fontSize: "30px", color: "#7CC88E" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">
                Comments
                  </span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <TbShare3 style={{ fontSize: "30px", color: "#EAB026" }} />
                  <span class="fontSize-[25px] text-[#76787A]">
                    Share
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* 11 */}
<div class=" w-[100%]  flex justify-center ">
          <div class=" w-[90%] bg-[white] rounded-md ">
            <div class=" w-[100%] flex ml-5 items-center ">
              <div class=" h-[50px] w-[50px] rounded-full flex justify-center items-center flex-col  ">
                <img
                  style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div class="w-[30%]  ">
                <h5 class="text-[18px] font-[600] ">Sahil Adeem</h5>
                <span class="text-[13px] text-[gray] font-400 ">1h.</span>
                <FaEarthAsia
                  style={{
                    fontSize: "15px",
                    color: "gray",
                    display: "inline-block",
                  }}
                />
              </div>

              <div class="w-[20%] ml-44  flex justify-between ali">
                <FaEllipsisH style={{ fontSize: "25px", color: "gray" }} />
                <RxCross2 style={{ fontSize: "25px", color: "gray" }} />
              </div>
            </div>
            <div class="h-[auto] w-[100%] py-3">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaly--9HztPbqzUsaHacJXp1fqDDO6apdxOP2iRr0A1nHL1Vca5zMHjBqLIOis7-E8Q-o&usqp=CAU" alt="" />
              {/* <video src="c:\Users\Lenovo\Documents\wajid.mp4 "></video> */}
            </div>
            <div class=" w-[100%] rounded-lg flex justify-center items-center flex-col ">
              <div class="w-[100%] flex  items-center px-8">
                <div class="h-[25px] w-[25px] rounded-full flex justify-center items-center bg-[#408EFF]">
                  <ThumbUpOffAltOutlinedIcon style={{ fontSize: "20px", color: "white" }} />
                </div>
                <div class=" w-[35px] rounded-full flex justify-center items-center bg-[white] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#F9AC4C" }}
                  />
                </div>

                <div class=" w-[100px] flex justify-center items-center   ml-[300px] ">
                  <span>5</span>
                  <BiSolidMessageRounded
                    style={{ fontSize: "25px", color: "gray" }}
                  />
                </div>
              </div>
              <div class="h-[1px] w-[90%]  bg-[gray]  "></div>
              <div class="w-[90%] flex justify-around gap-5  items-center p-3">
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#E42645" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">Emoji</span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <LuMessageCircle
                    style={{ fontSize: "30px", color: "#7CC88E" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">
                Comments
                  </span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <TbShare3 style={{ fontSize: "30px", color: "#EAB026" }} />
                  <span class="fontSize-[25px] text-[#76787A]">
                    Share
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>      

        {/* 11 */}
<div class=" w-[100%]  flex justify-center ">
          <div class=" w-[90%] bg-[white] rounded-md ">
            <div class=" w-[100%]  flex ml-5 items-center ">
              <div class=" h-[50px] w-[50px] rounded-full flex justify-center items-center flex-col  ">
                <img
                  style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div class="w-[30%]  ">
                <h5 class="text-[18px] font-[600] ">Sahil Adeem</h5>
                <span class="text-[13px] text-[gray] font-400 ">1h.</span>
                <FaEarthAsia
                  style={{
                    fontSize: "15px",
                    color: "gray",
                    display: "inline-block",
                  }}
                />
              </div>

              <div class="w-[20%] ml-44  flex justify-between ali">
                <FaEllipsisH style={{ fontSize: "25px", color: "gray" }} />
                <RxCross2 style={{ fontSize: "25px", color: "gray" }} />
              </div>
            </div>
            <div class="h-[auto] w-[100%] py-3">
                  <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScn0EYLFpXczXmzKn639rOHHHcuOEkpoIFKA&usqp=CAU" alt="" />
              {/* <video src="c:\Users\Lenovo\Documents\wajid.mp4 "></video> */}
            </div>
            <div class=" w-[100%] rounded-lg flex justify-center items-center flex-col ">
              <div class="w-[100%] flex  items-center px-8">
                <div class="h-[25px] w-[25px] rounded-full flex justify-center items-center bg-[#408EFF]">
                  <ThumbUpOffAltOutlinedIcon style={{ fontSize: "20px", color: "white" }} />
                </div>
                <div class=" w-[35px] rounded-full flex justify-center items-center bg-[white] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#F9AC4C" }}
                  />
                </div>

                <div class=" w-[100px] flex justify-center items-center   ml-[300px] ">
                  <span>5</span>
                  <BiSolidMessageRounded
                    style={{ fontSize: "25px", color: "gray" }}
                  />
                </div>
              </div>
              <div class="h-[1px] w-[90%]  bg-[gray]  "></div>
              <div class="w-[90%] flex justify-around gap-5  items-center p-3">
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#E42645" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">Emoji</span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <LuMessageCircle
                    style={{ fontSize: "30px", color: "#7CC88E" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">
                Comments
                  </span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <TbShare3 style={{ fontSize: "30px", color: "#EAB026" }} />
                  <span class="fontSize-[25px] text-[#76787A]">
                    Share
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> 

        {/* 11 */}
<div class=" w-[100%]  flex justify-center ">
          <div class=" w-[90%] bg-[white] rounded-md ">
            <div class=" w-[100%]  flex ml-5 items-center ">
              <div class=" h-[50px] w-[50px] rounded-full flex justify-center items-center flex-col  ">
                <img
                  style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div class="w-[30%]  ">
                <h5 class="text-[18px] font-[600] ">Sahil Adeem</h5>
                <span class="text-[13px] text-[gray] font-400 ">1h.</span>
                <FaEarthAsia
                  style={{
                    fontSize: "15px",
                    color: "gray",
                    display: "inline-block",
                  }}
                />
              </div>

              <div class="w-[20%] ml-44  flex justify-between ali">
                <FaEllipsisH style={{ fontSize: "25px", color: "gray" }} />
                <RxCross2 style={{ fontSize: "25px", color: "gray" }} />
              </div>
            </div>
            <div class="h-[auto] w-[100%] py-3">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5GuZWHioCDkwLLh2eTRWSrfCuI8tAcxOgzQ&usqp=CAU" alt="" />
              {/* <video src="c:\Users\Lenovo\Documents\wajid.mp4 "></video> */}
            </div>
            <div class=" w-[100%] rounded-lg flex justify-center items-center flex-col ">
              <div class="w-[100%] flex  items-center px-8">
                <div class="h-[25px] w-[25px] rounded-full flex justify-center items-center bg-[#408EFF]">
                  <ThumbUpOffAltOutlinedIcon style={{ fontSize: "20px", color: "white" }} />
                </div>
                <div class=" w-[35px] rounded-full flex justify-center items-center bg-[white] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#F9AC4C" }}
                  />
                </div>

                <div class=" w-[100px] flex justify-center items-center   ml-[300px] ">
                  <span>5</span>
                  <BiSolidMessageRounded
                    style={{ fontSize: "25px", color: "gray" }}
                  />
                </div>
              </div>
              <div class="h-[1px] w-[90%]  bg-[gray]  "></div>
              <div class="w-[90%] flex justify-around gap-5  items-center p-3">
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#E42645" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">Emoji</span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <LuMessageCircle
                    style={{ fontSize: "30px", color: "#7CC88E" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">
                Comments
                  </span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <TbShare3 style={{ fontSize: "30px", color: "#EAB026" }} />
                  <span class="fontSize-[25px] text-[#76787A]">
                    Share
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> 

        {/* 11 */}
<div class=" w-[100%]  flex justify-center ">
          <div class=" w-[90%] bg-[white] rounded-md ">
            <div class=" w-[100%] border-5 flex ml-5 items-center ">
              <div class=" h-[50px] w-[50px] rounded-full flex justify-center items-center flex-col  ">
                <img
                  style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div class="w-[30%]  ">
                <h5 class="text-[18px] font-[600] ">Sahil Adeem</h5>
                <span class="text-[13px] text-[gray] font-400 ">1h.</span>
                <FaEarthAsia
                  style={{
                    fontSize: "15px",
                    color: "gray",
                    display: "inline-block",
                  }}
                />
              </div>

              <div class="w-[20%] ml-44  flex justify-between ali">
                <FaEllipsisH style={{ fontSize: "25px", color: "gray" }} />
                <RxCross2 style={{ fontSize: "25px", color: "gray" }} />
              </div>
            </div>
            <div class="h-[auto] w-[100%] py-3">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtjptdkGdOI8wlCA0T6WZorRbcK0XH-2PROA&usqp=CAU" alt="" />
              {/* <video src="c:\Users\Lenovo\Documents\wajid.mp4 "></video> */}
            </div>
            <div class=" w-[100%] rounded-lg flex justify-center items-center flex-col ">
              <div class="w-[100%] flex  items-center px-8">
                <div class="h-[25px] w-[25px] rounded-full flex justify-center items-center bg-[#408EFF]">
                  <ThumbUpOffAltOutlinedIcon style={{ fontSize: "20px", color: "white" }} />
                </div>
                <div class=" w-[35px] rounded-full flex justify-center items-center bg-[white] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#F9AC4C" }}
                  />
                </div>

                <div class=" w-[100px] flex justify-center items-center   ml-[300px] ">
                  <span>5</span>
                  <BiSolidMessageRounded
                    style={{ fontSize: "25px", color: "gray" }}
                  />
                </div>
              </div>
              <div class="h-[1px] w-[90%]  bg-[gray]  "></div>
              <div class="w-[90%] flex justify-around gap-5  items-center p-3">
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#E42645" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">Emoji</span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <LuMessageCircle
                    style={{ fontSize: "30px", color: "#7CC88E" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">
                Comments
                  </span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <TbShare3 style={{ fontSize: "30px", color: "#EAB026" }} />
                  <span class="fontSize-[25px] text-[#76787A]">
                    Share
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> 
        {/* 11 */}
<div class=" w-[100%]  flex justify-center ">
          <div class=" w-[90%] bg-[white] rounded-md ">
            <div class=" w-[100%] border-5 flex ml-5 items-center ">
              <div class=" h-[50px] w-[50px] rounded-full flex justify-center items-center flex-col  ">
                <img
                  style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div class="w-[30%]  ">
                <h5 class="text-[18px] font-[600] ">Sahil Adeem</h5>
                <span class="text-[13px] text-[gray] font-400 ">1h.</span>
                <FaEarthAsia
                  style={{
                    fontSize: "15px",
                    color: "gray",
                    display: "inline-block",
                  }}
                />
              </div>

              <div class="w-[20%] ml-44  flex justify-between ali">
                <FaEllipsisH style={{ fontSize: "25px", color: "gray" }} />
                <RxCross2 style={{ fontSize: "25px", color: "gray" }} />
              </div>
            </div>
            <div class="h-[auto] w-[100%] py-3">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQcOGgRi5pLNzR5FA3BRD94GHwMeoVHeUVYw&usqp=CAU" alt="" />
              {/* <video src="c:\Users\Lenovo\Documents\wajid.mp4 "></video> */}
            </div>
            <div class=" w-[100%] rounded-lg flex justify-center items-center flex-col ">
              <div class="w-[100%] flex  items-center px-8">
                <div class="h-[25px] w-[25px] rounded-full flex justify-center items-center bg-[#408EFF]">
                  <ThumbUpOffAltOutlinedIcon style={{ fontSize: "20px", color: "white" }} />
                </div>
                <div class=" w-[35px] rounded-full flex justify-center items-center bg-[white] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#F9AC4C" }}
                  />
                </div>

                <div class=" w-[100px] flex justify-center items-center   ml-[300px] ">
                  <span>5</span>
                  <BiSolidMessageRounded
                    style={{ fontSize: "25px", color: "gray" }}
                  />
                </div>
              </div>
              <div class="h-[1px] w-[90%]  bg-[gray]  "></div>
              <div class="w-[90%] flex justify-around gap-5  items-center p-3">
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#E42645" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">Emoji</span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <LuMessageCircle
                    style={{ fontSize: "30px", color: "#7CC88E" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">
                Comments
                  </span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <TbShare3 style={{ fontSize: "30px", color: "#EAB026" }} />
                  <span class="fontSize-[25px] text-[#76787A]">
                    Share
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> 

        {/* 11 */}
<div class=" w-[100%]  flex justify-center ">
          <div class=" w-[90%] bg-[white] rounded-md ">
            <div class=" w-[100%] border-5 flex ml-5 items-center ">
              <div class=" h-[50px] w-[50px] rounded-full flex justify-center items-center flex-col  ">
                <img
                  style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div class="w-[30%]  ">
                <h5 class="text-[18px] font-[600] ">Sahil Adeem</h5>
                <span class="text-[13px] text-[gray] font-400 ">1h.</span>
                <FaEarthAsia
                  style={{
                    fontSize: "15px",
                    color: "gray",
                    display: "inline-block",
                  }}
                />
              </div>

              <div class="w-[20%] ml-44  flex justify-between ali">
                <FaEllipsisH style={{ fontSize: "25px", color: "gray" }} />
                <RxCross2 style={{ fontSize: "25px", color: "gray" }} />
              </div>
            </div>
            <div class="h-[auto] w-[100%] py-3">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbi4YKb-HZgWsGv5RztIE2mjflB8i0EsncnltNaAqVLq38enoeL1MucwBM7gSJXftyvXc&usqp=CAU" alt="" />
              {/* <video src="c:\Users\Lenovo\Documents\wajid.mp4 "></video> */}
            </div>
            <div class=" w-[100%] rounded-lg flex justify-center items-center flex-col ">
              <div class="w-[100%] flex  items-center px-8">
                <div class="h-[25px] w-[25px] rounded-full flex justify-center items-center bg-[#408EFF]">
                  <ThumbUpOffAltOutlinedIcon style={{ fontSize: "20px", color: "white" }} />
                </div>
                <div class=" w-[35px] rounded-full flex justify-center items-center bg-[white] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#F9AC4C" }}
                  />
                </div>

                <div class=" w-[100px] flex justify-center items-center   ml-[300px] ">
                  <span>5</span>
                  <BiSolidMessageRounded
                    style={{ fontSize: "25px", color: "gray" }}
                  />
                </div>
              </div>
              <div class="h-[1px] w-[90%]  bg-[gray]  "></div>
              <div class="w-[90%] flex justify-around gap-5  items-center p-3">
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#E42645" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">Emoji</span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <LuMessageCircle
                    style={{ fontSize: "30px", color: "#7CC88E" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">
                Comments
                  </span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <TbShare3 style={{ fontSize: "30px", color: "#EAB026" }} />
                  <span class="fontSize-[25px] text-[#76787A]">
                    Share
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> 
        {/* 11 */}
<div class=" w-[100%]  flex justify-center ">
          <div class=" w-[90%] bg-[white] rounded-md ">
            <div class=" w-[100%] border-5 flex ml-5 items-center ">
              <div class=" h-[50px] w-[50px] rounded-full flex justify-center items-center flex-col  ">
                <img
                  style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div class="w-[30%]  ">
                <h5 class="text-[18px] font-[600] ">Sahil Adeem</h5>
                <span class="text-[13px] text-[gray] font-400 ">1h.</span>
                <FaEarthAsia
                  style={{
                    fontSize: "15px",
                    color: "gray",
                    display: "inline-block",
                  }}
                />
              </div>

              <div class="w-[20%] ml-44  flex justify-between ali">
                <FaEllipsisH style={{ fontSize: "25px", color: "gray" }} />
                <RxCross2 style={{ fontSize: "25px", color: "gray" }} />
              </div>
            </div>
            <div class="h-[auto] w-[100%] py-3">
                  <img src="https://i.pinimg.com/736x/d4/45/18/d4451889a89cabf88c833a92794450d6.jpg" alt="" />
              {/* <video src="c:\Users\Lenovo\Documents\wajid.mp4 "></video> */}
            </div>
            <div class=" w-[100%] rounded-lg flex justify-center items-center flex-col ">
              <div class="w-[100%] flex border items-center px-8">
                <div class="h-[25px] w-[25px] rounded-full flex justify-center items-center bg-[#408EFF]">
                  <ThumbUpOffAltOutlinedIcon style={{ fontSize: "20px", color: "white" }} />
                </div>
                <div class=" w-[35px] rounded-full flex justify-center items-center bg-[white] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#F9AC4C" }}
                  />
                </div>

                <div class=" w-[100px] flex justify-center items-center   ml-[300px] ">
                  <span>5</span>
                  <BiSolidMessageRounded
                    style={{ fontSize: "25px", color: "gray" }}
                  />
                </div>
              </div>
              <div class="h-[1px] w-[90%]  bg-[gray]  "></div>
              <div class="w-[90%] flex justify-around gap-5  items-center p-3">
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#E42645" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">Emoji</span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <LuMessageCircle
                    style={{ fontSize: "30px", color: "#7CC88E" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">
                Comments
                  </span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <TbShare3 style={{ fontSize: "30px", color: "#EAB026" }} />
                  <span class="fontSize-[25px] text-[#76787A]">
                    Share
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> 
        {/* 11 */}
<div class=" w-[100%]  flex justify-center ">
          <div class=" w-[90%] bg-[white] rounded-md ">
            <div class=" w-[100%] border-5 flex ml-5 items-center ">
              <div class=" h-[50px] w-[50px] rounded-full flex justify-center items-center flex-col  ">
                <img
                  style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div class="w-[30%]  ">
                <h5 class="text-[18px] font-[600] ">Sahil Adeem</h5>
                <span class="text-[13px] text-[gray] font-400 ">1h.</span>
                <FaEarthAsia
                  style={{
                    fontSize: "15px",
                    color: "gray",
                    display: "inline-block",
                  }}
                />
              </div>

              <div class="w-[20%] ml-44  flex justify-between ali">
                <FaEllipsisH style={{ fontSize: "25px", color: "gray" }} />
                <RxCross2 style={{ fontSize: "25px", color: "gray" }} />
              </div>
            </div>
            <div class="h-[auto] w-[100%] py-3">
                  <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0csc6SMJ9StIkHQA2wc9e4Ec0F66W-nOfwQ&usqp=CAU" alt="" />
              {/* <video src="c:\Users\Lenovo\Documents\wajid.mp4 "></video> */}
            </div>
            <div class=" w-[100%] rounded-lg flex justify-center items-center flex-col ">
              <div class="w-[100%] flex border items-center px-8">
                <div class="h-[25px] w-[25px] rounded-full flex justify-center items-center bg-[#408EFF]">
                  <ThumbUpOffAltOutlinedIcon style={{ fontSize: "20px", color: "white" }} />
                </div>
                <div class=" w-[35px] rounded-full flex justify-center items-center bg-[white] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#F9AC4C" }}
                  />
                </div>

                <div class=" w-[100px] flex justify-center items-center   ml-[300px] ">
                  <span>5</span>
                  <BiSolidMessageRounded
                    style={{ fontSize: "25px", color: "gray" }}
                  />
                </div>
              </div>
              <div class="h-[1px] w-[90%]  bg-[gray]  "></div>
              <div class="w-[90%] flex justify-around gap-5  items-center p-3">
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#E42645" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">Emoji</span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <LuMessageCircle
                    style={{ fontSize: "30px", color: "#7CC88E" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">
                Comments
                  </span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <TbShare3 style={{ fontSize: "30px", color: "#EAB026" }} />
                  <span class="fontSize-[25px] text-[#76787A]">
                    Share
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>  

        {/* 11 */}
<div class=" w-[100%]  flex justify-center ">
          <div class=" w-[90%] bg-[white] rounded-md ">
            <div class=" w-[100%] border-5 flex ml-5 items-center ">
              <div class=" h-[50px] w-[50px] rounded-full flex justify-center items-center flex-col  ">
                <img
                  style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div class="w-[30%]  ">
                <h5 class="text-[18px] font-[600] ">Sahil Adeem</h5>
                <span class="text-[13px] text-[gray] font-400 ">1h.</span>
                <FaEarthAsia
                  style={{
                    fontSize: "15px",
                    color: "gray",
                    display: "inline-block",
                  }}
                />
              </div>

              <div class="w-[20%] ml-44  flex justify-between ali">
                <FaEllipsisH style={{ fontSize: "25px", color: "gray" }} />
                <RxCross2 style={{ fontSize: "25px", color: "gray" }} />
              </div>
            </div>
            <div class="h-[auto] w-[100%] py-3">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCDITtHsRODe9-cgwZJMnOXWs0AYXDFzFzIg&usqp=CAU" alt="" />
              {/* <video src="c:\Users\Lenovo\Documents\wajid.mp4 "></video> */}
            </div>
            <div class=" w-[100%] rounded-lg flex justify-center items-center flex-col ">
              <div class="w-[100%] flex  items-center px-8">
                <div class="h-[25px] w-[25px] rounded-full flex justify-center items-center bg-[#408EFF]">
                  <ThumbUpOffAltOutlinedIcon style={{ fontSize: "20px", color: "white" }} />
                </div>
                <div class=" w-[35px] rounded-full flex justify-center items-center bg-[white] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#F9AC4C" }}
                  />
                </div>

                <div class=" w-[100px] flex justify-center items-center   ml-[300px] ">
                  <span>5</span>
                  <BiSolidMessageRounded
                    style={{ fontSize: "25px", color: "gray" }}
                  />
                </div>
              </div>
              <div class="h-[1px] w-[90%]  bg-[gray]  "></div>
              <div class="w-[90%] flex justify-around gap-5  items-center p-3">
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#E42645" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">Emoji</span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <LuMessageCircle
                    style={{ fontSize: "30px", color: "#7CC88E" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">
                Comments
                  </span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <TbShare3 style={{ fontSize: "30px", color: "#EAB026" }} />
                  <span class="fontSize-[25px] text-[#76787A]">
                    Share
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> 

        {/* 11 */}
<div class=" w-[100%]  flex justify-center ">
          <div class=" w-[90%] bg-[white] rounded-md ">
            <div class=" w-[100%] border-5 flex ml-5 items-center ">
              <div class=" h-[50px] w-[50px] rounded-full flex justify-center items-center flex-col  ">
                <img
                  style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div class="w-[30%]  ">
                <h5 class="text-[18px] font-[600] ">Sahil Adeem</h5>
                <span class="text-[13px] text-[gray] font-400 ">1h.</span>
                <FaEarthAsia
                  style={{
                    fontSize: "15px",
                    color: "gray",
                    display: "inline-block",
                  }}
                />
              </div>

              <div class="w-[20%] ml-44  flex justify-between ali">
                <FaEllipsisH style={{ fontSize: "25px", color: "gray" }} />
                <RxCross2 style={{ fontSize: "25px", color: "gray" }} />
              </div>
            </div>
            <div class="h-[auto] w-[100%] py-3">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQDsj67x17Wd141IsIU8KhWlw86zeedB1bw&usqp=CAU" alt="" />
              {/* <video src="c:\Users\Lenovo\Documents\wajid.mp4 "></video> */}
            </div>
            <div class=" w-[100%] rounded-lg flex justify-center items-center flex-col ">
              <div class="w-[100%] flex border items-center px-8">
                <div class="h-[25px] w-[25px] rounded-full flex justify-center items-center bg-[#408EFF]">
                  <ThumbUpOffAltOutlinedIcon style={{ fontSize: "20px", color: "white" }} />
                </div>
                <div class=" w-[35px] rounded-full flex justify-center items-center bg-[white] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#F9AC4C" }}
                  />
                </div>

                <div class=" w-[100px] flex justify-center items-center   ml-[300px] ">
                  <span>5</span>
                  <BiSolidMessageRounded
                    style={{ fontSize: "25px", color: "gray" }}
                  />
                </div>
              </div>
              <div class="h-[1px] w-[90%]  bg-[gray]  "></div>
              <div class="w-[90%] flex justify-around gap-5  items-center p-3">
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver] ">
                  <MdEmojiEmotions
                    style={{ fontSize: "30px", color: "#E42645" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">Emoji</span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <LuMessageCircle
                    style={{ fontSize: "30px", color: "#7CC88E" }}
                  />
                  <span class="fontSize-[25px] text-[#76787A]">
                Comments
                  </span>
                </div>
                <div class=" w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                  <TbShare3 style={{ fontSize: "30px", color: "#EAB026" }} />
                  <span class="fontSize-[25px] text-[#76787A]">
                    Share
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> 


      </div>
    </>
  );
}

export default Story;

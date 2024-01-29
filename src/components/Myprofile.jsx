import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BasicTabs from "./Tabs";
import { GoShieldLock } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaHouse } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import Proinput from "./Proinput";
import { LuSettings2 } from "react-icons/lu";
import { PiGearSixFill } from "react-icons/pi";
import { PiListBold } from "react-icons/pi";
import { FiGrid } from "react-icons/fi";
import { FaEarthAsia } from "react-icons/fa6";
import { FaEllipsisH } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { AiFillLike } from "react-icons/ai";
import { MdEmojiEmotions } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import { LuMessageCircle } from "react-icons/lu";
import { TbShare3 } from "react-icons/tb";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFatLight } from "react-icons/pi";

import data from "./Data";
import { Link, useParams } from "react-router-dom";
function Myprofile() {
  const { id } = useParams();
  console.log(id, "id");
  console.log(data[id], "data[i]");

  return (
    <>
      <div class="w-[100%]">
        <div class=" w-[100%] bg-[wheat]">
          <div class=" flex justify-center items-center flex-col">
            <div class=" h-[auto] w-[75%] bg-[red] ">
              <img
                class=""
                // src="https://imagizer.imageshack.com/img921/9628/VIaL8H.jpg"
                src={
                  data[id]
                    ? data[id].cover
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9a2JC68sloMYWfflaVIBWObVeiuh7wu_qQ&usqp=CAU"
                }
                alt=""
              />
            </div>

            <div class=" w-[20%] flex justify-center items-center flex-col gap-5 absolute left-[900px] top-[250px]">
              <div class="m-btn">
                <span></span>{" "}
                <i class=" text-[30px] font-extrabold text-[black] ">
                  Create with Avater
                </i>{" "}
              </div>
              <div class="m-btn">
                <i class=" text-[30px]  font-extrabold text-[black] ">
                  Edit Cover Photo
                </i>
              </div>
            </div>

            <div class=" w-[70%]  flex ">
              <div class="h-[30vh] w-[50%] flex justify-center items-center ">
                <div class="h-[170px] w-[170px] rounded-full ">
                  <img
                    class="rounded-full   border border-white-5"
                    src={
                      data[id]
                        ? data[id].prof
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TT7rDnvPC76IEzYBPQ__fNkBt5PLsDMiIA&usqp=CAU"
                    }
                  />
                </div>

                <div class="border-none">
                  <h1 class=" font-bold text-5xl text-[black]">
                    {data[id] ? data[id].name : "wajid Ali"}
                  </h1>
                  <p class=" text-xl text-[gray] py-1 px-2"> Friends 134</p>
                </div>
              </div>

              <div class=" w-[50%]   flex justify-center items-center gap-5">
                <button class=" h-[45px] w-[30%] font-bold text-[white]  bg-[#0861F2] border rounded-md hover:opacity-[0.8]  cursor-pointer">
                  Add to Story{" "}
                </button>
                <button class="w-[30%] h-[45px] font-bold text-[black] cursor-pointer  bg-[silver] rounded-md hover:opacity-[0.8]">
                  Edit Profile
                </button>

                <div class="bg[white] ">
                  <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography></Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="p ">
                          <p style={{fontSize:'17px',color:'black',cursor:"pointer" }}></p>
                          recently message M.ali <br />
                          recently message Kamran Ameer <br />
                          recently message Huziafa <br />
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-[2px] w-[70%] bg-[black]"></div>

            <div class="h-[10vh]  w-[60%] bg-[white]">
              <BasicTabs />
            </div>
          </div>
        </div>
        <div class=" bg-[#F0F2F5] w-[100%] flex justify-center items-center ">
          <div class=" w-[70%] bg-[#F0F2F5] flex gap-5 ">
            <div class="w-[40%] h-[100vh] overflow-scroll    rounded-md bg-[white] mt-[10px]  ">
              <div class=" border rounded-md w-[100%] flex ">
                <div class="  w-[30%] flex justify-center items-center">
                  <div class="h-[60px] rounded-full w-[60px] bg-[#1877F2] flex justify-center items-center">
                    <GoShieldLock
                      style={{ fontSize: "30px", color: "white" }}
                    />
                  </div>
                </div>
                <div class=" h-[15vh]  w-[70%] flex justify-center  flex-col">
                  <h2 className="text-2xl font-semibold text-[#1877F2]">
                    You locked your profile
                  </h2>
                  <p className=" font-semibold text-lg text-[1877F2]">
                    Learn more
                  </p>
                </div>
              </div>

              <div class=" rounded-md mt-[10] w-[100%] ">
                <div class="mt-5 ">
                  <h5 class="text-xl  font-medium color-[black]">Intro</h5>

                  <h6 class="text-lg  font-semibold color-[black] px-9">
                    Little knowledge Is ignorance
                  </h6>
                  <div class="flex justify-center items-center w-[100%]">
                    <button class=" h-[5vh]  w-[90%]  rounded-lg bg-[#D8DADF] mt-3  hover:bg-[#8C939D]">
                      {" "}
                      Edit bio
                    </button>
                  </div>

                  <div class="w-[100%] bg-[white]  ">
                    <div class="w-[90%]  mt-1 ">
                      <div className="w-[100%] flex gap-3 py-1">
                        <div class="w-[20%] flex justify-center h-[5vh] ">
                          <HiMiniShoppingBag
                            style={{ fontSize: "25px", color: "#8C939D" }}
                          />
                        </div>
                        <div class="w-[60%] h-[5vh]  flex items-center">
                          <h5 class="text-lg text-[#8C939D]">works At:</h5>
                          <span class="text-lg text-[#8C939D]">
                            Islamic union
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="w-[90%] py-1 ">
                      <div className="w-[100%] flex gap-3">
                        <div class="w-[20%] flex justify-center  ">
                          <HiMiniShoppingBag
                            style={{ fontSize: "25px", color: "#8C939D" }}
                          />
                        </div>
                        <div class="w-[60%]  flex items-center">
                          <h5 class="text-lg text-[#8C939D]"> study:</h5>
                          <h5 class="text-lg text-[#8C939D]"> Continue</h5>
                        </div>
                      </div>
                    </div>
                    <div class="w-[90%]   py-1">
                      <div className="w-[100%] flex gap-3">
                        <div class="w-[20%] flex justify-center  ">
                          <HiMiniShoppingBag
                            style={{ fontSize: "25px", color: "#8C939D" }}
                          />
                        </div>
                        <div class="w-[60%] flex items-center">
                          <h5 class="text-lg text-[#8C939D]">wents To:</h5>
                          <span class="text-xl text-[#8C939D]">
                            Central Model
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="w-[90%] py-1 ">
                      <div className="w-[100%] flex gap-3">
                        <div class=" w-[20%] flex justify-center ">
                          <FaHouse
                            style={{ fontSize: "25px", color: "#8C939D" }}
                          />
                        </div>
                        <div class="w-[60%] h-[5vh]  flex items-center">
                          <h5 class="text-lg text-[#8C939D]"> Home:</h5>
                          <span class="text-xl text-[#8C939D]">
                            Smanabd Lhr
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="w-[90%]  py-1 ">
                      <div className="w-[100%] flex gap-3">
                        <div class=" w-[20%] flex justify-center">
                          <IoLocationOutline
                            style={{ fontSize: "25px", color: "#8C939D" }}
                          />
                        </div>
                        <div class="w-[60%] h-[5vh]  flex items-center">
                          <h5 class="text-lg text-[#8C939D]"> From:</h5>
                          <span class="text-xl text-[#8C939D]"> Pakistan</span>
                        </div>
                      </div>
                    </div>
                    <div class="w-[90%]  py-1 ">
                      <div className="w-[100%] flex gap-3">
                        <div class=" w-[20%] flex justify-center">
                          <FaHeart
                            style={{ fontSize: "25px", color: "#8C939D" }}
                          />
                        </div>
                        <div class="w-[60%] h-[5vh]   flex items-center">
                          <h5 class="text-lg text-[#8C939D]"> </h5>
                          <span class="text-xl text-[#8C939D]"> Single</span>
                        </div>
                      </div>
                    </div>
                    <div class="w-[90%] py-1 flex justify-center  items-center flex-col gap-2">
                      <button class="h-[40px] w-[90%] rounded-md text-lg font-medium   bg-[#D8DADF] hover:bg-[#8C939D] cursor-pointer">
                        Edit Details
                      </button>
                      <button class="h-[40px] w-[90%] rounded-md text-lg bg-[#D8DADF] font-medium   hover:bg-[#8C939D] cursor-pointer">
                        {" "}
                        Add featured
                      </button>
                    </div>

                    <div class=" w-[100%]   rounded-md  mt-4 flex justify-between items-center  flex-col ">
                      <div class="w-[60%] h-[5vh]   flex items-center ml-4 justify-between">
                        <h5 class="text-xl font-semibold text-[black] hover:underline cursor-pointer">
                          {" "}
                          Photos{" "}
                        </h5>
                        <p class="text-lg text-[blue] hover:bg-[silver] rounded-md  cursor-pointer">
                          {" "}
                          See All Photos
                        </p>
                      </div>

                      <div class=" w-[100%] bg-[white] rounded-lg p-2 ">
                        <div className=" w-[100%] flex items-center space-y-1 gap-3">
                          <div class="h-[100px] w-[110px] bg-[green] rounded-sm">
                            <img
                              className="h-[100%] w-[100%] cursor-pointer "
                              src="data:image/jpeg;base64,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"
                              alt=""
                            />
                          </div>
                          <div class="h-[100px] w-[110px] bg-[green] rounded-sm">
                            <img
                              className="h-[100%] w-[100%] cursor-pointer "
                              src="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORWbqwe1XWCuj2CdLIOfw5voZJp49T4TG5Q&usqp=CAU"
                              alt=""
                            />
                          </div>
                          <div class="h-[100px] w-[110px] bg-[green] rounded-sm">
                            <img
                              className="h-[100%] w-[100%] cursor-pointer "
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljwlv7U93GOy1sPzMOd20P9pvnLG7GkOX4w&usqp=CAU"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className=" w-[100%] flex items-center space-y-1 gap-3">
                          <div class="h-[100px] w-[110px] bg-[green] rounded-sm ">
                            <img
                              className="h-[100%] w-[100%] cursor-pointer "
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDClC-7mEkE9B8pnZq1eMspdy6VOGziSyEw&usqp=CAU "
                              alt=""
                            />
                          </div>
                          <div class="h-[100px] w-[110px] bg-[green] rounded-sm">
                            <img
                              className="h-[100%] w-[100%] cursor-pointer "
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRFjSXDgEoSyYwyRgpZwjS21z3wUpFZXHuiQ&usqp=CAU "
                              alt=""
                            />
                          </div>
                          <div class="h-[100px] w-[110px] bg-[green] rounded-sm">
                            <img
                              className="h-[100%] w-[100%] cursor-pointer "
                              src="https://cdn.britannica.com/73/189273-131-DA3E2F9A/Denali-peak-center-Alaska-Range-North-America.jpg?w=840&h=460&c=crop "
                              alt=""
                            />
                          </div>
                        </div>
                        <div className=" w-[100%] flex items-center space-y-1 gap-3">
                          <div class="h-[90px] w-[110px] bg-[green] rounded-sm">
                            <img
                              className="h-[100%] w-[100%] cursor-pointer "
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbe0FBTLCFlQ1MBI-DjkELxiRJpCq5tEbiOA&usqp=CAU "
                              alt=""
                            />
                          </div>
                          <div class="h-[90px] w-[110px] bg-[green] rounded-sm">
                            <img
                              className="h-[100%] w-[100%] cursor-pointer "
                              src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzBWelrDhp6wEYwdSiS_RAQoBPM1BNYQypzg&usqp=CAU"
                              alt=""
                            />
                          </div>
                          <div class="h-[90px] w-[110px] bg-[green] rounded-sm">
                            <img
                              className="h-[100%] w-[100%] cursor-pointer "
                              src="https://ideas.ted.com/wp-content/uploads/sites/3/2020/05/final_animals-homeschooling_credit-alamy.jpg "
                              alt=""
                            />
                          </div>
                        </div>
                      </div>

                      <div class=" w-[100%]   rounded-md  mt-4 flex justify-between items-center  flex-col ">
                        <div class="w-[60%] h-[5vh]   flex items-center ml-4 justify-between">
                          <h5 class="text-xl font-semibold text-[black] hover:underline cursor-pointer">
                            {" "}
                            Friends{" "}
                          </h5>
                          <p class="text-lg text-[blue] hover:bg-[silver] rounded-md  cursor-pointer">
                            {" "}
                            See All Friends
                          </p>
                        </div>

                        <div className="w-[100%] h-auto flex flex-wrap border gap-3">
                          {data.map((item, i) => {
                            return (
                              <Link to={item.frd1url}>
                                <div class="h-[auto] w-[110px]  rounded-sm">
                                  <img
                                    className="h-[100px]"
                                    src={item.prof}
                                    alt=""
                                  />
                                  <p class="text-[black] ">{item.name}</p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      <div class=" w-[100%]   rounded-md  mt-4 flex justify-between items-center  flex-col ">
                        <div class="w-[60%] h-[5vh]   flex items-center ml-4 justify-between">
                          <h5 class="text-xl font-semibold text-[black] hover:underline cursor-pointer">
                            {" "}
                            Life Events{" "}
                          </h5>
                          <p class="text-lg text-[blue] hover:bg-[silver] rounded-md  cursor-pointer">
                            {" "}
                            See All
                          </p>
                        </div>

                        <div class=" w-[100%] bg-[white] rounded-lg p-2  flex items-center gap-2 ">
                          <div className=" h-[100%] w-[50%] flex items-center flex-ocl rounded-lg ">
                            <div class=" w-[100%]   ">
                              <img
                                class="h-[100%] w-[100%]"
                                src="data:image/jpeg;base64,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"
                                alt=""
                              />
                              <div class=" borderflex justify-center items-center flex-col">
                                <h5 className="font-medium text-base">
                                  Went to{" "}
                                </h5>
                                <p className="font-medium text-base">
                                  october 2005
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className=" h-[100%] w-[50%] flex items-center flex-ocl rounded-lg ">
                            <div class=" w-[100%]   ">
                              <img
                                class="h-[100%] w-[100%]"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAaVBMVEU7WZj///8vUZSirckkS5ErTpO5wdYdRo7u8fY2VpbS2OVfdaedqcYlSpH4+vwwUpR2iLLa3unp7PKlsMuYpMSIl7zL0eHj5u+zvNOCkbh5irTr7fS9xdnDytwANohne6tNZ6BZcKVleqpNf2GTAAACQUlEQVR4nO3c7W6bMABG4UBNwE0JSfO1rh9rd/8X2ahbGSYOkHeW/YPz/EQE4SNHIQaxWAAAAAAAAAAAAAAAAAAAAAAAAABAULbJA2lSDyWierW/C+SwyFOPJpb8mAV0KFKPJ446aLUs29jUI4rBrsJWy0516iHF0OwDZ8tmMdvyu9DZUo8oCrJJyCYhm4RsErJJyCaRs1Wn7dnpsVqTbWqyHxtbm7P6zOTNjmzjnp9M4awQ5Q9kG7Ur+6tqZBv301weg2yj1TzraWQbs/MtC5FtxGPpPQbZhvmXbsk27Nk72cg2Yue/L0W2YR/Od7QpTPF1d7Qm25C1c/FRb47V+i+yDXBuSpnllb2SDSWmW7IdO7Ot2VzbK91YIrol20snW/FKtomWnWzliWxKtopsZLsV2SRkk5BNQjYJ2STq5S7ZRtx/2+47t6yK1/t/+Ct/qTTfnBt9RbvZvDHbLk14qJRsQjb7i2xCtuZANiFb7jw5Q7aJ2XpLbzHOOrkA2eot2YRsxr3yjXHWyYX4SXD3j3HWyf1/NvtONo/ctrofbDfm7mUb2f5Ytd473Wy79aN3hHRjiUheAek/IE62a1hva5FNQjYJ2SRkk5BNQjYJ2SRkk5BNQjYJ2SRkk5BNQjYJ2SRkk5BNQjYJ2SRkk5BNQjYJ2SRkk5BN0nvwNkC2ebxU3AbO9jKPbM1T0GzVLN6NfVb83voLDE4kf7b10s4l28Ka2kzivKqn8O1RzuMbCgAAAAAAAAAAAAAAAAAAAAATfQJ/9Sfl5KdCRgAAAABJRU5ErkJggg== "
                                alt=""
                              />
                              <div class=" border flex justify-center items-center flex-col">
                                <h5 className="font-medium text-base">
                                  started job at Facebook{" "}
                                </h5>
                                <p className="font-medium text-base">
                                  october 2005
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[100%]">
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
                            <span class="cursor-text">
                              Facebook &copy; 2021
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-screen overflow-scroll w-[55%] rounded-lg flex  items-center flex-col py-3 ">
              {/* <div class=" w-[100%] rounded-lg mb-5 ">
                <Proinput />
              </div> */}
              <div class="h-[20vh] w-[90%]  rounded-lg  bg-[white]  mt-3">
                <div class="flex gap-x-8 justify-around ">
                  <div class="">
                    <h1 class="font-bold text-3xl mt-120 ml-2  text-[black]">
                      Posts
                    </h1>
                  </div>

                  <div class="  flex gap-1 items-end ">
                    <div className=" w-[130px] bg-[silver] rounded-md flex justify-around  items-center hover:bg-[#D8DADF] cursor-pointer ">
                      <LuSettings2 style={{ fontSize: "30px" }} />
                      <h6 class="font-normal text-lg ">filters</h6>
                    </div>
                    <div className=" w-[200px]  bg-[silver] rounded-md flex justify-around  items-center  hover:bg-[#D8DADF] cursor-pointer">
                      <PiGearSixFill style={{ fontSize: "30px" }} />
                      <h6 class="font-normal text-lg ">Manage Posts</h6>
                    </div>
                  </div>
                </div>
                <div class="h-[1px] w-[100%] bg-[silver] mt-5 "> </div>

                <div class="flex justify-around items-center">
                  <div class="w-[40%]  flex justify-center items-center">
                    <PiListBold style={{ fontSize: "30px" }} />
                    <h6 class="font-normal text-xl ">Lists</h6>
                  </div>

                  <div class="w-[40%]   flex justify-center items-center">
                    <FiGrid style={{ fontSize: "30px" }} />
                    <h6 class="font-normal text-xl ">Grid</h6>
                  </div>
                </div>
              </div>
              {data[id ? id : "0"].stories.map((ele, i) => {
                return (
                  <div class="h-[auto] w-[100%] mt-5  rounded-md ">
                    <div class="h-[auto] w-[100%] rounded-md bg-white">
                      <a href="#" class="td p-p-pic">
                        <img
                          src="data:image/jpeg;base64,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"
                          alt="Rajeev's profile pic"
                        />
                      </a>
                      <div class="td p-r-hdr">
                        <div class=" p-u-info">
                          <a href="#">Kamran</a> shared a memory with{" "}
                          <a href="#">Wajid Ali </a>
                        </div>
                        <div class="p-dt">
                          <span>January 18, 2018</span>
                        </div>
                      </div>
                    </div>
                    <div class="h[auto] w-[100%] rounded-full ">
                      <img src={ele.post1} alt="" />
                    </div>
                    <div class="h-[auto] ">
                      {/* wala   */}
                      <div class="h-[8vh] w-[100%] flex  justify-around items-center ">
                        <div class="h-[auto] flex  justify-center gap-1 items-center w-[auto] ">
                          <SlLike
                            style={{
                              fontSize: "20px",
                              color: "rgb(5,102,255)",
                            }}
                          />
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "16px",
                              fontWeight: "400",
                              color: "rgb(5,102,255)",
                            }}
                          >
                            Like
                          </span>
                        </div>
                        <div class="h-[auto] w-[auto] flex  justify-center gap-1 items-center ">
                          <PiShareFatLight
                            style={{
                              fontSize: "20px",
                              cursor: "pointer",
                              // color:'rgb(5,102,255)'
                            }}
                          />
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "16px",
                              fontWeight: "400",
                              cursor: "pointer",
                              // color:'rgb(5,102,255)'
                            }}
                          >
                            comment
                          </span>
                        </div>
                        <div class="h-[auto] w-[auto] flex  justify-center gap-1 items-center ">
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "16px",
                              fontWeight: "400",
                              cursor: "pointer",
                            }}
                          >
                            Share
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Myprofile;

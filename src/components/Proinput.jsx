import React from "react";
import { BiSolidVideoPlus } from "react-icons/bi";
import { IoMdPhotos } from "react-icons/io";
import { GrEmoji } from "react-icons/gr";

const Proinput = () => {
  return (
    <>
      <div class=" w-[100%]  flex justify-center items-center">
        <div class=" h-[25vh] w-[90%] bg-[#ffff] rounded-md flex justify-center items-center flex-col">
          <div class="h-[50%] w-[100%]   flex justify-around items-center">
            <div class=" h-[60px] w-[60px] rounded-full flex justify-center items-center flex-col  ">
              <img
                style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TT7rDnvPC76IEzYBPQ__fNkBt5PLsDMiIA&usqp=CAU"
                alt=""
              />
            </div>
            <input
              type="text"
              class="h-[8vh] w-[80%] bg-[#E4E6E9] rounded-full px-7 cursor-pointer"
              placeholder="What's On your Mind"
            />
          </div>

          <div class="h-[1px] w-[90%] border-[1px] bg-[silver] "></div>
          <div class="h-[50%] w-[100%]  flex justify-around items-center p-1 ">
            <div class="w-[100%] flex justify-around gap-5  items-center ">

              
            <div class=" w-[140px] p-1  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver] ">
                    <BiSolidVideoPlus style={{fontSize:'30px',color:'#E42645'}} />
                    <span class="fontSize-[25px] text-[#76787A]">Live video</span>
              </div>
            <div class="p-1 w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                    <IoMdPhotos style={{fontSize:'30px',color:'#7CC88E'}} />
                    <span class="fontSize-[25px] text-[#76787A]">Photo/video</span>
              </div>
            <div class="p-1 w-[140px]  rounded-md flex justify-center items-center cursor-[pointer] transition-all hover:bg-[silver]">
                    <GrEmoji style={{fontSize:'30px',color:'#EAB026'}} />
                    <span class="fontSize-[25px] text-[#76787A]">Feeling/acitvity</span>
              </div>

            </div>
         
          </div>
        </div>


      </div>
    </>
  );
};

export default Proinput;

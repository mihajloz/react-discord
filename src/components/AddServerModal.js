import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { MdExplore } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const AddServerModal = ({ toggleModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="z-10 bg-black opacity-50 absolute top-0 left-0 w-full h-full"></div>
      <div className="z-20">
        <div className="relative">
          <div className="bg-white rounded-[5px] shadow-lg w-[440px] h-[440px] flex flex-col items-center p-4">
            <div className="flex flex-col w-full">
              {/* Modal content goes here */}
              <div className="flex justify-end">
                <button onClick={toggleModal}>
                  <RiCloseLine className="text-black/50 text-[30px]" />
                </button>
              </div>
              <h2 className="flex justify-center font-bold text-[20px] mb-1">
                Join a Server
              </h2>
            </div>
            <p className="text-black/80 font-light text-[13px] mb-3">
              Enter an invite below to join an existing server
            </p>

            <h6 className="text-[13px] text-black/60 font-bold tracking-tight mb-2 w-full flex justify-start">
              INVITE LINK
            </h6>
            <input
              type="search"
              placeholder="https://discord.gg/hTKzmak"
              className="bg-[#e3e5e8] placeholder:text-black/50 rounded-[3px] outline-none text-[15px] px-3 py-2 w-full mb-3"
            />
            <h6 className="text-[13px] text-black/60 font-bold tracking-tight mb-2 w-full flex justify-start">
              INVITES SHOULD LOOK LIKE
            </h6>
            <p className="font-normal text-black/80 text-[12px] w-full flex justify-start">
              hTKzmak
            </p>
            <p className="font-normal text-black/80 text-[12px] w-full flex justify-start">
              https://discord.gg/hTKzmak
            </p>
            <p className="font-normal text-black/80 text-[12px] w-full flex justify-start">
              https://discord.gg/cool-people
            </p>

            <Link to="/guild-discovery">
              <button className="p-3 bg-[#f2f3f5] hover:bg-[#e3e5e8] rounded-[8px] flex mt-4 w-full">
                <div className="rounded-full bg-[#3ba55c] w-[40px] p-2 flex mr-3">
                  <MdExplore className="text-[25px] text-white" />
                </div>
                <div>
                  <div className="flex flex-col">
                    <h6 className="text-black text-[15px] font-semibold flex justify-start">
                      Don't have an invite?
                    </h6>
                    <p className="text-black/70 text-[11px] flex justify-start">
                      Check out public communities in Server Discovery.
                    </p>
                  </div>
                </div>
                <BiChevronRight className="text-[30px] text-black/70 mt-[5px] ml-8" />
              </button>
            </Link>
          </div>
          <div className="w-[440px] h-[70px] bg-[#f2f3f5] absolute bottom-0 rounded-b-[5px] flex justify-between">
            <div className="text-black/50 text-[13px] h-full flex items-center ml-5">
              Back
            </div>
            <button className="flex h-[36px] rounded-[4px] bg-[#5865f2] mt-[17px] items-center px-4 py-3 text-[13px] text-white hover:bg-[#4752c4] mr-5">
              Join Server
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServerModal;

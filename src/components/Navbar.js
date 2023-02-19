import React from "react";
import { Link } from "react-router-dom";
import dm from "../images/icons/discord.svg";
import { AiOutlinePlus } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { TbDownload } from "react-icons/tb";
import { servers } from "../components/GuildDisc/servers";
import { useState } from "react";
import AddServerModal from "./AddServerModal";
import DownloadModal from "./DownloadModal";

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);
  const toggleDownloadModal = () => setDownloadModalOpen(!downloadModalOpen);

  return (
    <div className="flex overflow-y-scroll z-50">
      <div className="flex flex-col items-center space-y-2 nav-scroll shrink-0 bg-[#212226] fixed w-[72px] pt-3 h-screen top-0">
        {/*Direct Messages */}
        <Link to="/channels@me">
          <div className="select-none nav-button2 active:bg-[#5865f2] relative flex bg-[#36393f] hover:cursor-pointer hover:bg-[#5865f2] rounded-full hover:rounded-[15px] transition-all h-[48px] w-[48px]">
            <div className="nav-title shadow-lg">Direct Messages</div>
            <img
              alt=""
              src={dm}
              className="opacity-75 h-[26px] w-[26px] relative top-[11px] left-[11px]"
            />
          </div>
        </Link>

        {/*div */}
        <hr className="border-[1px] w-8 border-[#363a3f] bg-[#363a3f] rounded-[5px]"></hr>

        {/*My Servers */}
        {servers.map((server) => (
          <Link to={server.path}>
            <div className="nav-button select-none hover:cursor-pointer rounded-full hover:rounded-[15px] transition-all h-[48px] w-[48px] relative">
              <div className="nav-title shadow-lg">{server.title}</div>
              <img
                alt=""
                src={server.icon}
                className="h-[48px] w-[48px] rounded-full hover:rounded-[15px] transition-all object-cover"
              />
            </div>
          </Link>
        ))}

        {/*Add a Server */}
        <button
          onClick={toggleModal}
          className="nav-button2 relative hover:cursor-pointer bg-[#36393f] text-[#3ba55d] hover:text-white hover:bg-[#3ba55d] rounded-full hover:rounded-[15px] transition-all h-[48px] w-[48px]"
        >
          <div className="nav-title shadow-lg">Add a Server</div>

          <AiOutlinePlus size={25} className="relative left-[12px]" />
        </button>
        {modalOpen && <AddServerModal toggleModal={toggleModal} />}

        {/*Explore Public Servers */}
        <Link to="/guild-discovery">
          <div className="nav-button2 relative hover:cursor-pointer bg-[#36393f] text-[#3ba55d] hover:text-white hover:bg-[#3ba55d] rounded-full hover:rounded-[15px] transition-all h-[48px] w-[48px]">
            <div className="nav-title shadow-lg">Explore Public Servers</div>
            <MdExplore size={25} className="relative top-[12px] left-[12px]" />
          </div>
        </Link>

        {/*div */}
        <hr className="border-[1px] w-8 border-gray-700 rounded-[5px]"></hr>

        {/*Download Apps */}
        <button
          onClick={toggleDownloadModal}
          className="nav-button2 relative hover:cursor-pointer bg-[#36393f] text-[#3ba55d] hover:text-white hover:bg-[#3ba55d] rounded-full hover:rounded-[15px] transition-all h-[48px] w-[48px]"
        >
          <div className="nav-title shadow-lg">Download Apps</div>

          <TbDownload size={25} className="relative left-[12px]" />
        </button>
        {downloadModalOpen && (
          <DownloadModal toggleDownloadModal={toggleDownloadModal} />
        )}
      </div>
    </div>
  );
}

export default Navbar;

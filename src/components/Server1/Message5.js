import React from "react";

const Message5 = () => {
  return (
    <div className="hover:bg-[#32353b] pb-1">
      <div className="ml-[75px] mr-[50px] mb-[20px]">
        <div className="flex flex-col text-[14px] font-normal text-white/80">
          <p className="mb-[25px] mt-[25px]">
            Users can self-assign multiple roles in role-assignment. These
            include a color role, as well as notification roles for VALORANT
            updates, server news or events. To add your region and rank as a
            role, head over to bot commands and link your account. Your region
            and rank role will be automatically added and updated.
          </p>
          <p>&#128308; Announcements</p>
          <ul>
            <li>
              • #game-news - All patches and important game news will be shared
              here
            </li>
            <li>
              • #server-news - Important news about this Discord server such as
              moderator applications
            </li>
            <li>
              • #event-news - Events taking place within this Discord server
            </li>
          </ul>
          <p className="mt-[25px]">&#128308; Discussions</p>
          <ul>
            <li>
              • #gameplay - Discussions about maps, weapons, skins and
              everything related to the game
            </li>
            <li>• #agents - Discussions about the different agents</li>
            <li>
              • #esports - Discussions around the latest tournaments, pro
              players and esports scene
            </li>
            <li>• #lore - Discuss and share your ideas about the lore</li>
            <li>
              • #high-rank - Discussions for diamond+ players to discuss
              gameplay and theory crafting Community Content
            </li>
          </ul>

          <p className="mt-[25px]">&#128308; Community Content</p>
          <ul>
            <li>
              • #videos - Share clips and videos of awesome or funny moments in
              VALORANT with a maximum of 2 minutes
            </li>
            <li>
              • #images - Share images pertaining to conversations or VALORANT
              related images
            </li>
            <li>
              • #fanart - Share your favorite or even your personal VALORANT
              related artwork
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Message5;

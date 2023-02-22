import React from "react";
import { CommandBar, ICommandBarItemProps } from "@fluentui/react";
import { useNavigate } from "react-router-dom";

function MainHeader() {
  const navigate = useNavigate();
  const headerItems: ICommandBarItemProps[] = [
    {
      key: "home",
      text: "Home",
      onClick: () => {
        navigate("/");
      },
    },
    {
      key: "userPlaylists",
      text: "Playlists",
      onClick: () => {
        navigate("/userplaylists");
      },
    },
  ];

  return (
    <div>
      <CommandBar items={headerItems}></CommandBar>
    </div>
  );
}

export default MainHeader;

import React from "react";
import { CommandBar, ICommandBarItemProps } from "@fluentui/react";

function MainHeader() {
  const headerItems: ICommandBarItemProps[] = [
    {
      key: "home",
      text: "Home",
    },
  ];

  return (
    <div>
      <CommandBar items={headerItems}></CommandBar>
    </div>
  );
}

export default MainHeader;

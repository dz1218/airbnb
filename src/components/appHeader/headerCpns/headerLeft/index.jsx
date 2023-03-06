import IconLogo from "@/assets/svg/icon_logo";
import React, { memo } from "react";
import { HeaderLeftWrapper } from "./style";

const HeaderLeft = memo(() => {
  return (
    <HeaderLeftWrapper>
      <div className="header-left">
        <div className="logo">
          <IconLogo />
        </div>
        <div className="text"></div>
      </div>
    </HeaderLeftWrapper>
  );
});

export default HeaderLeft;

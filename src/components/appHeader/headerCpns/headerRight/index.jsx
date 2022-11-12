import IconAvatar from "@/assets/svg/icon_avatar";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import { memo } from "react";
import { HeaderRightWrapper } from "./style";

const HeaderRight = memo(() => {
  return (
    <HeaderRightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal></IconGlobal>
        </span>
      </div>

      <div className="profile">
        <IconMenu></IconMenu>
        <IconAvatar></IconAvatar>
      </div>
    </HeaderRightWrapper>
  );
});

export default HeaderRight;

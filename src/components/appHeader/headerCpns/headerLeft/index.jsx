import IconLogo from "@/assets/svg/icon_logo";
import { memo } from "react";
import { HeaderLeftWrapper } from "./style";

const HeaderLeft = memo(() => {
  return (
    <HeaderLeftWrapper>
      <div className="logo">
        <IconLogo></IconLogo>
      </div>
    </HeaderLeftWrapper>
  );
});

export default HeaderLeft;

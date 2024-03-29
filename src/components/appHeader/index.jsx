import { memo } from "react"
import HeaderCenter from "./headerCpns/headerCenter"
import HeaderLeft from "./headerCpns/headerLeft"
import HeaderRight from "./headerCpns/headerRight"
import { HeaderWrapper } from "./style"

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHeader

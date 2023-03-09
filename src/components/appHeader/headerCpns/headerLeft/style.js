import styled from "styled-components";

export const HeaderLeftWrapper = styled.div`
  flex: 1 0 140px;

  .header-left {
    display: flex;
    margin-left: 80px;

    .logo {
      color: ${(props) => props.theme.color.primaryColor};
      cursor: pointer;
    }
  }
`;

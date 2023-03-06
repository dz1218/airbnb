import styled from "styled-components";

export const HeaderRightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-right: 80px;

  .btns {
    display: flex;
    align-items: center;

    .btn {
      box-sizing: border-box;
      padding: 12px 15px;
      background-color: #fff;
      cursor: pointer;
      border-radius: 22px;
      ${(props) => props.theme.mixin.boxShadow}
      &:hover {
        background-color: #f7f7f7;
      }
    }
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: 76px;
    height: 42px;
    padding: 5px 5px 5px 12px;
    color: ${(props) => props.theme.text.primaryColor};
    border: 1px solid #ccc;
    border-radius: 25px;
    cursor: pointer;
    /* margin-right: 24px; */
    ${(props) => props.theme.mixin.boxShadow}
  }
`;

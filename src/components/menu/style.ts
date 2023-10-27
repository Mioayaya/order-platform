import styled from "@emotion/styled";

export const MenuDiv = styled.div`
  background-color: #fff;
  border-right: 1px solid #E5E6EB;
  
  .arco-menu-inner {
    ::-webkit-scrollbar {
      width: 0.25rem;
      height: 0.25rem;
      background-color: rgba(255,255,255,0);
    }
  
    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track {
      border-radius: 0.625rem;
      background-color: rgba(255,255,255,0);
    }
  
    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
      border-radius: 0.625rem;
      background-color: #E5E6EB;
    }
  }

`
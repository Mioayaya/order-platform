import styled from "@emotion/styled";

export const ContentPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  .top {
    padding: 0 20px;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #E5E6EB;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bottom {
    height: calc(100vh - 61px);
    display: flex;
    
    .bottom-left {
      background-color: #fff;
      border-right: 1px solid #E5E6EB;
    }

    .bottom-right {
      margin: 20px;
      width: 100%;
    }
  }
`
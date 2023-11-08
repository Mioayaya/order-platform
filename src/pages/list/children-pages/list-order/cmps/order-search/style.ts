import styled from "@emotion/styled";

const OrderSearchDiv = styled.div`
  margin-top: 20px;
  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    .left {
      flex: 1;
      padding-right: 20px;
    }

    .right {
      width: 120px;
      height: 100px;
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }

  .arco-col {
    text-align: left;
    padding-right: 0;
  }
`

export default OrderSearchDiv;
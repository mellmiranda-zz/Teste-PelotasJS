import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  width: 450px;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;

    li {
      display: flex;
      border-bottom: solid 1px #ff69b4;
      padding: 15px 0;
      justify-content: space-between;

      &:last-of-type {
        border: none;
      }
    }
  }
`;

export const ListActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  width: 100%;
`;

export const Button = styled.button`
  background: #ff69b4;
  border-radius: 4px;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  outline: none;
`;

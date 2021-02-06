import styled from "styled-components";

export const ButtonBubble = styled.a`
  display: inline-flex;
  width: 65px;
  height: 55px;
  margin: 15px;
  text-decoration-style: none;

  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 10%;
  background: #405de6;
  box-shadow: 0px 7px 30px rgba(43, 98, 169, 0.5);
  position: relative;
  font-size: 13px;
  flex-shrink: 0;
  transition: all 0.3s;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin: 10px;
  }
  @media screen and (min-width: 768px) {
    transform: scale(1.2);
  }
`;

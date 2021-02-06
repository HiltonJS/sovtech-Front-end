import styled from "styled-components";
export const Nav = styled.nav`
 
  overflow: auto;
  background: white;
  padding: 20px 15%;
  box-shadow: 0 1px 15px -5px gray;
`;

export const Anchor = styled.a`
  float: left;
  text-decoration: none;
  color: #2980b9;
  font-size: 34px;

  @media screen and (max-width: 720px) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`;

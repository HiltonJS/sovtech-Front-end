import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  min-height: 100vh;
  padding: 50px 20px;
  padding-top: 30px;
  background: #108dc7;
  background: -webkit-linear-gradient(to right, #ef8e38, #108dc7);
  background: linear-gradient(to right, #ef8e38, #108dc7);

  display: flex;

  @media screen and (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    padding-top: 100px;
  }
`;

export const JokeCard = styled.div`
  width: 100%;
  min-height: 460px;
  margin: auto;
  box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
  background: #fff;
  border-radius: 12px;
  max-width: 700px;
  position: relative;
`;

export const ProfileContainer = styled.div`
  width: 130px;
  height: 130px;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(-50%);

  overflow: hidden;
  position: relative;
  z-index: 4;

  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`;

export const ProfileImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const ProfileCardContainer = styled.div`
  margin-top: -35px;
  text-align: center;
  padding: 0 20px;
  padding-bottom: 40px;
  transition: all 0.3s;
`;

export const Heading = styled.h3`
  margin: auto 0;
  padding: 30px;
  text-align: center;
`;

export const CardCategoryContainer = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #6944ff;
  margin-bottom: 40px;
  font-family: "Roboto", sans-serif;
`;

export const ProfileCardText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #324e63;
  margin-bottom: 15px;
`;

export const JokeTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 35px;
`;
export const JokeTextItemContaier = styled.div`
  padding: 10px 35px;
  min-width: 150px;

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    min-width: 120px;
  }
`;

export const JokeText = styled.div`
  font-weight: 500;
  margin-top: 7px;
`;

export const JokeCardButtonContanier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media screen and (max-width: 576px) {
    flex-wrap: wrap;
  }
`;
const JokeCardButton = css`
  background: none;
  border: none;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 19px;
  margin: 15px 35px;
  padding: 15px 40px;
  min-width: 201px;
  border-radius: 50px;
  min-height: 55px;
  color: #fff;
  cursor: pointer;
  backface-visibility: hidden;
  transition: all 0.3s;
`;

export const BluButton = styled.button`
  ${JokeCardButton}
  background: linear-gradient(45deg, #1da1f2, #0e71c8);
  box-shadow: 0px 4px 30px rgba(19, 127, 212, 0.4);
`;

export const OrangeButton = styled.button`
  ${JokeCardButton}
  background: linear-gradient(45deg, #d5135a, #f05924);
  box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.35);
`;

import React from "react";

import {
  Wrapper,
  JokeCard,
  ProfileContainer,
  ProfileImage,
  ProfileCardContainer,
  CardCategoryContainer,
  ProfileCardText,
  JokeTextContainer,
  JokeTextItemContaier,
  JokeText,
  JokeCardButtonContanier,
  BluButton,
  Heading
} from "./Card.Styles";
import { useDispatch } from "react-redux";

import Spinner from "../Spinner/Spinner";

interface CardProps {
  loading: Boolean;
  joke: any;
  activeCategory: string;
  fetchJoke: (category: string) => any;
}

const Card = ({ joke, loading, activeCategory, fetchJoke }: CardProps) => {
  const dispatch = useDispatch();

  const nextJoke = (category: string) => {
    dispatch(fetchJoke(category));
  };

  return (
    <Wrapper>
      <JokeCard>
        {!joke ? (
          <Heading> Please select a category</Heading>
        ) : loading ? (
          <Spinner />
        ) : (
          <>
            <ProfileContainer key={joke.id}>
              <ProfileImage src={joke.icon_url} alt="icon" />
            </ProfileContainer>

            <ProfileCardContainer>
              <CardCategoryContainer>
                {activeCategory.toUpperCase()}
              </CardCategoryContainer>
              <ProfileCardText>{joke.value}</ProfileCardText>

              <JokeTextContainer>
                <JokeTextItemContaier>
                  <JokeText>
                    Updated:
                 
                  </JokeText>
                </JokeTextItemContaier>
              </JokeTextContainer>

              <JokeCardButtonContanier>
                <BluButton
                  onClick={() => {
                    nextJoke(activeCategory);
                  }}
                >
                  Random Joke
                </BluButton>
              </JokeCardButtonContanier>
            </ProfileCardContainer>
          </>
        )}
      </JokeCard>
    </Wrapper>
  );
};

export default Card;

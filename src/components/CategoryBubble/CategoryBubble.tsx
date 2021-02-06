import React from "react";
import Flex from "typescript-styled-flex";
import { useDispatch } from "react-redux";
import { ButtonBubble } from "./Category.Styles";
import { selectCategory, fetchJoke } from "../../redux/Actions/CategoryActions";

interface CategoryBubble {
  categories: string[];
}

const CategoryBubbles = ({ categories }: CategoryBubble) => {
  const dispatch = useDispatch();

  const changeCategoryOnClick = (category: string) => {
    dispatch(selectCategory(category));
    dispatch(fetchJoke(category));
  };

  return (
    <div>
      <Flex>
        {categories.map((category: string) => (
          <ButtonBubble
            key={Math.random()}
            onClick={() => {
              changeCategoryOnClick(category);
            }}
          >
            {category}
          </ButtonBubble>
        ))}
      </Flex>
    </div>
  );
};

export default CategoryBubbles;

import React, { useEffect } from "react";


import Flex from "typescript-styled-flex";

import Navbar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import CategoryBubble from "./components/CategoryBubble/CategoryBubble";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./redux/Actions/CategoryActions";
import { CategoryState } from "./redux/Reducers/CategoryReducer";
import { fetchJoke } from "./redux/Actions/CategoryActions";

function App() {
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state: CategoryState) => state.activeCategory
  );
  const categories = useSelector<CategoryState, CategoryState["categories"]>(
    (state) => state.categories
  );
  const joke = useSelector<CategoryState, CategoryState["joke"]>(
    (state) => state.joke
  );
  const loading = useSelector<CategoryState, CategoryState["loading"]>(
    (state) => state.loading
  );
  const error = useSelector<CategoryState, CategoryState["loading"]>(
    (state) => state.error
  );

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchJoke(activeCategory));
  }, []);

  if (error) {
    return <h3>Oppps Something went Wrong.......</h3>;
  } else {
    return (
      <>
        <Flex column={true}>
          <Navbar />
          <Flex center>
            <CategoryBubble categories={categories} />
          </Flex>
          <Card
            joke={joke}
            loading={loading}
            activeCategory={activeCategory}
            fetchJoke={fetchJoke}
          />
        </Flex>
      </>
    );
  }
}

export default App;

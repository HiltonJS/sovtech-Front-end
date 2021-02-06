import {
    GET_CATEGORIES,
    LOADING,
    ACTIVE_CATEGORY,
    GET_CATEGORY_JOKE,
    CategoryActionTypes,
    GET_ERROR
  } from "../types";
  import { Dispatch } from "redux";
  
  import { ApolloClient } from "apollo-client";
  import { InMemoryCache } from "apollo-cache-inmemory";
  
  import gql from "graphql-tag";
  import link from "../../util/GraphqlApi";
  
  const cache = new InMemoryCache();
  
  const client = new ApolloClient({
    cache,
    link
  });
  
  export const fetchCategories = () => (
    dispatch: Dispatch<CategoryActionTypes>
  ) => {
    dispatch({ type: LOADING, payload: true });
    client
      .query({
        query: gql`
          {
            categories
          }
        `
      })
      .then((result) => {
        let categories = result.data.categories;
        dispatch({
          type: GET_CATEGORIES,
          payload: categories
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ERROR
        });
      });
  };
  
  export const fetchJoke = (categoryIn: string) => (
    dispatch: Dispatch<CategoryActionTypes>
  ) => {
    const category = categoryIn.toLowerCase();
  
  console.log(category)
  
    const query = gql`
      query joke($category: String!) {
        joke(category: $category) {
          id
          value
          categories
          updated_at
          icon_url
        }
      }
    `;
    client
      .query({
        query: query,
        variables: {
          category: category
        },
        fetchPolicy: "network-only"
      })
      .then((result) => {
        console.log(result)
        dispatch({
          type: GET_CATEGORY_JOKE,
          payload: result.data.joke
        });
      })
      .catch((error) => {
        console.log(error)
        dispatch({
          type: GET_ERROR
        });
      });
  };
  
  export const selectCategory = (category: string) => (
    dispatch: Dispatch<CategoryActionTypes>
  ) => {
    dispatch({
      type: ACTIVE_CATEGORY,
      payload: category
    });
  };
  
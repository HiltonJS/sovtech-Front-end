import {
    GET_CATEGORIES,
    CategoryActionTypes,
    ACTIVE_CATEGORY,
    GET_CATEGORY_JOKE,
    LOADING,
    GET_ERROR
  } from "../types";
  
  export interface CategoryState {
    categories: string[];
    activeCategory: string;
    joke: { id: string } | {};
    loading: Boolean;
    error: Boolean;
  }
  const initialState = {
    categories: [],
    activeCategory: "",
    joke: {},
    loading: false,
    error: false
  };
  
  const categoryReducer = (
    state: CategoryState = initialState,
    action: CategoryActionTypes
  ): CategoryState => {
    switch (action.type) {
      case LOADING:
        return {
          ...state,
          loading: true
        };
      case GET_CATEGORIES:
        return {
          ...state,
          loading: false,
          categories: action.payload
        };
      case GET_CATEGORY_JOKE:
        return {
          ...state,
          loading: false,
          error: false,
          joke: action.payload
        };
      case ACTIVE_CATEGORY:
        return {
          ...state,
          activeCategory: action.payload
        };
      case GET_ERROR:
        return {
          ...state,
          error: true
        };
  
      default:
        return state;
    }
  };
  export default categoryReducer;
  
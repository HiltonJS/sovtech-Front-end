
export const GET_CATEGORIES = "GET_CATEGORIES";
export const ACTIVE_CATEGORY = "ACTIVE_CATEGORY";
export const GET_CATEGORY_JOKE = "GET_CATEGORY_JOKE";
export const GET_RANDOM_JOKE = "GET_RANDOM_JOKE";
export const LOADING = "LOADING";
export const GET_ERROR = "GET_ERROR";

type categories = string[];

type loading = Boolean;

type error = Boolean;

type joke = {};

type category = string;

interface GetErrorAction {
  type: typeof GET_ERROR;
}
interface LoadingAction {
  type: typeof LOADING;
  payload: loading;
}

interface GetSingleJokeAction {
  type: typeof GET_CATEGORY_JOKE;
  payload: joke;
}

interface GetCategoriesAction {
  type: typeof GET_CATEGORIES;
  payload: categories;
}

interface ActiveDirectoryAction {
  type: typeof ACTIVE_CATEGORY;
  payload: category;
}

export type CategoryActionTypes =
  | GetCategoriesAction
  | LoadingAction
  | ActiveDirectoryAction
  | GetErrorAction
  | GetSingleJokeAction;

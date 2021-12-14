import ActionTypes from "../action-types/actionTypes";

export const nextPageClicked = (page) => {
  return {
    type: ActionTypes.NAVIGATED_NEXT_PAGE,
    payload: page + 1,
  };
};

export const previousPageClicked = (page) => {
  return {
    type: ActionTypes.NAVIGATED_PREVIOS_PAGE,
    payload: page - 1,
  };
};

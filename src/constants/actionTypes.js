export const showList = (data, pageNumber, status) => ({
  type: "shows/showList",
  payload: { data, pageNumber, status },
});

export const showStatus = (status) => ({
  type: "shows/showStatus",
  payload: status,
});

export const setSearchField = (field) => ({
  type: "shows/setSearchField",
  payload: field,
});

export const isDetailsOn = (isDetails) => ({
  type: "details/isDetailsOn",
  payload: isDetails,
});

export const isEpisodesPageOn = (isEpisodesPageOn) => ({
  type: "details/isEpisodesPageOn",
  payload: isEpisodesPageOn,
});

export const showDetails = (data, showId) => ({
  type: "details/showDetails",
  payload: { data, showId },
});

export const addElement = (name, episodes) => ({
  type: "details/addElement",
  payload: { name, episodes },
});

export const clearElements = () => ({
  type: "details/clearElements",
});

export const showActors = (data, showId) => ({
  type: "details/showActors",
  payload: { data, showId },
});

export const showImages = (data, showId) => ({
  type: "details/showImages",
  payload: { data, showId },
});

export const showRecommended = (data, showId) => ({
  type: "details/showRecommended",
  payload: { data, showId },
});

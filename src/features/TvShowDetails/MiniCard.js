import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  isDetailsOn,
  isEpisodesPageOn,
  clearElements,
} from "../../constants/actionTypes";
import "../features.css";
import {
  showDetailsTvShow,
  showActorsTvShow,
  showImagesTvShow,
  showRecommendedTvShow,
} from "../../slices/showDetailsSlice";

const selectRecommendedShowById = (state, showId) => {
  return state.details.recommended.results.find((show) => show.id === showId);
};

export default function MiniCard({ id }) {
  const dispatch = useDispatch();
  const show = useSelector((state) => selectRecommendedShowById(state, id));
  const handleClick = async () => {
    await dispatch(isDetailsOn(true));
    await dispatch(isEpisodesPageOn(false));
    await dispatch(showDetailsTvShow(id));
    await dispatch(showActorsTvShow(id));
    await dispatch(showImagesTvShow(id));
    await dispatch(showRecommendedTvShow(id));
    await dispatch(clearElements());
    console.log(show);
  };
  return (
    <div className="card-container" onClick={handleClick}>
      <img
        src={
          show.poster_path
            ? `https://image.tmdb.org/t/p/w200/${show.poster_path}`
            : "images/no-image.jpg"
        }
        alt="tv-show"
      />
      <h3>{show.name}</h3>
      <div style={{ backgroundColor: "blueviolet" }} width="100">
        <p style={{ color: "white" }}>
          {Math.round(show.vote_average * 10) / 10}
        </p>
        <p>{show.id}</p>
      </div>
    </div>
  );
}

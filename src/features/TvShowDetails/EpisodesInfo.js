import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

// const selectElements = createSelector(
//   (state) => state.details,
//   (details) => details.elements
// );
const selectElements = (state) => state.details.elements;
let elementsArray = [];

export default function EpisodesInfo() {
  const elements = useSelector(selectElements);

  // for (let i = 0; i < elements.length; i++) {
  //   let episodeItems = [];
  //   let seasonName;
  //   let seasonEpisodes = [];
  //   if (elements) {
  //     seasonName = elements[i].name;
  //     seasonEpisodes = elements[i].episodes;
  //     episodeItems = seasonEpisodes.map((episode) => {
  //       return (
  //         <div className="episode-container" key={episode.id}>
  //           <img
  //             src={
  //               episode.still_path
  //                 ? `https://image.tmdb.org/t/p/w200/${episode.still_path}`
  //                 : "images/no-image.jpg"
  //             }
  //             alt="episode"
  //           />
  //           <h3>{episode.name}</h3>
  //           <div style={{ backgroundColor: "blueviolet" }} width="100">
  //             <p style={{ color: "white" }}>
  //               {episode.overview.length < 120
  //                 ? episode.overview
  //                 : episode.overview.substring(0, 120) + "..."}
  //             </p>
  //           </div>
  //           ;
  //         </div>
  //       );
  //     });
  //   }
  //   elementsArray.push(
  //     <>
  //       <h2 className="season-number">{seasonName}</h2>
  //       <div className="episode-list">{episodeItems}</div>
  //     </>
  //   );
  // }
  // return <div>{elementsArray}</div>;
  return (
    <div>
      {elements.map((element) => {
        return (
          <>
            <h2 className="season-number">{element.name}</h2>
            <div className="episode-list">
              {element.episodes.map((episode) => {
                return (
                  <div className="episode-container" key={episode.id}>
                    <img
                      src={
                        episode.still_path
                          ? `https://image.tmdb.org/t/p/w200/${episode.still_path}`
                          : "images/no-image.jpg"
                      }
                      alt="episode"
                    />
                    <h3>{episode.name}</h3>
                    <div style={{ backgroundColor: "blueviolet" }} width="100">
                      <p style={{ color: "white" }}>
                        {episode.overview.length < 120
                          ? episode.overview
                          : episode.overview.substring(0, 120) + "..."}
                      </p>
                    </div>
                    ;
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}

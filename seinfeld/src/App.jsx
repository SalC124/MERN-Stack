/* eslint-disable react/prop-types */

/*
Salvatore Calafiore
Mudasir helped me with refactoring the episodes component :D
*/
const ShowTitle = (props) => {
  console.log(props);
  // return == what is shown on the webpage via html
  return <h1>{props.season}</h1>;
};

const Episode = (props) => {
  return (
    // what is actually shown
    <>
      <p>
        {props.nameEp1} {props.viewsEp1.toLocaleString("en-us")}{" "}
      </p>
      <p>
        {props.nameEp2} {props.viewsEp2.toLocaleString("en-us")}{" "}
      </p>
      <p>
        {props.nameEp3} {props.viewsEp3.toLocaleString("en-us")}{" "}
      </p>
    </>
  );
};

// inherits `<TotalSeasonViews totalViews={totalViews} />`
const TotalSeasonViews = (props) => {
  return (
    // what is actually shown
    <p>
      Seinfeld Season 1, Total Number of Views{" "}
      {props.totalViews.toLocaleString("en-US")}
    </p>
  );
};

// define variables
const App = (props) => {
  // const season = "Seinfeld Season 1";
  // const episode1 = { name: "Good News, Bad News", views: 6905040 };
  // const episode2 = { name: "The Stakeout", views: 3905040 };
  // const episode3 = { name: "The Robbery", views: 4498237 };
  // const totalViews = episode1.views + episode2.views + episode3.views;
  const seinfeldSeason1 = {
    season: "Seinfeld Season 1",
    episodes: [
      { name: "Good News, Bad News", views: 6905040 },
      { name: "The Stakeout", views: 3905040 },
      { name: "The Robbery", views: 4498237 },
    ],
  };
  // seinfeldSeason1.episodes[0]
  console.log(seinfeldSeason1.episodes[0].name);
  return (
    <div>
      <ShowTitle season={seinfeldSeason1.season} />

      <Episode
        nameEp1={seinfeldSeason1.episodes[0].name}
        viewsEp1={seinfeldSeason1.episodes[0].views}
        nameEp2={seinfeldSeason1.episodes[1].name}
        viewsEp2={seinfeldSeason1.episodes[1].views}
        nameEp3={seinfeldSeason1.episodes[2].name}
        viewsEp3={seinfeldSeason1.episodes[2].views}
      />

      <TotalSeasonViews
        totalViews={
          seinfeldSeason1.episodes[0].views +
          seinfeldSeason1.episodes[1].views +
          seinfeldSeason1.episodes[2].views
        }
      />
    </div>
  );
};

export default App;

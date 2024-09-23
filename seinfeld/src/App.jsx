/* eslint-disable react/prop-types */

// Mudasir helped me with refactoring the episodes component :D
const ShowTitle = (props) => {
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
  const season = "Seinfeld Season 1";
  const episode1 = { name: "Good News, Bad News", views: 6905040 };
  const episode2 = { name: "The Stakeout", views: 3905040 };
  const episode3 = { name: "The Robbery", views: 4498237 };
  const totalViews = episode1.views + episode2.views + episode3.views;
  return (
    <div>
      <ShowTitle season={season} />

      <Episode
        nameEp1={episode1.name}
        viewsEp1={episode1.views}
        nameEp2={episode2.name}
        viewsEp2={episode2.views}
        nameEp3={episode3.name}
        viewsEp3={episode3.views}
      />

      <TotalSeasonViews totalViews={totalViews} />
    </div>
  );
};

export default App;

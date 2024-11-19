import { useState } from "react";
const DisplayTrack = ({ track }) => {
  // conditional rendering with if statement
  // if (track.length === 0) {
  //   return <>No Recommendations entered yet.</>
  // }
  // return <>{track.join("-")}</>;

  // conditional rendering with ternary operator
  return track.length === 0 ? (
    <>No Recommendations entered yet.</> // if true, do this
  ) : (
    <>{track.join("-")}</> // if false, do this
  );
};
const App = () => {
  const [recObj, setRecObj] = useState({ rec: 0, notRec: 0 });
  const [track, setTrack] = useState([]);

  const recommend = () => {
    setRecObj({ ...recObj, rec: recObj.rec + 1 });
    // never .push , it mutates the array
    // ... is spread operator
    // makes array with elements of track
    setTrack([...track, "y"]); // safe; does not mutate
  };
  const notRecommend = () => {
    setRecObj({ ...recObj, notRec: recObj.notRec + 1 });
    setTrack(track.concat("n")); // safe; does not mutate
  };

  return (
    <div>
      <h1>Recommendation App</h1>
      <p>Do you recommend the iPhone 16 Pro Max?</p>
      <button onClick={recommend}>Recommend</button> {recObj.rec}
      <br />
      <button onClick={notRecommend}>Not Recommend</button> {recObj.notRec}
      <p>
        Track of Recommendations:
        <br />
        <DisplayTrack track={track} />
      </p>
      {/* another way to conditionally render */}
      {/* {track.length !== 0 && (
        <p>
          Track of Recommendations:
          <br />
          <DisplayTrack track={track} />
        </p>
      )} */}
      <br />
    </div>
  );
};

export default App;

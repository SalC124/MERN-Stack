const Season = ({ seasonProp }) => {
  return (
    <div>
      <h1>{seasonProp.title}</h1>
      {seasonProp.episodes.map((episode) => (
        <p key={episode.id}>
          {episode.title} - Views: {episode.views}
        </p>
      ))}
      Total Views:{" "}
      {seasonProp.episodes.reduce(
        (prevVal, episode) => prevVal + episode.views,
        0
      )}
    </div>
  );
};

export default Season;

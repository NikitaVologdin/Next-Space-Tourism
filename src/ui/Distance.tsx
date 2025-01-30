type props = {
  distance: string;
  travel: string;
};

export default function distance({ distance, travel }: props) {
  return (
    <div className="distance">
      <div className="distance__content">
        <h3 className="distance__heading">
          <strong className="distance__subheading">avg. distance</strong>
          <span className="distance__title">{distance}</span>
        </h3>
        <h3 className="distance__heading">
          <strong className="distance__subheading">est. travel time</strong>
          <span className="distance__title">{travel}</span>
        </h3>
      </div>
    </div>
  );
}

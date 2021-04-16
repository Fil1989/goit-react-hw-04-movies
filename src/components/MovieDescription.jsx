const MovieDescription = props => {
  return (
    <>
      <h2>Movie Description {props.match.params.id}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis,
        facere. Eius corporis esse rem quidem quasi aliquam quos accusantium
        dicta!
      </p>
    </>
  );
};
export default MovieDescription;

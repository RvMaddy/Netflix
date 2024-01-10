import React, { useEffect } from "react";
import { useState } from "react";

export const Row = ({ title, data }) => {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    getWishlist().then((data) => setMovies(data.results));
  }, []);
  const movieId = Movies?.map((item) => item.id);
  return (
    <section>
      {title && <h2 className="section-title">{title}</h2>}
      <Carousel
        data={data}
        render={(item) => <Card movie={item} favMovies={movieId} />}
      />
    </section>
  );
};
export default Row;

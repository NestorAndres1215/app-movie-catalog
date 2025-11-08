import { useEffect, useState } from "react";
import movieApi from "../../api/movieApi";
import MovieList from "../../components/MovieList/MovieList";

const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    // Cargar series populares al montar el componente
    movieApi.getPopularSeries().then(res => setSeries(res.data.results));
  }, []);

  return (
    <div className="series-page">
      <h2>Series Populares</h2>
      {series.length === 0 ? (
        <p>Cargando series...</p>
      ) : (
        <MovieList movies={series} isSeries />
      )}
    </div>
  );
};

export default Series;

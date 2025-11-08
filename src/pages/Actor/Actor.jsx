import { useEffect, useState } from "react";
import movieApi from "../../api/movieApi";

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      const all = await movieApi.getAllPopularActors(5); // 5 páginas
      setActors(all);
    };
    fetchActors();
  }, []);

  return (
    <div className="actors-page">
      <h2>Actores Populares</h2>
      {actors.length === 0 ? (
        <p>Cargando actores...</p>
      ) : (
        <div className="actors-list">
          {actors.map((actor) => (
            <div key={actor.id} className="actor-card">
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Actors;

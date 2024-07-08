import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";

interface MovieCardProps {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  image?: string;
}

export function MovieCard({
  id,
  title,
  overview,
  popularity,
  image = "/movie-thumb.png",
}: MovieCardProps) {
  return (
    <div className={styles.card}>
      <img
        className={styles.thumbnail}
        src={image}
        // src="../../images/movie-thumb.png"
        alt="Movie thumb"
      />
      <div className={styles.content}>
        <Link to={`/movies/${id}`}>{title}</Link>
        <div className={styles.overview}>{overview}</div>
        <div className={styles.popularity}>{popularity}</div>
      </div>
    </div>
  );
}

import Link from "next/link";
import styles from "./MovieList.module.css";
import StarRating from "./StarRating";
import Image from "next/image";

export default function MovieList({ className = "", movies }) {
  return (
    <ul className={`${styles.movieList} ${className}`}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>
            <div className={styles.posterContainer}>
              <Image
                fill
                src={movie.posterUrl}
                alt={movie.title}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={movies.indexOf(movie) < 5}
              />
            </div>
          </Link>
          <div className={styles.info}>
            <h2 className={styles.title}>{movie.title}</h2>
            <div className={styles.date}>
              {movie.date} ・ {movie.country}
            </div>
            <div className={styles.starRatingContainer}>
              <StarRating value={movie.starRating} />
              <span className={styles.starRating}>{movie.starRating}</span>
            </div>
            <div className={styles.tags}>
              {movie.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

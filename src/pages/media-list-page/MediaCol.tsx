import { Link } from 'react-router-dom';
import { ActButton, Content } from '.';

type Props = {
  media: Content;
  act: ActButton;
};

export const MediaCol = ({ media, act }: Props) => {
  const { id, title: movieTitle, name: showTitle, poster_path, release_date: releaseMovie, first_air_date: releaseShow, vote_average } = media;
  const title = movieTitle || showTitle;
  const release_date = releaseMovie || releaseShow;
  return (
    <>
      <Link to={`/${act}/${id}`}>
        <div className="bg-gray-800 rounded-xl p-2 bg-opacity-40 flex flex-col items-center gap-1">
          <img
            className="w-full rounded-lg object-cover"
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={title}
          />
          <div className="text-center font-bold -mb-1 text-white/90 text-3xl sm:text-xl">{title}</div>
          <p className="text-sm md:text-xs">
            <span className="text-white/60">Released:</span> {release_date} |{' '}
            <span className="text-white/60">Rating:</span> {vote_average}
          </p>
        </div>
      </Link>
    </>
  );
};

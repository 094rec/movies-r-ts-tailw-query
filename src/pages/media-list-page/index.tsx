import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { MediaCol } from './MediaCol';
import { Spinner } from '../../components/Spinner';

export enum ActButton {
  Movies = 'movie',
  TVShows = 'tv',
}

export type Genre = {
  id: number;
  name: string;
};

export type Company = {
  id: number;
  logo_path?: string;
  name: string;
};

export type Content = {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  genres: Genre[];
  production_companies: Company[];
};

export const MediaListPage = () => {
  const [act, setActive] = React.useState(ActButton.Movies);

  const { data, isLoading, error } = useFetch<Content>(
    `${act}`,
    `https://api.themoviedb.org/3/${act}/popular?language=en-US&page=1`,
  );

  if (error) return <p className="text-center mt-16">&#9888; {error.message}. Please try again.</p>

  return (
    <section className="max-w-3xl mx-auto">
      <div className="flex justify-center p-3">
        <button
          className={`text-xl sm:text-lg rounded-l-md px-2 py-1 font-medium ${
            act === ActButton.Movies ? 'bg-yellow-500 text-black' : 'bg-gray-700 text-white'
          }`}
          onClick={() => setActive(ActButton.Movies)}
        >
          Films
        </button>
        <button
          className={`text-xl sm:text-lg rounded-r-md px-2 py-1 font-medium ${
            act === ActButton.TVShows ? 'bg-yellow-500 text-black' : 'bg-gray-700 text-white'
          }`}
          onClick={() => setActive(ActButton.TVShows)}
        >
          Shows
        </button>
      </div>
      {isLoading ? (
        <Spinner loading={isLoading} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 mt-2">
          {data.map((media) => (
            <MediaCol key={media.id} media={media} act={act} />
          ))}
        </div>
      )}
    </section>
  );
};

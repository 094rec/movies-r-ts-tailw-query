import { Content } from '../../media-list-page';
import { BlockCompany } from './BlockCompany';
import { BlockGenre } from './BlockGenre';

type Props = {
  data: Content;
};

export const Block = ({ data }: Props) => {
  const { release_date: releaseMovie, first_air_date: releaseShow, vote_average, overview, genres, production_companies } = data;
  const release_date = releaseMovie || releaseShow;

  return (
    <div className="w-full md:w-2/3">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <p className="text-sm mb-2">
          <span className="font-semibold text-gray-400">Release Date:</span> {release_date}
        </p>
        <p className="text-sm mb-4">
          <span className="font-semibold text-gray-400">Rating:</span> {vote_average} / 10
        </p>

        <p className="text-gray-200 mb-4 text-lg sm:text-base">{overview}</p>

        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {genres?.map((genre) => (
            <BlockGenre genre={genre} key={genre.id} />
          ))}
        </div>

        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {production_companies?.map((company) => (
            <BlockCompany company={company} key={company.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

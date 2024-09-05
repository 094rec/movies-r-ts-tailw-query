import { Genre } from '../../media-list-page';

type Props = {
  genre: Genre;
};

export const BlockGenre = ({genre}: Props) => {
  return (
    <span
      className="bg-gray-700 text-white text-sm sm:text-xs font-semibold px-2 py-1 rounded-md cursor-pointer hover:text-white/90"
    >
      {genre.name}
    </span>
  );
};

type Props = {
  poster_path?: string;
  title?: string;
};

export const Poster = ({ poster_path, title }: Props) => {
  return (
    <div className="w-full md:w-1/3 flex justify-center">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

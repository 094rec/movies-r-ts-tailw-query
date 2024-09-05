import { Content } from '../media-list-page';
import { useParams } from 'react-router-dom';
import { useOne } from '../../hooks/useOne';
import { Spinner } from '../../components/Spinner';
import { Poster } from './Poster';
import { Block } from './[block]';

export const MediaSinglePage = () => {
  const { id, act } = useParams<{ id: string; act: string }>();

  if (!id) return <p>&#9888; Invalid ID</p>;

  const { data, isLoading, error } = useOne<Content>(
    'mediaSingle',
    `https://api.themoviedb.org/3/${act}/${id}?language=en-US&page=1`,
    +id,
  );

  if (error) return <p className="text-center mt-16">&#9888; {error.message}. Please try again.</p>;

  const { title: movieTitle, name: showTitle } = data || {};
  const title = movieTitle || showTitle;

  return (
    <>
      {isLoading ? (
        <Spinner loading={isLoading} />
      ) : (
        <section className="max-w-3xl mx-auto p-2 mt-8">
          <h1 className="text-3xl font-bold mb-4 text-center md:text-left">{title}</h1>

          <div className="flex flex-col md:flex-row gap-6">
            <Poster {...data} />
            {data && <Block data={data} />}
          </div>
        </section>
      )}
    </>
  );
};

import { Company } from '../../media-list-page';

type Props = {
  company: Company;
};

export const BlockCompany = ({ company: { logo_path, name }}: Props) => {
  return (
    <>
      {logo_path && (
      <img
        className="w-18 h-6 object-contain bg-slate-600 px-2 py-1 rounded-lg shadow-lg mt-3 pl-2 cursor-pointer"
        src={`https://image.tmdb.org/t/p/original/${logo_path}`}
        alt={name}
      />
      )}
    </>
  );
};

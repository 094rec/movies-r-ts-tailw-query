import ClipLoader from 'react-spinners/ClipLoader';

type Props = {
    loading: boolean;
};

const override = {
  display: 'block',
  margin: '60px auto',
};

export const Spinner = ({ loading }: Props) => {
  return (
    <ClipLoader
      color="#4348ca"
      loading={loading}
      cssOverride={override}
      size={130}
    />
  );
};
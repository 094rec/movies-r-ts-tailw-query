import { useMutation } from '@tanstack/react-query';
import { mutationLogin } from './mutation';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {

  const nav = useNavigate();

    const { data, mutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: mutationLogin,
  });

  const handleClick = async () => {
    mutate();
    // window.localStorage.setItem('data', JSON.stringify(data.guest_session_id));
    localStorage.setItem('data', data.guest_session_id);
    nav('/');
  };

  return (
    <>
      <section className="grid place-content-center min-h-screen max-w-3xl mx-auto">
        <h2>Welcome. Login by registering as a Guest below</h2>
        <div className="text-center mt-2">
          <button onClick={handleClick} className="bg-blue-300/50 rounded-xl px-2 py-1">
            Enter
          </button>
        </div>
      </section>
    </>
  );
};

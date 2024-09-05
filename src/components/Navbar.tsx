import { GoHome } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <header className="bg-teal-700 sticky top-0 z-10">
        <section className="flex justify-between items-center px-3 max-w-3xl mx-auto font-medium text-xl p-3 mb-4">
          <div className="flex gap-4 ml-1">
            <Link className="hover:text-white/90 hidden sm:block" to="/">Home</Link>
            <Link className="hover:text-white/90 hidden sm:block" to="#">Rated</Link>
            <Link to="/"><GoHome className="size-10 sm:hidden"/></Link>
          </div>
          <div>
            <Link className="hover:text-white/90 hidden sm:block" to="#">Auth</Link>
            <Link to="#"><RxHamburgerMenu className="size-9 sm:hidden"/></Link>
          </div>
        </section>
      </header>
    </>
  );
};

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto mb-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-auto py-9">
          <div className="flex-1 flex justify-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-semibold tracking-widest text-primary-black">FINESSE</div>
              <div className="flex text-xl space-x-8 mt-7 mb-2">
                <Link to="/" className="text-primary-black hover:text-primary-darkGray transition">home</Link>
                <Link to="/shop" className="text-primary-black hover:text-primary-darkGray transition">shop</Link>
                <Link to="/blog" className="text-primary-black hover:text-primary-darkGray transition">blog</Link>
                <Link to="/about" className="text-primary-black hover:text-primary-darkGray transition">about</Link>
              </div>
            </div>
          </div>
          <div className="flex justify-self-start">
            <svg className="w-6 h-6 text-primary-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
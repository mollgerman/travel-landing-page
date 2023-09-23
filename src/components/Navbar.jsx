const Navbar = () => {
  return (
    <div className="p-5 flex justify-between items-center">
      <h1 className="font-adora text-5xl font-semibold">Tra-vels</h1>
      <ul className="hidden md:flex space-x-8">
        <li className="hover:border-b border-yellow-500 hover:cursor-pointer">
          Home
        </li>
        <li className="hover:border-b border-yellow-500 hover:cursor-pointer">
          Places
        </li>
        <li className="hover:border-b border-yellow-500 hover:cursor-pointer">
          Trips
        </li>
        <li className="hover:border-b border-yellow-500 hover:cursor-pointer">
          About Us
        </li>
        <li className="hover:border-b border-yellow-500 hover:cursor-pointer">
          Contact
        </li>
      </ul>
      <div className="flex items-center space-x-5">
        <button className="px-5 py-2 rounded bg-gray-100   hover:bg-gray-200">
          Login
        </button>
        <button className="px-5 py-2 rounded bg-yellow-500 hover:bg-yellow-600 text-white font-bold">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

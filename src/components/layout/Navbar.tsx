const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MiLanding</h1>
      <ul className="flex gap-6">
        <li>
          <a href="#features" className="hover:text-blue-400">
            Features
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-gray-400 text-center py-6 mt-10">
      <p>
        © {new Date().getFullYear()} MiLanding. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;

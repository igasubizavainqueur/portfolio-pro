const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark border-t border-gray-800 py-8 text-center">
      <p className="text-gray-500">
        &copy; {year} Igasubiza Vainqueur Filose Maximilian. All rights reserved.
      </p>
      <p className="text-sm mt-2 text-gray-600">Built with React.js & Tailwind CSS</p>
    </footer>
  );
};

export default Footer;

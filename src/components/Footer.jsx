const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 w-full">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-2/3">
          <p className="text-yellow-200 text-3xl font-bold mb-4">
            Take Your Business to New Digital Heights with Our Expertise!
          </p>
          <p className="text-white text-lg mb-4 capitalize">
            "we Do whatever we like, ’cause we love what we do. Funk with us!"
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-gold text-2xl mb-4">Contact us</h3>
          <div className="mb-4">
            <i className="bx bx-phone text-silver text-xl mr-2"></i>
            <span className="text-silver">+57 3197919742</span>
          </div>
          <div className="mb-4">
            <i className="bx bx-envelope text-silver text-xl mr-2"></i>
            <span className="text-silver">lukasmoyanomorales@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex">
        <div className="w-full md:w-2/3 mt-6">
          <h3 className="text-gold text-2xl">Social Media</h3>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="#" className="text-silver">
                <i className="bx bx-linkedin text-xl mr-2"></i>
                <i className="bx bx-github text-xl mr-2"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mt-6">
          <p className="text-silver text-center">
            &copy; 2023 - All rights reserved | Created Programmed Designed by Master Lukas Moyano
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

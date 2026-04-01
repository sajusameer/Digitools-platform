const Footer = () => {
  return (
    <>
    
    
      <footer className="bg-[#101727] text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-10">

         {/* logo */}
          <div className="md:col-span-2">
            <h2 className="text-white text-xl font-bold mb-4">DigiTools</h2>
            <p className="text-sm leading-relaxed">
             Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br />with our suite of powerful tools.
            </p>
          </div>

          {/* list-1 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* list -2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </div>

        {/* list 3 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li>Help Center</li>
              <li>Contact</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>

        </div>
      {/* social */}
            <div>
            <h3 className="text-white font-semibold mb-4">Social Link</h3>
            <div className="flex gap-3 mt-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer">
                <img src="/facebook.png" alt="" />
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer">
                <img src="/fi_5968958.png" alt="" />
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer">
                <img src="/Instagram.png" alt="" />
              </div>
            </div>
            </div>
          </div>

        {/* Bottom line */}
        <div className="max-w-7xl mx-auto border-t border-gray-700 mt-10 pt-6 
              flex flex-col md:flex-row items-center 
               justify-between gap-4 text-center md:text-left text-sm">
          <div>© 2026 DigiTools. All rights reserved.</div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4"> <p>Privacy Policy </p> 
                <p>Terms of Service </p>
                <p>Cookies</p>          
                
                </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
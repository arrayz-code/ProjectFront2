import { Footer, FooterBrand, FooterLinkGroup, FooterIcon, FooterCopyright } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function Component() {
  return (
    <div className="mt-40">
 

      
      <Footer container className="fixed bottom-0 left-0 w-full bg-white border-t border-black">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <FooterBrand
              href="/"
              src="./src/assets/icon.png"
              alt="Logo"
              name="ShopTecnology"
              className="h-8 w-auto" // Agrega estas clases para hacer que la imagen sea más pequeña
            />
    
            <FooterLinkGroup className="space-x-4">
              <li><a className="text-gray-600 hover:text-gray-800 font-medium" href="/contact">Contactanos</a></li>
            </FooterLinkGroup>
          </div>

          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default Component;

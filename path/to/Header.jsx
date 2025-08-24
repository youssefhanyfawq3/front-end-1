import Button from "./Button";
import MenuSvg from '../assets/svg/MenuSvg';  // Existing import
import { HamburgerMenu } from './design/Header';  // Existing import

// New import for Menu component
import Menu from './path/to/Menu';  // {{ new_import }}

const Header = () => {
  const pathname = useLocation();

  return (
    <div className="fixed top-0 left-0 w-full z-50 
      bg-n-8/90 backdrop-blur-sm border-b border-n-6 
      lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
      </div>
    </div>
  );
}
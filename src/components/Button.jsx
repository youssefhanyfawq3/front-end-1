import { ButtonSvg } from "../assets/svg/ButtonSvg"; // Adjust the path to the correct file location

const Button = ({ className, href, onClick, children, px, white }) => {

    const buttonClasses = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

    const spanclasses = `relative z-10`
    const renderButton = () => (

        <button className={buttonClasses}  onClick={onClick}>
            <span className={spanclasses}>{children}</span>
            <ButtonSvg white={white} />
        </button>

    )
    const renderlink = () => (

        <a href={href} className={buttonClasses}>
            <span className={spanclasses}>{children}</span>
            <ButtonSvg white={white} />

        </a>
    )
    return href ? renderlink() : renderButton();
};

export default Button;
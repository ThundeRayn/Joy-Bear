
type NavDropDownProps = {
    text: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};

const NavDropDown = ({ text, onMouseEnter, onMouseLeave }: NavDropDownProps) => {
    if (text !== 'CATEGORIES') return null;

    const spanClassName = "absolute left-0 top-8 w-full h-[2px] bg-Joybrown scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left";

    return (
        <div 
            className="hidden md:block bg-Joygrey border border-gray-200 absolute left-0 top-full mt-4 z-40 py-6 px-8 w-max"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <ul className="flex flex-col gap-3">
                <li className="relative">
                    <a 
                        href="/categories/everyday" 
                        className="group relative text-[#2c362d] hover:text-txt-secondary transition-colors duration-300 ease-in-out pb-1"
                    >
                        EVERYDAY
                        <span className={spanClassName}></span>
                    </a>
                </li>
                <li className="relative">
                    <a 
                        href="/categories/games" 
                        className="group relative text-[#2c362d] hover:text-txt-secondary transition-colors duration-300 ease-in-out pb-1"
                    >
                        GAMES
                        <span className={spanClassName}></span>
                    </a>
                </li>
                <li className="relative">
                    <a 
                        href="/categories/halloween" 
                        className="group relative text-[#2c362d] hover:text-txt-secondary transition-colors duration-300 ease-in-out pb-1"
                    >
                        HALLOWEEN
                        <span className={spanClassName}></span>
                    </a>
                </li>
                <li className="relative">
                    <a 
                        href="/categories/christmas" 
                        className="group relative text-[#2c362d] hover:text-txt-secondary transition-colors duration-300 ease-in-out pb-1"
                    >
                        CHRISTMAS
                        <span className={spanClassName}></span>
                    </a>
                </li>
                <li className="relative">
                    <a 
                        href="/categories/valentines-day" 
                        className="group relative text-[#2c362d] hover:text-txt-secondary transition-colors duration-300 ease-in-out pb-1"
                    >
                        VALENTINE'S DAY
                        <span className={spanClassName}></span>
                    </a>
                </li>
                <li className="relative">
                    <a 
                        href="/categories/easter" 
                        className="group relative text-[#2c362d] hover:text-txt-secondary transition-colors duration-300 ease-in-out pb-1"
                    >
                        EASTER
                        <span className={spanClassName}></span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default NavDropDown
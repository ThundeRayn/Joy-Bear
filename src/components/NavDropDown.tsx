
type NavDropDownProps = {
    text: string;
};

const NavDropDown = ({ text }: NavDropDownProps) => {
    return (
        <div className="hidden md:block bg-white shadow-lg border border-gray-200 rounded-md absolute left-1/2 -translate-x-1/2 top-full mt-2 z-40 py-6 px-8 w-max">
            <div className="mb-4 text-lg font-semibold text-gray-800">{text}</div>
            <div className="grid grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-bold mb-2">Random Section 1</h3>
                        <ul className="list-disc ml-4 text-gray-700">
                            <li>Random Item A</li>
                            <li>Random Item B</li>
                            <li>Random Item C</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Random Section 2</h3>
                        <ul className="list-disc ml-4 text-gray-700">
                            <li>Random Item D</li>
                            <li>Random Item E</li>
                            <li>Random Item F</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Random Section 3</h3>
                        <ul className="list-disc ml-4 text-gray-700">
                            <li>Random Item G</li>
                            <li>Random Item H</li>
                            <li>Random Item I</li>
                        </ul>
                    </div>
                </div>
        </div>
    );
};

export default NavDropDown

type NavDropDownProps = {
    text: string;
};

const NavDropDown = ({ text }: NavDropDownProps) => {
    return (
        <div className="hidden md:block w-full bg-white shadow-lg border-t border-gray-200 absolute left-0 top-full z-40">
            <div className="max-w-6xl mx-auto py-6 px-8">
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
        </div>
    );
};

export default NavDropDown
export default function Navbar() {
    return (
        <nav className="w-full p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">Portfolio</div>
                <ul className="flex space-x-4">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
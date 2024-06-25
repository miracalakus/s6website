// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-dark-card text-dark-text">
      <Image src="/smiley.png" alt="Smiley face" width={35} height={35} />
      <div className="space-x-4">
        <Link href="/" passHref><span className="hover:bg-white hover:text-dark-bg px-3 py-2 rounded-lg transition duration-300 cursor-pointer">Home</span></Link>
        <Link href="./project1" passHref><span className="hover:bg-white hover:text-dark-bg px-3 py-2 rounded-lg transition duration-300 cursor-pointer">Holobox Project</span></Link>
        <Link href="./project2" passHref><span className="hover:bg-white hover:text-dark-bg px-3 py-2 rounded-lg transition duration-300 cursor-pointer">Verzuimnavigator Project</span></Link>
        <Link href="./project3" passHref><span className="hover:bg-white hover:text-dark-bg px-3 py-2 rounded-lg transition duration-300 cursor-pointer">Eigen Project</span></Link>
        <Link href="./bewijslast" passHref><span className="hover:bg-white hover:text-dark-bg px-3 py-2 rounded-lg transition duration-300 cursor-pointer">Bewijslast</span></Link>
      </div>
    </nav>
  );
};

export default NavBar;

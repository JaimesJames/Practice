import Link from "next/link";

import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-space">
          <div className="logo">
            <Link href='/'>
                <Image src="/sky.png" width={50} height={50} alt="logo" />
            </Link>
            
          </div>

          <ul>
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/product">Products</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

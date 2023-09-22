import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import Container from "./Container";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="flex h-16 items-center">
      <Container className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-4xl font-bold sm:text-3xl">NextBlog</h1>
        </Link>
        <nav className="flex items-center gap-2">
          <ToggleTheme />
          <ul className="flex items-center gap-4 sm:hidden">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
          <MobileNav />
        </nav>
      </Container>
    </header>
  );
};
export default Header;

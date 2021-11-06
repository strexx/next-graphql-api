import { useRouter } from "next/router";
import Link from "next/link";
import { HeaderStyle } from "./HeaderStyles";

const Header: React.FunctionComponent = () => {
  const { pathname } = useRouter();

  return (
    <HeaderStyle>
      <Link href="/">
        <a className={pathname === "/" ? "is-active" : ""}>Home</a>
      </Link>
      <Link href="/addmovie">
        <a className={pathname === "/addmovie" ? "is-active" : ""}>Add movie</a>
      </Link>
    </HeaderStyle>
  );
};

export default Header;

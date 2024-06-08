import { Link } from "react-router-dom";
import { LogoImg } from "../../../../assets/image";

export const Logo = () => {
  return (
    <Link to="/">
      <img src={LogoImg} width="50" height="50" alt="logo" />
    </Link>
  );
};

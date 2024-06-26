import { Link } from "react-router-dom";
import { LogoImg } from "../../../../assets/image";

export const Logo = () => {
  return (
    <Link to="/">
      <img src={LogoImg} width="120" height="90" alt="logo" />
    </Link>
  );
};

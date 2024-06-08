import { Container } from "../../../../shared/components/Container/Container";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { Phone } from "../Phone/Phone";
import css from "./Header.module.css";
export const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerWrapper}>
          <Logo />
          <Navigation />
          <Phone />
        </div>
      </Container>
    </header>
  );
};

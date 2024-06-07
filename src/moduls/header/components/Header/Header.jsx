import { Container } from "../../../../shared/components/Container/Container";
import { Navigation } from "../Navigation/Navigation";
import css from "./Header.module.css";
export const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div>
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

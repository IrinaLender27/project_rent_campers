import { Baner } from "../moduls/hero/Baner/Baner";
import { Filter } from "../moduls/searchBar/Filter/Filter";
import { Container } from "../shared/components/Container/Container";
export default function HomePage() {
  return (
    <div>
      <Container>
        <Baner />
        <p>Home page</p>
        <Filter />
      </Container>
    </div>
  );
}

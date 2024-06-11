import { About } from "../moduls/about/About/About";
import { Animation } from "../moduls/hero/Animation/Animation";
import { Baner } from "../moduls/hero/Baner/Baner";
import { Container } from "../shared/components/Container/Container";
export default function HomePage() {
  return (
    <div>
      <Container>
        {/* <Animation /> */}
        <Baner />
        <About />
      </Container>
    </div>
  );
}

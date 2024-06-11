import { About } from "../moduls/about/About/About";
import { Footer } from "../moduls/footer/Footer/Footer";

import { Baner } from "../moduls/hero/Baner/Baner";
import { Container } from "../shared/components/Container/Container";
export default function HomePage() {
  return (
    <div>
      <Container>
        <Baner />
        <About />
        <Footer />
      </Container>
    </div>
  );
}

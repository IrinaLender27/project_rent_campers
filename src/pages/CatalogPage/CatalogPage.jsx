import { useSelector } from "react-redux";
import css from "./CatalogPage.module.css";
import {
  selectError,
  selectLoading,
} from "../../redux/campers/campersSelector";
import { Container } from "../../shared/components/Container/Container";
import { Filter } from "../../moduls/searchBar/Filter/Filter";
import { CampersList } from "../../moduls/campers/CampersList/CampersList";
export default function CatalogPage() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <Container>
        <div className={css.catalog}>
          <Filter />
          {loading && <p>Loading</p>}
          {error && <p>Error oops</p>}
          <CampersList />
        </div>
      </Container>
    </div>
  );
}

import { useSelector } from "react-redux";
import css from "./CatalogPage.module.css";
import {
  selectError,
  selectLoading,
} from "../../redux/campers/campersSelector";
import { Container } from "../../shared/components/Container/Container";
import { Filter } from "../../moduls/searchBar/Filter/Filter";
import { CampersList } from "../../moduls/campers/CampersList/CampersList";
import { Loading } from "../../shared/components/Loading";
export default function CatalogPage() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <Container>
        {loading && <Loading />}
        {error && <p>Error oops</p>}
        <div className={css.catalog}>
          <Filter />
          <CampersList />
        </div>
      </Container>
    </div>
  );
}

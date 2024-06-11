import { useSelector } from "react-redux";
import { Container } from "../../shared/components/Container/Container";
import { selectFavorits } from "../../redux/campers/campersSelector";
import { ChooseCamper } from "../../assets/image";
import { CamperCard } from "../../moduls/campers/CamperCard/CamperCard";
import css from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const favorits = useSelector(selectFavorits);
  return (
    <div>
      <Container>
        {favorits.length === 0 ? (
          <div>
            <p className={css.message}>You have no favorites</p>
            <img
              src={ChooseCamper}
              className={css.photo}
              width="300"
              height="300"
              alt="camper"
            />
          </div>
        ) : (
          <ul>
            {favorits.map((camper) => (
              <li key={camper.id}>
                <CamperCard camper={camper} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </div>
  );
}

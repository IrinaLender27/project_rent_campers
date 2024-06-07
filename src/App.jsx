import { Route, Routes, Navigate } from "react-router-dom";
import { CatalogPage, HomePage, FavoritesPage } from "./pages";
import SharedLayout from "./shared/components/SharedLayout";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};

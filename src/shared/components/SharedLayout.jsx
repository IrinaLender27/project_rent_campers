import { Header } from "../../moduls/header/components/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loading } from "./Loading";

export default function SharedLayout() {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "100vh" }}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

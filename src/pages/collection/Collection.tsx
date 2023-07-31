import React from "react";
import HeaderTwo from "../../components/header/HeaderTwo";
import Footer from "../../components/footer/Footer";
import LatestMatch from "./LatestMatch";
// import Breadcrumb from './Breadcrumb';
// import UpcomingGames from './UpcomingGames';
// import AboutInner from '../aboutpage/aboutuspage/AboutInner';

function Collection() {
  return (
    <>
      <HeaderTwo />
      <main>
        <LatestMatch />
      </main>
      <Footer />
    </>
  );
}

export default Collection;

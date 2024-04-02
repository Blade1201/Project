import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Services from "../components/Services";
import GuestReview from "../components/GuestReview";
import FeaturedRooms from "../components/FeaturedRooms";
import Gallery from "../components/Gallery";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <>
      <Hero>
        <Banner title="Hopstop hotel" subtitle="Szállodánk Nyíregyháza szívében helyezkedik el. Színvonalas étteremmel, ízléses berendezésekkel,
              új hívogató belső terekkel találkozhatnak a vendégek és élvezhetik a felhőtlen pihenést és szórakozást.
              Bízunk benne, hogy honlapunk felkelti érdeklődését szállodánk iránt és személyesen is meggyőződik majd arról, hogy
              a valóságban is mennyi lehetőséget tudunk Önnek nyújtani. Hotelünk varázslatos világot teremt Vendégeink számára,
              elfeledtetve a mindennapi nyüzsgő élet kihívásait, csak a pihenésre és feltöltődésre irányítva a figyelmet.
              Reméljük, hogy Önt is hamarosan Vendégeink között üdvözölhetjük!">

          <Link to="/rooms" className="btn-primary"> Szobáink </Link>

        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      <GuestReview />
      <Gallery />
    </>
  );
}

export default Home;
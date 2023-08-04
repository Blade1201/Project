import React from 'react';
import {Link} from "react-router-dom";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Title from '../components/Title';
import AttractionsItem from '../components/AttractionsItem';
import kep1 from "../images/attractions/lido.jpg";
import kep2 from "../images/attractions/lido2.jpg";
import kep3 from "../images/attractions/lido3.jpg";
import kep4 from "../images/attractions/zoo.jpg";
import kep5 from "../images/attractions/zoo2.jpg";
import kep6 from "../images/attractions/zoo3.jpg";
import kep7 from "../images/attractions/openairmuseum.jpg";
import kep8 from "../images/attractions/openairmuseum2.jpg";
import kep9 from "../images/attractions/openairmuseum3.jpg";

const Attractions = () => {
  const latnivaloData = [
    {
      link: 'https://www.aquariusspa.hu/',
      place: 'Aquarius Élményfürdő',
      pics: [kep3, kep2, kep1],
      content:
        'Nyíregyháza-Sóstó a gyógyvizéről híres, hangulatos fürdőhely Nyíregyháza központjától alig pár kilométerre található. Az Aquarius Élményfürdő gyermekvilággal, stranddal, csúszdák széles választékával is rendelkezik így az egész családnak szuper élményt kínál. A Sóstón található jódos-brómos gyógyvíz reumatikus, mozgásszervi és nőgyógyászati panaszok enyhítésére kiválóan alkalmazható, ezért évente több ezer turista keresi fel ezt az üdülőhelyet. A felnőttek és idősek a Termálvilág szolgáltatásait is igénybe vehetik, itt beltéri és kültéri gyógyvizes medencék találhatók nyakzuhannyal, pezsgőággyal, hátmasszírozóval.',
    },
    {
      link: 'https://www.sostozoo.hu/',
      place: 'Nyíregyházi Állatpark',
      pics: [kep4, kep5, kep6],
      content:
        'A Nyíregyházi Állatpark egy 30 hektáros tölgyerdőben található, ahol 500 faj 5000 egyede él természeteshez közeli kifutókban. Az állatkert részei például A Zöld Piramis, ahol  Ázsia és Indonézia fajgazdagságába nyerhetnek betekintést a felfedezők. A Viktória-ház 2015-ben átadott épület Dél-Amerika állat- és növényvilágát hivatott bemutatni. De ezenkívűl az Andok-kaland, Tarzan ösvénye és más számos kifutókomplexum és skanzen is várja az ide látogatókat.',
    },
    {
      link: 'https://muzeumfalu.hu/',
      place: 'Sóstói múzeumfalu',
      pics: [kep7, kep8, kep9],
      content:
        'Magyarország egyik legnagyobb regionális szabadtéri múzeuma, amely egy 19. századi falusi környezetbe repít vissza, ahol megismerhetjük, hogyan éltek a szegény- és középparasztok, illetve a kisnemesek abban az időben. Az öt tájegység bemutatásán kívül a skanzen központjában kialakítottak egy orsós faluközpontot, melynek főterén áll a templom a harangtoronnyal, környezetében pedig egy iskola, egy szatócsbolt, egy paplak, egy tűzoltószertár, egy kocsma és különböző műhelyek sorakoznak. A hagyományoknak megfelelően minden évben rengeteg turistát vonz a május elsejei májusfaállítás és a majális, de a pünkösdi királyválasztás és a Szent István-napi kenyérünnep is.',
    },
  ];


  return (
    <>
      <Hero>
         <Banner title="Látnivalók">
            <Link to="/" className="btn-primary">
               Kezdőoldalra
            </Link>
          </Banner>
      </Hero>


        <div className="attractions">
          <div className="subtitle">
            {latnivaloData.map((data, index) => (
              <div key={index} style={{display: "flex", alignItems: "center", marginLeft: index === 1 ? "0.3rem" : index === 2 ? "0.2rem" : "0", marginTop: index === 0 ? "5rem" : "1.8rem"}}>
                <h1 style={{marginTop: "5rem", width: "250px"}}>
                  <a href={data.link} target="_blank" rel="noreferrer">
                  <Title title={data.place}/>
                  </a>
                </h1>
                <AttractionsItem interval={5000} images={data.pics} />
                <p style={{ marginTop: 20, width: "70rem", fontSize: "19px"}}>{data.content}</p>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Attractions;
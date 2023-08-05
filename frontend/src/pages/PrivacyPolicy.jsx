import React from "react";
import "../styles/pages/privacypolicy.css";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";


const PrivacyPolicy = () => {
    return (
    <>

    <Hero>
        <Banner title="Adatkezelési tájékoztató" subtitle="Tájékoztatjuk Önt, mint honlapunk látogatóját, valamint szolgáltatásaink igénybe vevőjét a társaság adatkezelési és adatvédelmi szabályairól.">
            <Link to="/" className="btn-primary">
            Kezdőoldalra
            </Link>
        </Banner>
    </Hero>
    
    <div className="privacy-policy">
        <p className="hotel-information">
            Név: Hopstop Hotel
            <br></br>
            Székhely: 4400 Nyíregyháza Böszörményi út 15.
            <br></br>
            Cégjegyzékszám: 01-01-001489
            <br></br>A bejegyző bíróság megnevezése: Nem ismert
            <br></br>
            Adószám: 23689160-5-04
            <br></br>
            Telefonszám: +36-20-118-6170
            <br></br>
            E-mail: hopstophotel@gmail.com
            <br></br>
            Adatvédelmi tisztviselő:
            <br></br>
            <br></br>
            Név: Molnár Eszter
            <br></br>
            Telefonszám: +36-30-932-9898
            <br></br>
            <br></br>
        </p>
        <ul style={{fontWeight: "bold"}}>
            <li>Milyen alapelveket követünk adatkezelésünk során?</li>
        </ul>
            <br />
            <p>A társaság az adatkezelése során az alábbi alapelveket követi:</p>
            <br />
        <ol>
            <li>A személyes adatokat jogszerűen és tisztességesen, valamint az Ön számára átláthatóan kezeljük.</li>
            <li>A személyes adatokat csak meghatározott, egyértelmű és jogszerű célból gyűjtjük és azokat nem kezeljük a célokkal össze nem egyeztethető módon.</li>
            <li>Az általunk gyűjtött és kezelt személyes adatok az adatkezelés céljai szempontjából megfelelőek és relevánsak, valamint csak a szükségesre korlátozódnak.</li>
            <li>A társaság minden racionális intézkedést megtesz annak érdekében, hogy az általunk kezelt adatok pontosak és szükség esetén naprakészek legyenek, a pontatlan személyes adatokat haladéktalanul töröljük vagy helyesbítjük.</li>
            <li>A személyes adatokat olyan formában tároljuk, hogy Ön csak a személyes adatok kezelése céljainak eléréséhez szükséges ideig legyen azonosítható.</li>
            <li>megfelelő technikai és szervezési intézkedések alkalmazásával biztosítjuk a személyes adatok megfelelő biztonságát az adatok jogosulatlan vagy jogellenes kezelésével, véletlen elvesztésével, megsemmisítésével vagy károsodásával szemben.</li>
        </ol>
            <br />
        <ul style={{fontWeight: "bold"}}>
            <li>Melyek a főbb irányadó jogszabályok tevékenységünkre?</li>
        </ul>
            <br />
        <ul style={{listStyle: "inside"}}>
            <li>A természetes személyeknek a személyes adatok kezeléséről szóló az Európai Parlament és a Tanács (EU) 2016/679 rendelete (GDPR)</li>
            <li>Az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény – (Info tv.)</li>
            <li>A Polgári Törvénykönyvről szóló 2013. évi V. törvény (Ptk.)</li>
            <li>Az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások egyes kérdéseiről szóló 2001. évi CVIII. törvény – (Eker tv.)</li>
            <li>Az elektronikus hírközlésről szóló 2003. évi C. törvény – (Ehtv)</li>
            <li>A fogyasztóvédelemről szóló 1997. évi CLV. törvény (Fogyv tv.)</li>
            <li>A fogyasztóvédelemről szóló 1997. évi CLV. törvény (Fogyv tv.)</li>
            <li>A gazdasági reklámtevékenység alapvető feltételeiről és egyes korlátairól szóló 2008. évi XLVIII. törvény (Grtv.)</li>
            <li>A számvitelről szóló 2000. évi C. törvény (Számv tv.)</li>
        </ul>
            <br />
        <p style={{fontWeight: "bold"}}>A társaság az Ön személyes adatait: </p>
            <br />
        <ol>
            <li>Az Ön előzetes tájékoztatáson alapuló és önkéntes hozzájárulása alapján és csakis a szükséges mértékben és minden esetben célhoz kötötten kezeljük, azaz gyűjtjük, rögzítjük, rendszerezzük, tároljuk és felhasználjuk. </li>
            <li>Egyes esetekben az Ön adatainak kezelése jogszabályi előírásokon alapul és kötelező jellegű, ilyen esetekben erre a tényre külön felhívjuk az Ön figyelmét.</li>
            <li>Illetve bizonyos esetekben az Ön személyes adatainak kezeléséhez a társaságnak, fűződik jogos érdeke, például az emberi élet, testi épség, személyi szabadság védelme és a vagyonvédelem érdekében elektronikus megfigyelőrendszer alkalmazása.</li>
        </ol>
            <br />
        <ul style={{fontWeight: "bold"}}>
            <li>Adatkezelési tájékoztató módosítása</li>
        </ul>
            <br />
        <p>A társaság fenntartja magának a jogot jelen Adatkezelési tájékoztató módosítására, amelyről az érintetteket megfelelő módon tájékoztatja.</p>
        <p>2023. december. 1.</p>
    </div>
    </>
);
};

export default PrivacyPolicy;
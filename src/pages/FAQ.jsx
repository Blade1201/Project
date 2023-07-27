import React from "react";
import { Link } from "react-router-dom";
import FAQItem from "../components/FAQItem";
import Hero from "../components/Hero";
import Banner from "../components/Banner";


const FAQ = () => {
    return (
        <div style={{ backgroundColor: "cornsilk" }}>

        <Hero>
           <Banner title="Gyakori kérdések és válaszok">
              <Link to="/" className="btn-primary">
              Kezdőoldalra
              </Link>
           </Banner>
        </Hero>

        <div style={{ textAlign: "center" }}>
        <h4 style={{ marginTop: "3rem" }}>Időpontok</h4>

        <FAQItem question="Mikor foglalhatjuk el a szobát az érkezés napján?" answer="A megfelelő takarítás és fertőtlenítés miatt a szobát az érkezés napján 15 órától tudjuk garantálni. 12 és 15 óra között addig elfogyasztható az ebéd, mely minden csomagunk tartalma. Ez idő alatt csomagszobánk díjmentesen használható korlátozott számban." />
        <FAQItem question="A távozás napján meddig kell elhagyni a szobát?" answer="A távozás napján 11 óráig kérjük szépen átadni a szobát." />
        <FAQItem question="Mik az étkezési időpontok?" answer="Reggeli: 7.00-10.00 Ebéd: 12.00-15.00 Vacsora: 18.00-20.30" />
        
        <h4>Étkezés</h4>

        <FAQItem question="Milyen étkezés jár az érkezés napján?" answer="Minden akciós csomagunk teljes ellátást tartalmaz. Érkezés napján 12.00-15.00 között elfogyasztható az első ebéd, és 18.00-20.30 között az első vacsora." />
        <FAQItem question="Milyen étkezés jár a távozás napján?" answer="Távozás napján 7.00-10.00 között elfogyasztható a reggeli." />
        <FAQItem question="Milyen ital jár az étkezésekhez?" answer="A reggeli svédasztal tartalmazza a hagyományos reggeli italokat, mint víz, tea, kávé, rostos üdítő, tej. Az ebéd és a vacsora esetében ital külön díj ellenében rendelhető a felszolgálóktól." />
        
        <h4>Foglalás</h4>

        <FAQItem question="A foglalás regisztrációhoz kötött?" answer="Igen, weboldalunkon a foglalás regisztrációhoz van kötve." />
        <FAQItem question="Mi a foglalás menete?" answer="Közvetlen foglalást szállodánk honlapján tud rögzíteni. Felmerülő problémák esetén kérjen segítséget a honlapon keresztül, vagy akár telefonon keresztül is, kollégáink rendelkezésére állnak munkanapokon 8.00-16.00 között." />
        
        <h4>Szobák</h4>

        <FAQItem question="Minden szoba klimatizált?" answer="Igen, kivétel nélkül." />
        <FAQItem question="Dohányzás megengedett-e a szobákban?" answer="Az egész szálloda területén tilos a dohányzás. Dohányzás kizárólag az arra kijelölt helyeken lehetséges." />

        <h4>Fizetés</h4>

        <FAQItem question="Elfogadnak-e SZÉP Kártyát?" answer="OTP, MKB és K&H típusú SZÉP kártyát is elfogadunk." />
        <FAQItem question="Különböző fizetési módok (SZÉP Kártya, utalvány, készpénz) kombinálhatóak-e?" answer="Minden további nélkül lehet kombinálni a fizetési módokat." />

        <h4>Gyermek</h4>

        <FAQItem question="Hol és hogyan kell jeleznem, hogy gyermekem számára gyermekfelügyeletet kérek?" answer="24 órával előtte kell jelezni a szálloda recepcióján." />
        <FAQItem question="Mi a teendő, ha gyermekünk még indulás előtt megbetegszik?" answer="Természetesen ez bármikor előfordulhat, ilyenkor mihamarabb jelezni kell értékesítő kollégáink felé telefonon, hiszen beteg vendéget mi sem fogadhatunk. A foglalás törlése lemondási időn belül már nem lehetséges, azonban a foglaló összege nem vész el, felhasználható lesz a következő 6 hónapon belül." />
        <FAQItem question="Mit tegyünk, ha a szállodában betegszik meg a gyermek?" answer="A betegséget mihamarabb jelezni kell a recepciós kollégáknál, akik segítenek a helyi ügyeleti ellátást elérni." />

        <h4>Egyéb</h4>

        <FAQItem question="Ételallergiám van, tudja-e a szálloda kezelni?" answer="Speciális étrendet természetesen tudunk biztosítani az itt tartózkodás alatt, ehhez érkezés előtt kb. egy héttel kérjük, vegyék fel a kapcsolatot a hotellel az oldalon található telefonszámon keresztül. Vegán étkezést azonban sajnos nem tudunk biztosítani." />
        <FAQItem question="Mit nem kell magammal vinnem? (mit biztosít a szálloda?)" answer="A szállodai szobában biztosítunk törölközőket (szobait és wellness törölközőt is), fürdőköntöst (gyermek méretűt is), valamint fürdőszobai piperecikkeket." />
        <FAQItem question="Vihetek -e magammal háziállatot a szállodába?" answer="Igen, Bizonyos szobák vendégei hozhatnak háziállatot. Erről a szobák leírásában tájékozódhat." />
        <FAQItem question="Van internet csatlakozási lehetőség a szálloda területén?" answer="A szálloda egész területén WiFi biztosított." />
        <FAQItem question="Mi a teendő, ha személyes tárgyat hagytam a szállodában?" answer="Amennyiben hazautazást követően bármi hiányzik, kérjük telefonáljon az értékesítő kollégáknak, akik utána néznek, hogy a szobában maradt-e. Amennyiben megtaláljuk a keresett tárgyat, utánvétellel tudjuk azt postázni." />

        <br />
        <br />
        <br />
        
        </div>
        </div>
        
    );
};

export default FAQ;
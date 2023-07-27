import React from "react";
import OurGuestSaid from "./OurGuestSaid";

const GuestReview = ()  => {
    return (
        <div className="guest-review">
        <div className="column-guest" >
            <h3>Vendégeink mondták</h3>
            <OurGuestSaid content="A recepció segítőkész, kedvesek, ügyeltek a tisztaságra, kényelmes ágy, kiváló elhelyezkedés, ár érték arányban tökéletes. Megvoltunk elegédve a párommal!" name="Eszter" whoIs="Turista" />
            <OurGuestSaid content="Nagyon igényes a szálloda, a személyzet is nagyon kedves, figyelmes, minden kérésünkben a segítségünkre voltak maximálisan. Köszönünk mindent! " name="Ildikó" whoIs="Turista" />
            <OurGuestSaid content="Sok látnivaló volt a környéken! Remek programok voltak a Múzeumfaluban is. Nagyon jól sikerült a nyaralás, nagyon kedvesek az egész szállodára elmondható." name="Gréta" whoIs="Átutazó" />
        </div>
    </div>
    )
}

export default GuestReview;
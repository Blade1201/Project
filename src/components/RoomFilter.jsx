import React, {useContext} from "react";
import {RoomContext} from "../context/Context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomFilter = ({ rooms }) => {
  const context = useContext(RoomContext);

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => (
      <option value={item} key={index}>
        {item}
      </option>
  ));

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
  ));

  return (
      <section className="filter-container">
        <Title title="Szobák keresése" />

        <form className="filter-form">
          <div className="form-group">
            <label htmlFor="type">Szoba típusa</label>
            <select
                name="type"
                id="type"
                value={type}
                className="form-control"
                onChange={handleChange}
            >
              {types}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="capacity">Vendégek száma</label>
            <select
                name="capacity"
                id="capacity"
                value={capacity}
                className="form-control"
                onChange={handleChange}
            >
              {people}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="price">Szoba Ára ${price}</label>
            <input
                type="range"
                name="price"
                min={minPrice}
                max={maxPrice}
                id="price"
                value={price}
                onChange={handleChange}
                className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="size">Szoba mérete</label>
            <div className="size-inputs">
              <input
                  type="number"
                  name="minSize"
                  id="size"
                  value={minSize}
                  onChange={handleChange}
                  className="size-input"
              />
              <input
                  type="number"
                  name="maxSize"
                  id="size"
                  value={maxSize}
                  onChange={handleChange}
                  className="size-input"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="single-extra">
              <input
                  type="checkbox"
                  name="breakfast"
                  id="breakfast"
                  checked={breakfast}
                  onChange={handleChange}
              />
              <label htmlFor="breakfast">Reggeli</label>
            </div>

            <div className="single-extra">
              <input
                  type="checkbox"
                  name="pets"
                  id="pets"
                  checked={pets}
                  onChange={handleChange}
              />
              <label htmlFor="pets">Állatok</label>
            </div>
          </div>
        </form>
      </section>
  );
};

export default RoomFilter;

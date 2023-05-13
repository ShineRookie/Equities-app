import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { fetchFilter } from "../store/actions";
import { fetchReports } from "../api/api";

const FilterList = () => {
  const filterList = useSelector((state) => state.filterList);
  const activeFilter = useSelector((state) => state.activeFilter);
  const dispatch = useDispatch();

  const handleSelect = async (e) => {
    const target = e.target.innerText;
    console.log("click + e: " + target);
    dispatch(fetchFilter(target));
    await fetchReports(0, target);
  };

  return (
    <ul className={"filter__list"}>
      <span className={"sorted"}>Sorted by: {activeFilter}</span>
      {filterList.map((filter, index) => (
        <li className={"filter__item"} key={index}>
          <button
            className={"btn"}
            disabled={activeFilter === filter}
            onClick={(e) => handleSelect(e)}
          >
            {filter}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilterList;

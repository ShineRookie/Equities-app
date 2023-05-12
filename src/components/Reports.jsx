import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFailure,
  fetchRequest,
  fetchSuccess,
  nextPage,
  prevPage,
} from "../store/actions";
import { fetchReports } from "../api/api";
import Button from "./Button";
import EquitiesList from "./EquitiesList";

const Reports = () => {
  const reports = useSelector((state) => state.reports);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchRequest());

      try {
        const data = await fetchReports(page);
        dispatch(fetchSuccess(data));
      } catch (e) {
        dispatch(fetchFailure(e));
      }
    };

    fetchData();
  }, [dispatch, page]);

  const handleNextPage = () => {
    dispatch(nextPage());
  };

  const handlePrevPage = () => {
    dispatch(prevPage());
  };

  return (
    <div className={"reports__block"}>
      {reports.length > 0 ? (
        loading ? (
          <div className={"loading"}></div>
        ) : error ? (
          <div className={"error"}>Error {error.message}</div>
        ) : (
          <div className={"reports__items"}>
            <EquitiesList list={reports} />

            <div className={"buttons"}>
              <Button handleClick={handlePrevPage} item={page} disabled={0}>
                Prev
              </Button>
              <Button handleClick={handleNextPage} item={page} disabled={100}>
                Next
              </Button>
            </div>
          </div>
        )
      ) : (
        <div className={"reports__empty"}>Equities list is empty</div>
      )}
    </div>
  );
};

export default Reports;

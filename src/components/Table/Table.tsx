import React, { useEffect } from 'react';
import { useState } from "react";
import debounce from "lodash/debounce";
import Loading from "../Loading/Loading";
import { useFetchSatellites } from "../../queries/useFetchSatellites";
import "./Table.styles.scss";
import { formatDate } from "../../utils/formatDate";
import { SearchInput } from "../SearchInput/SearchInput";
import { Pagination } from "../Pagination/Pagination";

export function Table() {
  const { data, isLoading } = useFetchSatellites();
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredData = data
    ? data.filter((satellite) =>
        satellite.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const itemsToDisplay = filteredData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(
    filteredData.length / itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchInput = debounce(
    (value: string) => setSearchTerm(value),
    500
  );

  return (
    <div className="content-table" data-testid="table-container">
      <Loading loading={isLoading} />
      <h1>Satellite Launches</h1>
      <SearchInput onChange={handleSearchInput} />
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {itemsToDisplay?.map((satellite) => (
            <tr key={satellite.id}>
              <td>{satellite.name}</td>
              <td
                className={`status-launch ${
                  satellite.success ? "success-launch" : "failed-launch"
                }`}
              >
                {satellite.success ? "Success" : "Failed"}
              </td>
              <td>{formatDate(satellite.date_utc, "MM/dd/yyyy")}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

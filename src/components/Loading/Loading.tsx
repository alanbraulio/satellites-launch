import React from "react";
import { FaSpinner } from "react-icons/fa";
import "./Loading.styles.scss";

interface LoadingProps {
  loading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <div className="loading" data-testid="loading-container">
      <FaSpinner className="spinner" />
      <p>Carregando...</p>
    </div>
  );
};

export default Loading;

import React from "react";
import { ClipLoader } from "react-spinners";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
};

const Loading = ({ loading }) => {
  return (
    <div style={override}>
      <ClipLoader color="#ffffff" loading={loading} size={150} />
    </div>
  );
};

export default Loading;

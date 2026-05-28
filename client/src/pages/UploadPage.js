

import React, { useState } from "react";

import API from "../services/api";

function UploadPage() {

  const [file, setFile] = useState(null);

  const [sourceType, setSourceType] =
    useState("SAP");

  const uploadFile = async () => {

    try {

      // File validation
      if (!file) {

        alert("Please select CSV file");

        return;
      }

      // Only CSV allowed
      if (!file.name.endsWith(".csv")) {

        alert("Only CSV files allowed");

        return;
      }

      const formData = new FormData();

      formData.append("file", file);

      formData.append(
        "sourceType",
        sourceType
      );

      // API Call
      const res = await API.post(
        "/upload/csv",
        formData
      );

      // Success Message
      alert(res.data.message);

    } catch (error) {

      console.log(error);

      // Backend Error Message
      alert(
        error.response?.data?.error ||
        "Upload Failed"
      );
    }
  };

  return (

    <div className="container mt-5">

      <div className="card p-4 shadow">

        <h2 className="mb-4">
          Upload ESG CSV
        </h2>

        {/* Source Type Dropdown */}
        <select
          className="form-select mb-3"

          value={sourceType}

          onChange={(e) =>
            setSourceType(e.target.value)
          }
        >

          <option value="SAP">
            SAP
          </option>

          <option value="UTILITY">
            UTILITY
          </option>

          <option value="TRAVEL">
            TRAVEL
          </option>

        </select>

        {/* File Input */}
        <input
          type="file"

          accept=".csv"

          className="form-control mb-3"

          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

        {/* Upload Button */}
        <button
          className="btn btn-primary"

          onClick={uploadFile}
        >
          Upload
        </button>

      </div>
    </div>
  );
}

export default UploadPage;
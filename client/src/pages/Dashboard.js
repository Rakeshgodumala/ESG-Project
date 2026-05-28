import React, {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

function Dashboard() {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    const res = await API.get("/records");

    setRecords(res.data);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const approveRecord = async (id) => {
    await API.patch(`/records/approve/${id}`);

    fetchRecords();
  };

  const lockRecord = async (id) => {
    await API.patch(`/records/lock/${id}`);

    fetchRecords();
  };

  return (
    <div className="container mt-4">

      <h2 className="mb-4">
        ESG Review Dashboard
      </h2>

      <div className="table-responsive">

        <table className="table table-bordered">

          <thead className="table-dark">
            <tr>
              <th>Source</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Normalized</th>
              <th>Status</th>
              <th>Suspicious</th>
              <th>Locked</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {records.map((record) => (
              <tr key={record._id}>

                <td>{record.sourceType}</td>

                <td>{record.category}</td>

                <td>
                  {record.amount}{" "}
                  {record.unit}
                </td>

                <td>
                  {record.normalizedValue}
                </td>

                <td>{record.status}</td>

                <td>
                  {record.isSuspicious
                    ? "Yes"
                    : "No"}
                </td>

                <td>
                  {record.locked
                    ? "Yes"
                    : "No"}
                </td>

                <td>

                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() =>
                      approveRecord(record._id)
                    }
                  >
                    Approve
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      lockRecord(record._id)
                    }
                  >
                    Lock
                  </button>

                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Dashboard;
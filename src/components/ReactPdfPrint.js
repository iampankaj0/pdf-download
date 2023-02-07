import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Table, Button } from "react-bootstrap";

const ReactPdfPrint = () => {
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "userdata",
    onAfterPrint: () => alert("Data Downloaded"),
  });

  const usersData = [
    {
      name: "Pankaj Yadav",
      email: "pankaj@gmail.com",
    },
    {
      name: "Rahul Kumar",
      email: "rahul@gmail.com",
    },
    {
      name: "Ravi Rao",
      email: "ravi@gmail.com",
    },
    {
      name: "Rohit Kumar",
      email: "rohit@gmail.com",
    },
    {
      name: "Ankit Yadav",
      email: "ankit@gmail.com",
    },
  ];

  return (
    <>
      <div
        className="main__section container"
        ref={printRef}
        style={{ width: "100%", height: window.innerHeight }}
      >
        <h1 className="text-center my-3 pb-2 text-success border-bottom">
          User Data
        </h1>
        <Table className="w-75 mx-auto" bordered>
          <thead>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
          </thead>
          <tbody>
            {usersData.map((item, id) => (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="container position-fixed bottom-0">
        <button className="btn btn-warning" onClick={handlePrint}>
          Print
        </button>
      </div>
    </>
  );
};

export default ReactPdfPrint;

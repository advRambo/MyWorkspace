import { Button, Table } from "reactstrap";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [filterItem, setFilterItem] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((a) => a.json())
      .then((b) => {
        setData(b);
        setFilterItem(b);
      })
      .catch((err) => console.log("err", err));
  }, []);

  const inputFun = (inpuVal) => {
    const a = data.filter(
      (i) =>
        i.name.toLowerCase().includes(inpuVal.toLowerCase()) ||
        i.email.toLowerCase().includes(inpuVal.toLowerCase())
    );
    setFilterItem(a);
  };
  const deletFun = (id) => {
    const deleted = data.filter((i) => i.id != id);
    setFilterItem(deleted);
  };
  return (
    <>
      Search here{" "}
      <input type="text" onChange={(e) => inputFun(e.target.value)} />
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>email</th>
            <th>phone</th>
            <th>Action</th>
          </tr>
        </thead>
        {filterItem.length > 0 ? (
          <tbody>
            {filterItem.map((i) => {
              return (
                <tr key={i.id}>
                  <th scope="row">{i.id}</th>
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>{i.phone}</td>
                  <td>
                    <Button color="danger" onClick={() => deletFun(i.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td>No data found</td>
            </tr>
          </tbody>
        )}
      </Table>
    </>
  );
};
export default Home;

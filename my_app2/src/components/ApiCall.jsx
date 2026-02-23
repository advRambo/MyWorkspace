import React, { useEffect, useState } from "react";
import { Button, Table, Spinner } from "reactstrap";

const ApiCall = () => {
  const [apiData, setapiData] = useState([]);
  const [searchData, setsearchData] = useState([]);
  const [loader, setLoader] = useState(true);

  // const [sear]

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((resData) => resData.json())
      .then((resData) => {
        setapiData(resData.recipes);
        setLoader(false);
        setsearchData(resData.recipes);
      })
      .catch((err) => console.log("Api Fetch error", err));
    // console.log("Array Length", apiData.length);
  }, []);
  //   const myOrig = apiData;
  //   console.log(apiData);
  //   console.log(typeof apiData);
  // trying to find the ingredients of the array object
  //   const findIngredients = (apiData) => {
  //     for (let i = 0; i < apiData.length; i++) {
  //       apiData[i].find((i) => i.ingredients.join(""));
  //     }
  //     console.log(findIngredients);
  //   };

  const searchItem = (e) => {
    const sItem = apiData.filter(
      //   (i) => i.ingredients[0].toLowerCase().includes(e.toLowerCase())
      //   (i) => i.name.toLowerCase().includes(e.toLowerCase())
      // I Want to search Ingredients or MealType which i'm trying but Not able to get it
      (i) => i.ingredients().join().toLowerCase().includes(e.toLowerCase())
      //   i.prepTimeMinutes.includes(e)
    );
    // console.log("Ingredients" + apiData.ingredients.Object.value(ingredients));
    setsearchData(sItem);
    console.log(sItem.ingredients);
  };
  const updateItem = (id) => {
    const deleted = searchData.filter((i) => i.id != id);
    setsearchData(deleted);
    console.log("Array Length", searchData.length);
  };
  return (
    <div className="container">
      <div className="tag">
        <input
          type="textbox"
          placeholder="Search Recipe"
          onChange={(e) => searchItem(e.target.value)}
        ></input>
      </div>
      {loader ? (
        <Spinner>Loading...</Spinner>
      ) : (
        <Table dark bordered hover>
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Name</th>
              <th>Meal Type</th>
              <th>Ingredients</th>
              <th>Prep Time</th>
              <th>Unwanted Item </th>
            </tr>
          </thead>
          <tbody>
            {searchData.map((i) => {
              return (
                <tr key={i.id}>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.mealType}</td>
                  <td>{i.ingredients}</td>
                  <td>{i.prepTimeMinutes} mins</td>
                  <td>
                    <Button color="danger" onClick={() => updateItem(i.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};
export default ApiCall;

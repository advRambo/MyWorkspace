import React, { useState } from "react";

const Todo = () => {
  const [iVal, setiVal] = useState("");
  const [addData, setaddData] = useState([]);
  const [myStyle, setmyStyle] = useState("");

  const inputVal = (e) => {
    setiVal(e);
  };
  console.log(iVal);

  const addItem = () => {
    setaddData([...addData, iVal]);
    setiVal("");
  };
  console.log(addData);
  // let a = "none;";

  const addStyle = (j) => {
    const a = addData[j];
    const b = "textDecoration: line-through";
    const c = "textDecoration: none";

    addData.filter((i) => {
      addData[j].includes(a) ? setmyStyle(b) : setmyStyle(c);
    });

    console.log(myStyle);

    // addData[j].includes(a) ? setmyStyle(b) : setmyStyle(c);
    // console.log(myStyle);

    // addData[j] === addData[j] ? setStyle(true) : setStyle(false);
    // // style(a);
    // console.log(style);
  };

  const delItem = (i) => {
    setaddData((x) => x.filter((val, z) => z !== i));
  };
  return (
    <div>
      <input
        type="textbox"
        value={iVal}
        onChange={(e) => inputVal(e.target.value)}
      ></input>
      <button onClick={addItem}> Add Todo </button>
      <ul>
        {addData.map((val, index) => (
          <li key={index} style={{ myStyle }}>
            {val}
            <br />
            <button onClick={() => addStyle(index)}>Todo Done</button>
            <button onClick={() => delItem(index)}>Delete</button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

import { useState } from "react";

const Accordion3 = ({ data }) => {
  const [currentId, setCurrentId] = useState(null);

  //   const toggleText = (id) => {
  //     setCurrentId(id);
  //     console.log(id);
  //   };
  return (
    <div className="accordion">
      <h3>Accordion 3</h3>
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          text={el.text}
          num={i}
          key={el.title}
          id={i}
          isToggle={setCurrentId}
          //   isOpen={currentId === i ? true : false}
          currId={currentId}
        />
      ))}
    </div>
  );
};

const AccordionItem = ({ title, text, num, id, isToggle, currId }) => {
  return (
    <>
      <div
        className={currId === id ? "item open" : "item"}
        onClick={() => {
          id === currId ? isToggle(null) : isToggle(id);
        }}
        id={id}
      >
        <p className="number">{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
        <p className="title">{title}</p>
        <p className="icon">{currId === id ? "-" : "+"}</p>
        {currId === id && <div className="content-box">{text}</div>}
      </div>
    </>
  );
};
export default Accordion3;

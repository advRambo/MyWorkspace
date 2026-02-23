import { useState } from "react";

const Accordion = ({ data }) => {
  console.log("Hello world !");
  return (
    <div className="accordion">
      <h3>Accordion 1</h3>
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          text={el.text}
          num={i}
          key={el.title}
          id={i}
        />
      ))}
    </div>
  );
};

const AccordionItem = ({ title, text, num, id }) => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <>
      <div
        className={isOpen === id ? "item open" : "item"}
        onClick={() => setIsOpen(id)}
        id={id}
      >
        <p className="number">{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen === id ? "-" : "+"}</p>
        {console.log(isOpen, id)}
        {isOpen === id ? (
          <div className="content-box">{text}</div>
        ) : (
          <div className="content-box"></div>
        )}
      </div>
    </>
  );
};
export default Accordion;

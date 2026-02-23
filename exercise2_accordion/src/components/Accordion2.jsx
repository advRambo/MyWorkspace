import { useState } from "react";

const Accordion2 = ({ data }) => {
  const [currOpen, setIsOpen] = useState(null);
  return (
    <div className="accordion">
      <h3>Accordion 2 with chidren props</h3>
      {data.map((el, i) => (
        <AccordionItem
          curOpen={currOpen}
          onOpen={setIsOpen}
          title={el.title}
          text={el.text}
          num={i}
          key={el.title}
          id={i}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={currOpen}
        onOpen={setIsOpen}
        title="Text 1"
        num={22}
        key="Text 1"
      >
        Hello Bengaluru
      </AccordionItem>
    </div>
  );
};

const AccordionItem = ({ title, text, num, onOpen, curOpen, children }) => {
  const isOpen = num === curOpen;

  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };
  return (
    <>
      <div className={isOpen ? "item open" : "item"} onClick={handleToggle}>
        <p className="number">{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>
        {isOpen ? (
          <div className="content-box">{children}</div>
        ) : (
          <div className="content-box"></div>
        )}
      </div>
    </>
  );
};
export default Accordion2;

import { useState } from "react";

const IterationSample = () => {
  //   const names = ["눈사람", "얼음", "눈", "바람"];
  //   const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할때 사용할 id
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setInputText("");
    setNames(nextNames);
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>
        {/* <li>눈사람</li>
      <li>얼음</li>
      <li>눈</li>
      <li>바람</li> */}
        {nameList}
      </ul>
    </>
  );
};

export default IterationSample;

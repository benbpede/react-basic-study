import { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  //   useEffect(() => {
  //     // console.log("렌더링이 완료되었습니다");
  //     // console.log({
  //     //   name,
  //     //   nickname,
  //     // });
  //     console.log("마운트될때만 실행됩니다.");
  //   }, []);
  //   useEffect(() => {
  //     console.log(name);//특정 값이 업데이트될때만 실행
  //   }, [name]);
  //   useEffect(() => {
  //     console.log("effect");
  //     console.log(name);
  //     return () => {
  //       console.log("cleanup");
  //       console.log(name);
  //     };
  //   }, [name]);
  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("unmount");
    };
  }, []); // 언마운트(사라질)때만 호출하고 싶다면 두번째파라미터에 비어있는 배열을 넣으면 됨

  return (
    <div>
      <div>
        <input
          value={name}
          onChange={onChangeName}
          type="text"
          placeholder="이름"
        />
        <input
          value={nickname}
          onChange={onChangeNickname}
          type="text"
          placeholder="닉네임"
        />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;

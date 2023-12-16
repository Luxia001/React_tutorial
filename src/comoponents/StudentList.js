import { useState } from "react";
import { Item } from "./Item";
import "./StudentList.css";

export const StudentList = (props) => {
  const { students, deleteStudent } = props;

  const [show, setShow] = useState(true);

  const btnStudent = {
    color: show ? "rgb(47, 248, 81)" : "red",
    background: "none",
    border: "none",
  };
  return (
    <>
      <ul>
        <button style={btnStudent} type="" onClick={() => setShow(!show)}>
          <h1 style={{ fontSize: "30px" }}>Student : {students.length}</h1>
        </button>
        {show &&
          students.map((data) => (
            <Item
              key={data.id}
              data={data}
              deleteStudent={deleteStudent}
            ></Item>
          ))}
      </ul>
    </>
  );
};

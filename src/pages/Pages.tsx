import styles from "./styles.module.scss";
import { Button } from "../components/Button/Button";
import { useState } from "react";
import { Input } from "../components/Input/Input";

export const TodoList = () => {
  const [taskName, setTasksName] = useState("");
  const [taskValue, setTasksValue] = useState("");
  const [objectData, setObjectData] = useState({});

const handleAddTask = () => {
  if(!taskName.trim()) return

  setObjectData({
    Name : taskName,
    surname: taskValue || ''
  })
  setTasksName('')
  setTasksValue('')
}

  return (
    <>
      <Input
        label="Название поля:"
        name={"Название поля"}
        onChange={(e) => {setTasksName(e.target.value)}}
        value={taskName}
      />
      <Input
        label="Значение поля:"
        name={"Значение поля"}
        onChange={(e) => setTasksValue(e.target.value)}
        value={taskValue}
      />
      <Button title="Создать поле в обьекте" onClick={handleAddTask} />
      <div className={styles.object}> 
        <p>Обьект: {JSON.stringify(objectData, 2)}</p></div>

    </>
  );
};

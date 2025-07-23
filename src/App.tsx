import { useState } from 'react';
import './App.scss';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';

const App = () => {
    const [taskName, setTasksName] = useState("");
    const [taskValue, setTasksValue] = useState("");
    const [objectData, setObjectData] = useState({});
  
  const handleAddTask = () => {
    if(!taskName.trim()) return
  
    setObjectData(prevData => ({
            ...prevData, 
            [taskName]: taskValue || '' 
        }));
    setTasksName('')
    setTasksValue('')
    console.log()
  }
  console.log(objectData)
  return (
    <div className="container">
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
      <div className='object'> 
        <p>Обьект: {JSON.stringify(objectData,null, 3)}</p></div>

    </div>
  );
};

export default App;

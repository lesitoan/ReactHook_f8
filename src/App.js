import { useState } from 'react';

const courses = [
  {
    id: 1,
    data: 'java'
  },
  {
    id: 2,
    data: 'python'
  },
  {
    id: 3,
    data: 'ruby'
  },
];

function App() {
  const [checked, setChecked] = useState([]);
  const handleOnChange = (id) => {
    const isCheked = checked.includes(id);
    console.log(isCheked)
    if(isCheked) {
      setChecked(checked.filter((value) => value !== id))
    } else {
      setChecked([...checked, id])
    } 
  }
  return (
    <div className='container'>
      {courses.map((value, index) => (
        <div key={index}>
          <input checked={checked.includes(value.id)} onChange={() => handleOnChange(value.id)} type="checkbox" />
          <lable>{value.data}</lable>
        </div>
      ))
      }
    </div>
  )
};

export default App;

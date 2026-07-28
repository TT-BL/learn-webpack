import { useState, useEffect } from 'react';

export default () => {
  const [name, setName] = useState('huahua');
  const [age, setAge] = useState('18');

  useEffect(() => {
    console.log('name 或 age 变化了', name, age);
  },[name]);

  return (
    <div>
      <button onClick={() => setName('didi')}>设置姓名</button>
      <button onClick={() => setAge('20')}>设置年龄</button>
      <p>当前姓名: {name}</p>
      <p>当前年龄: {age}</p>
    </div>
  )
}

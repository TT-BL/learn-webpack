import { useState } from 'react';

export default () => {
  const [name, setName] = useState('');
  return (    
    <div>
      Setting 内容
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>当前姓名: {name}</p>
    </div>
  )
}

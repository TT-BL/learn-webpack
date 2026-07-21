// import './style.css';  // 测试 css-loader
// import {formatDate} from './utils/index.js'; 
// import _ from 'lodash'

// const app = document.createElement('div');
// app.innerHTML = 'Hello Webpack';
// document.body.appendChild(app);

// const today = formatDate('2026-07-15')
// console.log(today);

// console.log(_.head([1,2,3]));
import React from 'react'
import { createRoot } from 'react-dom/client'

const Dashboard = React.lazy(() => import('./pages/Dashboard.jsx'))
const Setttings = React.lazy(() => import('./pages/Setting.jsx'))

function App() {
  const [page, setPage] = React.useState('dashboard')
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      { page === 'dashboard' ? <Dashboard /> : <Setttings />}
      <button onClick={()=>setPage('settings')}>切到Setttings</button>
    </React.Suspense>
  )
}

createRoot(document.getElementById('app')).render(<App />)
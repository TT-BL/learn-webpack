import './style.css';  // 测试 css-loader

import { format } from './utils/math.js'
console.log(format(1000000))

import {add} from './utils/shake.js'
console.log(add(19999,34));
console.log(add(1,2));

import testA from './utils/testA.js'
testA()


import React from 'react'
import { createRoot } from 'react-dom/client'

const Dashboard = React.lazy(() => import('./pages/Dashboard.jsx'))
const Settings = React.lazy(() => import('./pages/Setting.jsx'))
import PageSwitcher from './components/PageSwitcher.jsx'
import UserList from './pages/UserList1.jsx'

function App() {
  const [page, setPage] = React.useState('Dashboard')
  return (
    // <React.Suspense fallback={<div>Loading...</div>}>
    //   { page === 'Dashboard' ? <Dashboard /> : <Settings />}
    //   <PageSwitcher componentsName={['Dashboard', 'Settings']} onPageChange={setPage} />
    //   <UserList />
    // </React.Suspense>
    <UserList />

  )
}

createRoot(document.getElementById('app')).render(<App />)
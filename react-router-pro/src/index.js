import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import reportWebVitals from './reportWebVitals'
import { RouterProvider } from 'react-router-dom'

// 1.导入router实例对象
import router from './router'

const root = ReactDOM.createRoot(
	document.getElementById('root')
)
root.render(
	<React.StrictMode>
		{/* 2.将router实例对象传递给RouterProvider组件 */}
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
)

reportWebVitals()

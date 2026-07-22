import {
	createBrowserRouter,
	createHashRouter
} from 'react-router-dom'
import Article from '../page/Article'
import Login from '../page/Login'
import Layout from '../page/Layout'
import About from '../page/About'
import Board from '../page/Board'
import NotFound from '../page/Notfound'

const router = createHashRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				// 设置默认二级路由
				index: true,
				element: <About />
			},
			{
				path: '/board',
				element: <Board />
			}
		]
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/article/:id/:name',
		element: <Article />
	},
	{
		path: '*',
		element: <NotFound />
	}
])

export default router

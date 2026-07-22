import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
	const navigate = useNavigate()
	return (
		<div>
			登录页
			{/* 声明式 */}
			<Link to='/article'>跳转到文章页</Link>
			{/* 命令式写法 */}
			<button onClick={() => navigate('/article')}>
				跳转到文章页
			</button>
			<button
				onClick={() =>
					navigate('/article?name=jack&age=18')
				}>
				searchParams传参
			</button>
			<button
				onClick={() => navigate('/article/10001/ldj')}>
				params传参
			</button>
		</div>
	)
}
export default Login

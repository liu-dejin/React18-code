import {
	useParams,
	useSearchParams
} from 'react-router-dom'

const Article = () => {
	// const [params] = useSearchParams()
	// const age = params.get('age')
	// const name = params.get('name')
	const params = useParams()
	const id = params.id
	const name = params.name
	return (
		<div>
			<h1>文章页{id}</h1>
			<h2>文章页{name}</h2>
		</div>
	)
}
export default Article

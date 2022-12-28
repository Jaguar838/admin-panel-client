import { FC } from 'react'
import Layout from '@/ui/Layout/Layout'
import Heading from '@/ui/heading/Heading'
import Table from '@/ui/table/Table'
import Button from '@/ui/Button/Button'
import { useMovie } from './useMovie'

const MovieList: FC = () => {
	const {create, mutate, isLoading,  response } = useMovie()

	return (
		<Layout title='Movie list'>
			<div className='flex-center-between relative'>
				<Heading isMargin={false}>Movie list</Heading>
				<Button onClick={() => create()}>Create movie</Button>
			</div>
			<Table items={response?.data.length ? response.data.map(movie => ({
				id: movie.id,
				name: movie.name,
				img: movie.poster,
				viewLink: `/movie/${movie.id}`,
				editLink: `/manage/movies/edit/${movie.id}`,
				removeHandler: () => mutate(movie.id)
			})) : []}
						 isLoading={isLoading} />
		</Layout>
	)
}
export default MovieList

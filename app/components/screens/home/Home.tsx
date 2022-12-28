import { FC } from 'react'
import { IHome } from './home.interface'
import Layout from '@/ui/Layout/Layout'
import MovieItem from '@/ui/movie-item/MovieItem'
import css from './Home.module.scss'

const Home: FC<IHome> = ({ newMovies }) => {
	// @ts-ignore
	return <Layout title='Cinema'>
		<h1 className={css.heading}>Newest movies</h1>
		<div className={css.catalog}>
			{newMovies.length ? (newMovies.map((movie) => <MovieItem movie={movie} key={movie.id} />)) : (
				<div>Movies not found</div>)}
		</div>
	</Layout>
}
export default Home

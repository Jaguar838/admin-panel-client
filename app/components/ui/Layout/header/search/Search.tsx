import { FC } from 'react'
import css from './Search.module.scss'
import Field from '@/ui/Field/Field'
import { BiSearch } from 'react-icons/bi'
import MovieItem from '@/ui/movie-item/MovieItem'
import { useSearch } from '@/ui/Layout/header/search/useSearch'
import { motion } from 'framer-motion'
import { authFormAnimation } from '@/utils/animation/fade'

const Search: FC = () => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch()
	return (
		<motion.div className={css.search}>
			<label htmlFor=''>
				<Field
					placeholder='Search videos...'
					value={searchTerm}
					onChange={handleSearch}
					Icon={BiSearch} />
			</label>
			{isSuccess && (
				<motion.div
					initial={false}
					animate={isSuccess ? 'open' : 'closed'}
					variants={authFormAnimation}
					className={css.result}>
					{data?.length ? (
						data.map(movie => <MovieItem movie={movie} key={movie.id} />)
					) : (
						<div>Movies not found!</div>
					)}
				</motion.div>
			)}
		</motion.div>
	)
}
export default Search
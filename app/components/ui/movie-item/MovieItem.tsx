import Image from 'next/image'
import { FC } from 'react'
import { IMovie } from '@/shared/interfaces/movie.interface'
import Link from 'next/link'
import css from './MovieItem.module.scss'
import clsx from 'clsx'


const MovieItem: FC<{ movie: IMovie, variant?: 'sm' | 'md' }> = ({ movie, variant = 'md' }) => {
	return (
		<Link href={`/movie/${movie.id}`}>
			<div className={clsx(css.item, {
				[css.small]: variant === 'sm'
			})}>
				{movie.rating &&
				<div className={css.rating}>
					{movie.rating.toFixed(1)}
				</div>
				}
				<div className={css.poster}>
					<Image src={movie.poster} alt={movie.name} width={220} height={330} layout='responsive' />
				</div>
				<p className={css.heading}>{movie.name}</p>
			</div>
		</Link>)
}
export default MovieItem
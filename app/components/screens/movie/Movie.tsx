import { FC, useEffect } from 'react'
import css from '@/screens/movie/Movie.module.scss'
import Layout from '@/ui/Layout/Layout'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { MovieService } from '../../../../service/movie.service'
import Image from 'next/image'
import Reviews from '@/screens/movie/reviews/Reviews'
import { ViewsService } from '../../../../service/views.service'

const Movie: FC = () => {
	const { query } = useRouter()
	const movieId = Number(query?.id)

	const {
		data: movie,
		isLoading
	} = useQuery(['get movie', query?.id], () => MovieService.getMovieById(movieId),
		{
			enabled: !!movieId,
			select: ({ data }) => data
		})
	// TODO:  Update views
	const {mutateAsync} =useMutation(['update count opened'], ()=> ViewsService.updateViews(movieId.toString()))
	useEffect(()=>{
		if(movieId)
		mutateAsync()
	},[movieId])

	// @ts-ignore
	return <Layout title={`${movie?.name} - Cinema`}>
		<div className={css.wrapper}>
			{movie?.poster && (
				<div className={css.poster}>
					<Image className={css.img} src={movie?.poster || ''} alt={movie?.name} width={220} height={330}
								 layout='responsive' />
				</div>)}
			<div className={css.detail}><
				h1 className={css.heading}>{movie?.name}</h1>
				<div className={css.rating}>{movie?.rating?.toFixed(1)}</div>
				<div className={css.title}>About movie</div>
				<ul>
					<li>
						<span>Сборы в мире</span>
						<span>$ {movie?.fees.toLocaleString()}</span>
					</li>
				</ul>
				<Reviews movieId={movieId} reviews={movie?.reviews || []} isLoading={isLoading} />
			</div>

		</div>
	</Layout>
}

export default Movie
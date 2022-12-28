import { FC } from 'react'
import { useAuth } from '@/hooks/useAuth'
import AddReviewForm from '@/screens/movie/reviews/add-reviews-form/AddReviewForm'
import { IReviews } from '@/screens/movie/reviews/reviews.interface'
import css from './Reviews.module.scss'
import ReviewsItem from '@/screens/movie/reviews/ReviewsItem'
import Loader from '@/ui/Loader'

const Reviews: FC<IReviews> = ({ movieId, reviews, isLoading }) => {

	const { user } = useAuth()

	return (
		<div className='mt-10'>
			<div>
				{user && <AddReviewForm movieId={movieId} />}
			</div>
					{isLoading ? ( <Loader count={4} />): reviews?.length ? (
				<div className={css.grid}>
					{ reviews.map(review => (<ReviewsItem review={review} key={review.id} />))}
				</div>
					) : (<p>Reviews not found!</p>)
			}
		</div>
	)
}
export default Reviews
import { FC } from 'react'
import Layout from '@/ui/Layout/Layout'
import Heading from '@/ui/heading/Heading'
import Table from '@/ui/table/Table'
import { useReviews } from './useReviews'

const ReviewsList: FC = () => {
	const { mutate, isLoading, response } = useReviews()

	return (
		<Layout title='Review list'>
			<div className='flex-center-between relative'>
				<Heading isMargin={false}>Review list</Heading>
			</div>
			<Table items={response?.data.length ? response.data.map(review => ({
				id: review.id,
				name: review.description,
				img: review.movie.poster,
				viewLink: `/review/${review.id}`,
				removeHandler: () => mutate(review.id)
			})) : []}
						 isLoading={isLoading} />
		</Layout>
	)
}
export default ReviewsList
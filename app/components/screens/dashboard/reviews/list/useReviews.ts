import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { ReviewService } from '../../../../../../service/review.service'

export const useReviews = () => {
	const { data: response, isLoading } = useQuery(['get all reviews'], () => ReviewService.getAll())

	const queryClient = useQueryClient()

	const { mutate } = useMutation(['remove review'], (id: number) => ReviewService.deleteReview(id), {
		onSuccess() {
			queryClient.invalidateQueries(['get all reviews']).then()
		}
	})

	return {
		response,
		isLoading,
		mutate
	}
}
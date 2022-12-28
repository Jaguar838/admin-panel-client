import { IReview, IReviewDto } from '@/shared/interfaces/review.interface'
import interceptor from '../api/interceptor'

export const ReviewService = {

	// endpoint create review
	async createReview(body: IReviewDto) {
		return interceptor.post<IReview>('/review', body)
	},
// endpoint get ById review
	async getReviewById(id: number) {
		return interceptor.get<IReview>(`/review/${id}`)
	},
// endpoint getAll review
	getAll: async function() {
		return interceptor.get<IReview[]>('/review')
	},
// endpoint delete review
	async deleteReview(id: number) {
		return interceptor.delete(`/review/${id}`)
	}
}
import { axiosClassic } from '../api/interceptor'

export const ViewsService ={

	// endpoint update views
	async updateViews(movieId: string) {
		return axiosClassic.patch(`/views/update/${movieId}`)
	},

}
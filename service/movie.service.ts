import interceptor, { axiosClassic } from '../api/interceptor'
import { IMovie, IMovieDto } from '@/shared/interfaces/movie.interface'
import { AxiosResponse } from 'axios'


export let MovieService: {
	createMovie(): Promise<AxiosResponse<number>>;
	getMovieById(id: number): Promise<AxiosResponse<IMovie>>;
	getAll(searchTerm?: string): Promise<AxiosResponse<IMovie[]>>;
	updateMovie(id: number, body: IMovieDto): Promise<AxiosResponse<IMovie>>;
	deleteMovie(id: number): Promise<AxiosResponse>;
}

MovieService = {

	async getMovieById(id: number) {
		return axiosClassic.get<IMovie>(`/movie/${id}`)
	},

	getAll: async function(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>('/movie', { params: searchTerm ? { searchTerm } : {} })
	},

	async createMovie() {
		return interceptor.post<number>('/movie')
	},

	async updateMovie(id: number, body: IMovieDto) {
		return interceptor.put<IMovie>(`/movie/${id}`, body)
	},

	async deleteMovie(id: number) {
		return interceptor.delete(`/movie/${id}`)
	}
}
import { useMutation, useQuery } from '@tanstack/react-query'
import { MovieService } from '../../../../../../service/movie.service'
import { IMovieDto } from '@/shared/interfaces/movie.interface'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

export const useMovieEdit = () => {

	const { query, push } = useRouter()
	const movieId = Number(query.id)
	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		setValue
	} = useForm<IMovieDto>({
		mode: 'onChange'
	})
	const { isLoading } = useQuery(
		['get movie by id', movieId],
		() => MovieService.getMovieById(movieId), {
			onSuccess: ({ data }) => {
				setValue('name', data.name)
				setValue('fees', data.fees)
				setValue('poster', data.poster)
			},
			enabled: !!movieId
		}
	)

	const { mutate } = useMutation(['update movie', movieId], (data: IMovieDto) => MovieService.updateMovie(movieId, data))

	const onSubmit: SubmitHandler<IMovieDto> = (data) => {
		mutate(data)
		{
			push('/manage/movies')
		}
	}

	return {
		register, errors, control, handleSubmit,
		isLoading,
		onSubmit

	}
}
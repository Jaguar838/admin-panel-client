import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IReviewDto } from '@/shared/interfaces/review.interface'
import { useMutation } from '@tanstack/react-query'
import { ReviewService } from '../../../../../../service/review.service'
import css from './AddReviewForm.module.scss'
import Field from '@/ui/Field/Field'
import { queryClient } from '../../../../../../pages/_app'

const AddReviewForm: FC<{ movieId: number }> = ({ movieId }) => {
	const { register, formState: { errors }, handleSubmit, reset } = useForm<IReviewDto>({ mode: 'onChange' })

	const { mutateAsync } = useMutation(
		['add review'],
		(data: IReviewDto) => ReviewService.createReview({ ...data, movieId }),
		{
			async onSuccess() {
				reset()
				await queryClient.invalidateQueries(['get movie', movieId.toString()])
				debugger
			}
		}
	)

	const onSubmit: SubmitHandler<IReviewDto> = async (data) => {
		await mutateAsync(data)
	}
	return (
		<form className={css.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={css.description}>
				<Field
					{...register('description', { required: 'Description is required' })}
					placeholder='Add a public review'
					error={errors.description} />

				<button className={css.button}>
					Send!
				</button>


			</div>
		</form>
	)
}
export default AddReviewForm
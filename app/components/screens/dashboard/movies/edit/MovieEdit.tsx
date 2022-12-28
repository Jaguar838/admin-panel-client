import { FC } from 'react'
import Layout from '@/ui/Layout/Layout'
import { Controller } from 'react-hook-form'
import Heading from '@/ui/heading/Heading'
import Loader from '@/ui/Loader'
import Field from '@/ui/Field/Field'
import UploadField from '@/ui/UploadField/UploadField'
import Button from '@/ui/Button/Button'
import { IMediaResponse } from '../../../../../../service/media.service'
import { useMovieEdit } from '@/screens/dashboard/movies/edit/useMovieEdit'


const MovieEdit: FC = () => {

	const {
		register, errors, control, handleSubmit,
		isLoading,
		onSubmit
	} = useMovieEdit()


	return (
		<Layout title='Movie edit'>
			<Heading>Edit movie</Heading>
			{isLoading ? (<Loader count={4} />) : (
				<form onSubmit={handleSubmit(onSubmit)} className='w-1/3'>
					<Field
						{...register('name', {
							required: 'Name is required'
						})}
						placeholder='Name'
						error={errors.name}
					/>
					<Field
						{...register('fees', {
							required: 'Fees is required',
							valueAsNumber: true
						})}
						type='number'
						placeholder='Fees($)'
						error={errors.fees}
					/>
					<div className='my-8'>
						<Controller
							control={control}
							name='poster'
							render={({ field: { onChange, value } }) => (
								<UploadField
									folder='posters'
									onChange={(value: IMediaResponse) => {
										onChange(value.url)
									}}
									value={value}
								/>
							)}
						/>
					</div>
					<Button>Save</Button>
				</form>)}
		</Layout>
	)
}
export default MovieEdit

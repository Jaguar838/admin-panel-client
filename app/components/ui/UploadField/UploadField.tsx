import { IUploadField } from './upload-field.interface'
import { FC } from 'react'
import { useUploadFile } from '@/ui/UploadField/useUploadFile'
import css from './UploadField.module.scss'

const UploadField: FC<IUploadField> = ({ onChange,
																				 folder, value
																			 }) => {
	const { uploadFile } = useUploadFile(onChange, folder)
	return (
		<div className={css.file}>
			{value && <img src={value} alt='' width='70' className='mb-2 rounded'/>}
			<label className='block'>
				<input type='file' onChange={uploadFile} />
			</label>
		</div>
	)
}
export default UploadField
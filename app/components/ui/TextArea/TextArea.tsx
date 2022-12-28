import css from './TextArea.module.scss'
import { forwardRef } from 'react'
import { ITextArea } from '@/components/ui/TextArea/text-area.interface'

const TextArea=forwardRef<HTMLTextAreaElement, ITextArea>(
	({ error,  style, ...rest }, ref)=>{
		return(
			<div className={css['editor']} style={style}>
				<textarea ref={ref} {...rest} />
				{error && <div className={css.error}>{error.message}</div>}
			</div>
		)
	}
)

TextArea.displayName='TextArea'

export default TextArea
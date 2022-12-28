import { FC } from 'react'
import { IReview } from '@/shared/interfaces/review.interface'
import Image from 'next/image'
import css from './Reviews.module.scss'

const ReviewsItem: FC<{ review: IReview }> = ({ review: { description, user } }) => {
	return (
		<div className={css.item}>
			{user && (
				<div className={css.author}>
				<Image src={user.avatarPath}
								 alt={user.name}
								 width={45}
								 height={45} />
					<div>{user.name}</div>
					<article>{description}</article>
				</div>
				)

			}
		</div>)
}
export default ReviewsItem

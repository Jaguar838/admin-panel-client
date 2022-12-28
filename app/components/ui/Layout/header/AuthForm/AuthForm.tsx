import { FC, useState } from 'react'
import { IAuthFields } from './authForm.interface'
import { useOutside } from '@/hooks/useOutside'
import { useAuth } from '@/hooks/useAuth'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/Button/Button'

import Field from '@/components/ui/Field/Field'
import UserAvatar from '@/components/ui/user-avatar/UserAvatar'
import { FaRegUserCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { authFormAnimation } from '@/utils/animation/fade'
import { AuthService } from '../../../../../../service/auth/auth.service'
import { useMutation } from '@tanstack/react-query'
import { validEmail } from './authForm.constans'
import css from './AuthForm.module.scss'

const AuthForm: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false)

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const { user, setUser } = useAuth()

// запрос post/put на сервер react-query
	const { mutate: loginSync } = useMutation(
		['login'],
		(data: IAuthFields) => AuthService.login(data.email, data.password),
		{
			onSuccess(data) {
				if (setUser) setUser(data.user)
			}
		}
	)

	const { mutate: registerSync } = useMutation(
		['register'],
		(data: IAuthFields) => AuthService.register(data.email, data.password),
		{
			onSuccess(data) {
				if (setUser) setUser(data.user)
				reset()
				setIsShow(false)
			}
		}
	)

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {


		if (type === 'login') loginSync(data)
		else if (type === 'register') registerSync(data)

	}
	return (
		<div className={css.wrapper} ref={ref}>
			{user ? (
				< UserAvatar link='/dashboard' title='Перейти в админку' avatarPath={user.avatarPath || ''} />
			) : (
				<button onClick={() => setIsShow(!isShow)} className={css.button}>
					<FaRegUserCircle />
				</button>)}

			<motion.div initial={false} animate={isShow ? 'open' : 'closed'}
									variants={authFormAnimation}>
				<form className={css.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Please enter a valid email address'
							}
						})}
						placeholder='Email'
						error={errors.email}
						autoComplete='username'
					/>
					<Field
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Min length should more 6 symbols'
							}
						})}
						placeholder='Password'
						error={errors.password}
						type='password'
						autoComplete='current-password'
					/>
					<div className={css.loginButton}>
						<Button onClick={() => setType('login')}>Login</Button>
					</div>
					<button
						className={css.register}
						onClick={() => setType('register')}>Register
					</button>
				</form>
			</motion.div>
		</div>
	)
}

export default AuthForm

// mock login
//     if (type === 'login') setUser({
//       id: 1,
//       email: 'test@test.ua',
//       avatarPath: '/avatar.png',
//       name: 'Vasilije'
//     }) // else if(type==='register')

'use client'
import { useAuth } from '@/hooks/useAuth'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { IUser } from '../../../api/models/User'
import axios from 'axios'
import Cookies from 'js-cookie'
import s from './AuthProvider.module.scss'
import { useActions } from '@/hooks/useActions'

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [loading, setLoading] = useState<boolean>(false)

	const user = useAuth()

	const { setUser } = useActions()

	useEffect(() => {
		const getUser = async () => {
			if (user) {
				return
			}
			try {
				const accessToken = Cookies.get('accessToken')

				if (accessToken) {
					setLoading(true)
					const response = await axios.get('/api/users/')
					const user: IUser = response.data
					setUser(user)
				}
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}
		getUser()
	}, [])

	if (loading) {
		return (
			<div className={s.screen}>
				<div className={s.loader}></div>
			</div>
		)
	} else {
		return <div>{children}</div>
	}
}

export default AuthProvider

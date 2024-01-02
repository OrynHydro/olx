import { useAuth } from '@/hooks/useAuth'
import store from '@/store/store'
import { FC, PropsWithChildren, useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { IUser } from '../../../api/models/User'
import axios from 'axios'
import { setUser } from '@/store/user/userSlice'

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const dispatch = useDispatch()

	useEffect(() => {
		const getUser = async () => {
			try {
				const response = await axios.get('/api/users/')
				const user: IUser = response.data
				dispatch(setUser(user))
			} catch (error) {
				console.log(error)
			}
		}
		getUser()
	}, [])

	return <>{children}</>
}

export default AuthProvider

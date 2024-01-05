import { IUser } from '../../../api/models/User'
import { useTypedSelector } from './useTypedSelector'

interface AuthResponse {
	user?: IUser
}

export const useAuth = () => {
	const authResponse = useTypedSelector(state => state.user) as AuthResponse

	if (authResponse.user) {
		return authResponse.user
	}

	return null
}

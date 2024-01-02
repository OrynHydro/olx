import { useTypedSelector } from './useTypedSelector'

export const useAuth = () => {
	const user = useTypedSelector(state => state.user)

	if (user && 'user' in user) {
		return user.user
	} else if (user) {
		return user
	}
}

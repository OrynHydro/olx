import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../../../api/models/User'

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null as IUser | null,
	},
	reducers: {
		setUser: (state, action: PayloadAction<IUser | null>) => {
			state.user = action.payload as Draft<IUser | null>
		},
	},
})

export const { setUser } = userSlice.actions

export default userSlice.reducer

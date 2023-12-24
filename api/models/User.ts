import mongoose, { Document, Schema } from 'mongoose'

interface IUser extends Document {
	email: string
	password: string
}

// Определение схемы пользователя
const UserSchema: Schema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

const UserModel = mongoose.model<IUser>('User', UserSchema)
export default UserModel

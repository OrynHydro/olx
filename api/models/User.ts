import mongoose, { Document, Schema } from 'mongoose'

export interface IUser extends Document {
	username: string
	email: string
	password: string
}

const UserSchema: Schema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
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

import mongoose, { Document, Schema } from 'mongoose'

const { ObjectId } = mongoose.Schema.Types

export interface IPost extends Document {
	userId: mongoose.Types.ObjectId
	title: string
	category: {
		value: string
		label: string
		data: string
	}
	search?: {
		value: string
		label: string
		data: string
	}
	photos: Array<{
		name: string
		type: string
		size: number
	}>
	desc: string
	price?: number
	sellerType: 'private' | 'business'
	condition: 'utilized' | 'new'
	autoRenew: boolean
	location: string
	sellerName: string
	sellerEmail: string
	sellerPhone: string
}

const PhotoSchema = new Schema(
	{
		name: { type: String, required: true },
		type: { type: String, required: true },
		size: { type: Number, required: true },
	},
	{ _id: false }
)

const PostSchema = new Schema<IPost>({
	userId: { type: ObjectId, required: true, ref: 'User' },
	title: { type: String, required: true },
	category: {
		value: { type: String, required: true },
		label: { type: String, required: true },
		data: { type: String, required: true },
	},
	search: {
		value: { type: String },
		label: { type: String },
		data: { type: String },
	},
	photos: {
		type: [PhotoSchema],
		_id: false,
	},
	desc: { type: String, required: true },
	price: { type: Number },
	sellerType: { type: String, enum: ['private', 'business'], required: true },
	condition: { type: String, enum: ['utilized', 'new'], required: true },
	autoRenew: { type: Boolean, required: true },
	location: { type: String, required: true },
	sellerName: { type: String, required: true },
	sellerEmail: { type: String, required: true },
	sellerPhone: { type: String, required: true },
})

const PostModel = mongoose.model<IPost>('Post', PostSchema)
export default PostModel

import mongoose, { Document, Schema } from 'mongoose'

const { ObjectId } = mongoose.Schema.Types

export interface IPost extends Document {
	userId: mongoose.Types.ObjectId
	title: string
	category: {
		label: string
		data: string
	}
	search?: {
		label: string
		data: string
	}
	photos: string
	desc: string
	price?: number
	location: string
	sellerName: string
	sellerEmail: string
	sellerPhone: string
}

const PostSchema = new Schema<IPost>({
	userId: { type: ObjectId, required: true, ref: 'User' },
	title: { type: String, required: true },
	category: {
		label: { type: String, required: true },
		data: { type: String, required: true },
	},
	search: {
		label: { type: String },
		data: { type: String },
	},
	photos: { type: String, required: true },
	desc: { type: String, required: true },
	price: { type: Number },
	location: { type: String, required: true },
	sellerName: { type: String, required: true },
	sellerEmail: { type: String, required: true },
	sellerPhone: { type: String, required: true },
})

const PostModel = mongoose.model<IPost>('Post', PostSchema)
export default PostModel

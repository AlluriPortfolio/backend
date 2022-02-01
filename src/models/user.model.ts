import mongoose, { Schema, Document, Model } from 'mongoose'

interface User {
  email: string
  firstName: string
  lastName: string
  location: string
  mobile: string
}

interface UserDocument extends Document {
  email: string
  firstName: string
  lastName: string
  location: string
  mobile: string
}

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  mobile: {
    type: String,
    required: false,
  },
})

interface userModelInterface extends Model<UserDocument> {
  set(x: User): UserDocument
}

userSchema.statics.set = (x: User) => {
  return new User(x)
}

const User = mongoose.model<UserDocument, userModelInterface>(
  'User',
  userSchema,
)

User.set({
  email: `some email`,
  firstName: `first name`,
  lastName: `last name`,
  location: `location name`,
  mobile: `some mobile no`,
})

export { User }

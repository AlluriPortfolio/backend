import mongoose, { ConnectOptions } from 'mongoose'

mongoose.connect(
  process.env.MONGODB_URL as string,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  } as ConnectOptions,
  (res) => {
    console.log('Connected to Distribution API Database - Initial Connection')
  },
)

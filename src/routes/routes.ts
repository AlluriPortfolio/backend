import express, { Request, Response } from 'express'
import { User } from '../models/user.model'

const router = express.Router()

// Post Request
router.post('/add', async (req: Request, res: Response) => {
  try {
    const { email, firstName, lastName, location, mobile } = req.body
    const item = User.set({ email, firstName, lastName, location, mobile })
    await item.save()
    return res.status(200).json({
      data: item,
    })
  } catch (error) {
    return res.status(500).json({
      error: error,
    })
  }
})

// Get Request ( All Documents )
router.get('/', async (req: Request, res: Response) => {
  try {
    const item = await User.find({})
    return res.status(200).json({
      data: item,
    })
  } catch (error) {
    return res.status(500).json({
      error: error,
    })
  }
})

// Get Document by using _id
router.get('/:_id', async (req: Request, res: Response) => {
  try {
    const item = await User.findById(req.params._id)
    return res.status(200).json({
      data: item,
    })
  } catch (error) {
    return res.status(500).json({
      error: error,
    })
  }
})

// Update first name in document by using email
router.put('/update', async (req: Request, res: Response) => {
  try {
    const filter = { email: req.body.email }
    const update = { firstName: req.body.firstName }
    const item = await User.updateOne(filter, update, {
      new: true,
    })
    return res.status(200).json({
      data: item,
    })
  } catch (error) {
    return res.status(500).json({
      error: error,
    })
  }
})

// Delete document using email
router.delete('/delete', async (req: Request, res: Response) => {
  try {
    const filter = { email: req.body.email }
    const item = await User.deleteOne(filter)
      .then((data) =>
        res.json({
          data: data,
        }),
      )
      .catch((e) => {
        console.log(e)
      })
  } catch (error) {
    return res.status(500).json({
      error: error,
    })
  }
})

export { router }

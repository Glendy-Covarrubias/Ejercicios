import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export function authenticationController (req: Request, res: Response): void {
  const token = jwt.sign(
    {
      username: req.body.username
    },
    process.env.SECRET_KEY ?? 'Floppy123',
    { expiresIn: '3h' }
  )
  res.status(200).json({ status: 200, message: 'success', data: { token } })
}

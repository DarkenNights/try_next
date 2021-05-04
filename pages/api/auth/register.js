import dbConnectHelper from '../../../helpers/dbConnectHelper'

const User = require('../../../models/User')
const bcrypt = require('bcrypt')
const { registerValidation } = require('../../../validations/authValidation')
import getT from 'next-translate/getT'

const register = async (req, res) => {
  //GET TRANSLATE FUNCTION
  const t = await getT(req.query.__nextLocale, 'auth')

  //VALIDATION
  const { error } = registerValidation(req.body, t)
  if (error) return res.status(400).send(error.details[0].message)

  //CHECKING EMAIL ALREADY EXIST
  const emailExist = await User.findOne({ email: req.body.email })
  if (emailExist) return res.status(400).send(t('auth.email.error.exist'))

  //HASH THE PASSWORD
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  //CREATE USER
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  })

  try {
    await dbConnectHelper()
    const savedUser = await user.save()
    res.status(201).send(savedUser)
  } catch (err) {
    res.status(400).send(err)
  }
}

export default register

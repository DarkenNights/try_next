import connectDB from '../../../middlewares/mongodb';
import User from '../../../models/User';
import bcrypt from 'bcrypt';
import { registerValidation } from '../../../validations/authValidation';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    //VALIDATION
    const { error } = registerValidation(req.body, req.i18n);
    if (error) return res.status(400).send(error.details[0].message);

    //CHECKING EMAIL ALREADY EXIST
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist)
      return res.status(400).send(req.i18n.t('auth.email.error.exist'));

    //HASH THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //CREATE USER
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    try {
      const savedUser = await user.save();
      res.status(201).send(savedUser);
    } catch (err) {
      res.status(400).send(err);
    }
  }
  else {

  }
}

export default connectDB(handler);

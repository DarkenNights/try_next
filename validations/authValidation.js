const joi = require('joi')

const registerValidation = (data, t) => {
  const registerSchema = joi.object({
    name: joi
      .string()
      .min(6)
      .max(255)
      .required()
      .messages({
        'any.required': t('auth.name.error.required'),
        'string.min': t('auth.name.error.min'),
        'string.max': t('auth.name.error.max'),
      }),
    email: joi
      .string()
      .min(6)
      .max(255)
      .required()
      .email()
      .messages({
        'any.required': t('auth.email.error.required'),
        'string.min': t('auth.email.error.min'),
        'string.max': t('auth.email.error.max'),
        'string.email': t('auth.email.error.email'),
      }),
    password: joi
      .string()
      .min(6)
      .max(1024)
      .required()
      .messages({
        'any.required': t('auth.password.error.required'),
        'string.min': t('auth.password.error.min'),
        'string.max': t('auth.password.error.max'),
      }),
  })
  return registerSchema.validate(data)
}

module.exports.registerValidation = registerValidation

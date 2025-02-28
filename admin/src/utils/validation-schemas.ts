import * as yup from 'yup';

const emailValidationSchema = (): yup.StringSchema<string> =>
  yup
    .string()
    .strict()
    .trim()
    .required('*email is required')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      '*email must be a valid email address (e.g., user@example.com)',
    )
    .max(255, '*email cannot be longer than 255 characters')
    .defined();

const passwordValidationSchema = (): yup.StringSchema<string> =>
  yup
    .string()
    .strict()
    .trim()
    .required('*password is required')
    .min(8, '*password must be at least 8 characters long')
    .matches(/[A-Z]/, '*password must contain at least one uppercase letter')
    .matches(/[a-z]/, '*password must contain at least one lowercase letter')
    .matches(/[0-9]/, '*password must contain at least one number')
    .matches(
      /[@$!%*?&]/,
      '*password must contain at least one special character (@, $, !, %, *, ?, &)',
    )
    .max(255, '*password cannot be longer than 255 characters')
    .defined();

export const schemaAuth: yup.ObjectSchema<{ email: string; password: string }> =
  yup.object().shape({
    email: emailValidationSchema(),
    password: passwordValidationSchema(),
  });

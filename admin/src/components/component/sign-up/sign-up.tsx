'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/firebase';
import Button from '@/components/ui/button/button';
import { IAuthData } from 'types/interface';
import { schemaAuth } from 'utils/validation-schemas';
const SignUp = () => {
  const [createUserWithEmail] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaAuth), mode: 'onChange' });

  const onSubmit: SubmitHandler<IAuthData> = async (
    formData: IAuthData,
  ): Promise<void> => {
    await createUserWithEmail(formData.email, formData.password);
    await sendEmailVerification();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign up</h2>
      <label htmlFor="email">Enter email:</label>
      <input
        type="email"
        id="email"
        {...register('email')}
        required
        placeholder="example@gmail.com"
      />
      <p>{errors.email?.message}</p>
      <label htmlFor="password">Enter password:</label>
      <input
        type="password"
        id="password"
        {...register('password')}
        required
        placeholder="example@gmail.com"
      />
      <p>{errors.password?.message}</p>
      <Button btnType="submit">Submit</Button>
    </form>
  );
};

export default SignUp;

'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { auth } from '../../../firebase/firebase';
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from 'react-firebase-hooks/auth';
import Button from '@/components/ui/button/button';
import { IAuthData } from 'types/interface';
import { schema } from 'utils/validation';
const SignUp = () => {
  const [createUser] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const onSubmitData: SubmitHandler<IAuthData> = async (data) => {
    await createUser(data.email, data.password);
    await sendEmailVerification();
  };
  return (
    <form onSubmit={handleSubmit(onSubmitData)}>
      <label htmlFor="email"> Email address:</label>
      <input
        type="email"
        id="email"
        required
        {...register('email')}
        placeholder="example@gmail.com"
      />
      <p>{errors.email?.message}</p>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" required {...register('password')} />
      <p>{errors.password?.message}</p>
      <Button btnType="submit">Submit</Button>
    </form>
  );
};
export default SignUp;

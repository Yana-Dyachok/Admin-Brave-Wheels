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
import InputItem from '@/components/ui/input-item/input-item';
import InputPassword from '@/components/ui/input-password/input-password';

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
      <InputItem
        register={register}
        error={errors.email?.message}
        name="email"
        label="Enter email:"
        placeholder="example@gmail.com"
      />
      <InputPassword register={register} error={errors.password?.message} />
      <Button btnType="submit">Submit</Button>
    </form>
  );
};

export default SignUp;

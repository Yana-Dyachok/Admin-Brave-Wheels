'use client';
import { useActionState } from 'react';
import { useRouter } from 'next/navigation';
import Form from 'next/form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/firebase';
import Button from '@/components/ui/button/button';
import onSubmitAction from '../../../utils/on-submit-action';
import getFirebaseErrorMessage from 'utils/firebase-errors';

const SignIn = () => {
  const route = useRouter();
  const [signInWithEmailAndPassword, user, isLoading, errors] =
    useSignInWithEmailAndPassword(auth);
  const onSubmit = async (state: 'success' | '', formData: FormData) => {
    try {
      const data = await onSubmitAction(formData);
      const response = await signInWithEmailAndPassword(
        data.email,
        data.password,
      );
      if (response?.user) route.push('./');
      return 'success';
    } catch (error) {
      console.log(`Failed to auth, ${error}`);
      return '';
    }
  };
  const [message, formAction] = useActionState(onSubmit, '');
  return (
    <Form action={formAction}>
      <h2>Sign In</h2>
      <label htmlFor="email">Enter email:</label>
      <input
        type="email"
        required
        id="email"
        name="email"
        placeholder="example@gmail.com"
      />
      <label htmlFor="password">Enter password:</label>
      <input type="password" required id="password" name="password" />
      <p>{getFirebaseErrorMessage(errors?.code || '')}</p>
      <p hidden>{`${message} ${user}`}</p>
      <Button btnType="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Submit'}
      </Button>
    </Form>
  );
};

export default SignIn;

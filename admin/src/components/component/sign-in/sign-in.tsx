'use client';
import { useActionState } from 'react';
import { useRouter } from 'next/navigation';
import Form from 'next/form';
import { auth } from '../../../firebase/firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Button from '@/components/ui/button/button';
import onSubmitAction from '../../../utils/on-submit-action';
import getFirebaseErrorMessage from 'utils/firebase-errors';

const SignIn = () => {
  const router = useRouter();
  const [signInUserWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const submitSignInForm = async (
    state: 'success' | '',
    formdata: FormData,
  ): Promise<'success' | ''> => {
    try {
      const userData = await onSubmitAction(formdata);
      await signInUserWithEmailAndPassword(userData.email, userData.password);
      if (user) router.push('./');
      return 'success';
    } catch (err) {
      console.log(`Failed to auth, ${err}`);
      return '';
    }
  };

  const [message, formActive] = useActionState(submitSignInForm, '');

  return (
    <Form action={formActive}>
      <label htmlFor="email">Email address:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="example@gmail.com"
      />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />
      <p className="error">{getFirebaseErrorMessage(error?.code || '')}</p>
      <p hidden>{message}</p>
      <Button btnType="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Submit'}
      </Button>
    </Form>
  );
};

export default SignIn;

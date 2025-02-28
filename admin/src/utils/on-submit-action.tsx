import { IAuthData } from 'types/interface';
const onSubmitAction = async (formdata: FormData): Promise<IAuthData> => {
  return {
    email: formdata.get('email') as string,
    password: formdata.get('password') as string,
  };
};
export default onSubmitAction;

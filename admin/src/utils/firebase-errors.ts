const firebaseErrorMessages: Record<string, string> = {
  'auth/invalid-email': 'Неправильний формат електронної пошти',
  'auth/user-disabled': 'Цей обліковий запис користувача було вимкнено',
  'auth/user-not-found': 'Користувача не знайдено',
  'auth/wrong-password': 'Неправильний пароль',
  'auth/email-already-in-use': 'Ця електронна пошта вже зареєстрована',
  'auth/weak-password': 'Пароль має містити щонайменше 6 символів',
  'auth/invalid-credential': 'Невірна електронна пошта або пароль',
  'auth/too-many-requests': 'Забагато спроб. Спробуйте пізніше.',
  'auth/network-request-failed':
    'Помилка мережі. Перевірте підключення до інтернету.',
  'auth/operation-not-allowed':
    'Ця операція заборонена. Зверніться в службу підтримки.',
  'auth/timeout': 'Час очікування вийшов. Спробуйте ще раз.',
  'auth/missing-email': 'Потрібно вказати електронну пошту.',
  'auth/internal-error': 'Сталася внутрішня помилка. Спробуйте ще раз пізніше.',
};

const getFirebaseErrorMessage = (errorCode: string): string => {
  return errorCode === ''
    ? ''
    : firebaseErrorMessages[errorCode] ||
        'Щось пішло не так. Будь ласка, спробуйте ще раз.';
};

export default getFirebaseErrorMessage;

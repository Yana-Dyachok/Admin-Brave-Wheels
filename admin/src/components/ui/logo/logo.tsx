import Image from 'next/image';
import logoImg from '../../../assets/logo/logo.webp';

const Logo = () => {
  return <Image src={logoImg} alt="logo" width={220} height={40} priority />;
};

export default Logo;

import bannerImg from '../aseets/promo.webp';
import Image from 'next/image';
import Container from './Container';

const HomeBanner = () => {
  return (
    <Container>
      <Image width={1920} height={1080} src={bannerImg} alt="banner image" className="w-full h-full rounded-2xl" />
    </Container>
  );
};

export default HomeBanner;

import { ShowMoreButton } from '@/styles';
import { Container, ProgressInner, ProgressOuter } from './styles';

const Pagination = () => {
  return (
    <Container>
      <ProgressBar />
      <ShowMoreButton>Carregar mais</ShowMoreButton>
    </Container>
  );
};

const ProgressBar = () => {
  return (
    <ProgressOuter>
      <ProgressInner $progress={50} />
    </ProgressOuter>
  );
};

export default Pagination;

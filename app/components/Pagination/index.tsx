import { ShowMoreButton } from '@/styles';
import { Container, ProgressInner, ProgressOuter } from './styles';
import { useAppSelector } from '@/lib/hooks';

interface IPaginationProps {
  limit: number;
  changeLimit: (newLimit: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({ limit, changeLimit }) => {
  const productsPerPage = useAppSelector(
    (state) => state.products.productsPerPage
  );
  const metadata = useAppSelector((state) => state.products.metadata);

  // calc percentage
  const progress = metadata.count
    ? Math.min((metadata.count ? limit / metadata.count : 0) * 100, 100) 
    : 0;

  function handleChangeLimit() {
    const newLimit = limit + productsPerPage;

    if (metadata.hasNextPage) {
      changeLimit(newLimit);
    }
  }

  return (
    <Container>
      <ProgressOuter>
        <ProgressInner $progress={progress} />
      </ProgressOuter>

      <ShowMoreButton
        onClick={handleChangeLimit}
        disabled={!metadata.hasNextPage || limit >= metadata.count}
      >
        {metadata.hasNextPage ? 'Carregar mais' : 'Sem mais produtos'}
      </ShowMoreButton>
    </Container>
  );
};

export default Pagination;

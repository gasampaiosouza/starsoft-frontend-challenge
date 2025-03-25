import ProductInfoContent from '@/components/ProductInfoContent';
import { getProducts } from '@/lib/api';

interface IProductPage {
  params: Promise<{ id: number }>;
}

const ProductPage: React.FC<IProductPage> = async ({ params }) => {
  const { id } = await params;

  // there's no way to get a single product by id, so we have to get all products first
  // i hate doing that, but it's the only way i found to get the current product's info

  // i could first check if the product exists on the global state, but if the user refreshes the page, the product will be gone
  // and i would have to do this request again but on the client side, it's slower.
  // that's why i'm doing this here, just once.

  // if this was real world, i'd do another request on client side to get the metadata count, and change the limit
  // we're not sure if 1000 is enough.
  const products = await getProducts(1000);
  const product = products.data.find((product) => product.id == id);

  return <ProductInfoContent product={product} />;
};

export default ProductPage;

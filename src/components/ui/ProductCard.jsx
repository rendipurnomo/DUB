import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="rounded-xl overflow-hidden shadow-md shadow-light/20 bg-white/20 backdrop-blur-lg p-4 max-w-[200px] text-dark mx-2 h-[300px]">
      <img
        className="aspect-square w-full object-contain object-center bg-white rounded-t-xl"
        src={product.image}
        alt={product.title}
      />
      <div className="bg-white rounded-b-xl px-4 py-2 h-full">
        <h3 className="text-sm font-semibold text-secondary">
          {product.title.length > 30
            ? product.title.substr(0, 30) + '...'
            : product.title.substr(0, 30)}
        </h3>

        <p className="text-secondary font-bold ">${product.price}</p>
        <p className="text-secondary/70 text-sm">
          ⭐ {product.rating.rate} | {product.rating.count} Terjual
        </p>
      </div>
    </Link>
  );
}

export default ProductCard
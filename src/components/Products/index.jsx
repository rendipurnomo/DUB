import React from 'react';
import { useAllProducts } from './useAllProducts';
import Loader from '../ui/Loader';
import Countdown from '../ui/Countdown';
import Flickity from 'react-flickity-component';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';

const flickityOptions = {
  initialIndex: 0,
  pageDots: false,
  groupCells: true,
  contain: true,
};

const Products = ({color}) => {
  const { isLoading, error, products } = useAllProducts();

  return (
    <div className="px-4 md:px-14 mt-4">
      <div className="flex flex-col gap-4 items-start mb-8">
          <h1 className="text-2xl md:text-3xl font-bold font-tourney">
            Traktiran pengguna <span className="text-primary">baru</span>
          </h1>
        <div className="flex gap-2 items-center text-xs md:text-base justify-between w-full flex-wrap">
          <div className="flex gap-2 items-center flex-wrap">
            <p>Berakhir dalam</p>
            <Countdown bulan={12} tanggal={30} classname={'p-2'} />
          </div>
          <Link
            to="/products"
            className="text-green-500 font-bold hover:text-green-600">
            Lihat semua
          </Link>
        </div>
      </div>
      {isLoading && <Loader />}
      {error && <p>Error: {error.message}</p>}
      {products && (
        <div className="py-4 border-b-[1px] border-light/20">
          <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            <div className={`w-[300px] h-[300px] rounded-l-2xl bg-${color}-500 flex flex-col justify-center items-center gap-4`}>
              <h3 className="font-bold text-2xl text-dark">Belanja Pertama</h3>
              <h1 className="font-bold text-5xl text-dark flex gap-2 items-center">
                <span className="text-lg">Rp</span>100
                <span className="text-lg">Ribu*</span>
              </h1>
              <p className="text-dark text-xs font-bold bg-light px-4 py-2 rounded-full">
                Check Promo
              </p>
              <p className="text-dark text-xs">*Syarat & ketentuan berlaku</p>
            </div>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Flickity>
        </div>
      )}
    </div>
  );
};

export default Products;

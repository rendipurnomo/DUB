import React, { useState } from "react";
import { useProduct } from "./useProduct";
import { useLocation } from "react-router-dom";
import Countdown from "../ui/Countdown";
import { Minus, PencilSimple, Plus } from "@phosphor-icons/react";

const Product = () => {
  const id = useLocation().pathname.split("/")[2];
  const { data, isLoading, error } = useProduct({ id });

  const [quantity, setQuantity] = useState(1);
  const stock = 5;

  const handlePrev = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  const handleNext = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }
  return (
    <div className="p-14">
      {data && (
        <div className="flex flex-col md:flex-row justify-between gap-4">

        <div className="md:w-4/12 flex flex-col items-center gap-4">
            {isLoading && <Loader />}
            {error && <p>Error: {error.message}</p>}
          <h1 className="text-base font-bold">{data.title}</h1>
          <div className="max-h-[300px] max-w-[300px] bg-light rounded-xl flex items-center justify-center">
          <img className="object-contain aspect-square max-w-[300px] rounded-lg" src={data.image} alt={data.title} />
          </div>
          <div className="flex gap-2">
              <img className="h-12 w-12 rounded-md" src="https://source.unsplash.com/random" alt="" />
              <img className="h-12 w-12 rounded-md" src="https://source.unsplash.com/random" alt="" />
              <img className="h-12 w-12 rounded-md" src="https://source.unsplash.com/random" alt="" />
              <img className="h-12 w-12 rounded-md" src="https://source.unsplash.com/random" alt="" />
          </div>
        </div>
        <div className="md:w-4/12">
            <p>Kondisi: <span className="font-bold">Baru</span></p>
            <p className="mb-5">Min Order: <span className="font-bold">1</span></p>
            <p>Description</p>
            <p className="font-thin">{data.description.substr(0, 100)}...</p>
            <button onClick={()=>{}} className="text-primary">Selengkapnya</button>
        </div>
        <div className="md:w-4/12">
          <div className="bg-gradient-to-r from-red-500 to-primary p-4 rounded-lg flex gap-4 justify-between items-center mb-5">
            <div className="flex gap-2 flex-col justify-center">
            <p className="font-bold">Khusus pengguna baru</p>
            <div className="flex gap-2 items-center justify-center">
              <div className="w-2/4 h-1 bg-light rounded-full"/>
              <p className="text-xs">Terjual habis</p>
            </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <span className="text-xs">Berakhir dalam</span>
              <Countdown bulan={12} tanggal={30} classname='text-xs p-[2px]' />
            </div>
          </div>
          <div className="border-[1px] border-light/20 p-4 rounded-lg space-y-4">
            <h1 className="font-bold">Atur jumlah dan catatan</h1>
            <div className="flex gap-4 items-center">
              <div className="flex gap-2 items-center">
              <button onClick={handlePrev} className="border-[1px] border-light/20 px-2 rounded-md flex justify-center items-center h-8"><Minus className={`${quantity == 1 ? 'cursor-not-allowed text-light/20' : "cursor-pointer"}`} size={24} /></button>
              <p>{quantity}</p>
            <button onClick={handleNext} className="border-[1px] border-light/20 px-2 rounded-md flex justify-center items-center h-8"><Plus className={`${quantity == stock ? 'cursor-not-allowed text-light/20' : "cursor-pointer"}`} size={24} /></button>
              </div>
              <p className="font-bold">Stock total: <span className="text-primary">{stock}</span></p>
            </div>
            <p>Max. Pemesanan : <span className="text-primary">{stock}</span></p>
            <div className="flex gap-2 items-center">
            <PencilSimple className="text-primary" size={20} />
              <p>Tambah Catatan</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
              <p>Subtotal:</p>
              <p className="font-bold">Rp. {data.price * quantity}</p>
              </div>
              <button className="w-full  p-2 rounded-md bg-primary font-bold text-secondary">Beli Sekarang</button>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Product;

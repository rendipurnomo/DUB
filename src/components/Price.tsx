interface Props {
  amount: number;
  className?: string;
}

const Price = ({ amount, className }: Props) => {
  const priceFormat = new Number(amount).toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  });
  return <span className={`${className}`}>{priceFormat}</span>;
};

export default Price;

import type { Metadata } from 'next';

interface ProductsProps {
  params: {
    id: string;
  };
}

export async function generateMetadate({ params }) {
  return {
    title: params.id,
  };
}

export function skeletonProduct() {
  return (
    <Style.SkeletonProduct></Style.SkeletonProduct>
  )
}

export default async function Product({ params }: ProductsProps) {
  return <h1>product: {params.id}</h1>;
}

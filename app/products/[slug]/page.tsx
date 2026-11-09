import { Site } from "@/components/site";
import { products } from "@/lib/catalog";
import { notFound } from "next/navigation";
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(p => p.id === slug);
  if (!product) notFound();
  return <Site page="product" productId={product.id} />;
}

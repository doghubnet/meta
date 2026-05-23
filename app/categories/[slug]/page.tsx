import { notFound } from 'next/navigation';
import { categories } from '@/lib/data';

export async function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <div className='card'>
      <h1 className='text-2xl font-bold'>{category.name}</h1>
      <p className='mt-2'>Category details, criteria, nominees, and voting rules.</p>
    </div>
  );
}

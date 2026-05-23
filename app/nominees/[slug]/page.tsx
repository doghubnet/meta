import { notFound } from 'next/navigation';

const demoNomineeSlugs = ['abeba-story-lab', 'addis-health-voice', 'ethiotech-youth'];

export async function generateStaticParams() {
  return demoNomineeSlugs.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!demoNomineeSlugs.includes(slug)) {
    notFound();
  }

  return (
    <div className='card'>
      <h1 className='text-2xl font-bold capitalize'>{slug.replaceAll('-', ' ')}</h1>
      <p>Nominee detail, vote button, share links, and related nominees.</p>
    </div>
  );
}

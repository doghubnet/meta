import { disclaimer, platformNote } from '@/lib/data';
export default function Page(){return <div className='space-y-3'><h1 className='text-3xl font-bold'>Terms</h1><p>By using this platform, you agree to provide accurate nomination and voting information and avoid manipulation.</p><p>{disclaimer}</p><p>{platformNote}</p></div>}

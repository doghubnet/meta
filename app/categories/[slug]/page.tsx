import { categories } from '@/lib/data';
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params; const c=categories.find(x=>x.slug===slug); return <div className='card'><h1 className='text-2xl font-bold'>{c?.name}</h1><p className='mt-2'>Category details, criteria, nominees, and voting rules.</p></div>}

import { disclaimer } from '@/lib/data';
export default function Page(){return <div className='space-y-3 card'><h1 className='text-2xl font-bold'>Vote confirmed</h1><p>Thank you for voting. Sharing is optional and does not affect your vote count.</p><p className='text-sm text-slate-300'>{disclaimer}</p></div>}

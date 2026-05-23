import Link from 'next/link';
import { disclaimer, platformNote } from '@/lib/data';

export function AwardLayout({children}:{children:React.ReactNode}){
  return <div className='min-h-screen'>
    <header className='sticky top-0 z-30 border-b border-white/10 bg-slate-950/90 backdrop-blur'><nav className='mx-auto flex max-w-6xl flex-wrap gap-4 p-4 text-sm'><Link href='/'>Home</Link><Link href='/about'>About</Link><Link href='/categories'>Categories</Link><Link href='/nominees'>Nominees</Link><Link href='/nominate'>Nominate</Link><Link href='/results'>Results</Link><Link href='/rules'>Rules</Link><Link href='/faq'>FAQ</Link><Link href='/partners'>Partners</Link></nav></header>
    <main className='mx-auto max-w-6xl p-4'>{children}</main>
    <footer className='mx-auto max-w-6xl border-t border-white/10 p-6 text-sm text-slate-300 space-y-2'><p>{disclaimer}</p><p>{platformNote}</p><div className='flex flex-wrap gap-3'><Link href='/terms'>Terms</Link><Link href='/privacy'>Privacy</Link><Link href='/cookies'>Cookies</Link><Link href='/data-deletion'>Data deletion</Link></div></footer>
  </div>
}

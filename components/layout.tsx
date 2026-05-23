import Link from 'next/link';
import { disclaimer } from '@/lib/data';

export function AwardLayout({children}:{children:React.ReactNode}){
  return <div className='min-h-screen'>
    <header className='sticky top-0 z-30 border-b border-white/10 bg-slate-950/90 backdrop-blur'><nav className='mx-auto flex max-w-6xl gap-4 p-4 text-sm'><Link href='/'>Home</Link><Link href='/categories'>Categories</Link><Link href='/nominees'>Nominees</Link><Link href='/nominate'>Nominate</Link><Link href='/rules'>Rules</Link><Link href='/admin/login'>Admin</Link></nav></header>
    <main className='mx-auto max-w-6xl p-4'>{children}</main>
    <footer className='mx-auto max-w-6xl border-t border-white/10 p-6 text-sm text-slate-300'><p>{disclaimer}</p></footer>
  </div>
}

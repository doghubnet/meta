import './globals.css';
import { AwardLayout } from '@/components/layout';
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body><AwardLayout>{children}</AwardLayout></body></html>}

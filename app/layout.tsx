import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { EmberField } from '@/components/EmberField'
import { IntroGate } from '@/components/IntroGate'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });


const ARC_INTRO_SCRIPT = `(function(){try{
var d=document.documentElement,q=new URLSearchParams(location.search);
var forced=q.get('intro');
var seen=sessionStorage.getItem('arc:intro')==='1';
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var home=location.pathname==='/'||location.pathname==='';
var play=forced!==null?forced!=='0':(!seen&&!reduce&&home);
if(play){d.className+=' arc-intro';}
sessionStorage.setItem('arc:intro','1');
}catch(e){}})();`;

export const metadata: Metadata = {
  title: 'Arcanists | Cybersecurity and Networking Community',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {/* First thing in <body> on purpose: it executes before the browser
            parses any content below it, so nothing ever paints ungated. */}
        <script id="arc-intro-flag" dangerouslySetInnerHTML={{ __html: ARC_INTRO_SCRIPT }} />
        <EmberField />
        <IntroGate />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
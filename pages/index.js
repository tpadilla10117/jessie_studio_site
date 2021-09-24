import Head from 'next/head' //Next.js component

import { Footer, Header } from '../utils';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>letsgosac.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>


      <Footer />

      
    </div>
  )
}

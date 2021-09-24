import Head from 'next/head' //Next.js component

import { Footer, Header } from '../utils';

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>letsgosac.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className="max-w-screen-2xl mx-auto">

      </main>

      
        
      
      <Footer />

      
    </div>
  );
}

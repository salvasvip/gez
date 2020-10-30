import React from 'react';
import Head from 'next/head';
import readMd from '../lib/readMd';

export default function about({ info }) {
  return (
    <>
      <Head>
        <meta property='og:title' content={info.title} key='ogtitle' />
        <meta property='og:description' content={info.meta} key='ogdesc' />
        <title>{info.title} | Gez.la</title>
      </Head>
      <div className='bg-white shadow overflow-hidden rounded-lg mx-8'>
        <div className='px-3 py-3 border-b border-gray-500 mx-3'>
          <h1 className='text-4xl leading-10 font-bold text-gray-900'>
            {info.title}
          </h1>
        </div>
        <div className='bg-gray-50 px-4 pt-2 pb-5 grid grid-cols-1 gap-4 px-6'>
          <span className='text-lg leading-5 font-medium text-gray-900'>
            <div dangerouslySetInnerHTML={{ __html: info.contentHtml }} />
          </span>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const pageData = await readMd(locale, 'info');

  return {
    props: {
      info: pageData
    }
  };
}

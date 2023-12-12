"use client"

import NewsCard from '@/components/NewsCard'
import SearchBar from '@/components/SearchBar'
import { useEffect, useState } from 'react';

export default function Home() {

  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    async function fetchNewsData() {
      try {
        const response = await fetch('/api/newsdata');
        if (response.ok) {
          const data = await response.json();
          setNewsData(data.articles);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching :', error);
      }
    }

    fetchNewsData();
  }, []);


  return (
    <main className='flex flex-col items-center justify-center'>
      <h1 className='flex justify-center mt-10 font-bold text-3xl mb-4'>World News</h1>
      <div className='flex justify-center mt-2 mb-4'>
        <SearchBar />
      </div>
      <div className='flex items-center justify-center'>
        <div className='mt-10 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 md:gap-y-6 gap-y-4 '>

          {
            newsData.map((news, index) => (
              <NewsCard key={index} title={news.title} name={news.source.name} img={news.urlToImage} />
            ))
          }
        </div>
      </div>
    </main>
  )
}

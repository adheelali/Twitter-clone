import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

function Widget({ trendingResults, followResults }) {
  return (
    <div className='hidden lg:inline ml-8 w-[450px] py-1 space-y-5'>
      <div className='sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12 '>
        <SearchIcon className='text-gray-500 h-5 z-50'/>
      </div>
    </div>
  )
}

export default Widget
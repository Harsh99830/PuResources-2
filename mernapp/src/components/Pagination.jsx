import React, { useState } from 'react'
export default function Pagination() {
    const [page, setnbPages] = useState(1)
  return (
    <>
    <div className='pagination_btn'>
      <button onClick={()=>getPrevPage()}>PREV</button>

    <p>{page} of {nbPages}</p>
    
    <button onClick={()=>getNextPage()}>NEXT</button>
    </div>

    </>
  )
}

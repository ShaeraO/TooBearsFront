import React from 'react'
import './pagination.css'


const Pagination = () => {
  return (
    <div className='pagination'>
        <ul>
            <li className='switch prev'><span>&#60;&#60;</span></li>
            <li className='numb active'><span>1</span></li>
            <li className='numb'><span>2</span></li>
            <li className='numb'><span>3</span></li>
            <li className='numb'><span>4</span></li>
            <li className='numb'><span>5</span></li>
            <li className='numb'><span> </span></li>
            <li className='dots'><span>&nbsp;...&nbsp;</span></li>
            <li className='next'><span>55</span></li>
        </ul>
    </div>
  )
}

export default Pagination
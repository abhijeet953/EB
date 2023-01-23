import React from 'react';
import './topBarCareers.css'

const topBarCareers = () => {
  return (
   <>
   <div className="actions">
   <div className="actions__container">
       <input id="search-text" type="text" className="input" placeholder="Filter Jobs"/>
       <select id="filter-by" className="dropdown">
       <option value='byCreated'>Sort by Recently Added</option>
       <option value='alphabetical'>Sort Alphabetically</option>
       </select>
   </div>
</div>
   </>
  )
}

export default topBarCareers
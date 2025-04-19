import React  ,{useEffect}from 'react';
import search from '../../../assets/image/Vector (3).png';
export default function SearchIP({setSearchResult,
    searchInput,
    setSearchInput,
    pageniationData}) {

    useEffect(() => {
        var filterData = pageniationData.filter((item) =>
          item.aip.includes(searchInput.trim())
        );
        setSearchResult(filterData);
      }, [searchInput]);
  return (
    <div className="managerip-searchInput">
    <img src={search} alt="searchbtn" />
    <input
      type="text"
      placeholder="جستجو با شماره آی پی..."
      value={searchInput}
      onChange={(event) => setSearchInput(event.target.value)}
    />
  </div>
  )
}

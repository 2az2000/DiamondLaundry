import React  ,{useEffect}from 'react';
import search from '../../../assets/image/Vector (3).png';
import { getCookie } from '../../../utils/cookie';
import handledFetch from '../../../utils/handledfetch';
export default function CustomerSearch({setSearchResult,data,
    searchInput,
    setSearchInput,           
    pageniationData}) {

      // useEffect(() => {
      //   fetchPageData(currentPage);
      // }, [currentPage]);
      
      
      // const fetchPageData = (page) => {
      //   const myHeaders = new Headers();
      //   myHeaders.append("Authorization", getCookie("accessToken"));
      
      //   const requestOptions = {
      //     method: "GET",
      //     headers: myHeaders,
      //   };
      
      //   handledFetch(`customer/?search=${  searchInput}`, requestOptions, (res) => {
      //     setSearchResult(res.results); 
          
      //   }).catch((error) => toast.error("خطا در دریافت داده‌ها!"));
      // };
      

//         useEffect(()=>{
//     const myHeaders = new Headers();
//     const controller = new AbortController();
//     const signal = controller.signal;
//     myHeaders.append("Authorization" , getCookie('accessToken'))
//     const requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//     signal,
//     };


//     handledFetch(`customer/?search=${searchInput}`,requestOptions,(res)=>{
//       // setSearchResult(res)
//       console.log(res)
     
//     }
        
//     ).then(
//         (res)=>console.log(res)
//     ).catch((error) => {
//       if (error.name === "AbortError") {
//         console.log("aboart");
//       } else {
//         console.log(error);
//       }
//     })
  
//   return () => {
//     controller.abort();
//   };
// },[searchInput])


    useEffect(() => {
        // var filterData = pageniationData.filter((item) =>
        //   item.name.includes(searchInput.trim())
        // );

        // console.log(pageniationData)
        const filtered = data.filter((user) =>
          Object.values(user) 
            .join(' ') 
            .toLowerCase() 
            .includes(searchInput.toLowerCase()) 
        );
        setSearchResult(filtered);
      }, [searchInput]);
  return (
    <div className="managerip-searchInput">
    <img src={search} alt="searchbtn" />
    <input
      type="text"
      placeholder="جستجو با نام..."
      value={searchInput}
      onChange={(event) => setSearchInput(event.target.value)}
    />
  </div>
  )
}









// import React, { useEffect, useState, useCallback } from "react";
// import { debounce } from "lodash";

// export default function CustomerSearch({ setSearchResult, searchInput, setSearchInput }) {
//   const [controller, setController] = useState(null); 


//   const fetchSearchResults = useCallback(
//     debounce((input) => {
   
//       if (controller) {
//         controller.abort();
//       }

   
//       const newController = new AbortController();
//       setController(newController);
   
//       const myHeaders = new Headers();
//       myHeaders.append("Authorization", "your-token");

//       const requestOptions = {
//         method: "GET",
//         headers: myHeaders,
//         signal: newController.signal, 
//       };

  
//       handledFetch(`customer/?search=${input}`,requestOptions,(res)=>{
//         setSearchResult(res)
//         console.log(res)
       
//       }
          
//       ).then(
//           (res)=>console.log(res)
//       ).catch((error) => {
//         if (error.name === "AbortError") {
//           console.log("aboart");
//         } else {
//           console.log(error);
//         }
//       })
//       return () => {
//         controller.abort();
//       };
//     }, 500), 
//     [controller, setSearchResult]
//   );

//   useEffect(() => {
//     if (searchInput.trim() === "") {
//       setSearchResult([]); 
//       return;
//     }

//     fetchSearchResults(searchInput);

    
//     return () => {
//       fetchSearchResults.cancel();
//     };
//   }, [searchInput, fetchSearchResults]);

//   return (
//     <div className="managerip-searchInput">
//       <input
//         type="text"
//         placeholder="جستجو با نام..."
//         value={searchInput}
//         onChange={(e) => setSearchInput(e.target.value)}
//       />
//     </div>
//   );
// }

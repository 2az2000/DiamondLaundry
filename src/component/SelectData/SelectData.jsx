import Select from "react-select";
import { useEffect, useState } from "react";
import handledFetch from "../../utils/handledfetch";
import { getCookie } from "../../utils/cookie";

// import './selectuser.css'
// const options = [
//   { value: "user1", label: "user1" },
//   { value: "user2", label: "user2" },
//   { value: "user3", label: "user3" },
// ];

const SelectData = ({ invoiceData, setInvoiceData }) => {
  // const [options , setOptions]=useState([])

  const [options, setOptions] = useState([]);

  const handleChange = (option) => {
    console.log("f");
    setInvoiceData(option);
  };

  console.log(getCookie("accessToken"));
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getCookie("accessToken"));
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    handledFetch("customer/", requestOptions, (res) => {
      let results = [];
      for (let item of res.results) {
        results.push({
          value: item.id_code,
          label: item.first_name +' '+ item.last_name,
        });
      }
      setOptions([...results]);

      
    })
      .then((res) => console.log(res))
      .catch((error) => {});
  }, []);
  return (
    <Select
      className="selectuser"
      options={options}
      onChange={handleChange}
      placeholder="مشتری:"
      isSearchable={true}
    />
  );
};

export default SelectData;

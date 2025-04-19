import { useEffect, useState } from "react";
import "./editmodal.css";
import AllModal from "../AllModal/AllModal";

import { getCookie } from "../../../utils/cookie";
import UserInfoEdit from "../UserInfoEdit/UserInfoEdit";
import Phone from "../Phone/Phone";
import UserAdressEdit from "../UserAdressEdit/UserAdressEdit";
import EditOrderInformation from "../EditOrderInformation/EditOrderInformation";
import EditCommunication from "../EditCommunication/EditCommunicaation";
import handledFetch from "../../../utils/handledfetch";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";
export default function EditModal({
  idDelete,
  setEditModal,
  idcode,
  setEditData,
  reload,
  setReload,
}) {
  const [Acquaintance, setAcquaintance] = useState([]);
  const [Freight, setFreight] = useState([]);
  const [OrderVolume, setOrderVolume] = useState([]);
  const [TargetProductGroup, setTargetProductGroup] = useState([]);
  const [visitors, setVisitors] = useState([]);
  const [selectedProvince,setSelectedProvince]=useState("")

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    id_code: "",
    ASAN_code: "",
    gender: "",
    visitor: "",
    acquaintance_type: "",
    easycode: "",
    economic_code: "",
    grouping: "",
    province: "",
    city: "",
    postal_code: "",
    address: "",
    phone_number: "",
    target_product_group_type: "",
    freight_type: "",
    telephone_number: "",
    order_volume_type: "",
  });
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  const [communication, setCommunication] = useState([{ name: "", value: "" }]);

  useEffect(() => {
    setIsLoading1(true);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getCookie("accessToken"));
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    handledFetch(`customer/${idcode}`, requestOptions, (res) => {
      setCommunication(res?.additional_infos);
      handleSetForm(res);
      console.log('userInfo',res)
    })
      .then((res) => console.log(res))
      .catch((error) => {})

      .finally(() => setIsLoading1(false));
  }, []);

  useEffect(() => {
    setIsLoading2(true);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getCookie("accessToken"));
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    handledFetch(`LBI/all`, requestOptions, (res) => {
      setAcquaintance(res?.Acquaintance);
      setFreight(res?.Freight);
      setOrderVolume(res?.OrderVolume);
      setTargetProductGroup(res?.TargetProductGroup);
      setVisitors(res?.visitors);
    })
      .then((res) => console.log(res))
      .finally(() => setIsLoading2(false));
  }, []);

  const changeEdit = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getCookie("accessToken"));
    myHeaders.append("Content-Type", "application/json");
    const formData = { ...form, communication };
    const raw = JSON.stringify(formData);

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    handledFetch(`customer/${idcode}/`, requestOptions, (res) => {
      toast.success("با موفقیت تغییرات انجام شد");

      setEditData(res);
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error))

      .finally(() => {setIsLoading2(false);setReload(!reload)});
  };

  // const menue=useRef();
  const handelChange = (event) => {
    const { name, value } = event.target;
    if(name==="province" ){
      
      setSelectedProvince(value)
    }
    setForm((form) => ({ ...form, [name]: value }));
  };
  function handleSetForm(resForm){

    setForm(resForm);
    setForm(form=> ({...form,"visitor":resForm.visitor_id}))
  }

  const handleForm = (event, index) => {
    const { value, name } = event.target;

    setCommunication((prevForms) =>
      prevForms.map((form, i) =>
        i === index ? { ...form, [name]: value } : form
      )
    );
  };
  const AddNewRow = () => {
    setCommunication([...communication, { name: "", value: "" }]);
    // setForm([{...form ,communication:{...form[0].communication , id:form[0].communication.length + 1 }}]);
  };

  const [activeButton, setActiveButton] = useState("show");

  const handeleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      freight_type: form.freight_type,
      ASAN_code: form.ASAN_code,
      first_name: form.first_name,
      last_name: form.last_name,
      id_code: form.id_code,
      gender: form.gender,
      visitor: form.visitor,
      acquaintance_type: form.acquaintance_type,
      easycode: form.easycode,
      economic_code: form.economic_code,
      group: form.group,
      postal_code: form.postal_code,
      phone_number: form.phone_number,
      order_volume_type: form.order_volume_type,
      province: form.province,
      city: form.city,
      postal_code: form.postal_code,
      address: form.address,
      telephone_number: form.telephone_number,
      additional_infos: communication,
    };
    // console.log(formData);
  };

  // fetch(`https://api.example.com/users/${userId}`, {
  //   //     method: "PUT", // یا POST اگر داده جدید اضافه می‌کنید
  //   //     headers: {
  //   //       "Content-Type": "application/json",
  //   //     },
  //   //     body: JSON.stringify(formData),
  //   //   })
  //   //     .then((response) => response.json())
  //   //     .then((data) => {
  //   //       console.log("Data successfully updated:", data);
  //   //       setEditModal(false);
  //   //     })
  //   //     .catch((error) => console.error("Error updating user data:", error));
  //   // };

  return (
    <AllModal setRemove={setEditModal} className1={"addWrapper"}>
      <form onSubmit={handeleSubmit}>
        {isLoading1 && isLoading2 && (
          <div className="loadingOverlay">
            <FadeLoader />
          </div>
        )}
        <div style={activeButton === "show" ? { height: "400px" } : {}}>
          <button
            onClick={() => setActiveButton("show")}
            className={`modalTab ${
              activeButton === "show" ? "selectedTab" : ""
            }`}
          >
            اطلاعات فردی
          </button>
          <button
            onClick={() => setActiveButton("show1")}
            className={`modalTab ${
              activeButton === "show1" ? "selectedTab" : ""
            }`}
          >
            اطلاعات آدرس
          </button>
          <button
            onClick={() => setActiveButton("show2")}
            className={`modalTab ${
              activeButton === "show2" ? "selectedTab" : ""
            }`}
          >
            اطلاعات تماس
          </button>
          <button
            onClick={() => setActiveButton("show3")}
            className={`modalTab ${
              activeButton === "show3" ? "selectedTab" : ""
            }`}
          >
            {" "}
            راه های ارتباطی
          </button>
          <button
            onClick={() => setActiveButton("show4")}
            className={`modalTab ${
              activeButton === "show4" ? "selectedTab" : ""
            }`}
          >
            اطلاعات سفارش
          </button>

          {activeButton === "show" && (
            <UserInfoEdit
              form={form}
              handelChange={handelChange}
              Acquaintance={Acquaintance}
              visitors={visitors}
            />
          )}
          {activeButton === "show1" && (
            <UserAdressEdit form={form} handelChange={handelChange} selectedProvince={selectedProvince} />
          )}

          {activeButton === "show2" && (
            <Phone form={form} handelChange={handelChange} />
          )}
          {activeButton === "show3" && (
            <EditCommunication
              AddNewRow={AddNewRow}
              communication={communication}
              handleForm={handleForm}
              setForm={setForm}
            />
          )}
          {activeButton === "show4" && (
            <EditOrderInformation
              form={form}
              handelChange={handelChange}
              Freight={Freight}
              OrderVolume={OrderVolume}
              TargetProductGroup={TargetProductGroup}
            />
          )}
        </div>

        <div className="edituser-modal-btns">
          <button className="edit-user-btn" type="submit" onClick={changeEdit}>
            اعمال تغییرات
          </button>
          <button
            className="cancel-edit-btn"
            onClick={() => setEditModal(false)}
          >
            انصراف
          </button>
        </div>
      </form>
    </AllModal>
  );
}


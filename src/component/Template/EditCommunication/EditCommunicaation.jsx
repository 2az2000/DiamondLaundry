import React, { useState } from "react";
import TitleManeger from "../TitleManager/TitleManeger";

import { IoIosAddCircle } from "react-icons/io";


export default function EditCommunication({communication ,handleForm ,AddNewRow}) {

  return (
    <div>
      <div className="table-communication-wrapper edit-user-inputs-div">
        <table>
          <thead>
            <tr>
              <th className="th-table-communication">راه ارتباطی</th>
              <th className="th-table-communication">شناسه ارتباطی</th>
            </tr>
          </thead>
          <tbody>
             {  communication.map((item, index) =>   
         
              ( <>
               <tr className="tr-">
                 <td className="td-table-communication">
                   <input
                     type="text"
                     name="name"
                     value={item.name}
                     onChange={(event) => handleForm(event, index)}
                     placeholder="مثال:تلگرام یا نام"
                   />
                 </td>

                 <td className="td-table-communication">
                   <input
                     type="text"
                     name="value"
                     value={item.value}
                     onChange={(event) => handleForm(event, index)}
                     placeholder="مثال:@abc یا 091686"
                   />
                 </td>
               </tr>
              
             </>)
             
             
            )}
          </tbody>
        </table>

        <button className="btn-add-table-communication" onClick={AddNewRow}>
          <IoIosAddCircle /> <span>افزودن راه ارتباطی</span>
        </button>
      </div>
    </div>
  )}




import * as yup from "yup";
const schemaYupPaaword= yup.object().shape({
  // userName: yup.string().required("نام کاربری الزامی می باشد"),
  new_password: yup
    .string()
    .required("پسورد الزامی می باشد")
    .min(5 ,"پسورد باید حداقل ۵ کاراکتر باشد")

    ,
    repeat_new_password: yup
    .string()
    .test("is-required", "تکرار رمز عبور الزامی است", (value) => value !== undefined && value !== "")
    .test(
      "passwords-match",
      "تکرار رمز عبور با رمز عبور یکی نیست",
      function (value) {
        const { new_password } = this.parent; 
        return value === new_password;
      }
    ),

  
})



export default schemaYupPaaword;

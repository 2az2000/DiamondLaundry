import * as yup from "yup";
const schemaYupUserName = yup.object().shape({
  userName: yup.string().required("نام کاربری الزامی می باشد"),
  password: yup.string().required("پسورد الزامی می باشد"),
  // .min(5, "پسورد ضعیف است")
  // .matches(/[a-zA-Z]/, "پسورد باید شامل حروف لاتین باشد")
  // .test(
  //   "has-uppercase",
  //   "پسورد باید حداقل یک حرف بزرگ داشته باشد",
  //   (value) => /[A-Z]/.test(value)
  // )
  // .test("has-number", "پسورد باید حداقل یک عدد داشته باشد", (value) =>
  //   /\d/.test(value)
  // )
  // .test(
  //   "has-symbol",
  //   "پسورد باید حداقل یک نماد ('[!@#$%^&*(),.?:{}|<>]') داشته باشد",
  //   (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value)
  // ),
});

export default schemaYupUserName;

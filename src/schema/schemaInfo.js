import * as yup from "yup";

const schemaYupPaaword = yup.object().shape({
  UserInfo: yup.object().shape({
    first_name: yup.string().required("نام  الزامی می باشد"),
    last_name: yup.string().required("نام خانوادگی الزامی می باشد"),

    id_code: yup
      .string()
      .required("کد ملی را وارد کنید")
      .matches(/^\d{10}$/, "کد ملی باید 10 رقم باشد و فقط شامل اعداد باشد"),
    gender: yup
      .string()
      .oneOf(["زن", "مرد"], "گزینه نامعتبر است")
      .required("انتخاب یک گزینه الزامی است"),
      visitor: yup
      .string()
      .oneOf(["آیتم1", "ایتم2"], "گزینه نامتعبر است")
      .required("انتخاب یک گزینه الزامی است"),
      acquaintance_type: yup
      .string()
      .oneOf(["آیتم1", "ایتم2"], "گزینه نامتعبر است")
      .required("انتخاب یک گزینه الزامی است"),
    easycode: yup.string().required("کد آسان الزامی می باشد"),
    economic_code: yup.string().required("کد اقتصادی الزامی می باشد"),
    grouping: yup
      .string()
      .oneOf(["آیتم1", "ایتم2"], "گزینه نامتعبر است")
      .required("انتخاب یک گزینه الزامی می باشد"),
  }),

  Address: yup.object().shape({
    province: yup
      .string()
      // .oneOf( cities ,'فففف'),
      .required("انتخاب یک استان الزامی می باشد")
      .test("لطفاً یک استان معتبر انتخاب کنید", (value) => value !== "-1"),
    city: yup
      .string()
      .required("انتخاب یک شهر الزامی می باشد")
      .test("لطفاً یک شهر معتبر انتخاب کنید", (value) => value !== "-1"),
      postal_code: yup
      .string()
      .required("نوشتن کد پستی الزامی می باشد")
      // .positive("تعداد باید عددی مثبت باشد.")
      //   .integer("تعداد باید عدد صحیح باشد."),
      // .matches(/^\d{10}$/, '"کدپستی  باید 10 رقم باشد و فقط شامل اعداد باشد"'),

    address: yup.string().required("نوشتن ادرس الزامی می باشد"),
  }),
  Contact: yup.object().shape({
    phone_number: yup
      .string()
      .required("وجود شماره موبایل  الزامی می باشد")
      .matches(
        /^09[1-9]\d{2}[-\s]?\d{3}[-\s]?\d{3}$/,
        "شماره موبایل نامعتبر می باشد"
      ),
      telephone_number: yup
      .string()
      .required("وجود شماره تلفن الزامی می باشد")
      .matches(/^0[2-9]\d{9}$/, "شماره تلفن نامعتبر می باشد"),
  }),
  additonal_infos: yup.array().of(
    yup.object({
      name: yup.string().required("الزامی می باشد"),
    value: yup.string().required("الزامی می باشد"),
    })
  ),

  OrderInformation: yup.object().shape({
     target_product_group_type: yup
      .string()
      .required("الزامی")
      .oneOf(["item1", "item2"], "گزینه نامعتبر است"),
    freight_type: yup
      .string()
      .required("الزامی")
      .oneOf(["item1", "item2"], "گزینه نامعتبر است"),
    order_volume_type: yup
      .string()
      .required("الزامی")
      .oneOf(["item1", "item2"], "گزینه نامعتبر است"),
  }),
});

export default schemaYupPaaword;

import persons from "../assets/image/Icon.png";
import icon1 from '../assets/image/Icon.svg';
import icon2 from '../assets/image/Icon (1).svg';
import icon3 from '../assets/image/Vector (6).svg';
import icon4 from '../assets/image/Vector (7).svg';
import icon5 from '../assets/image/Vector (8).svg';
import icon6 from '../assets/image/Vector (9).svg';
const sidebarItems = [
  {
    id: 1,
    title: "داشبورد",
    icon: persons,
   
  },
  {
    id: 2,
    title: "کاربران",
    icon: icon5,
    children: [
      {
        title: "افزودن کاربر",
        path: "/user/adduser1",
      },
    
      {
        title: "تغییر اطلاعات کاربران",
        path: "/user/adduser3",
      },
      {
        title: " مشاهده اطلاعات کاربران",
        path: "/user/adduser4",
      },
    ],
  },
  {
    id: 3,
    title: "مشتری",
    icon: icon3,
    children: [
      {
        title: "مشاهده اطلاعات مشتری ها",
        path: "customers",
      },
      {
        title: "افزودن مشتری",
        path: "addcustomer"
      },
      // {
      //   title:  "تغییر اطلاعات مشتری",
      //   path: "/customer/adduser2",
      // },
    

    ],
  },
  {
    id: 4,
    title: "فاکتور",
    icon: icon4,
    children: [
      {
        title: "دیدن تمام فاکتورها ",
        path: "invoice",
      },
      {
        title: "ساختن فاکتورجدید",
        path: "createInvoice",
      },
    
     
    ],
  },
  {
    id: 5,
    title: "ال بی آی ها",
    icon: persons,
    children: [
      { title: "ایجاد حجم سفارش", path: "order1" },
      { title: "ایجاد باربری", path: "logistics" },
      { title: "ایجاد گروه کالای هدف", path: "groupobjective" },
      { title: "ایجاد دلیل عدم تخصیص", path: "nonallocation" },
    ],
  },
  {
    id: 6,
    title: "سفارش ها",
    icon: persons,
    children: [
      { title: "پیش سفارش", path: "data" },
 
    ],
  },

  // {
  //   id: 7,
  //   title: "مدیر",
  //   icon: persons,
  //   children: [
  //     { title: "IPمدیریت ", path: "ip" },
     
  //   ],
  // },

  
  {
    id: 7,
    title: "مدیر",
    icon: persons,
    children: [
      { title: "IPمدیریت ", path: "ip" },
     
    ],
  },
];

export default sidebarItems;

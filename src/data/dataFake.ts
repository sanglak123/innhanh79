import { Category } from "@/sp/interfade";
import { Img, InterFade_Partner, Production } from "@/sp/interfade";

export const ArrayImgs: Img[] = [
  { filename: "intro1.jpg", url: "/imgs/intros/intro1.jpg" },
  { filename: "intro2.jpg", url: "/imgs/intros/intro2.jpg" },
  { filename: "intro3.jpg", url: "/imgs/intros/intro3.jpg" },
  { filename: "intro1.jpg", url: "/imgs/intros/intro1.jpg" },
  { filename: "intro2.jpg", url: "/imgs/intros/intro2.jpg" },
  { filename: "intro3.jpg", url: "/imgs/intros/intro3.jpg" },
];

export const Categorys: Category[] = [
  {
    id: 1,
    name: "In Nhanh",
    avatar: "/imgs/categorys/innhanh.jpg",
  },
  {
    id: 2,
    name: "In Quảng Cáo",
    avatar: "/imgs/categorys/inquangcao.jpg",
  },
  {
    id: 3,
    name: "In Bản Vẽ",
    avatar: "/imgs/categorys/inbanve.jpg",
  },
  {
    id: 4,
    name: "Thiết kế - Sáng tạo",
    avatar: "/imgs/categorys/thietkesangtao.jpg",
  },
  {
    id: 4,
    name: "Setup Event",
    avatar: "/imgs/categorys/setupevent.jpg",
  },
];
export const Productions: Production[] = [
  {
    id: 1,
    name: "IN BAO THƯ",
    size: "12 x 22, 17 x 23, 25 x 35",
    quantative: "100 - 120 gsm",
    type_paper: "Fort",
    tag: "In Nhanh, In Offset",
    icon: "/imgs/icons/inbaothu.png",
    Img: {
      filename: "inbaothu.jpg",
      url: "/imgs/products/inbaothu.jpg",
    },
  },
  {
    id: 2,
    name: "IN NAME CARD",
    size: "5.3 x 8.8, 5.3 x 9, 5.5 x 9.2",
    quantative: "250gsm - 350 gsm",
    type_paper: "Fort, Couche, Mỹ Thuật",
    tag: "In Nhanh, In Offset",
    icon: "/imgs/icons/innamecard.png",
    Img: {
      filename: "innamecard.jpg",
      url: "/imgs/products/innamecard.jpg",
    },
  },
  {
    id: 3,
    name: "IN TỜ RƠI",
    size: "A5, A4, A3, SRA3, 13x19",
    quantative: "120gsm - 350 gsm",
    type_paper: "Fort, Couche, Mỹ Thuật",
    tag: "In Nhanh, In Offset",
    icon: "/imgs/icons/intoroi.png",
    Img: {
      filename: "intoroi.jpg",
      url: "/imgs/products/intoroi.jpg",
    },
  },
  {
    id: 4,
    name: "IN MENU",
    size: "A5, A4, A3, SRA3, 13x19",
    quantative: "120gsm - 350 gsm",
    type_paper: "Couche, Mỹ Thuật, Giấy Nhựa",
    tag: "In Nhanh, In Offset, Bấm Kim, Keo Gáy",
    icon: "/imgs/icons/inmenu.png",
    Img: {
      filename: "inmenu.jpg",
      url: "/imgs/products/inmenu.jpg",
    },
  },
  {
    id: 5,
    name: "IN CATALOGUE",
    size: "A4 Đứng , A4 Nằm Ngang , A5",
    quantative: "Bìa, Ruột 150 gsm",
    type_paper: "Fort, Couche, Mỹ Thuật",
    tag: "In Nhanh, In Offset, Bấm Kim, Keo Gáy",
    icon: "/imgs/icons/incatalogue.png",
    Img: {
      filename: "incatalogue.jpg",
      url: "/imgs/products/incatalogue.jpg",
    },
  },
  {
    id: 6,
    name: "IN FOLDER",
    size: "22x31x7",
    quantative: "250 gsm - 300 gsm",
    type_paper: "Fort, Couche, Mỹ Thuật",
    tag: "Màng Bóng, Màng Mờ",
    icon: "/imgs/icons/infolder.png",
    Img: {
      filename: "infolder.jpg",
      url: "/imgs/products/infolder.jpg",
    },
  },
  {
    id: 7,
    name: "IN HÓA ĐƠN",
    size: "14x20, 20x28",
    quantative: "52 gsm - 55 gsm",
    type_paper: "Fort, Carbonless",
    tag: "2, 3, 4 liên, bấm kim, keo gáy",
    icon: "/imgs/icons/inbill.png",
    Img: {
      filename: "inbill.jpg",
      url: "/imgs/products/inbill.jpg",
    },
  },
  {
    id: 8,
    name: "IN TEM DECAL, STICKER",
    size: "tùy chọn",
    quantative: "120 gsm",
    type_paper: "Decal giấy, Nhựa, Trong , Kraft",
    tag: "Cắt bế hình dạng theo yêu cầu",
    icon: "/imgs/icons/insticker.png",
    Img: {
      filename: "insticker.jpg",
      url: "/imgs/products/insticker.jpg",
    },
  },
];

export const Partners: InterFade_Partner[] = [
  {
    name: "BCA",
    avatar: 1,
  },
];

interface Company {
  name: string;
  hotline: string;
  domain: string;
  branch: Branch[];
}
interface Branch {
  name: string;
  email: string;
  phone: string;
  adress: string;
  zalo: string;
  hotline: string;
}
export const Companys_Data: Company = {
  name: "INNHANH79",
  hotline: "0918 196 699",
  domain: "www.innhanh79.com",
  branch: [
    {
      name: "In Nhanh",
      email: "innhanh7979@gmail.com",
      phone: "0888 229 079",
      adress: "43D/10 Hồ Văn Huê P.9 - Q.Phú Nhuận - TP.HCM",
      zalo: "0888 229 079",
      hotline: "0918 196 699",
    },
    {
      name: "In Giá Tốt",
      email: "ingiatot2015@gmail.com",
      phone: "0918 196 699",
      adress: "29BIS Nguyễn Đình Chiểu - P.Đa Kao - Q.1 - TP.HCM",
      zalo: "0918 196 699",
      hotline: "0918 196 699",
    },
  ],
};

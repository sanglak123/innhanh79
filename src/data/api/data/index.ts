import { root_api } from "../config";

export const Data_PL_Api = {
  Load_Data_Pl: async () => {
    await root_api({
      method: "GET",
      url: "/data_public",
    })
      .then((res) => {})
      .catch((err) => {});
  },
};

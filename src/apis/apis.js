import instance from "./config";

const apis = {
  getSummeryInfo: async () => {
    const data = await instance.get("/event_1.json");
    return data;
  },
  getPieChartInfo: async () => {
    const data = await instance.get("/event_3.json");
    return data;
  },
  getTableInfo: async () => {
    const data = await instance.get("/event_4.json");
    return data;
  },
};

export default apis;

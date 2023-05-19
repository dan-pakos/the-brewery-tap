import { getBeerList } from "../../api";
import { Beer } from "../../types";
import handle from "../../utils/error";
import { ApiParams } from "../../types";

const fetchData = (
  params: ApiParams = {},
  setData: (data: Array<Beer>) => void
) => {
  (async () => {
    try {
      const response = await getBeerList(params);
      setData(response.data);
    } catch (error) {
      handle(error);
    }
  })();
};

export { fetchData };

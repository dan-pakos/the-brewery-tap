import { getRandomBeerList } from "../../api";
import { Beer } from "../../types";
import handle from "../../utils/error";

const fetchData = (setData: (data: Array<Beer>) => void) => {
  (async () => {
    try {
      const { data } = await getRandomBeerList(10);
      setData(data);
    } catch (error) {
      handle(error);
    }
  })();
};

const getStorred = (key: string) => {
  let data = null;
  try {
    const storred = localStorage.getItem(key);
    if (storred) {
      data = JSON.parse(storred);
    }
  } catch (err) {
    console.error(err);
  }

  return data;
};

const updateStorred = (key: string, data: any) => {
  try {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};

export { fetchData, getStorred, updateStorred };

//  페이지 나누기 이동

import { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const getNum = (param, defaultValue) => {
  if (!param) return defaultValue;
  return parseInt(param);
};

const useCustomMove = () => {
  const [refresh, setrefresh] = useState(false);
  const navigate = useNavigate();

  // 퀴리스트링 가져오기
  const [queryParams] = useSearchParams();

  // page=1&size=10&genre= 가져오기
  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);
  const genre = getNum(queryParams.get("genre"), 0);
  const keyword = queryParams.get("keyword") || "";

  const queryDefault = createSearchParams({
    page,
    size,
    genre,
    keyword,
  }).toString();

  // ?page=1&size=&genre=&keyword
  // moveToList({page:1, size:20, genre:1, keyword:'자바'})

  const moveToList = (pageParam) => {
    let queryStr = "";

    if (pageParam) {
      const page = getNum(pageParam.page, 1);
      const size = getNum(pageParam.size, 10);
      const genre = getNum(pageParam.genre, 0);
      const keyword = pageParam.keyword || "";

      queryStr = createSearchParams({ page, size, genre, keyword }).toString();
    } else {
      queryStr = queryDefault;
    }

    setrefresh(!refresh);

    navigate({
      pathname: `/`,
      search: queryStr,
    });
  };

  const moveToDetail = (id) => {
    navigate({
      pathname: `/books/${id}`,
      search: queryDefault,
    });
  };
  const moveToEdit = (id) => {
    navigate({
      pathname: `/edit/${id}`,
      search: queryDefault,
    });
  };

  return {
    moveToList,
    moveToDetail,
    moveToEdit,
    page,
    size,
    genre,
    keyword,
    refresh,
  };
};

export default useCustomMove;

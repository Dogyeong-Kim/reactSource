//  페이지 나누기 이동

import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const useCustomMove = () => {
  const navigate = useNavigate();
  // 퀴리스트링 가져오기
  const [queryParams] = useSearchParams();

  // page=1&size=10&genre= 가져오기
  const page = queryParams.get("page", 1);
  const size = queryParams.get("size", 10);
  const genre = queryParams.get("genre", 0);
  const keyword = queryParams.get("keyword", "");

  const queryDefault = createSearchParams({
    page,
    size,
    genre,
    keyword,
  }).toString();

  const moveToList = () => {};
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

  return { moveToList, moveToDetail, moveToEdit, page, size, genre, keyword };
};

export default useCustomMove;

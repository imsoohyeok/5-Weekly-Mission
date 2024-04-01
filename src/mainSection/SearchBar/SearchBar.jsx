import "./SearchBar.css";
import { SearchImage } from "./contain";

export const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input
        className="SearchBar-input"
        type="search"
        placeholder="링크를 검색해 보세요."
      />
      <img
        src={SearchImage}
        alt="검색창 돋보기 아이콘"
        className="SearchBar-icon"
      />
    </div>
  );
};

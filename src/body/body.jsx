import "./body.css";

export const Body = ({ folderInfo, searchBar, cardList }) => {
  return (
    <div className="body">
      {folderInfo}
      <div className="body-items">
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};

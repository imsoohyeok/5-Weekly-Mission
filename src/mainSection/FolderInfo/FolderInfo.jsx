import "./FolderInfo.css";

export const FolderInfo = ({ profileImage, ownerName, folderName }) => {
  return (
    <div className="FolderInfo">
      <img
        className="FolderInfo-profile"
        src={profileImage}
        alt="폴더 소유자 프로필 이미지"
      />
      <span className=".FolderInfo-name">{ownerName}</span>
      <h2 className="FolderInfo-star">{folderName}</h2>
    </div>
  );
};

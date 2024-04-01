import "./colors.css";
import "./reset.css";
import { Layout } from "./layout";
import { Body } from "./body";
import { FolderInfo } from "./mainSection/FolderInfo";
import { SearchBar } from "./mainSection/SearchBar";
import { CardList } from "./mainSection/CardList";
import { CardRead } from "./mainSection/CardRead";
import { useGetFolder } from "./data/useGetFolder";

function App() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <Layout>
      <Body
        folderInfo={
          <FolderInfo
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
          />
        }
        searchBar={<SearchBar />}
        cardList={
          <CardList>
            {links?.map((link) => (
              <CardRead key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
}

export default App;

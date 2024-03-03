import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { fetchImages } from "./seacrh-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMesage from "./components/ErrorMesage/ErrorMesage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [galery, setgalery] = useState([]);
  const [query, setquery] = useState("");
  const [page, setpage] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [modalCard, setmodalCard] = useState(null);
  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getData() {
      try {
        seterror(false);
        setisLoading(true);
        const data = await fetchImages(query, page);
        setgalery((prevstate) => {
          return [...prevstate, ...data];
        });
      } catch (error) {
        seterror(true);
      } finally {
        setisLoading(false);
      }
    }
    getData();
  }, [page, query]);

  const handeSeacrh = (text) => {
    setgalery([]);
    setpage(1);
    setquery(text);
  };
  const handepage = () => {
    setpage(page + 1);
  };

  const handlemodal = (card) => {
    setisModalOpen((prevstate) => {
      return !prevstate;
    });
    if (isModalOpen !== false) {
      return;
    }
    setmodalCard(() => {
      return {
        ...card,
      };
    });
  };
  return (
    <div>
      {modalCard && (
        <ImageModal
          isModalOpen={isModalOpen}
          handlemodal={handlemodal}
          modalCard={modalCard}
        />
      )}

      <SearchBar handeSeacrh={handeSeacrh} toast={toast} />
      {error && <ErrorMesage />}
      <ImageGallery galery={galery} handlemodal={handlemodal} />
      {isLoading && <Loader />}
      {galery.length > 0 && !isLoading && <LoadMoreBtn handepage={handepage} />}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;

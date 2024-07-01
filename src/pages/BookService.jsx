import BookServiceSection from "../components/BookServiceSection";
import { BookServiceArray } from "../data/data";

const BookService = () => {
  return (
    <>
      {BookServiceArray.map(({ id, title, img, dec, toggleColor, rtl }) => (
        <BookServiceSection
          key={id}
          title={title}
          img={img}
          dec={dec}
          toggleColor={toggleColor}
          rtl={rtl}
        />
      ))}
    </>
  );
};

export default BookService;

import { booklist } from "./Data";
import "./Books.css";
function Books() {
  return (
    <section className="booklist">
      {booklist.map((book) => {
        return <Booklist key={book.id} {...book}></Booklist>;
      })}
    </section>
  );
}

const Booklist = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h2>{title}</h2>
      <p>by {author}</p>
    </article>
  );
};
export default Books;

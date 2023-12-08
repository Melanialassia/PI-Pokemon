import './Paginate.css';

const Paginate = ({ setPaginate, totalPages }) => {
  const handlePageClick = (pageNumber) => {
    setPaginate(pageNumber);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav>
      {pages && pages.map((pageNumber) => (
        <button key={pageNumber} onClick={() => handlePageClick(pageNumber)}>
          {pageNumber}
        </button>
      ))}
    </nav>
  );
};

export default Paginate;

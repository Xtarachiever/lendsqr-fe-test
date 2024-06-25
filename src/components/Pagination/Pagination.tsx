
const Pagination = ({
  totalRows,
  rowsPerPage,
  goToPage,
  pageIndex,
  useIncreasedIndex,
}:any) => {
  const noOfPages = Math.ceil(
    (typeof totalRows === "number" ? totalRows : totalRows?.length) /
      rowsPerPage
  );
  const pagesArr =
    noOfPages > 3 ? [...new Array(3)] : [...new Array(noOfPages)];

  return (
    <div className={"styles.paginationArr"}>
      {pagesArr.map((value, index) =>
        useIncreasedIndex ? (
          <button key={index} onClick={() => goToPage(index + 1)}
          className={index === pageIndex ? "styles.activePageNumber" : ''}>
            {index + 1}
          </button>
        ) : (
          <button key={index} onClick={() => goToPage(index)}
          className={index === pageIndex ? "styles.activePageNumber" : ''}
          >
            {index + 1}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;

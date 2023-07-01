
import { Li, Ul } from "./pagination.style";

const range = (start, end) => {
  return [...Array(end - start).keys()].map((el) => el + start);
};

const getPagesCut = ({ pagesCount, pagesCutCount, currentPage }) => {
  const ceiling = Math.ceil(pagesCutCount / 2); //=>pagesCount = 5 => 5/2 = 2
  const floor = Math.floor(pagesCutCount / 2); //=>pagesCount = 5 => 5/2 = 3

  if (pagesCount < pagesCutCount) {
    return { start: 1, end: pagesCount + 1 };
  } else if (currentPage >= 1 && currentPage <= ceiling) {
    return { start: 1, end: pagesCutCount + 1 };
  } else if (currentPage + floor >= pagesCount) {
    return {
      start: pagesCount - pagesCutCount + 1,
      end: pagesCount + 1,
    };
  } else {
    return { start: currentPage - ceiling + 1, end: currentPage + floor + 1 };
  }
};

const PaginationItem = ({ page, currentPage, isDisabled, title, arg,onPageChange }) => {
  // const dispatch = useDispatch();
  // const onPageChangeHandler = (page) => {
  //   if (arg.name) {
  //     dispatch(fetchCategoryProduct({ name: arg.name, page }));
  //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   } else if (arg.id) {
  //     dispatch(fetchComments({ id: arg.id, page }));
  //   }
  // };
  return (
    <Li
      $isDisabled={isDisabled}
      $active={page === currentPage && title === page}
      onClick={() => onPageChange(page)}
    >
      {title}
    </Li>
  );
};

const Pagination = ({
  currentPage,
  onPageChange,
  // total,
  // limit,
  totalPages,
  pagesCutCount,
}) => {
  // const pagesCount = Math.ceil(total / limit);
  const pagesCount = totalPages > 100 ? (totalPages = 100) : totalPages;
  const pagesCut = getPagesCut({ pagesCount, pagesCutCount, currentPage });
  const pages = range(pagesCut.start, pagesCut.end);
  console.log(pages);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;
  return (
    <Ul>
      <PaginationItem
        page={1}
        title="First"
        currentPage={currentPage}
        onPageChange={() => onPageChange(1)}
        isDisabled={isFirstPage}
      />
      <PaginationItem
        page={currentPage - 1}
        title="Prev"
        currentPage={currentPage}
        onPageChange={() => onPageChange(currentPage - 1)}
        isDisabled={isFirstPage}
      />
      {pages.map((page) => (
        <PaginationItem
          page={page}
          title={page}
          key={page}
          currentPage={currentPage}
          onPageChange={() => onPageChange(page)}
        />
      ))}
      <PaginationItem
        page={currentPage + 1}
        title="Next"
        currentPage={currentPage}
        onPageChange={() => onPageChange(currentPage + 1)}
        isDisabled={isLastPage}
      />
      <PaginationItem
        page={pagesCount}
        title="Last"
        currentPage={currentPage}
        onPageChange={() => onPageChange(pagesCount)}
        isDisabled={isLastPage}
      />
    </Ul>
  );
};

export default Pagination;

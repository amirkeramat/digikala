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

const PaginationItem = ({
  page,
  currentPage,
  isDisabled,
  title,
  onPageChange,
}) => {
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
  totalPages,
  pagesCutCount,
  // total,
  // limit,
}) => {
  // const pagesCount = Math.ceil(total / limit);
  const pagesCount = totalPages > 100 ? (totalPages = 100) : totalPages;
  const pagesCut = getPagesCut({ pagesCount, pagesCutCount, currentPage });
  const pages = range(pagesCut.start, pagesCut.end);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;
  return (
    <Ul>
      <PaginationItem
        page={1}
        title="اول"
        currentPage={currentPage}
        onPageChange={() => onPageChange(1)}
        isDisabled={isFirstPage}
      />
      <PaginationItem
        page={currentPage - 1}
        title="قبلی"
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
        title="بعدی"
        currentPage={currentPage}
        onPageChange={() => onPageChange(currentPage + 1)}
        isDisabled={isLastPage}
      />
      <PaginationItem
        page={pagesCount}
        title="آحر"
        currentPage={currentPage}
        onPageChange={() => onPageChange(pagesCount)}
        isDisabled={isLastPage}
      />
    </Ul>
  );
};

export default Pagination;

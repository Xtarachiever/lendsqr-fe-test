import { useState } from "react";
import ReactPaginate from 'react-paginate';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

interface PaginateProps{
    itemsPerPage:number
    items:object[]
}
const PaginatedItems = ({ itemsPerPage,items }:PaginateProps) => {
    const [itemOffset, setItemOffset] = useState(0);
  
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event:any) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<MdKeyboardArrowRight fontSize={'1.5rem'}/>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<MdKeyboardArrowLeft fontSize={'1.5rem'}/>}
          renderOnZeroPageCount={null}
          containerClassName="paginate_container"
          activeLinkClassName="active_link"
          disabledLinkClassName="disabled_link"
        />
      </>
    );
}

export default PaginatedItems
  

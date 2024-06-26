import React, { useEffect, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { BsFilter } from 'react-icons/bs';
import { SplitNumberProps, splitNumberCumulatively } from '../../utilities/Function';
import PaginatedItems from '../Pagination/ReactPaginate';

interface BasicTableProps {
  data: object[];
  columns: any[];
  rowsPerPage?: number;
  setFilterPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  filterPopUp: boolean;
}

const BasicTable: React.FC<BasicTableProps> = ({
  data,
  columns,
  rowsPerPage = 20,
  setFilterPopUp,
  filterPopUp,
}) => {
  const [displayedRowsPerPage, setDisplayedRowsPerPage] = useState(rowsPerPage);
  const [itemOffset, setItemOffset] = useState(0);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      pagination: {
        pageIndex: Math.floor(itemOffset / displayedRowsPerPage),
        pageSize: displayedRowsPerPage,
      },
    },
    initialState: {
      pagination: {
        pageSize: displayedRowsPerPage,
      },
    },
    onPaginationChange: () => {
      const newOffset = table.getState().pagination.pageIndex * table.getState().pagination.pageSize;
      setItemOffset(newOffset);
    },
  });

  const filteredRows = table.getFilteredRowModel().rows;

  useEffect(() => {
    table.setPageSize(displayedRowsPerPage);
  }, [displayedRowsPerPage, table]);

  const splitProps: SplitNumberProps = { number: 500, partSize: 20 };
  const partsArray = splitNumberCumulatively(splitProps);

  return (
    <div className='table-wrapper'>
      <div className='table-div'>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.column.columnDef.header !== 'Actions' ? (
                      header.isPlaceholder ? null : (
                        <div className='header'>
                          <div onClick={header.column.getToggleSortingHandler()}>
                            {flexRender(
                              header.column.columnDef.header as React.ReactNode,
                              header.getContext()
                            )}
                          </div>
                          <span onClick={() => setFilterPopUp(!filterPopUp)}>
                            <BsFilter fontSize={'1.5rem'} />
                          </span>
                        </div>
                      )
                    ) : (
                      <></>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='pagination-wrapper'>
        <div className='pagination'>
          <div className='select-wrapper'>
            <p>Showing</p>
            <div className='select-page'>
              <select
                className=''
                value={displayedRowsPerPage}
                onChange={(e) => {
                  const newSize = Number(e.target.value);
                  setDisplayedRowsPerPage(newSize);
                }}
              >
                {partsArray?.map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </div>
            <p>out of {filteredRows.length}</p>
          </div>
        </div>
        <PaginatedItems
          items={filteredRows}
          itemsPerPage={displayedRowsPerPage}
          // itemOffset={itemOffset}
          setItemOffset={setItemOffset}
        />
      </div>
    </div>
  );
};

export default BasicTable;

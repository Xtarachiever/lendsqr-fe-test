import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
  } from '@tanstack/react-table';
  import { useEffect, useState, Dispatch, SetStateAction } from 'react';
  import { BsFilter } from 'react-icons/bs';
import {splitNumberCumulatively,  SplitNumberProps } from '../../utilities/Function';
import PaginatedItems from '../Pagination/ReactPaginate';

  interface BasicTableProps {
    data: object[];
    columns: any[];
    rowsPerPage?:number;
    setFilterPopUp:Dispatch<SetStateAction<boolean>>;
    filterPopUp: boolean;
  }
  
  export default function BasicTable({ data, columns, rowsPerPage = 20, setFilterPopUp, filterPopUp }: BasicTableProps) {

    const [itemOffset, setItemOffset] = useState(0);

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      // getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      state: {
        pagination: {
          pageIndex: Math.floor(itemOffset / rowsPerPage),
          pageSize: rowsPerPage,
        },
      },
      onPaginationChange: () => {
        const newPaginationState = { pageIndex: Math.floor(itemOffset / rowsPerPage), pageSize: rowsPerPage };
        setItemOffset(newPaginationState.pageIndex * newPaginationState.pageSize);
      },
    });

    const filteredRows = table.getFilteredRowModel().rows;
    
    useEffect(()=>{
      table.setPageSize(rowsPerPage);
    },[rowsPerPage,table])

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
                    <th
                      key={header.id}
                    >
                      {
                        header.column.columnDef.header !== 'Actions' ?
                        header.isPlaceholder ? null : (
                          <div className='header'>
                            <div onClick={header.column.getToggleSortingHandler()}>
                              {flexRender(
                                header.column.columnDef.header as React.ReactNode,
                                header.getContext()
                              )}
                            </div>
                            <span onClick={()=>setFilterPopUp(!filterPopUp)}>
                              <BsFilter fontSize={'1.5rem'}/>
                            </span>
                          </div>
                        )
                        : <></>
                      }
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
                <select className=''
                  value={table.getState().pagination.pageSize}
                  onChange={e => {
                    table.setPageSize(Number(e.target.value))
                  }}
                >
                  {partsArray?.map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                      {pageSize}
                    </option>
                  ))}
                </select>
              </div>
              <p>out of {filteredRows.length}</p>
            </div>
          </div>
          <PaginatedItems items={data} itemsPerPage={rowsPerPage} setItemOffset={setItemOffset} />
        </div>
      </div>
    );
}
  
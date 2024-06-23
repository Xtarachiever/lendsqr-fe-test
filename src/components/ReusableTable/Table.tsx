import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
  } from '@tanstack/react-table';
  import { useEffect, useState, Dispatch, SetStateAction } from 'react';
  import { BsFilter } from 'react-icons/bs';
  import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
  
  interface BasicTableProps {
    data: object[];
    columns: any[];
    rowsPerPage?:number;
    // setFilterPopUp:Dispatch<SetStateAction<boolean>>;
    // filterPopUp: boolean;
  }
  
  export default function BasicTable({ data, columns, rowsPerPage = 5 }: BasicTableProps) {
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      // getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
    });

    return (
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
                          <span onClick={()=>{}}>
                            <BsFilter fontSize={'1.5rem'} id='filter'/>
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
              </select>
            </div>
          </div>
          <div className='pageIndex'>
            <button className='prev' disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}>
              <MdKeyboardArrowLeft fontSize={'1.5rem'} />
            </button>
            <button className='next' disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}>
              <MdKeyboardArrowRight fontSize={'1.5rem'}/>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
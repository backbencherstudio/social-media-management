import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface TableColumn {
  header: string
  accessorKey: string
}

interface ReusableTableProps {
  columns: TableColumn[]
  data: any[]
  emptyMessage?: string
}

export default function ReusableTable({
  columns,
  data,
  emptyMessage = "No orders yet..."
}: ReusableTableProps) {
  return (
    <Table className='overflow-x-auto'>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-gray-100 bg-[#F9F9FA]">
            {columns.map((column) => (
              <TableHead
                key={column.accessorKey}
                className="text-[13px] font-medium text-gray-600 py-3 first:pl-6 last:pr-6 whitespace-nowrap min-w-[150px]"
              >
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="text-center h-24 text-gray-500"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, index) => (
              <TableRow
                key={index}
                className="hover:bg-gray-50/50 border-b border-gray-100 last:border-0"
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.accessorKey}
                    className={`py-4 text-sm first:pl-6 last:pr-6 whitespace-nowrap min-w-[150px]`}
                  >
                    <div className={`${column.accessorKey === 'status'
                      ? 'text-gray-600'
                      : column.accessorKey === 'total'
                        ? 'font-medium'
                        : column.accessorKey === 'invoice'
                          ? 'font-medium text-gray-900'
                          : 'text-gray-600'
                      }`}>
                      {row[column.accessorKey]}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
  )
}

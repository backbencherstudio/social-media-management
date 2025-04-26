import ReusableTable from '@/components/reusable/ReusableTable'
import React from 'react'
import { ImPower } from 'react-icons/im'

export default function ActiveServicesTable() {
    // type of columns and data
    type Column = {
        header: string
        accessorKey: string
    }

    type Data = {
        invoice: string
        date: string
        dateDue: string
        total: string
        status: string
    }

    // Define the columns and data
    const columns: Column[] = [
        {
            header: "Service",
            accessorKey: "service",
        },
        {
            header: "Started",
            accessorKey: "started",
        },
        {
            header: "Status",
            accessorKey: "status",
        },
        {
            header: "Next Payment",
            accessorKey: "nextPayment",
        }
    ]

    const data = [
        {
            service: "9E0D7ECC",
            started: "Feb 28",
            nextPayment: "--",
            status: "Abandoned Checkout"
        },
        {
            service: "9E0D7ECF",
            started: "Feb 28",
            nextPayment: "--",
            status: "Abandoned Checkout"
        },
        {
            service: "9E0D7ECF",
            started: "Feb 28",
            nextPayment: "--",
            status: "Abandoned Checkout"
        },
        {
            service: "9E0D7ECF",
            started: "Feb 28",
            nextPayment: "--",
            status: "Abandoned Checkout"
        },
    ]


    return (
        <div className="mt-6 bg-white border border-[#E9E9EA] rounded-[12px] p-5 lg:p-6">
            <div className='flex justify-between items-center mb-6'>
                <h2 className="text-lg font-semibold">Active Services</h2>
                <button className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200">
                    <ImPower />
                    <span>Add Services</span>
                </button>
            </div>
            <ReusableTable
                columns={columns}
                data={data}
                emptyMessage="No orders yet..."
            />
        </div>
    )
}

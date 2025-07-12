"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  useConnectAccountMutation,
  useCreateConnectAccountMutation,
} from "@/src/redux/features/reseller/profile/profileApi";
import { useGetCurrentUserQuery } from "@/src/redux/features/user/user-auth";
import { getToken } from "@/app/(auth)/auth/_components/set-and-get-token";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function WithdrawModal() {
  const [token, setToken] = useState("");
  const { data: user } = useGetCurrentUserQuery(token);
  const router = useRouter();

  const [connectAccount, { data: connectAccountData }] =
    useConnectAccountMutation();
  const [createConnectAccount, { data: createConnectAccountData }] =
    useCreateConnectAccountMutation();

  // console.log(user);
  // console.log("data",createConnectAccountData);
  // console.log("id",user?.data?.banking_id);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      setToken(token as string);
    };
    fetchToken();
  }, []);

  const handleCreateAccount = async () => {
    if (!user?.data?.banking_id) {
      try {
        await connectAccount({}).unwrap();
        toast.success("Account Creating");
      } catch (error) {
        console.error("Connect account error:", error);
      }
    } else {
      console.log("alkd");
    }
  };

  useEffect(() => {
    if (connectAccountData?.response) {
      const handleAccount = async () => {
        try {
          const res = await createConnectAccount({
            id: connectAccountData?.response,
          }).unwrap();
          router.push(res?.url);
        } catch (error) {
          console.error("Create connect account error:", error);
        }
      };

      handleAccount();
    }
  }, [createConnectAccount, connectAccountData]);

  return (
    <Dialog>
      <div onClick={handleCreateAccount}>
        <DialogTrigger className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer">
          Withdraw Earnings
        </DialogTrigger>
      </div>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">
            Withdraw Earnings
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="flex justify-between">
            {/* Available Amount */}
            <div>
              <p className="text-sm text-gray-500 mb-1">
                Total Available Amount
              </p>
              <p className="text-xl text-gray-900">$1,500.00</p>
            </div>

            {/* Withdraw Date */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Withdraw Date</p>
              <p className="text-xl  text-gray-900">January 30, 2024</p>
            </div>
          </div>

          {/* Withdraw Amount */}
          <div>
            <label className="text-sm text-gray-500 mb-1 block">
              Withdraw Amount ($)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="number"
                className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none"
                placeholder="Enter amount"
              />
            </div>
          </div>

          {/* Select Bank */}
          <div>
            <label className="text-sm text-gray-500 mb-1 block">
              Select Bank
            </label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none ">
              <option value="">Select a bank</option>
              <option value="bank1">Bank of America</option>
              <option value="bank2">Chase Bank</option>
              <option value="bank3">Wells Fargo</option>
            </select>
          </div>

          {/* Withdraw Button */}
          <div>
            {user?.data?.banking_id && (
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg font-medium cursor-pointer"
              >
                Withdraw Earnings
              </button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

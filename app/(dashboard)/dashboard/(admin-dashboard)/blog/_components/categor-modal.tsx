import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  useCreateBlogCategoryMutation,
  useDeleteBlogCategoryMutation,
  useGetBlogCategoriesQuery,
} from "@/src/redux/features/admin/blog/blog_category";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
};

export default function CategorModal({ isOpen, setIsOpen }) {
  const { data } = useGetBlogCategoriesQuery();
  const [createBlogCategory, { isError, isLoading }] =
    useCreateBlogCategoryMutation();
  const [deleteBlogCategory, { isLoading: deleting }] =
    useDeleteBlogCategoryMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    const submitData = {
      name: values.name,
      status: 1,
    };

    try {
      createBlogCategory(submitData);
      reset();
      // setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="px-3 py-1 bg-gray-50 border-0 rounded-full text-sm"
          >
            + Add New
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Category</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex items-center gap-3 py-10">
              <Input
                type="text"
                placeholder="Enter category"
                {...register("name", { required: "Category name is required" })}
                className={errors.name ? "border-red-500" : ""}
              />
              <Button
                type="submit"
                className="bg-black text-white px-4 py-4"
                disabled={isLoading}
              >
                {isLoading ? "Adding..." : "Add"}
              </Button>
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </form>
          <div className="max-h-[200px] overflow-auto">
            <p className="text-gray-600 mb-4">Already added</p>
            <div className="space-y-2">
              {data?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-2 rounded-md"
                >
                  <p className="">{item.name}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500 hover:text-red-700 cursor-pointer"
                    onClick={() => {
                      deleteBlogCategory(item.id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </svg>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

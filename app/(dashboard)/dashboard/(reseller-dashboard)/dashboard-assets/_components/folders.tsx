"use client";

import ImageIcon from "@/public/incons/image-icon";
import { useGetFoldersQuery } from "@/src/redux/features/reseller/assets/assets";
import PostsIcon from "@/public/incons/posts-icon";
import DesignsIcon from "@/public/incons/designs-icon";
import AttachmentsIcon from "@/public/incons/attachments-icon";
import BlogsIcon from "@/public/incons/blogs-icon";
import { RootState } from "@/src/redux/store";
import { useSelector } from "react-redux";

const iconMap: { [key: string]: React.ElementType } = {
  posts: PostsIcon,
  designs: DesignsIcon,
  attachments: AttachmentsIcon,
  blogs: BlogsIcon,
  images: ImageIcon,
};

export default function Folders() {
  const clientId = useSelector((state: RootState) => state.clientId.id);
  const { data: folders } = useGetFoldersQuery(clientId);

  return (
    <div>
      <h1 className="px-4 mb-4">Folders</h1>
      <hr className="text-gray-200" />
      <div className="px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {folders?.map((folder: any) => {
            const Icon = iconMap[folder.name.toLowerCase()] || ImageIcon;
            return (
              <div
                key={folder.name}
                className="flex items-start space-x-3 border border-gray-200 p-5 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {folder?.name}
                  </p>
                  <p className="text-xs text-gray-500">{folder?.count} files</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

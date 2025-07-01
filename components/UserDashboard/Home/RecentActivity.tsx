import { useGetUserRecentActivitiesQuery } from "@/src/redux/features/user/home/userServicesApi";
import { P } from "framer-motion/dist/types.d-B_QPEvFK";
import {
  FaInstagram,
  FaTwitter,
  FaClock,
  FaImage,
  FaFacebook,
} from "react-icons/fa";



// Helper function to map the platform to an icon
const getPlatformIcon = (platform: any) => {
  switch (platform) {
    case "Instagram":
      return <FaInstagram className="text-blue-500" />;
    case "Twitter":
      return <FaTwitter className="text-blue-400" />;
    case "Facebook":
      return <FaFacebook className="text-blue-700" />;
    default:
      return <FaImage className="text-gray-500" />;
  }
};

export default function RecentActivity() {
  const { data: recentActivities = [] } =
    useGetUserRecentActivitiesQuery(undefined);
  return (
    <div className="bg-[#F9FAFB] p-6 rounded-lg shadow-sm mt-8">
      <h2 className="text-[20px] font-semibold mb-4">Recent Activity</h2>
      <ul className="space-y-4">
        {recentActivities?.length === 0 ? (
          <p className="text-center"> There is no Recent Activity!</p>
        ) : (
          recentActivities?.map((activity: any) => (
            <li key={activity.id} className="flex items-center space-x-4">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-black bg-blue-50`}
              >
                {getPlatformIcon(activity.platform)}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  New {activity.action} on {activity.platform}
                </p>
                <p className="text-xs text-gray-500">{activity.timeAgo}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

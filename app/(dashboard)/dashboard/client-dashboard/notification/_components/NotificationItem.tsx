

const getTimeAgo = (dateString: string) => {
  const now = new Date();
  const notificationDate = new Date(dateString);
  const diffInHours = Math.floor(
    (now.getTime() - notificationDate.getTime()) / (1000 * 60 * 60)
  );

  return diffInHours < 24
    ? `${diffInHours}hr ago`
    : `${Math.floor(diffInHours / 24)}d ago`;
};

// Notification Item Component
export const NotificationItem = ({
  notification,
}: any) => {
  const { receiver, notification_event, created_at, sender } = notification;
  const timeAgo = getTimeAgo(created_at);

  return (
    <div className="flex items-start space-x-3 py-4 px-6 bg-white hover:bg-gray-50 transition-colors duration-150 border-t-2 border-white mb-2 rounded-xl">
      <img
        src={sender.avatar_url}
        alt={`${receiver.name}'s avatar`}
        className="w-10 h-10 rounded-full bg-gray-200"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {receiver.name}
          </h3>
          <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
            {timeAgo}
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
          {notification_event.text}
        </p>
      </div>
    </div>
  );
};

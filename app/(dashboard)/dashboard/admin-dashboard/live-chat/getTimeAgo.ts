let lastPrintedTime: string | null = null;
let lastMessageTime: Date | null = null; // Store the timestamp of the last message
let lastMessageUser: string | null = null; // Store the user who sent the last message
let lastMessageMinute: number | null = null; // Store the minute of the last printed message

function getTimeAgo(timestamp: Date, messageSender: string): string {
  const now = new Date();
  const messageTime = new Date(timestamp);

  // Get the difference in milliseconds
  const diffInMilliseconds = now.getTime() - messageTime.getTime();
  const diffInMinutes = Math.floor(diffInMilliseconds / 60000);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);

  // Format the time in a human-readable way
  let timeString: string;

  if (diffInMinutes < 1) {
    timeString = 'Just now';
  } else if (diffInMinutes < 60) {
    timeString = `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    timeString = `${diffInHours} hours ago`;
  } else if (diffInDays === 1) {
    timeString = `Yesterday at ${messageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  } else if (diffInDays < 7) {
    timeString = `${diffInDays} days ago`;
  } else if (diffInWeeks === 1) {
    timeString = `Last week at ${messageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  } else {
    timeString = `${messageTime.toLocaleDateString()} at ${messageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  }

  // Compare if this message is from the same user and within the same minute
  const messageMinute = messageTime.getMinutes();

  if (lastMessageTime && lastMessageUser === messageSender && lastMessageMinute === messageMinute) {
    return ''; // Skip printing the time for messages within the same minute and from the same sender
  }

  // If the message is from another user, print the time even if it's in the same minute
  if (lastMessageUser !== messageSender) {
    lastMessageTime = messageTime;
    lastMessageUser = messageSender;
    lastMessageMinute = messageMinute;
    return timeString;
  }

  // For the last message in a group (same minute), print the time
  lastMessageTime = messageTime;
  lastMessageUser = messageSender;
  lastMessageMinute = messageMinute;
  return timeString;
}

export default getTimeAgo
import Inbox from "./_components/inbox";
import Sent from "./_components/sent";

export default function AdminSupport() {
  return (
    <div className="space-y-10">
      <Inbox />
      <Sent />
    </div>
  );
}

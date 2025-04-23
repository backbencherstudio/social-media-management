// // app/book-demo/[id]/page.tsx
// type Props = {
//     searchParams: {
//       date?: string;
//       time?: string;
//       timezone?: string;
//     };
//     params: { id: string };
//   };
  
//   export default function BookingDetails({ searchParams, params }: Props) {
//     const { date, time, timezone } = searchParams;
//     const { id } = params;
  
//     return (
//       <div className="p-4">
//         <h1 className="text-xl font-bold">Booking Details</h1>
//         <p><strong>ID:</strong> {id}</p>
//         <p><strong>Date:</strong> {date}</p>
//         <p><strong>Time:</strong> {time}</p>
//         <p><strong>Timezone:</strong> {timezone}</p>
//       </div>
//     );
//   }
  
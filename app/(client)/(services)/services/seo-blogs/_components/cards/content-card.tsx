export default function ContentCard({ content }: any) {
  return (
    <div className="px-4 h-full py-6 flex flex-col gap-6 border-[#E9E9EA] border rounded-xl">
      <div className="flex item-center justify-center mx-auto p-2 border w-12 h-12 rounded-xl border-[#F5F5F7]">
        {content?.icon}
      </div>
      <p className="text-center text-[#4A4C56]">{content?.text}</p>
    </div>
  );
}

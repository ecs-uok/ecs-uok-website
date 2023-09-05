import { FaFaceSadTear } from "react-icons/fa6";

export default function MessagesSection() {
  return (
    <>
      <div className="flex p-12 gap-4 w-full justify-center items-center pt-[80px]">
        <FaFaceSadTear className="w-10 h-12" />
        <span className="text-4xl font-semibold">No messages yet...</span>
      </div>
    </>
  );
}

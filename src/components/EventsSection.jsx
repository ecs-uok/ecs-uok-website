import { SadeEmojiIcon } from "../assets/Icon";

export default function EventsSection() {
  return (
    <>
      <div className="flex p-12 gap-4 w-full justify-center items-center">
        <SadeEmojiIcon />
        <span className="text-4xl font-semibold">No events yet...</span>
      </div>
    </>
  );
}

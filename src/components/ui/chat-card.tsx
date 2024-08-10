
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";
function ChatCard() {
  const userMessage = useSelector((state: any) => state.userMessage);
  const modelMessage = useSelector((state: any) => state.modelMessage);
  return (
    <div className="mt-28 h-[37rem] m-auto max-w-4xl">
      {userMessage &&
        userMessage.map((item: string, index: number) => (
          <div className="mb-2 text-right" key={index}>
            <p className=" dark:bg-[#27272a] max-w-2xl h-auto text-white rounded-lg py-2 px-4 inline-block break-words leading-7 [&:not(:first-child)]:mt-6">
              {item}
            </p>
          </div>
        ))}
      {modelMessage &&
        modelMessage.map((item: string, index: number) => (
          <div className="mb-20 mt-10 flex" key={index}>
            <Avatar className="w-8 h-8">
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="w-10 h-10"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="leading-7 [&:not(:first-child)] rounded-lg text-[1rem.5]  px-4 inline-block break-words max-w-full">
              {item}
            </p>
          </div>
        ))}
    </div>
  );
}

export default ChatCard;

import React, { useEffect, useState } from "react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholder-and-vanish-input";
import ChatCard from "@/components/ui/chat-card";
import { useDispatch } from "react-redux";
import { addUserMessageToArray } from "@/store/services/userMessageSlice";
import { addModelMessageToArray } from "@/store/services/modelMessageSlice";
import Container from "@/components/Container";

function Dashboard() {
  const [sendCount, setSendCount] = useState<number>(0);
  const [userMessage, setUserMessage] = useState<string>("");
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "JustMail - Dashboard";
  }, []);
  const placeholders = [
    "Search mails of 4 hours ago ?",
    "What mail is sended by John Doe?",
    "which mails are unread?",
    "what is the last date to submit the assignment?",
    "send me the mail of 2 days ago",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserMessage(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!sendCount) setSendCount(1);
    dispatch(addUserMessageToArray(userMessage));
    // TODO: Call the model API and add the response in the reducer
    console.log("submitted");
  };
  return !sendCount ? (
    <Container>
      <div className="h-[40rem]  flex flex-col justify-center  items-center px-4">
        <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
          Ask JustMail Anything
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </Container>
  ) : (
    <Container>
      <div className="w-full  max-w-[100vw]">
        <ChatCard />
        <div
          className="fixed bottom-0 pb-10 bg-black w-full z-50 flex flex-col justify-center items-center px-4
  lg:pb-20  sm:max-w-full sm:left-0"
        >
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </Container>
  );
}
export default Dashboard;

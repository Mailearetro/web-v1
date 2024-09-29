"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./button";
let interval: any;

type Card = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  snippet: string;
  created: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  openDialog
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  openDialog: () => void;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

 
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        moveForward();
      } else if (event.key === "ArrowLeft") {
        moveBackward();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [cards]);

  const moveForward = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()!); // move the last element to the front
      return newArray;
    });
  };

  const moveBackward = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.push(newArray.shift()!); // move the first element to the back
      return newArray;
    });
  };


  return (
    <div className="relative  h-40 min-w-full md:h-32 md:w-64">
      {cards.map((card, index) => {
  return (
    <motion.div
      key={card.id}
      onClick={openDialog}
      className="absolute dark:bg-black bg-white h-auto  md:h-28 md:w-64 w-40 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between  hover:cursor-pointer"
      style={{
        transformOrigin: "top center",
      }}
      animate={{
        top: index * -CARD_OFFSET,
        scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
        zIndex: cards.length - index, // decrease z-index for the cards that are behind
      }}
      onClick={() => { console.log(`Card ${card.id} clicked`); openDialog() }}
    >
      <div className="md:flex items-center gap-x-3  text-center md:text-left">
        <img
          className="inline-block size-[38px] rounded-full"
          src={card.avatar}
          alt="Avatar"
        />
        <div className="grow flex justify-between">
          <div>
          <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
            {card.name}
          </span>
          <span className="block text-sm text-gray-500 dark:text-neutral-500">
            {card.email}
          </span>
          </div>
          <div>
          <p className="text-neutral-500 font-medium dark:text-white md:block hidden">
          {card.created}
        </p>
        </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
     
        <p className="text-sm text-gray-500 dark:text-neutral-500">
          {card.snippet}
        </p>
        {/* <Button className="rounded-3xl mt-10 bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:from-violet-600 focus:to-blue-600 border border-transparent">Unsubscribe</Button> */}
      </div>
    </motion.div>
  );
})}

    </div>
  );
};

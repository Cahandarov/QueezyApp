import { useRef, useState } from "react";
import { LiveQuizData } from "./LiveQuizData";
import LiveQuizItem from "./LiveQuizItem";
export interface LiveQuizProps {
  QuizName: string;
  cover: string;
  category: string;
  numberOfQuizzes: number;
}

export default function LiveQuiz() {
  const slicedLiveQuizData = LiveQuizData.slice(0, 6);
  const [LiveQuizzes, setLiveQuizzes] =
    useState<LiveQuizProps[]>(slicedLiveQuizData);
  const scrollRef = useRef<HTMLDivElement>(null);
  function handleSeeAll() {
    setLiveQuizzes(LiveQuizData);
    if (scrollRef.current) {
      scrollRef.current.style.overflow = "auto";
      scrollRef.current.style.gap = "10px";
    } else {
      console.error("scrollRef is null");
    }
  }
  return (
    <div className="w-[48rem] h-[32rem] p-6 flex flex-col gap-8 rounden-[2rem] bg-white dashboard_boxes">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-medium font-Rubik text-textColorNeutralBlack_0C092A leading-10">
          Live Quiz
        </p>
        <button
          className="text-base font-medium font-Rubik text-primaryColor"
          onClick={() => handleSeeAll()}
        >
          See all
        </button>
      </div>
      <div
        className="flex flex-wrap justify-start items-start gap-8 pl-4 mx-auto"
        ref={scrollRef}
      >
        {LiveQuizzes.map((Quiz, index) => (
          <LiveQuizItem
            key={index}
            QuizName={Quiz.QuizName}
            cover={Quiz.cover}
            category={Quiz.category}
            numberOfQuizzes={Quiz.numberOfQuizzes}
          />
        ))}
      </div>
    </div>
  );
}

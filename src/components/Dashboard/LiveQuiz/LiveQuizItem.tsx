import dots3 from "./images/3dots.svg";
import { LiveQuizProps } from "./LiveQuiz";

export default function LiveQuizItem({
  QuizName,
  cover,
  category,
  numberOfQuizzes,
}: LiveQuizProps) {
  return (
    <div className="w-[13rem] h-[11.62rem] p-4 justify-center items-center flex-col rounded-[1.25rem] bg-white border-2 border-solid border-[#EFEEFC]">
      <div className="flex justify-between items-start">
        <div className="w-[4rem] h-[4rem] mb-6 bg-BackRCLigthBlue_C4D0FB rounded-3xl flex justify-center items-center">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
            <img src={cover} alt="cover" className="w-7 h-7" />
          </div>
        </div>
        <img src={dots3} alt="dots" />
      </div>
      <p className="liveQuizName font-medium text-base font-Romik text-textColorNeutralBlack_0C092A mb-[0.38rem] flex flex-nowrap overflow-hidden">
        {QuizName}
      </p>
      <p className="liveQuizCategory font-normal text-sm font-Romik text-textColorLigthGrey2_858494">
        {category} <span>• {numberOfQuizzes} Quizzes</span>
      </p>
    </div>
  );
}

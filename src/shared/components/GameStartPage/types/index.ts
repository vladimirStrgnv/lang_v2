import { AuthData } from "../../../../pages/SignIn/widgets/SignInForm/store/types";
import { IWord } from "../../../api/types";

export interface GameStartPageProps {
  setStateWords: (words: IWord[]) => void;
  wordsParams: {
    section: number | null;
    page: number | null;
    wordCounts: number | null;
    filter: string;
  };
  description: string,
  title: string
  startScreensSectionBtns: btnData[],
  auth: AuthData
}

interface btnData  {
    sectionNum: number,
    title: string
}
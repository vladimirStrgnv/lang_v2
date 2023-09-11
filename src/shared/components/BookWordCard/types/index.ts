export interface BtnConfig {
  text: string;
  onClick: () => void;
  isActive: boolean;
}

export interface BookWordCardProps {
  image: string;
  word: string;
  wordTranslate: string;
  transcription: string;
  textMeaning: string;
  textMeaningTranslate: string;
  textExample: string;
  textExampleTranslate: string;
  audio: string;
  isAuth: boolean;
  btnsConfig?: BtnConfig[];
}

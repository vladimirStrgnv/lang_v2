export class WordHelpers {
  static getUpdatedStat(wordInfo, isCorrectAnswer) {
    if (isCorrectAnswer) {
      if (!wordInfo.userWord) {
        return {
          difficulty: 'studied',
          optional: {
            correctInRow: 1,
            incorrectInRow: 0,
            totalCorrect: 1,
            totalIncorrect: 0,
          },
        };
      } else {
        const correctInRow = wordInfo.userWord?.optional?.correctInRow + 1 ;
        return {
          difficulty: correctInRow > 2? 'learned' :   wordInfo.userWord?.difficulty,
          optional: {
            ...wordInfo.userWord?.optional,
            incorrectInRow: 0,
            correctInRow,
            totalCorrect: wordInfo.userWord?.optional?.totalCorrect + 1,
          },
        };
      }
    } else {
      if (!wordInfo.userWord?.optional) {
        return {
          difficulty: 'studied',
          optional: {
            correctInRow: 0,
            incorrectInRow: 1,
            totalCorrect: 0,
            totalIncorrect: 1,
          },
        };
      } else {
        const incorrectInRow = wordInfo.userWord?.optional.incorrectInRow + 1 ;
        return {
          difficulty: incorrectInRow > 2? 'difficult' :   wordInfo.userWord?.difficulty,
          optional: {
            ...wordInfo.userWord?.optional,
            correctInRow: 0,
            incorrectInRow,
            totalIncorrect: wordInfo.userWord?.optional.totalIncorrect + 1,
          },
        };
      }
    }
  }

  static getWordStatus(updatedInfo, currentInfo) {
    if (updatedInfo.difficulty !== currentInfo.userWord?.difficulty) {
      return {
        status: updatedInfo.difficulty,
        isUpdated: true
      }
    } else {
      return {
        status: updatedInfo.difficulty,
        isUpdated: false
      }
    }
  }
}


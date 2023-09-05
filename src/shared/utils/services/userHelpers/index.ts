import dayjs from "dayjs";

export class UserHelpers {

    static getUpdatedStats(userStat, wordStatus) {
        const currentDay = dayjs().add(1, 'day').format("DD:MM:YYYY");

         const currentDayStat =
          userStat.optional.days[currentDay];
        return {
          optional: {
            allTime: {
              ...userStat.optional.allTime,
              [wordStatus]: userStat.optional.allTime[wordStatus] + 1
            },
            days: {
              ...userStat.optional.days,
              [currentDay]: currentDayStat? {
                ...userStat.optional.days[currentDay],
                [wordStatus]: userStat.optional.days[currentDay][wordStatus] + 1
              }:
              {
                studied: wordStatus === 'studied'?1:0,
                learned: wordStatus === 'learned'?1:0,
                difficult: wordStatus === 'difficult'?1:0
              }
            }
          },
        };
    }
}
import dayjs from "dayjs";

export class UserHelpers {

    static getUpdatedStats(userStat, wordStatus) {
        const currentDay = dayjs().format("DD:MM:YYYY");
        console.log(userStat)

         const currentDayStat =
          userStat.optional[wordStatus][currentDay];
          console.log(currentDayStat)
        return {
          optional: {
            ...userStat.optional,
            [wordStatus]: {
              ...userStat.optional[wordStatus],
              [currentDay]: currentDayStat ? currentDayStat + 1 : 1,
            },
          },
        };
    }
}
import styles from './index.module.scss';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ArcElement
  } from 'chart.js';
  import { Line, Pie } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
import Api from '../../shared/api';
import { useAppSelector } from '../../shared/stores/types';
import { useEffect, useState } from 'react';

const Statistics = () => {
  const auth = useAppSelector((store) => store.signIn.authData);
  const [lineStat, setStateLineStat] = useState([]);
  const [ pieStat, setStatePieStat] = useState({learned: 0, studied: 0, difficult: 0});

  useEffect(() => {
    const fetch = async () => {
      const api = new Api(auth);
      const userStat = await api.getStatistics();
      setStateLineStat(Object.entries(userStat.optional.days));
      setStatePieStat({learned: userStat.optional.allTime.learned, studied: userStat.optional.allTime.studied, difficult: userStat.optional.allTime.difficult});
    };
    fetch();
  }, []);
  
  const lineOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Статистика по изучению слов",
      },
    },
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: {
          precision: 0
        }
      }
    }
  };

  const lineData = {
    labels: lineStat.map(dayStat => dayStat[0]),
    datasets: [
      {
        label: 'Изучаемые',
        fill: true,
        data: lineStat.map(dayStat => dayStat[1].learned),
        borderColor: "rgb(44, 38, 71)",
        backgroundColor: "transparent",
      },
      {
        label: 'Выученные',
        fill: true,
        data: lineStat.map(dayStat => dayStat[1].studied),
        borderColor: "rgb(0, 201, 0)",
        backgroundColor: "transparent",
      },
      {
        label: 'Сложные',
        fill: true,
        data: lineStat.map(dayStat => dayStat[1].difficult),
        borderColor: "rgb(201, 0, 0)",
        backgroundColor: "transparent",
      }
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Статистика за все время",
      },
    },
  };

  const pieData = {
    labels: ['Неизученные', 'Изучаемые', 'Выученные', 'Сложные'],
    datasets: [
      {
        label: 'От всех слов',
        data: [3600- pieStat.learned - pieStat.studied - pieStat.difficult, pieStat.learned, pieStat.studied, pieStat.difficult],
        backgroundColor: [
          'rgba(237, 231, 225)',
          'rgba(44, 38, 71, 0.9)',
          'rgba(0, 201, 0, 0.5)',
          'rgba(201, 0, 0, 0.5)',

        ],
        borderColor: [
          'rgba(237, 231, 225)',
          'rgba(44, 38, 71)',
          'rgba(0, 201, 0)',
          'rgba(201, 0, 0)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className={styles.statistics}>
      <div className={styles.statistics__wrapper}>
        <div className={styles.statistics__inner}>
          <Line options={lineOptions} data={lineData} />
          <Pie options={pieOptions} data={pieData} />

        </div>
      </div>
    </section>
  );
};

export const Component = Statistics;
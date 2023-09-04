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
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
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
  const [stat, setStateStat] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const api = new Api(auth);
      const userStat = await api.getStatistics();
      setStateStat(Object.entries(userStat.optional.studied));
    };
    fetch();
  }, []);
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Статистика по выученным словам",
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

  const data = {
    labels: stat.map(dayStat => dayStat[0]),
    datasets: [
      {

        fill: true,
        display: false,
        data: stat.map(dayStat => dayStat[1]),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <section className={styles.statistics}>
      <div className={styles.statistics__wrapper}>
        <div className={styles.statistics__inner}>
          <Line options={options} data={data} />

        </div>
      </div>
    </section>
  );
};

export const Component = Statistics;
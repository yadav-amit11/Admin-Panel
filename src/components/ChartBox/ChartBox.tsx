import { Link } from 'react-router-dom';
import './chartbox.scss';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

// type ChartData = {
//   name: string;
//   value: number;
// };

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <div className='chartBox'>
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{color: "light blue"}}>More Info</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip contentStyle={{ background: "transparent", border: "none" }} />
              <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={true} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage" style={{ color: props.percentage < 0 ? "tomato" : "greenyellow" }}>
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;

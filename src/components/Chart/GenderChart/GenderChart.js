import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function GenderChart({chartData}){


    return(<div className='chart'>
      <ResponsiveContainer width="99%" height="99%">
      <BarChart
    data={chartData}
      >
        <XAxis dataKey="gender" stroke="#eefcfa"/>
        <YAxis stroke="#eefcfa" />
        <Tooltip />
        <Bar dataKey="amount" fill={"#81d4f3"} />
      </BarChart>
    </ResponsiveContainer>
    </div>
    );
}

export default GenderChart;

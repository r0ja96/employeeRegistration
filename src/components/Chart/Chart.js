import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Page A',
      pv: 2400
    },
    {
      name: 'Page B',
      pv: 3000
    }
  ];

function Chart () {
  
   
      return (
        <ResponsiveContainer >
          <BarChart

        data={data}

          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      );
    
  }

export default Chart;
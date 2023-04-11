import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';


const Statistics = () => {

    const data01 = [
        { AssId: '1', AssName:'first/initial' ,value: 57 },
        { AssId: '2', AssName:'second' ,value: 60 },
        { AssId: '3', AssName:'third' ,value: 60 },
        { AssId: '4', AssName:'four' ,value: 60 },
        { AssId: '5', AssName:'five' ,value: 53 },
        { AssId: '6', AssName:'six' ,value: 50 },
        { AssId: '7', AssName:'seven' ,value: 50 }
      ];
    
    return (
        <div>
            <PieChart width={1000} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={data01}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
        </div>
    );
};

export default Statistics;
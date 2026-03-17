import React from 'react';
import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer } from 'recharts';
 
function IssuanceTrendChart({
   
    data= [], 
    title="Certificates Issued (last 6 months)"
})
{
    if(!data || data.lenght === 0){
return(
    <div className='h-80 flex items-center justiy-center text-gray-500  dark:text-gray-400'>
        No data avaliable
    </div>
);
}

return(
    <div className='h-80 flex-1 w-100'>
                                      <ResponsiveContainer width="100%" height="100%">

                                      <LineChart data={monthly} margin={{top:10, right30, left:0,bottom:0}} >
                              
                                    <CartesianGrid strokeDasharray="3 3"  vertical={false}stroke="#e5e7eb" />
                                    <XAxis dataKey="month" axisLine={false} tickline={false}/>
                                    <YAxis stroke="#6b7280"  axisLine={false} tickline={false}fontSize={12}/>
                                <Tooltip contentStyle={
                                    {
                                        backgroundColor: 'rgba(255,255,255,0.95)',
                                        border: '1px solid #e5e7eb',
                                        borderRadius:'8px',
                                        boxShadow:'0 4px 6px -1px rgba(0,0,0,0.1)'
                                    }}
                                    labelStyle={{fontWeight:'bold'}} />
                                    <Line type="monotone" dataKey="issue" strokeWidth={3} stroke="#14b8a6" />
                                
                              </LineChart>      
                </ResponsiveContainer>                
    </div>
);
}

export default IssuanceTrendChart;
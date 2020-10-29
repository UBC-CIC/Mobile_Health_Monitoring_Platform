import React from "react";
import { ResponsiveLine } from '@nivo/line'



class LineGraph extends React.Component {

    render() {
        const {data} = this.props;
        let dummyData =[

            {
                id: "heart_rate",
                color: "hsl(20, 70%, 50%)",
                data: [
                    {
                        x: new Date(2020,10,29,8,10,10),
                        y: 66
                    },
                    {
                        x: new Date(2020,10,29,8,20,10),
                        y: 77
                    },
                    {
                        x: new Date(2020,10,29,8,30,10),
                        y: 89
                    }
                ]
            }
        ]
        return(
            <div style={{width: "800px", height: "400px"}}>
                <ResponsiveLine
                    data={data}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: "time", precision: 'minute' }}
                    xFormat="time:%H:%M %p"
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                    /*yFormat=" >-.2f"*/
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        /*tickValues: "every 10 minutes",*/
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        format: "%H:%M %p",
                        legend: 'Time',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Heart Rate (BPM)',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        );
    }
}

export default LineGraph;
import ReactApexChart from "react-apexcharts";

const ActivityHeatmap = ({ activityData, days, hours }: any) => {
  // Configuring the options for the heatmap chart
  const options = {
    chart: {
      type: "heatmap",
      height: 350,
    },
    plotOptions: {
      heatmap: {
        colorScale: {
          ranges: [
            { from: 0, to: 0, color: "#ffffff" }, // No activity
            { from: 1, to: 1, color: "#ffeb3b" }, // Low activity
            { from: 2, to: 2, color: "#ff5722" }, // High activity
          ],
        },
      },
    },
    xaxis: {
      categories: days, // Days of the week
    },
    yaxis: {
      categories: hours, // Hours of the day (0-23)
    },
    title: {
      text: "User Activity Heatmap",
    },
    tooltip: {
      y: {
        formatter: (val: any) => `Activity Level: ${val}`,
      },
    },
  };

  // Formatting the data for the heatmap
  const series = activityData.map((activity: any, index: number) => ({
    name: `Day ${index + 1}`, // Day 1, Day 2, etc.
    data: activity, // The activity data for that day
  }));

  return (
    <div id="heatmap-chart">
      <ReactApexChart
        options={options}
        series={series}
        type="heatmap"
        height={350}
      />
    </div>
  );
};

// ============================================================================
const activityData = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  // Add more data for other days
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const hours = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];

export default function FollowerActivityHeatmap() {
  return (
    <div>
      <h1>User Activity Visualization</h1>
      <ActivityHeatmap activityData={activityData} days={days} hours={hours} />
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import { Chart } from "primereact/chart";

export default function PieChartDemo() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const dataARef = useRef<number | null>(null);
  const dataBRef = useRef<number | null>(null);
  const dataCRef = useRef<number | null>(null);

  useEffect(() => {
    const data = {
      //   labels: ["A", "B", "C"],

      datasets: [
        {
          data: [54, 32, 14],
          backgroundColor: ["#6A5AE0", "#FF8FA2", "#C4D0FB"],
          hoverBackgroundColor: [
            "rgba(106, 90, 224, 0.8)",
            "rgba(255, 143, 162, 0.8)",
            "rgba(196, 208, 251, 0.8)",
          ],
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
    dataARef.current = data.datasets[0].data[0];
    dataBRef.current = data.datasets[0].data[1];
    dataCRef.current = data.datasets[0].data[2];
  }, []);

  return (
    <div className="card flex justify-content-center flex-col gap-3 mx-auto">
      <Chart
        type="pie"
        data={chartData}
        options={chartOptions}
        className="w-[250px] md:w-30rem"
      />
      <div className="flex flex-col gap-2">
        <div className="flex w-full mx-auto justify-between items-center">
          <div className="flex gap-3 items-center justify-start">
            <div className="w-3 h-3 rounded-full bg-[#6A5AE0]"></div>
            <p
              id="data1_in_pieChart"
              className="font-medium text-base font-Rubik text-[#49465F]"
            >
              Music
            </p>
          </div>
          {dataARef.current !== null && (
            <p className="font-medium text-sm font-Rubik text-[#6A5AE0]">
              {dataARef.current}%
            </p>
          )}
        </div>
        <div className="flex w-full mx-auto justify-between items-centerr">
          <div className="flex gap-3 items-center justify-start">
            <div className="w-3 h-3 rounded-full bg-[#FF8FA2]"></div>
            <p
              id="data2_in_pieChart"
              className="font-medium text-base font-Rubik text-[#49465F]"
            >
              Sport
            </p>
          </div>
          {dataBRef.current !== null && (
            <p className="font-medium text-sm font-Rubik text-[#FF8FA2]">
              {dataBRef.current}%
            </p>
          )}
        </div>
        <div className="flex mx-auto w-full justify-between items-center">
          <div className="flex gap-3 items-center justify-start">
            <div className="w-3 h-3 rounded-full bg-[#C4D0FB]"></div>
            <p
              id="data3_in_pieChart"
              className="font-medium text-base font-Rubik text-[#49465F]"
            >
              Math
            </p>
          </div>
          {dataCRef.current !== null && (
            <p className="font-medium text-sm font-Rubik text-[#C4D0FB]">
              {dataCRef.current}%
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

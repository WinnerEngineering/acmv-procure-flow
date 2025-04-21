
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const chartData = [
  { project: "Changi T5", Budget: 250000, Spend: 220000 },
  { project: "Marina Bay", Budget: 180000, Spend: 185000 },
  { project: "Jurong Mall", Budget: 95000, Spend: 75000 },
  { project: "Tampines Hub", Budget: 120000, Spend: 119000 },
];

export function BudgetVsSpendChart() {
  return (
    <div className="w-full h-72">
      <ChartContainer config={{}}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="project" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Budget" fill="#9b87f5" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Spend" fill="#16a34a" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}

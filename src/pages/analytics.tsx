import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Line,
  LineChart,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";

const AnalyticsPage = () => {
  return (
    <div className="mx-auto flex flex-col flex-wrap items-start justify-center gap-6 md:flex-row">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
        <Card className="lg:max-w-md">
          <CardHeader className="space-y-0 pb-2">
            <CardDescription>Hari Ini</CardDescription>
            <CardTitle className="text-4xl tabular-nums">
              254.873{" "}
              <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                jangkauan
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                reach: {
                  label: "Jangkauan",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: -4,
                  right: -4,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    reach: 180000,
                  },
                  {
                    date: "2024-01-02",
                    reach: 195000,
                  },
                  {
                    date: "2024-01-03",
                    reach: 210000,
                  },
                  {
                    date: "2024-01-04",
                    reach: 190000,
                  },
                  {
                    date: "2024-01-05",
                    reach: 200000,
                  },
                  {
                    date: "2024-01-06",
                    reach: 220000,
                  },
                  {
                    date: "2024-01-07",
                    reach: 254873,
                  },
                ]}
              >
                <Bar
                  dataKey="reach"
                  fill="var(--color-reach)"
                  radius={5}
                  fillOpacity={0.6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  tickFormatter={(value) => {
                    return new Date(value).toLocaleDateString("id-ID", {
                      weekday: "short",
                    });
                  }}
                />
                <ChartTooltip
                  defaultIndex={2}
                  content={
                    <ChartTooltipContent
                      hideIndicator
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        });
                      }}
                    />
                  }
                  cursor={false}
                />
                <ReferenceLine
                  y={200000}
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                >
                  <Label
                    position="insideBottomLeft"
                    value="Rata-rata Jangkauan"
                    offset={10}
                    fill="hsl(var(--foreground))"
                  />
                  <Label
                    position="insideTopLeft"
                    value="200.000"
                    className="text-lg"
                    fill="hsl(var(--foreground))"
                    offset={10}
                    startOffset={100}
                  />
                </ReferenceLine>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-1">
            <CardDescription>
              Selama 7 hari terakhir, kampanye Anda telah menjangkau{" "}
              <span className="font-medium text-foreground">1.449.873</span>{" "}
              orang.
            </CardDescription>
            <CardDescription>
              Anda perlu{" "}
              <span className="font-medium text-foreground">50.127</span>{" "}
              jangkauan lagi untuk mencapai target mingguan Anda.
            </CardDescription>
          </CardFooter>
        </Card>
        <Card className="flex flex-col lg:max-w-md">
          <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 [&>div]:flex-1">
            <div>
              <CardDescription>Rata-rata Tingkat Keterlibatan</CardDescription>
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                3,8
                <span className="text-sm font-normal tracking-normal text-muted-foreground">
                  %
                </span>
              </CardTitle>
            </div>
            <div>
              <CardDescription>Pertumbuhan Influencer</CardDescription>
              <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                8
                <span className="text-sm font-normal tracking-normal text-muted-foreground">
                  %
                </span>
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 items-center">
            <ChartContainer
              config={{
                engagement: {
                  label: "Keterlibatan",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="w-full"
            >
              <LineChart
                accessibilityLayer
                margin={{
                  left: 14,
                  right: 14,
                  top: 10,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    engagement: 2.8,
                  },
                  {
                    date: "2024-01-02",
                    engagement: 3.2,
                  },
                  {
                    date: "2024-01-03",
                    engagement: 3.5,
                  },
                  {
                    date: "2024-01-04",
                    engagement: 3.7,
                  },
                  {
                    date: "2024-01-05",
                    engagement: 3.6,
                  },
                  {
                    date: "2024-01-06",
                    engagement: 3.9,
                  },
                  {
                    date: "2024-01-07",
                    engagement: 3.8,
                  },
                ]}
              >
                <CartesianGrid
                  strokeDasharray="4 4"
                  vertical={false}
                  stroke="hsl(var(--muted-foreground))"
                  strokeOpacity={0.5}
                />
                <YAxis hide domain={[0, 5]} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => {
                    return new Date(value).toLocaleDateString("id-ID", {
                      weekday: "short",
                    });
                  }}
                />
                <Line
                  dataKey="engagement"
                  type="natural"
                  fill="var(--color-engagement)"
                  stroke="var(--color-engagement)"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{
                    fill: "var(--color-engagement)",
                    stroke: "var(--color-engagement)",
                    r: 4,
                  }}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      indicator="line"
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        });
                      }}
                    />
                  }
                  cursor={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className="grid flex-1 gap-6">
        <Card className="">
          <CardHeader>
            <CardTitle>Pertumbuhan</CardTitle>
            <CardDescription>
              Bisnis Anda tumbuh lebih cepat tahun ini dibandingkan tahun lalu.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid auto-rows-min gap-2">
              <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                22
                <span className="text-sm font-normal text-muted-foreground">
                  % pertumbuhan
                </span>
              </div>
              <ChartContainer
                config={{
                  growth: {
                    label: "Pertumbuhan",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="aspect-auto h-[32px] w-full"
              >
                <BarChart
                  accessibilityLayer
                  layout="vertical"
                  margin={{
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  data={[
                    {
                      date: "2024",
                      growth: 22,
                    },
                  ]}
                >
                  <Bar
                    dataKey="growth"
                    fill="var(--color-growth)"
                    radius={4}
                    barSize={32}
                  >
                    <LabelList
                      position="insideLeft"
                      dataKey="date"
                      offset={8}
                      fontSize={12}
                      fill="white"
                    />
                  </Bar>
                  <YAxis dataKey="date" type="category" tickCount={1} hide />
                  <XAxis dataKey="growth" type="number" hide />
                </BarChart>
              </ChartContainer>
            </div>
            <div className="grid auto-rows-min gap-2">
              <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                15
                <span className="text-sm font-normal text-muted-foreground">
                  % pertumbuhan
                </span>
              </div>
              <ChartContainer
                config={{
                  growth: {
                    label: "Pertumbuhan",
                    color: "hsl(var(--muted))",
                  },
                }}
                className="aspect-auto h-[32px] w-full"
              >
                <BarChart
                  accessibilityLayer
                  layout="vertical"
                  margin={{
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  data={[
                    {
                      date: "2023",
                      growth: 15,
                    },
                  ]}
                >
                  <Bar
                    dataKey="growth"
                    fill="var(--color-growth)"
                    radius={4}
                    barSize={32}
                  >
                    <LabelList
                      position="insideLeft"
                      dataKey="date"
                      offset={8}
                      fontSize={12}
                      fill="hsl(var(--muted-foreground))"
                    />
                  </Bar>
                  <YAxis dataKey="date" type="category" tickCount={1} hide />
                  <XAxis dataKey="growth" type="number" hide />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        <Card className="">
          <CardHeader className="p-4 pb-0">
            <CardTitle>Jangkauan Influencer</CardTitle>
            <CardDescription>
              Selama 7 hari terakhir, Anda terhubung dengan rata-rata 15
              influencer baru per hari.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-0">
            <div className="flex items-baseline gap-1 text-3xl font-bold tabular-nums leading-none">
              15
              <span className="text-sm font-normal text-muted-foreground">
                influencer/hari
              </span>
            </div>
            <ChartContainer
              config={{
                outreach: {
                  label: "Jangkauan",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="ml-auto w-[72px]"
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    outreach: 12,
                  },
                  {
                    date: "2024-01-02",
                    outreach: 14,
                  },
                  {
                    date: "2024-01-03",
                    outreach: 16,
                  },
                  {
                    date: "2024-01-04",
                    outreach: 15,
                  },
                  {
                    date: "2024-01-05",
                    outreach: 17,
                  },
                  {
                    date: "2024-01-06",
                    outreach: 18,
                  },
                  {
                    date: "2024-01-07",
                    outreach: 15,
                  },
                ]}
              >
                <Bar
                  dataKey="outreach"
                  fill="var(--color-outreach)"
                  radius={2}
                  fillOpacity={0.2}
                  activeIndex={6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  hide
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="">
          <CardContent className="flex gap-4 p-4 pb-2">
            <ChartContainer
              config={{
                reach: {
                  label: "Jangkauan",
                  color: "hsl(var(--chart-1))",
                },
                engagement: {
                  label: "Keterlibatan",
                  color: "hsl(var(--chart-2))",
                },
                conversion: {
                  label: "Konversi",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[140px] w-full"
            >
              <BarChart
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 10,
                }}
                data={[
                  {
                    metric: "conversion",
                    value: (2.5 / 5) * 100,
                    label: "2,5/5%",
                    fill: "var(--color-conversion)",
                  },
                  {
                    metric: "engagement",
                    value: (3.8 / 10) * 100,
                    label: "3,8/10%",
                    fill: "var(--color-engagement)",
                  },
                  {
                    metric: "reach",
                    value: (254873 / 500000) * 100,
                    label: "254K/500K",
                    fill: "var(--color-reach)",
                  },
                ]}
                layout="vertical"
                barSize={32}
                barGap={2}
              >
                <XAxis type="number" dataKey="value" hide />
                <YAxis
                  dataKey="metric"
                  type="category"
                  tickLine={false}
                  tickMargin={4}
                  axisLine={false}
                  className="capitalize"
                />
                <Bar dataKey="value" radius={5}>
                  <LabelList
                    position="insideLeft"
                    dataKey="label"
                    fill="white"
                    offset={8}
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex flex-row border-t p-4">
            <div className="flex w-full items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-muted-foreground">Jangkauan</div>
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  254K
                  <span className="text-sm font-normal text-muted-foreground">
                    /500K
                  </span>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-muted-foreground">
                  Keterlibatan
                </div>
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  3,8
                  <span className="text-sm font-normal text-muted-foreground">
                    %
                  </span>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-muted-foreground">Konversi</div>
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  2,5
                  <span className="text-sm font-normal text-muted-foreground">
                    %
                  </span>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
export default AnalyticsPage;

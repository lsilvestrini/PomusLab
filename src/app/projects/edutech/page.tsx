// edutech.tsx
'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts'
import { TrendingUp, TrendingDown } from 'lucide-react'

// Types
interface MetricCardProps {
  title: string
  value: number
  meta: number
  trend: number
  unit?: string
  formula: string
}

interface ChartWrapperProps {
  title: string
  children: React.ReactNode
  formula: string
}

// Sample Data
const dashboardData = {
  conversionData: [
    { segmento: 'Escolas Elite', taxa: 28, meta: 30, anterior: 25 },
    { segmento: 'Escolas Classe Média', taxa: 35, meta: 32, anterior: 30 },
    { segmento: 'Escolas Convencional', taxa: 42, meta: 38, anterior: 36 },
    { segmento: 'Escolas Técnicas', taxa: 31, meta: 35, anterior: 28 },
  ],
  ltvData: [
    { tipo: 'Premium', valor: 150000, meta: 160000, crescimento: 12 },
    { tipo: 'Standard', valor: 85000, meta: 90000, crescimento: 8 },
    { tipo: 'Basic', valor: 45000, meta: 50000, crescimento: 15 },
  ],
  npsData: [
    { month: 'Jan', score: 65, meta: 70, detratores: 15, neutros: 20, promotores: 65 },
    { month: 'Fev', score: 68, meta: 70, detratores: 12, neutros: 20, promotores: 68 },
    { month: 'Mar', score: 72, meta: 70, detratores: 10, neutros: 18, promotores: 72 },
    { month: 'Abr', score: 75, meta: 70, detratores: 8, neutros: 17, promotores: 75 },
    { month: 'Mai', score: 71, meta: 70, detratores: 11, neutros: 18, promotores: 71 },
    { month: 'Jun', score: 78, meta: 70, detratores: 7, neutros: 15, promotores: 78 },
  ],
  volumeData: [
    { regiao: 'Sudeste', volume: 2500000, meta: 2800000, crescimento: 15, marketShare: 45 },
    { regiao: 'Sul', volume: 1800000, meta: 2000000, crescimento: 12, marketShare: 25 },
    { regiao: 'Nordeste', volume: 1200000, meta: 1500000, crescimento: 18, marketShare: 15 },
    { regiao: 'Centro-Oeste', volume: 900000, meta: 1000000, crescimento: 8, marketShare: 10 },
    { regiao: 'Norte', volume: 600000, meta: 800000, crescimento: 20, marketShare: 5 },
  ],
  featureData: [
    { name: 'Antecipação', elite: 90, media: 75, convencional: 85, meta: 85 },
    { name: 'Seguro', elite: 65, media: 45, convencional: 55, meta: 60 },
    { name: 'Parcelamento', elite: 85, media: 90, convencional: 80, meta: 85 },
    { name: 'Inadimplência', elite: 70, media: 85, convencional: 75, meta: 80 },
  ],
}

const COLORS = {
  primary: '#0088FE',
  secondary: '#00C49F',
  tertiary: '#FFBB28',
  quaternary: '#FF8042',
}

// Components
const MetricCard = ({ title, value, meta, trend, unit = '', formula }: MetricCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="flex justify-between">
          <p className="text-sm font-medium">{title}</p>
          {trend > 0 ? (
            <TrendingUp className="h-4 w-4 text-green-500 animate-bounce" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-500 animate-bounce" />
          )}
        </div>
        <div className="mt-2">
          <span className="text-2xl font-bold">{value}{unit}</span>
          <span className="text-sm text-muted-foreground ml-2">Meta: {meta}{unit}</span>
        </div>
        <p className={`mt-1 text-xs ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {trend > 0 ? '+' : ''}{trend}% vs anterior
        </p>
        <p className="mt-2 text-xs text-muted-foreground italic">{formula}</p>
      </CardContent>
    </Card>
  )
}
const ChartWrapper = ({ title, children, formula }: ChartWrapperProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Explicitly set height and width */}
        <div className="w-full h-[300px] min-h-[300px]">
          {children}
        </div>
        <p className="mt-2 text-xs text-muted-foreground italic text-center">{formula}</p>
      </CardContent>
    </Card>
  )
}

// Format large numbers for tooltips
const formatLargeNumber = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    notation: "compact",
    compactDisplay: "short",
  }).format(value);
};
// Common chart configuration
const chartConfig = {
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease-out"
};

// Main Dashboard Component
export default function Edutech() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard isaac</h2>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="analytics">Análise Detalhada</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="NPS Atual"
              value={78}
              meta={70}
              trend={8}
              formula="% Promotores - % Detratores"
            />
            <MetricCard
              title="Taxa de Conversão"
              value={34.5}
              meta={35}
              trend={4.2}
              unit="%"
              formula="(Novos Contratos / Propostas) * 100"
            />
            <MetricCard
              title="Volume Total"
              value={7000}
              meta={8100}
              trend={15}
              unit="Mi"
              formula="Σ Volume Antecipado por Região"
            />
            <MetricCard
              title="Churn Rate"
              value={8}
              meta={6}
              trend={-2.5}
              unit="%"
              formula="(Cancelamentos / Base Ativa) * 100"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
          <ChartWrapper
              title="Taxa de Conversão por Segmento (%)"
              formula="(Contratos / Propostas) * 100 por segmento"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dashboardData.conversionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="segmento" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Bar 
                    dataKey="taxa" 
                    fill={COLORS.primary} 
                    name="Atual"
                    {...{...chartConfig, animationEasing: "ease-out" }}
                  />
                  <Bar 
                    dataKey="anterior" 
                    fill={COLORS.secondary} 
                    name="Período Anterior"
                    {...{...chartConfig, animationEasing: "ease-out" }}
                  />
                  <ReferenceLine y={32} stroke="red" strokeDasharray="3 3" label="Meta" />
                </BarChart>
              </ResponsiveContainer>
            </ChartWrapper>

            <ChartWrapper
              title="NPS Detalhado"
              formula="Promotores (9-10), Neutros (7-8), Detratores (0-6)"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dashboardData.npsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="promotores" 
                    stroke={COLORS.primary} 
                    name="Promotores"
                    {...{...chartConfig, animationEasing: "ease-out" }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="neutros" 
                    stroke={COLORS.secondary} 
                    name="Neutros"
                    {...{...chartConfig, animationEasing: "ease-out" }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="detratores" 
                    stroke={COLORS.tertiary} 
                    name="Detratores"
                    {...{...chartConfig, animationEasing: "ease-out" } }
                  />
                  <ReferenceLine y={70} stroke="red" strokeDasharray="3 3" label="Meta" />
                </LineChart>
              </ResponsiveContainer>
            </ChartWrapper>
            
            <ChartWrapper
              title="Volume por Região"
              formula="Volume = Σ Antecipações por Região"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dashboardData.volumeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="regiao" />
                  <YAxis />
                  <Tooltip formatter={(value: number | string) => formatLargeNumber(Number(value))} />
                  <Legend />
                  <Bar 
                    dataKey="volume" 
                    fill={COLORS.primary} 
                    name="Volume (Mi)"
                    {...{...chartConfig, animationEasing: "ease-out" }}
                  />
                  <ReferenceLine y={1500000} stroke="red" strokeDasharray="3 3" label="Meta" />
                </BarChart>
              </ResponsiveContainer>
            </ChartWrapper>

            <ChartWrapper
              title="Uso de Features por Segmento"
              formula="% de clientes ativos usando cada feature"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dashboardData.featureData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="elite" 
                    stroke={COLORS.primary} 
                    name="Elite"
                    {...{...chartConfig, animationEasing: "ease-out" }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="media" 
                    stroke={COLORS.secondary} 
                    name="Média"
                    {...{...chartConfig, animationEasing: "ease-out" }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="convencional" 
                    stroke={COLORS.tertiary} 
                    name="Convencional"
                    {...{...chartConfig, animationEasing: "ease-out" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartWrapper>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
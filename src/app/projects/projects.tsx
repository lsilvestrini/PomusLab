// components/metric-card.tsx
const MetricCard = ({
    title,
    value,
    meta,
    trend,
    unit = '',
    formula
  }: MetricCardProps) => {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between">
            <p className="text-sm font-medium">{title}</p>
            {trend > 0 ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">
              {value}
              {unit}
            </span>
            <span className="text-sm text-muted-foreground ml-2">
              Meta: {meta}
              {unit}
            </span>
          </div>
          <p
            className={`mt-1 text-xs ${
              trend >= 0 ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {trend > 0 ? '+' : ''}
            {trend}% vs anterior
          </p>
          <p className="mt-2 text-xs text-muted-foreground italic">{formula}</p>
        </CardContent>
      </Card>
    )
  }
  
  // components/chart-wrapper.tsx
  interface ChartWrapperProps {
    title: string
    children: React.ReactNode
    formula: string
  }
  
  const ChartWrapper = ({ title, children, formula }: ChartWrapperProps) => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">{children}</div>
          <p className="mt-2 text-xs text-muted-foreground italic text-center">
            {formula}
          </p>
        </CardContent>
      </Card>
    )
  }
  
  // Dados de exemplo (mova para um arquivo separado em produção)
  const data = {
    // ... (mantenha os mesmos dados do exemplo anterior)
  }
  
  export default function Dashboard() {
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
              {/* Adicione os outros MetricCards */}
            </div>
  
            <div className="grid gap-4 md:grid-cols-2">
              <ChartWrapper
                title="Taxa de Conversão por Segmento (%)"
                formula="(Contratos / Propostas) * 100 por segmento"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.conversionData}>
                    {/* ... configuração do gráfico ... */}
                  </BarChart>
                </ResponsiveContainer>
              </ChartWrapper>
              {/* Adicione os outros ChartWrappers */}
            </div>
          </TabsContent>
  
          <TabsContent value="analytics" className="space-y-4">
            {/* Conteúdo da aba de análise detalhada */}
          </TabsContent>
        </Tabs>
      </div>
    )
  }
  
  // libs/utils.ts
  import { type ClassValue, clsx } from "clsx"
  import { twMerge } from "tailwind-merge"
   
  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
  }
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Clock, Zap } from 'lucide-react';

const ProofMetrics = () => {
  const metrics = [
    {
      icon: TrendingUp,
      label: "Conversion Uplift",
      value: "+10–20%",
      description: "เพิ่มการแปลงจากผู้เยี่ยมชมเป็นลูกค้า",
      color: "accent",
      trend: "up"
    },
    {
      icon: TrendingDown,
      label: "Zero-result ลดลง", 
      value: "15–30%",
      description: "ลดผลการค้นหาที่ไม่มีสินค้า",
      color: "secondary",
      trend: "down"
    },
    {
      icon: Clock,
      label: "Time-to-Integrate",
      value: "≤ 7 วัน",
      description: "ระยะเวลาในการติดตั้งและใช้งาน",
      color: "warning",
      trend: "neutral"
    },
    {
      icon: Zap,
      label: "p95 Latency",
      value: "0.8–1.2s",
      description: "ความเร็วในการตอบสนอง 95% ของครั้ง",
      color: "primary",
      trend: "neutral"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "border-primary/20 bg-primary/5",
      secondary: "border-secondary/20 bg-secondary/5",
      accent: "border-accent/20 bg-accent/5",
      warning: "border-warning/20 bg-warning/5"
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground", 
      accent: "bg-accent text-accent-foreground",
      warning: "bg-warning text-warning-foreground"
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  const getValueColorClasses = (color: string) => {
    const colors = {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent", 
      warning: "text-warning"
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section className="py-20 bg-background-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
            📊 ผลลัพธ์ที่วัดได้
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Metrics ที่พิสูจน์ผล
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ข้อมูลจริงจากลูกค้าที่ใช้งาน SenSearch ในประเทศไทยและเอเชียตะวันออกเฉียงใต้
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const MetricIcon = metric.icon;
            return (
              <Card key={index} className={`${getColorClasses(metric.color)} border-2 hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}>
                <CardContent className="p-6 text-center relative z-10">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${getIconColorClasses(metric.color)} group-hover:scale-110 transition-transform duration-300`}>
                      <MetricIcon className="h-7 w-7" />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="mb-2">
                    <div className={`text-3xl font-bold ${getValueColorClasses(metric.color)} mb-1`}>
                      {metric.value}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {metric.label}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {metric.description}
                  </p>

                  {/* Trend indicator */}
                  {metric.trend !== 'neutral' && (
                    <div className="mt-4 flex justify-center">
                      <Badge variant="outline" className={`text-xs ${
                        metric.trend === 'up' ? 'text-accent' : 'text-secondary'
                      }`}>
                        {metric.trend === 'up' ? '📈 เพิ่มขึ้น' : '📉 ลดลง'}
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/50">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              อัพเดทข้อมูลแบบเรียลไทม์จากลูกค้าที่ใช้งานจริง
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofMetrics;
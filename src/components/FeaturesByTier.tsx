import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Store, 
  ShoppingBag, 
  Mic, 
  Image, 
  Video,
  BarChart3,
  Shield,
  Zap,
  Users,
  TrendingUp,
  ArrowDown
} from 'lucide-react';

const FeaturesByTier = () => {
  const tiers = [
    {
      id: "enterprise",
      title: "T1 — Large Enterprises & Marketplaces",
      icon: Building2,
      color: "primary",
      features: [
        { icon: Mic, text: "Multimodal Search (Text/Voice/Image/Video)" },
        { icon: BarChart3, text: "AI Data Mapping (SenseMap AI), Knowledge Graph per vertical" },
        { icon: TrendingUp, text: "Merchandising rules, pin/re-rank, synonyms ไทย" },
        { icon: Shield, text: "Realtime price/inventory, SLA, PDPA, on-prem/hybrid" }
      ],
      outcomes: [
        { label: "Conversion ↑", color: "accent" },
        { label: "Bounce ↓", color: "secondary" },
        { label: "Zero-result ↓", color: "warning" }
      ],
      cta: "คุยกับทีม Enterprise",
      ctaVariant: "primary" as const
    },
    {
      id: "midsize",
      title: "T2 — Mid-size Retail & B2B Platforms", 
      icon: Store,
      color: "secondary",
      features: [
        { icon: Zap, text: "Plug & Play API + Smart Connect (Self-service mapping)" },
        { icon: BarChart3, text: "Vertical schema packs: Fashion, Home & Living, Building materials" },
        { icon: Users, text: "Personalization จาก first-party data" },
        { icon: TrendingUp, text: "Analytics dashboard: Zero-result, Reformulation, Add-to-Cart" }
      ],
      outcomes: [
        { label: "Setup ≤ 7 วัน", color: "accent" },
        { label: "Self-service", color: "secondary" },
        { label: "Advanced Analytics", color: "primary" }
      ],
      cta: "ลองเชื่อมต่อภายใน 7 วัน",
      ctaVariant: "secondary" as const
    },
    {
      id: "sme",
      title: "T3 — SMEs / Long-tail Stores",
      icon: ShoppingBag,
      color: "accent", 
      features: [
        { icon: Zap, text: "ติดตั้งปลั๊กอิน 5 นาที, ไม่ต้องมีทีม AI" },
        { icon: TrendingUp, text: "แนะนำสินค้าอัตโนมัติ, ค้นหาภาษาไทยธรรมชาติ" },
        { icon: BarChart3, text: "แพ็กเกจ Freemium → โปรรายเดือน" },
        { icon: Users, text: "รองรับ Shopify / WooCommerce / LINE" }
      ],
      outcomes: [
        { label: "5 นาทีเริ่มใช้", color: "accent" },
        { label: "ไม่ต้องมีทีม AI", color: "secondary" },
        { label: "Freemium", color: "warning" }
      ],
      cta: "เริ่มใช้ฟรีทันที",
      ctaVariant: "outline" as const
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "border-primary/20 bg-primary/5",
      secondary: "border-secondary/20 bg-secondary/5", 
      accent: "border-accent/20 bg-accent/5"
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      accent: "bg-accent text-accent-foreground"
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section className="py-20 bg-background-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            โซลูชันสำหรับทุกขนาดธุรกิจ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Features ที่ออกแบบตาม Customer Tier
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            จาก Enterprise ระดับใหญ่ไปจนถึง SMEs ทุกธุรกิจมีโซลูชันที่เหมาะสม
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => {
            const TierIcon = tier.icon;
            return (
              <Card key={tier.id} className={`relative ${getColorClasses(tier.color)} border-2 hover:shadow-xl transition-all duration-300 group`}>
                <CardHeader className="pb-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getIconColorClasses(tier.color)} group-hover:scale-110 transition-transform duration-300`}>
                      <TierIcon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground leading-tight">
                        {tier.title}
                      </h3>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-4">
                    {tier.features.map((feature, idx) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={idx} className="flex items-start space-x-3">
                          <FeatureIcon className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground leading-relaxed">
                            {feature.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Outcomes */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-muted-foreground">ผลลัพธ์ที่คาดหวัง:</p>
                    <div className="flex flex-wrap gap-2">
                      {tier.outcomes.map((outcome, idx) => (
                        <Badge key={idx} className={`bg-${outcome.color}/10 text-${outcome.color} border-${outcome.color}/20`}>
                          {outcome.label}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button 
                      className={tier.ctaVariant === 'primary' ? 'btn-primary w-full' : tier.ctaVariant === 'secondary' ? 'btn-secondary w-full' : 'w-full'}
                      variant={tier.ctaVariant === 'primary' ? 'default' : tier.ctaVariant}
                    >
                      {tier.cta}
                    </Button>
                  </div>
                </CardContent>

                {/* Tier indicator */}
                <div className="absolute -top-3 left-6">
                  <Badge className={`${getIconColorClasses(tier.color)} text-xs font-bold`}>
                    T{index + 1}
                  </Badge>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <ArrowDown className="h-4 w-4" />
            <span className="text-sm">สามารถอัปเกรดระหว่าง Tier ได้ตามการเติบโตของธุรกิจ</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesByTier;
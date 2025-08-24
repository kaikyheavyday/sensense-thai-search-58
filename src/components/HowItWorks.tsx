import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, Settings, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Connect",
      subtitle: "เชื่อมต่อข้อมูล",
      description: "ต่อ ERP/PIM/e-commerce/สต็อก ผ่าน API, plugin, หรือ data feed",
      icon: Database,
      features: [
        "เชื่อมต่อใน 5 นาที",
        "รองรับ Shopify, WooCommerce, LINE",
        "Sync เรียลไทม์"
      ]
    },
    {
      number: "02", 
      title: "Map",
      subtitle: "จัดระบบข้อมูล",
      description: "จัดหมวด/แอตทริบิวต์/หน่วยไทย, เติมข้อมูลที่หาย, ทำ taxonomy per vertical",
      icon: Settings,
      features: [
        "Auto-mapping ด้วย AI",
        "รองรับหน่วยและภาษาไทย", 
        "Custom taxonomy ตาม vertical"
      ]
    },
    {
      number: "03",
      title: "Search & Measure", 
      subtitle: "ค้นหาและวัดผล",
      description: "ผลลัพธ์พร้อมซื้อ + ควบคุม ranking/merchandising + Analytics & A/B",
      icon: BarChart3,
      features: [
        "Multimodal search",
        "Real-time analytics",
        "A/B testing built-in"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
            วิธีการทำงาน
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            เริ่มใช้งานใน 3 ขั้นตอน
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            จากการเชื่อมต่อข้อมูลไปจนถึงการวัดผลธุรกิจ ทุกอย่างง่ายและรวดเร็ว
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative card-glass hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                      <p className="text-sm text-primary font-medium">{step.subtitle}</p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 pt-4">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Badge className="bg-accent/10 text-accent border-accent/20">
            ⚡ เริ่มต้นได้ภายใน 7 วัน
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "ฟรี",
      description: "เหมาะสำหรับร้านค้าเล็กและการทดลองใช้",
      features: [
        "1,000 คำค้น/เดือน",
        "Core search functionality",
        "Basic analytics",
        "รองรับภาษาไทย",
        "Email support"
      ],
      limitations: [
        "ไม่รองรับ Voice/Image search",
        "Analytics พื้นฐาน"
      ],
      cta: "เริ่มใช้ฟรี",
      popular: false,
      ctaVariant: "outline" as const
    },
    {
      name: "Pro",
      price: "5,000",
      period: "/เดือน",
      description: "สำหรับธุรกิจขนาดกลางที่ต้องการ Smart Connect",
      features: [
        "50,000 - 500,000 คำค้น/เดือน",
        "Smart Connect (Self-service mapping)",
        "Multimodal search พื้นฐาน",
        "Advanced analytics & reporting",
        "Personalization engine",
        "Priority email support",
        "API access",
        "รองรับทุก plugins"
      ],
      limitations: [],
      cta: "เริ่มทดลอง 7 วัน",
      popular: true,
      ctaVariant: "primary" as const
    },
    {
      name: "Enterprise",
      price: "ปรึกษา",
      period: "ราคา",
      description: "โซลูชันครบครันสำหรับองค์กรใหญ่และ Marketplace",
      features: [
        "Unlimited คำค้น",
        "Multimodal search เต็มรูปแบบ",
        "SenseMap AI (AI Data Mapping)",
        "Knowledge Graph per vertical",
        "99.9% SLA guarantee",
        "On-premise/Hybrid deployment",
        "SSO & Advanced security",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label options"
      ],
      limitations: [],
      cta: "ติดต่อฝ่ายขาย",
      popular: false,
      ctaVariant: "secondary" as const
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            💰 แผนการใช้งาน
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            เลือกแผนที่เหมาะกับธุรกิจของคุณ
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ทุกแผนรองรับภาษาไทย มี API & Plugins พร้อมใช้ สามารถอัปเกรดได้ตลอด
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary border-2 shadow-xl' : 'border-border'} card-glass hover:shadow-xl transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>แนะนำ</span>
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-1">
                    {plan.price === "ปรึกษา" ? (
                      <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    ) : (
                      <>
                        <span className="text-sm text-muted-foreground">฿</span>
                        <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      </>
                    )}
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.length > 0 && (
                    <div className="pt-3 border-t border-border/50">
                      <p className="text-xs text-muted-foreground mb-2">ข้อจำกัด:</p>
                      {plan.limitations.map((limitation, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-xs text-muted-foreground">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* CTA */}
                <Button 
                  className={`w-full ${plan.ctaVariant === 'primary' ? 'btn-primary' : plan.ctaVariant === 'secondary' ? 'btn-secondary' : ''}`}
                  variant={plan.ctaVariant === 'primary' ? 'default' : plan.ctaVariant}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom notes */}
        <div className="mt-16 text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-accent" />
              <span>ทดลองใช้ฟรี ไม่มีค่าซ่อนเร้น</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-accent" />
              <span>ยกเลิกได้ทุกเมื่อ</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-accent" />
              <span>อัปเกรด/ดาวน์เกรดได้ตลอด</span>
            </div>
          </div>

          <Button variant="outline" className="mt-4">
            ดูรายละเอียดราคาครบถ้วน
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
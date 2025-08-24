import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Server, Eye, Key, UserCheck } from 'lucide-react';

const SecurityCompliance = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "PDPA Compliance",
      description: "พร้อมใช้ตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล",
      features: ["Data minimization", "Consent management", "Right to be forgotten"]
    },
    {
      icon: Server,
      title: "Data Residency",
      description: "เลือกเก็บข้อมูลในประเทศไทยหรือตามความต้องการ",
      features: ["Thailand data centers", "Regional compliance", "Geo-fencing options"]
    },
    {
      icon: Eye,
      title: "PII Redaction", 
      description: "ซ่อนข้อมูลส่วนตัวอัตโนมัติในระบบค้นหา",
      features: ["Auto-detection", "Custom masking rules", "Audit logging"]
    },
    {
      icon: Key,
      title: "Access Control",
      description: "ระบบควบคุมการเข้าถึงและ SSO Integration",
      features: ["Role-based access", "SSO support", "Multi-factor auth"]
    }
  ];

  const architectureFeatures = [
    {
      icon: UserCheck,
      title: "Model-Agnostic",
      description: "ไม่ผูกมัดกับ AI Provider รายใดรายหนึ่ง",
      benefits: ["เลือก AI model ได้อิสระ", "ป้องกัน vendor lock-in", "Cost optimization"]
    },
    {
      icon: Lock,
      title: "Vendor-Neutral Policy",
      description: "นโยบายการกำหนดเส้นทางแบบเป็นกลาง",
      benefits: ["Policy-based routing", "Multi-provider fallback", "Performance optimization"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
            🔒 ความปลอดภัยและการปฏิบัติตามกฎหมาย
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Security & Compliance ระดับ Enterprise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ระบบรักษาความปลอดภัยที่ครอบคลุม พร้อมปฏิบัติตามกฎหมายไทยและมาตรฐานสากล
          </p>
        </div>

        <div className="space-y-16">
          {/* Security Features */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground text-center">
              มาตรฐานความปลอดภัย
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <Card key={index} className="card-glass hover:shadow-lg transition-all duration-300 group border-secondary/10">
                    <CardContent className="p-6 text-center h-full">
                      <div className="space-y-4 h-full flex flex-col">
                        {/* Icon */}
                        <div className="flex justify-center">
                          <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                            <FeatureIcon className="h-6 w-6 text-secondary" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-3">
                          <h4 className="font-semibold text-foreground">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                          
                          {/* Features list */}
                          <ul className="space-y-1">
                            {feature.features.map((item, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-center justify-center">
                                <div className="w-1 h-1 bg-secondary rounded-full mr-2"></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Status */}
                        <Badge variant="outline" className="text-xs text-secondary border-secondary/20">
                          ✓ Certified
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Architecture Features */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground text-center">
              สถาปัตยกรรมแบบเป็นกลาง
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {architectureFeatures.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <Card key={index} className="card-glass hover:shadow-lg transition-all duration-300 group border-primary/10">
                    <CardContent className="p-8">
                      <div className="flex space-x-4">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <FeatureIcon className="h-7 w-7 text-primary" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-foreground">{feature.title}</h4>
                            <p className="text-muted-foreground">{feature.description}</p>
                          </div>
                          
                          {/* Benefits */}
                          <ul className="space-y-2">
                            {feature.benefits.map((benefit, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Compliance badges */}
          <div className="text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <Badge className="bg-accent/10 text-accent border-accent/20">
                🇹🇭 PDPA Ready
              </Badge>
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                🛡️ SOC 2 Type II
              </Badge>
              <Badge className="bg-primary/10 text-primary border-primary/20">
                🔒 ISO 27001
              </Badge>
              <Badge className="bg-warning/10 text-warning border-warning/20">
                🌏 GDPR Compliant
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
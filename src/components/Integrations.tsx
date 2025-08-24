import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Integrations = () => {
  const integrationCategories = [
    {
      title: "E-commerce Platforms",
      logos: [
        { name: "Shopify", color: "#96BF48" },
        { name: "WooCommerce", color: "#96588A" },
        { name: "LINE OA", color: "#00C300" },
        { name: "Lazada", color: "#FF6900" }
      ]
    },
    {
      title: "Thai ERP/POS Systems", 
      logos: [
        { name: "FlowAccount", color: "#4A90E2" },
        { name: "Biznex", color: "#FF5722" },
        { name: "Stock2hand", color: "#9C27B0" },
        { name: "Saleshere", color: "#FF9800" }
      ]
    },
    {
      title: "Cloud Storage & Analytics",
      logos: [
        { name: "AWS S3", color: "#FF9900" },
        { name: "Google Cloud", color: "#4285F4" },
        { name: "BigQuery", color: "#4285F4" },
        { name: "Analytics", color: "#E37400" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            🔗 การเชื่อมต่อ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            เชื่อมต่อได้กับระบบที่คุณใช้อยู่
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            รองรับแพลตฟอร์มและระบบงานยอดนิยมในประเทศไทย พร้อม API และ Plugin ที่ใช้งานง่าย
          </p>
        </div>

        <div className="space-y-12">
          {integrationCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.logos.map((logo, logoIndex) => (
                  <Card key={logoIndex} className="card-glass hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      {/* Logo placeholder with color */}
                      <div 
                        className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: logo.color }}
                      >
                        {logo.name.charAt(0)}
                      </div>
                      
                      {/* Logo name */}
                      <p className="text-sm font-medium text-foreground">
                        {logo.name}
                      </p>
                      
                      {/* Status badge */}
                      <Badge variant="outline" className="mt-2 text-xs">
                        ✓ พร้อมใช้
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integration features */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-accent font-bold">API</span>
              </div>
              <h4 className="font-semibold text-foreground">RESTful API</h4>
              <p className="text-sm text-muted-foreground">
                API Documentation ครบครัน พร้อม SDK และ Sample Code
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-secondary font-bold">🔌</span>
              </div>
              <h4 className="font-semibold text-foreground">Plug & Play</h4>
              <p className="text-sm text-muted-foreground">
                ติดตั้งปลั๊กอินใน 5 นาที ไม่ต้องเปลี่ยนระบบเดิม
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">⚡</span>
              </div>
              <h4 className="font-semibold text-foreground">Real-time Sync</h4>
              <p className="text-sm text-muted-foreground">
                ซิงค์ข้อมูลสต็อก ราคา และโปรโมชันแบบเรียลไทม์
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            ไม่เจอระบบที่ใช้? 
            <span className="text-primary font-medium ml-1 cursor-pointer hover:underline">
              ติดต่อทีมเราเพื่อสร้าง Custom Integration
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
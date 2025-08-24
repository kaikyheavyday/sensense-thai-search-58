import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shirt, Home, Hammer, Building } from 'lucide-react';

const VerticalUseCases = () => {
  const verticals = [
    {
      title: "Fashion & Beauty",
      icon: Shirt,
      description: "ค้นหาด้วยรูป/เสียง → แมตช์รุ่น/ไซซ์/สีถูกต้อง",
      examples: [
        "อัปโหลดรูปชุดที่ชอบ หาเสื้อผ้าสไตล์คล้าย",
        "พูดว่า 'หากระเป๋าสีน้ำตาลใส่ออฟฟิศ'",
        "เซิร์ชคำว่า 'รองเท้าส้นสูง 3 นิ้ว สีดำ'"
      ],
      color: "primary"
    },
    {
      title: "Home & Living", 
      icon: Home,
      description: "ค้นหาสินค้าเฟอร์นิเจอร์และของแต่งบ้านแบบเป๊ะ",
      examples: [
        "ถ่ายรูปโซฟา หาชุดเฟอร์นิเจอร์เข้าชุด",
        "บอกว่า 'ต้องการโต๊ะทำงานขนาดเล็กสีไวท์'",
        "ค้นหา 'ผ้าม่านสีพาสเทลห้องนอน 3 เมตร'"
      ],
      color: "secondary"
    },
    {
      title: "Building Materials",
      icon: Hammer,
      description: "แมตช์วัสดุก่อสร้างตามสเปคและมาตรฐาน",
      examples: [
        "ถ่ายรูปกระเบื้อง หาเบอร์เหมือนจากสต็อก",
        "พูดว่า 'ต้องการเหล็กเส้น เกรด SD40 6 มม.'", 
        "ค้นหา 'สีน้ำกันรั่วใสไม่มีกลิ่น 5 ลิตร'"
      ],
      color: "accent"
    },
    {
      title: "B2B Procurement",
      icon: Building,
      description: "จับคู่ผลิตภัณฑ์ B2B ตามสเปคเทคนิค",
      examples: [
        "อัปโหลดแคตตาล็อค หาสินค้าทดแทนราคาดี",
        "บอกว่า 'หาเครื่องพิมพ์ A3 duplex 30 แผ่น/นาที'",
        "ค้นหา 'โปรเจคเตอร์ 4K ระยะโฟกัสสั้น'"
      ],
      color: "warning"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "border-primary/20 bg-primary/5 hover:bg-primary/10",
      secondary: "border-secondary/20 bg-secondary/5 hover:bg-secondary/10",
      accent: "border-accent/20 bg-accent/5 hover:bg-accent/10",
      warning: "border-warning/20 bg-warning/5 hover:bg-warning/10"
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

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
            Vertical Use Cases
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            รองรับทุกอุตสาหกรรม
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            AI Search ที่เข้าใจบริบทเฉพาะของแต่ละ vertical เพื่อผลลัพธ์ที่แม่นยำที่สุด
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((vertical, index) => {
            const VerticalIcon = vertical.icon;
            return (
              <Card key={index} className={`${getColorClasses(vertical.color)} border-2 hover:shadow-lg transition-all duration-300 group`}>
                <CardContent className="p-6 h-full">
                  <div className="space-y-4 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getIconColorClasses(vertical.color)} group-hover:scale-110 transition-transform duration-300`}>
                        <VerticalIcon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-foreground text-lg">
                        {vertical.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground font-medium">
                      {vertical.description}
                    </p>

                    {/* Examples */}
                    <div className="space-y-3 flex-1">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        ตัวอย่างการใช้งาน:
                      </p>
                      <ul className="space-y-2">
                        {vertical.examples.map((example, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground leading-relaxed flex items-start">
                            <div className="w-1 h-1 bg-current rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Badge */}
                    <div className="pt-2">
                      <Badge variant="outline" className="text-xs">
                        Multimodal Ready
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            มี vertical อื่นที่สนใจ? 
            <span className="text-primary font-medium ml-1 cursor-pointer hover:underline">
              ปรึกษาทีมเราเพื่อ custom solution
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default VerticalUseCases;
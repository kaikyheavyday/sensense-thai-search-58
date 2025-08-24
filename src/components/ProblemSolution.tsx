import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    "ค้นหาไม่ตรงใจ ผู้ใช้หาสินค้าไม่เจอ",
    "ต้องลองหลายรอบ จึงจะได้ผลลัพธ์ที่ต้องการ",
    "Zero-result ทำให้ลูกค้าออกจากเว็บไซต์",
    "ทีม dev ทำ search เองแพงและช้า"
  ];

  const solutions = [
    {
      title: "Smart Connect",
      description: "Self-Service Data Mapping",
      features: ["เชื่อมต่อข้อมูลอัตโนมัติ", "จัดหมวดหมู่สินค้าอัจฉริยะ", "ไม่ต้องมีทีม AI"]
    },
    {
      title: "SenseMap AI", 
      description: "AI-Driven Data Mapping & Normalization",
      features: ["ทำความสะอาดข้อมูลด้วย AI", "สร้าง Knowledge Graph", "เรียนรู้จากพฤติกรรมผู้ใช้"]
    }
  ];

  return (
    <section className="py-20 bg-background-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            แก้ปัญหาการค้นหาที่ใช้ไม่ได้จริง
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            จากปัญหาที่พบบ่อยในระบบค้นหาทั่วไป สู่โซลูชันที่ออกแบบมาเพื่อตลาดไทยและเอเชียตะวันออกเฉียงใต้
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Problems */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <XCircle className="h-6 w-6 text-red-500 mr-3" />
              ปัญหาที่พบ
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 text-accent mr-3" />
              โซลูชัน SenSearch
            </h3>
            <Card className="card-glass">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-3">
                    Multimodal AI + Plug & Play + Localized TH/SEA
                  </Badge>
                </div>
                <div className="space-y-6">
                  {solutions.map((solution, index) => (
                    <div key={index} className="space-y-3">
                      <h4 className="font-semibold text-foreground">{solution.title}</h4>
                      <p className="text-sm text-muted-foreground">{solution.description}</p>
                      <ul className="space-y-1">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
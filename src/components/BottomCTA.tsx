import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';

const BottomCTA = () => {
  return (
    <>
      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-medium text-foreground hidden sm:block">
                พร้อมเพิ่ม Conversion จากการค้นหา?
              </span>
              <span className="font-medium text-foreground sm:hidden">
                พร้อมเพิ่ม Conversion?
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button className="btn-primary" size="sm">
                <span>เริ่มใช้ฟรี</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              🚀 เริ่มต้นเดินทางสู่ AI Search
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              พร้อมเพิ่ม Conversion จากการค้นหาแล้วใช่ไหม?
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              เริ่มใช้ SenSearch วันนี้ และดูผลลัพธ์ที่วัดได้จริงภายใน 7 วัน
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-xl">
                เริ่มใช้ฟรี
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 space-y-4">
              <p className="text-white/70 text-sm">
                เชื่อถือโดยธุรกิจกว่า 50+ แห่งในไทยและเอเชียตะวันออกเฉียงใต้
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-white/60 text-sm">
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>ทดลองใช้ฟรี</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>ติดตั้งใน 5 นาที</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-warning rounded-full"></span>
                  <span>ยกเลิกได้ทุกเมื่อ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BottomCTA;
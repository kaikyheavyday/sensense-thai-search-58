import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mic, Search, Image, Video } from 'lucide-react';
import heroMockup from '@/assets/hero-mockup.jpg';
import trustBadges from '@/assets/trust-badges.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background-subtle to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                🚀 AI Search ที่เข้าใจภาษาไทย
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Multimodal AI Search</span>
                <br />
                <span className="text-foreground">ที่รู้ใจผู้ใช้</span>
                <br />
                <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl">และรู้จักแคตตาล็อกของคุณ</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                ค้นหาด้วยเสียง ข้อความ รูป หรือวิดีโอ → ผลลัพธ์พร้อมซื้อ เชื่อมต่อสต็อก ราคา และโปรโมชันเรียลไทม์
              </p>
            </div>

            {/* Multimodal Icons */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <div className="flex items-center space-x-2 text-primary">
                <Mic className="h-6 w-6" />
                <span className="text-sm font-medium">เสียง</span>
              </div>
              <div className="flex items-center space-x-2 text-secondary">
                <Search className="h-6 w-6" />
                <span className="text-sm font-medium">ข้อความ</span>
              </div>
              <div className="flex items-center space-x-2 text-accent">
                <Image className="h-6 w-6" />
                <span className="text-sm font-medium">รูป</span>
              </div>
              <div className="flex items-center space-x-2 text-warning">
                <Video className="h-6 w-6" />
                <span className="text-sm font-medium">วิดีโอ</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-primary text-lg px-8 py-6">
                ขอเดโม 30 นาที
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                เริ่มใช้ฟรี
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">เชื่อถือโดยแบรนด์ชั้นนำในไทยและเอเชียตะวันออกเฉียงใต้</p>
              <img 
                src={trustBadges} 
                alt="Trust badges from Thai and SEA marketplace partners"
                className="w-full max-w-md h-auto opacity-60 hover:opacity-80 transition-opacity"
              />
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroMockup} 
                alt="SenSearch multimodal AI search interface mockup showing voice, text, and image search capabilities"
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-accent text-accent-foreground shadow-lg">
                  Conversion ↑ 10–20%
                </Badge>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
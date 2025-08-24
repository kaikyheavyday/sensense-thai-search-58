import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const CustomerStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      company: "Fashion Forward Thailand",
      industry: "Fashion & Beauty",
      logo: "FF",
      logoColor: "#E91E63",
      quote: "ลูกค้าค้นหาด้วยรูปภาพได้แล้ว การแปลงเพิ่มขึ้นอย่างชัดเจน เราประหลาดใจกับผลลัพธ์",
      metric: "Add-to-Cart ↑ 18%",
      period: "ภายใน 6 สัปดาห์",
      name: "คุณนันทนา สิริวัฒน์",
      position: "Head of Digital, Fashion Forward Thailand"
    },
    {
      company: "HomeLiving Marketplace",
      industry: "Home & Living",
      logo: "HL",
      logoColor: "#FF9800",
      quote: "ระบบค้นหาเดิมทำให้ลูกค้าหาสินค้าไม่เจอ ตอนนี้พูดได้เลยว่าต้องการอะไร ระบบเข้าใจทันที",
      metric: "Zero-result ↓ 25%",
      period: "ใน 4 สัปดาห์",
      name: "คุณปรีชา วงศ์ธนากุล",
      position: "CTO, HomeLiving Marketplace"
    },
    {
      company: "BuildMart Pro",
      industry: "Building Materials",
      logo: "BM",
      logoColor: "#607D8B",
      quote: "สำหรับวัสดุก่อสร้าง ลูกค้าต้องการความแม่นยำสูง SenSearch ทำให้เราจับคู่สินค้าได้ตรงสเปคมากขึ้น",
      metric: "Conversion ↑ 12%",
      period: "ภายใน 8 สัปดาห์",
      name: "คุณสมชาย ก่อสร้างดี",
      position: "Managing Director, BuildMart Pro"
    },
    {
      company: "OfficeSupply Central",
      industry: "B2B Procurement",
      logo: "OS",
      logoColor: "#3F51B5",
      quote: "การจัดซื้อ B2B ต้องการความรวดเร็วและแม่นยำ ระบบช่วยให้ทีมขายหาผลิตภัณฑ์ให้ลูกค้าได้เร็วขึ้น",
      metric: "Search Speed ↑ 40%",
      period: "ใน 3 สัปดาห์",
      name: "คุณวิภาวี จัดหาดี",
      position: "Procurement Head, OfficeSupply Central"
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentData = stories[currentStory];

  return (
    <section id="customers" className="py-20 bg-background-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
            🗣️ เสียงจากลูกค้า
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            ผลลัพธ์จริงจากลูกค้าที่ใช้งาน
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ฟังประสบการณ์จากธุรกิจต่างๆ ที่เปลี่ยนมาใช้ SenSearch และได้ผลลัพธ์ที่วัดได้จริง
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main story card */}
          <Card className="card-glass overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Company info */}
                <div className="text-center md:text-left space-y-4">
                  {/* Logo */}
                  <div className="flex justify-center md:justify-start">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                      style={{ backgroundColor: currentData.logoColor }}
                    >
                      {currentData.logo}
                    </div>
                  </div>
                  
                  {/* Company details */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{currentData.company}</h3>
                    <p className="text-muted-foreground">{currentData.industry}</p>
                  </div>

                  {/* Metric badge */}
                  <Badge className="bg-accent text-accent-foreground shadow-md">
                    {currentData.metric}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{currentData.period}</p>
                </div>

                {/* Quote */}
                <div className="md:col-span-2 space-y-6">
                  <div className="relative">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed pl-6">
                      "{currentData.quote}"
                    </blockquote>
                  </div>

                  {/* Attribution */}
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{currentData.name}</p>
                    <p className="text-sm text-muted-foreground">{currentData.position}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevStory}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>ก่อนหน้า</span>
            </Button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentStory ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextStory}
              className="flex items-center space-x-2"
            >
              <span>ถัดไป</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">ลูกค้าที่ใช้งาน</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">15+</div>
            <div className="text-sm text-muted-foreground">Verticals ต่างๆ</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">95%</div>
            <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warning">7 วัน</div>
            <div className="text-sm text-muted-foreground">เฉลี่ยการติดตั้ง</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
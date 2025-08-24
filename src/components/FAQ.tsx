import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const FAQ = () => {
  const faqs = [
    {
      question: "ใช้กับ Shopify/WooCommerce/LINE ได้ไหม?",
      answer: "ได้ครับ เรามีปลั๊กอินพร้อมใช้สำหรับ Shopify, WooCommerce, และ LINE Official Account สามารถติดตั้งได้ใน 5 นาที ไม่ต้องมีความรู้ด้านเทคนิค"
    },
    {
      question: "รองรับภาษาไทยแค่ไหน?",
      answer: "รองรับภาษาไทยครบถ้วน รวมถึงชื่อสินค้า หน่วยไทย คำพ้องความหมาย และสามารถเข้าใจบริบทการค้นหาแบบไทยๆ เช่น 'เสื้อใส่ทำงาน' หรือ 'ของฝากจากเชียงใหม่'"
    },
    {
      question: "วิดีโอ/รูปค้นหาได้อย่างไร?",
      answer: "ลูกค้าสามารถอัปโหลดรูปหรือถ่ายรูปสินค้าที่ต้องการ ระบบจะใช้ AI วิเคราะห์และแปลงเป็นข้อมูลเพื่อค้นหา SKU ที่ตรงกับลักษณะ สี รูปร่าง และสไตล์ รองรับทั้งรูปสินค้าและวิดีโอสั้นๆ"
    },
    {
      question: "ความเร็วในการตอบสนองเป็นอย่างไร?",
      answer: "p95 latency อยู่ที่ 0.8-1.2 วินาที ขึ้นอยู่กับแผนและปริมาณทราฟฟิก สำหรับแผน Enterprise เรารับประกัน SLA 99.9% uptime พร้อมระบบ monitoring แบบเรียลไทม์"
    },
    {
      question: "ความปลอดภัยของข้อมูลเป็นอย่างไร?",
      answer: "เราปฏิบัติตาม PDPA และมาตรฐาน SOC 2 Type II รองรับการเก็บข้อมูลในประเทศไทย มี PII redaction อัตโนมัติ และระบบควบคุมการเข้าถึงแบบ role-based พร้อม SSO integration"
    },
    {
      question: "ราคาเริ่มต้นอย่างไร?",
      answer: "เริ่มใช้ฟรี 1,000 คำค้นต่อเดือน แผน Pro เริ่มต้น 5,000 บาทต่อเดือน แผน Enterprise ปรึกษาราคาตามการใช้งาน ทุกแผนไม่มีค่าติดตั้ง สามารถยกเลิกได้ทุกเมื่อ"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            ❓ คำถามที่พบบ่อย
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            FAQ
          </h2>
          <p className="text-lg text-muted-foreground">
            คำตอบสำหรับคำถามที่ลูกค้าถามบ่อยเกี่ยวกับ SenSearch
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-xl overflow-hidden bg-white/50 backdrop-blur-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/50 transition-colors duration-200">
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="pt-2 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact for more questions */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            มีคำถามอื่นๆ? 
            <span className="text-primary font-medium ml-1 cursor-pointer hover:underline">
              ติดต่อทีมซัพพอร์ตของเรา
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
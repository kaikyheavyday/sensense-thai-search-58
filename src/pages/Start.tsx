import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Start = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background-subtle to-background">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="block">
          <Input type="file" />
          <Button size="lg" className="btn-primary text-lg px-8 py-6 mt-10">
            ส่งไฟล์​
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Start;

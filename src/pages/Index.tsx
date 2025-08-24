import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import FeaturesByTier from '@/components/FeaturesByTier';
import VerticalUseCases from '@/components/VerticalUseCases';
import ProofMetrics from '@/components/ProofMetrics';
import Integrations from '@/components/Integrations';
import Pricing from '@/components/Pricing';
import SecurityCompliance from '@/components/SecurityCompliance';
import CustomerStories from '@/components/CustomerStories';
import FAQ from '@/components/FAQ';
import BottomCTA from '@/components/BottomCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <FeaturesByTier />
      <VerticalUseCases />
      <ProofMetrics />
      <Integrations />
      <Pricing />
      <SecurityCompliance />
      <CustomerStories />
      <FAQ />
      <BottomCTA />
      <Footer />
    </div>
  );
};

export default Index;

import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$8',
      period: 'per lesson',
      description: 'Perfect for beginners trying out the platform',
      features: [
        '1-on-1 live lessons',
        'Native speaker instructors',
        'Flexible scheduling',
        'Lesson recordings',
        'Basic progress tracking',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Premium',
      price: '$49',
      period: 'per month',
      description: 'Best value for serious learners',
      features: [
        '8 lessons per month',
        'Priority instructor matching',
        'Advanced progress analytics',
        'Group conversation practice',
        'Customized learning plan',
        '24/7 support',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'for teams',
      description: 'For schools and organizations',
      features: [
        'Unlimited lessons',
        'Dedicated account manager',
        'Custom curriculum',
        'API access',
        'Progress dashboard',
        'SSO integration',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple, <span className="text-lime">Transparent</span> Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your learning goals. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-lime text-white shadow-xl scale-105' 
                  : 'bg-white border-2 border-gray-100 hover:border-lime/50'
              } transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-lime px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>
                  {plan.period}
                </p>
                <p className={`text-sm mt-3 ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'bg-white/20' : 'bg-lime/10'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-lime'}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full rounded-full py-6 ${
                  plan.popular 
                    ? 'bg-white text-lime hover:bg-gray-100' 
                    : 'bg-lime text-white hover:bg-lime-dark'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Trusted by 10,000+ learners worldwide • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

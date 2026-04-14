import { useEffect, useState, useRef } from 'react';
import { Users, Globe, BookOpen, Star, Award, Clock } from 'lucide-react';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      icon: Users,
      value: 10000,
      suffix: '+',
      label: 'Active Learners',
    },
    {
      icon: Globe,
      value: 50,
      suffix: '+',
      label: 'Languages',
    },
    {
      icon: BookOpen,
      value: 500,
      suffix: '+',
      label: 'Expert Instructors',
    },
    {
      icon: Star,
      value: 4.8,
      suffix: '',
      label: 'Average Rating',
      isDecimal: true,
    },
    {
      icon: Award,
      value: 15,
      suffix: '+',
      label: 'Countries',
    },
    {
      icon: Clock,
      value: 100000,
      suffix: '+',
      label: 'Lessons Completed',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ value, suffix, isDecimal }: { value: number; suffix: string; isDecimal?: boolean }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span>
        {isDecimal ? displayValue.toFixed(1) : Math.floor(displayValue).toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-lime">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Trusted by Learners Worldwide
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Join our growing community of language learners and native speakers
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-4xl lg:text-5xl font-bold text-white mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
              </p>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

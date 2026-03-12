import { Link, Navigate } from "react-router-dom";
import { Zap, Target, Calendar, ArrowRight, Sparkles, Clock, } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { useAuth } from "../context/AuthContext";
import preview from "../assets/preview.png"

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Plans",
    description:
      "Get a training program tailored to your goals, experience, and schedule.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description:
      "Whether you want to build muscle, lose fat, or get stronger — we optimize for your goal.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description:
      "Plans that fit your lifestyle. Train 2 days or 6 — we adapt to you.",
  },
  {
    icon: Clock,
    title: "Time-Efficient",
    description:
      "Every workout is designed to maximize results in your available time.",
  },
];

export default function Home() {
  const { user, isLoading } = useAuth();

  // Redirect authenticated users to profile
  if (!isLoading && user) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-26 pb-20 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-accent/14 via-transparent to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/18 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted">
              AI-powered training plans
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Your Perfect
            <br />
            <span className="text-accent">Gym Plan</span> in
            Seconds
          </h1>

          <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
            Stop guessing. Get a personalized training program built by AI,
            tailored to your goals, experience, and schedule.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding">
              <Button size="lg" className="gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/onboarding">
              <Button variant="secondary" size="lg">
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative mt-10 max-w-3xl mx-auto hidden sm:block">
          <div className="rounded-sm border border-border bg-card/70 backdrop-blur-xl p-2.5 shadow-sm shadow-accent/60">
            <div className="rounded-lg bg-background/90 aspect-video border border-border/50 flex flex-col items-center justify-center relative overflow-hidden">
              <img src={preview} alt="preview" className="w-full h-full object-cover relative z-10"/>
              <div className="absolute inset-0 bg-linear-to-tr from-accent/5 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why GymAI?</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We combine fitness expertise with AI to create programs that
              actually work for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature) => (
              <Card key={feature.title} variant="bordered" className="group hover:border-accent/50 hover:bg-muted/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2 border-b border-t py-2">{feature.title}</h3>
                <p className="text-muted text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-linear-to-t from-accent/14 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">What are you waiting for?</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Get your personalized training program right now!
            </p>

            <div className="py-10">
              <Link to="/onboarding">
              <Button size="lg" className="gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5"/>
              </Button>
            </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
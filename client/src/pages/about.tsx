import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function About() {
  const team = [
    {
      name: "Atif Kanji",
      role: "Coordinator",
      bio: "Responsible for overall direction of the company. 20+ years of experience in Fortune 500, Strategy Consulting, and Entrepreneurship.",
      initials: "AK",
    },
    {
      name: "Jimmy Bijlani",
      role: "Rainmaker",
      bio: "Carries out the message of Knowledge Agents to the world. Past experience in Strategy Consulting, Big Tech, and Entrepreneurship.",
      initials: "JB",
    },
    {
      name: "Kirk Rohani",
      role: "AI Guy",
      bio: "Advises on platform, product, and ensures we keep up with the latest and greatest when it comes to AI.",
      initials: "KR",
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Customer Success",
      desc: "We measure our success by the tangible business value we deliver to our customers. Every feature, every decision starts with their needs.",
    },
    {
      icon: "🔐",
      title: "Security First",
      desc: "Enterprise data security isn't optional—it's foundational. We build with security and compliance at the core, never as an afterthought.",
    },
    {
      icon: "⚡",
      title: "Innovation",
      desc: "We push the boundaries of what's possible with AI while maintaining production-grade reliability that enterprises demand.",
    },
  ];

  return (
    <div className="flex flex-col gap-0">
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-display">
            Orchestrating Enterprise Knowledge
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're building the first AI-native knowledge orchestrator—where
            documents, incidents, and tribal knowledge become intelligent,
            self-improving systems
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            At Knowledge Agents, we believe knowledge shouldn't be scattered
            across PDFs, SharePoint folders, and siloed chatbots. We're on a
            mission to create the first AI-native knowledge orchestration
            layer—where documents, real-world incidents, and tribal knowledge
            converge into intelligent, self-improving systems that amplify human
            expertise.
          </p>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-card border border-border rounded-2xl text-center"
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Experienced leaders from AI, enterprise software, and regulated
              industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-teal-400 flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-sm text-primary font-medium mb-4">
                  {member.role}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

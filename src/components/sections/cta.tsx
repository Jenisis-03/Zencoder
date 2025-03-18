import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaLock, FaUsers, FaClipboardList, FaUserCog, FaUserShield, FaLayerGroup } from "react-icons/fa";

export function CTA() {
  return (
    <section className="w-full py-16 md:py-24 bg-black text-white">
      <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Enterprise-Grade Security and Compliance You Can Trust</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-lg">
            Designed for Enterprise Security and Compliance. Zencoder is fully compliant with ISO 27001, GDPR,
            CCPA, and SOC 2 (coming Q1), ensuring your enterprise meets the most stringent privacy standards.
          </p>
        </div>
        
        {/* Right Side: Features Grid */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 lg:mt-0 lg:ml-12">
          <FeatureCard icon={<FaLock />} title="SSO" description="Zencoder supports single sign-on for seamless access." />
          <FeatureCard icon={<FaClipboardList />} title="Audit Trails" description="Zencoder logs every activity for full traceability." />
          <FeatureCard icon={<FaUserCog />} title="Admin Portal" description="Zencoder centralizes security management in one dashboard." />
          <FeatureCard icon={<FaUsers />} title="Team Management" description="Zencoder streamlines team oversight for efficient control." />
          <FeatureCard icon={<FaLayerGroup />} title="User Groups" description="Zencoder organizes users into groups for tailored access." />
          <FeatureCard icon={<FaUserShield />} title="SAML" description="Zencoder integrates SAML for secure, standards-based authentication." />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-orange-500/20 rounded-xl text-orange-500 text-2xl">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}

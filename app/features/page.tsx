import Link from "next/link";
import Image from "next/image";
import AppSidebar from "../../components/AppSidebar";

export const metadata = {
    title: "Feature Ecosystem · VitaForge",
    description: "Experience the Future of Fitness with VitaForge.",
};

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-[#F7F6F9] relative overflow-hidden font-sans">
            {/* Background Gradients */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-60"
                style={{
                    background: 'radial-gradient(141.42% 141.42% at 0% 0%, #D7C8DD 0%, rgba(215, 200, 221, 0) 50%), radial-gradient(141.42% 141.42% at 100% 100%, #F1F0F4 0%, rgba(241, 240, 244, 0) 50%)'
                }}
            />


            {/* Main Content */}
            <main className="relative z-10 container-custom flex flex-col items-center pt-16 pb-24 gap-16 max-w-[1280px] mx-auto px-6 lg:ml-72">

                {/* Hero Section */}
                <section className="flex flex-col items-center text-center gap-5 max-w-3xl">
                    <div className="px-4 py-1.5 bg-white/40 border border-slate-200/50 backdrop-blur-md rounded-full shadow-sm">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[1px]">Aura Performance</span>
                    </div>
                    <h1 className="text-[56px] font-black text-[#2D2F31] leading-[1.1] tracking-[-1.4px]">
                        Experience the <span className="bg-gradient-to-r from-[#A7295A] to-[#604F9E] bg-clip-text text-transparent">Future of Fitness.</span>
                    </h1>
                    <p className="text-[18px] text-[#5A5B5E] leading-[29px] max-w-2xl">
                        VitaForge combines human kinetic analysis with advanced AI to deliver a wellness experience that adapts to your body's specific biological rhythms.
                    </p>
                </section>

                {/* Features Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1232px]">

                    {/* Large AI Feature */}
                    <div className="md:col-span-2 md:row-span-2 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-[32px] p-10 flex flex-col justify-between relative overflow-hidden min-h-[480px] shadow-sm">
                        {/* Abstract Decorative Blob */}
                        <div className="absolute -right-20 -bottom-20 w-[320px] h-[320px] bg-gradient-to-br from-[#604F9E] to-[#BAA7FE] opacity-20 blur-[50px] rounded-full pointer-events-none" />

                        <div className="flex justify-between items-start z-10 h-full">
                            <div className="flex flex-col gap-5 max-w-[400px]">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h2 className="text-[30px] font-bold text-[#2D2F31] leading-tight mt-2">VitaForge AI Assistant</h2>
                                <p className="text-[18px] text-[#5A5B5E] leading-[28px]">
                                    Your personal high-performance coach, available 24/7 to adjust your training loads and macros in real-time based on biometric data.
                                </p>
                            </div>

                            {/* Graphic placeholder */}
                            <div className="hidden lg:flex flex-col justify-center items-center w-[220px] h-[300px] bg-slate-100/50 rounded-3xl border border-white/60 shadow-inner relative overflow-hidden mt-4 mr-4 backdrop-blur-md">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-pink/10 opacity-50" />
                                <svg className="w-32 h-32 text-primary/30 mix-blend-multiply" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                            </div>
                        </div>

                        <div className="z-10 mt-8">
                                <Link href="/features/chatbot" className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-ready text-white rounded-full font-semibold shadow-[0_10px_15px_-3px_rgba(96,79,158,0.2)] hover:scale-105 transition-transform w-[220px]">
                                    Launch Assistant
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                        </div>
                    </div>

                    {/* Training Programs */}
                    <FeatureCard
                        icon="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        title="Training Programs"
                        description="Bespoke athletic regimens built for your specific biomechanics."
                        iconColor="text-[#A7295A]"
                        iconBg="bg-[#A7295A]/10"
                        href="/features/trainingprograms"
                    />

                    {/* Diet Recommendations */}
                    <FeatureCard
                        icon="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        title="Diet Recommendations"
                        description="Nutritional mapping that optimizes recovery and hormone balance."
                        iconColor="text-[#883A97]"
                        iconBg="bg-[#883A97]/10"
                        href="/features/dietprograms"
                    />

                    {/* Task Scheduler */}
                    <FeatureCard
                        icon="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        title="Rituals"
                        description="Sync your wellness routine with your professional calendar seamlessly."
                        iconColor="text-[#604F9E]"
                        iconBg="bg-[#604F9E]/10"
                        href="/features/rituals"
                    />

                    {/* Sleep Analysis */}
                    <FeatureCard
                        icon="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        title="Sleep Analysis"
                        description="Deep-tier recovery tracking to ensure you wake up ready to peak."
                        iconColor="text-[#7C3AED]"
                        iconBg="bg-[#7C3AED]/10"
                        href="/features/sleepanalysis"
                    />

                    {/* Men's Wellness */}
                    <FeatureCard
                        icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        title="Men's Wellness"
                        description="Targeted endocrine health and longevity strategies for men."
                        iconColor="text-slate-700"
                        iconBg="bg-slate-100"
                        href="/features/menswellness"
                    />

                    {/* Pose Detection */}
                    <FeatureCard
                        icon="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        title="Pose Detection"
                        description="AI-driven form correction using your device's camera for safety."
                        iconColor="text-emerald-600"
                        iconBg="bg-emerald-100"
                        href="/features/posedetection"
                    />
                </div>

                {/* CTA Section */}
                <section className="w-full max-w-[1232px] bg-[#F1F0F4] border border-slate-200/60 rounded-[40px] px-12 py-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 mt-4 shadow-sm">
                    {/* Decorative Circle */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

                    <div className="flex flex-col gap-8 max-w-[540px] z-10">
                        <div className="space-y-4">
                            <h2 className="text-[36px] font-bold text-[#2D2F31] leading-[1.11] tracking-[-0.9px]">
                                Ready to Forge Your Peak Potential?
                            </h2>
                            <p className="text-[18px] text-[#5A5B5E] leading-[29px]">
                                Join over 25K elite athletes and bio-hackers who use VitaForge to transcend their limits. Start your 14-day premium trial today.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <button className="px-8 py-4 bg-gradient-ready text-white rounded-full font-bold shadow-[0_10px_15px_-3px_rgba(96,79,158,0.2)] hover:scale-105 transition-transform">
                                Get Started Now
                            </button>
                            <button className="px-8 py-4 bg-white/60 border border-slate-200 backdrop-blur-md text-[#2D2F31] rounded-full font-bold hover:bg-white transition-colors">
                                View All Plans
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-[540px] relative z-10 h-[380px] mt-8 lg:mt-0">
                        <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl relative border border-white/20">
                            <Image
                                src="/images/landing/hero_runner.png"
                                alt="Workout Performance"
                                fill
                                sizes="(max-width: 1024px) 100vw, 540px"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                        {/* Stats Chip Overlap */}
                        <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] rounded-2xl p-5 flex items-center gap-4 pr-8">
                            <div className="w-12 h-12 bg-[#A7295A]/10 rounded-full flex items-center justify-center text-[#A7295A]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[1px]">User Recovery</span>
                                <span className="text-2xl font-bold text-[#2D2F31]">+42% Avg.</span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}

function FeatureCard({ icon, title, description, iconColor, iconBg, href }: { icon: string; title: string; description: string; iconColor: string; iconBg: string; href?: string }) {
    const card = (
        <div className="bg-white border border-slate-200/60 rounded-[24px] p-6 flex flex-col gap-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group min-h-[240px]">
            <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center ${iconColor} group-hover:scale-110 transition-transform`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
                </svg>
            </div>
            <div className="flex flex-col gap-2 mt-auto pb-2">
                <h3 className="text-[20px] font-bold text-[#2D2F31] leading-tight">{title}</h3>
                <p className="text-[14px] text-[#5A5B5E] leading-[20px]">{description}</p>
            </div>
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="group">{card}</Link>
        );
    }

    return card;
}

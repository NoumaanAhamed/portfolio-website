import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import { SparklesCore } from "./ui/sparkles";

function HeroSection() {
    return (
        <div
            className="h-auto md:h-[45rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
        >
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="blue" />

            <div className="p-4 relative z-10 w-full text-center" >
                {/* change the margin top */}
                <h1
                    className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >Hi, I&apos;m Noumaan.</h1>


                {/* <div className="flex items-center justify-center m-4">
                    <TextRevealCard
                        text=" oh, What's This... ?"
                        revealText="Welcome to my Portfolio"
                    >
                        <TextRevealCardTitle>
                            Sometimes, you just need to see it.
                        </TextRevealCardTitle>
                        <TextRevealCardDescription>
                            This is a text reveal card. Hover over the card to reveal the hidden
                            text.
                        </TextRevealCardDescription>
                    </TextRevealCard>
                </div> */}

                <p
                    className="m-8 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
                >
                    Full-Stack Developer | Builder | Web3 | AI
                </p>
                {/* <div className="flex flex-col items-center justify-center  ">

                    <TypewriterEffectSmooth words={words} />
                </div> */}

                <div className="m-8">
                    <Link href={"/"}>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Resume
                        </Button>
                    </Link>
                </div>
                {/* mx-auto for centering the sparkles */}

                {/*Sparkles component should not be visible in mobile devices*/}
                <div className="w-[40rem] h-40 relative mx-auto hidden md:block">
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1000}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>

                {/* <div className="w-[40rem] h-40 relative mx-auto ">
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1000}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div> */}
            </div>
            {/* <div>
                <TypewriterEffectSmooth words={words} />
            </div> */}

        </div>
    )
}

export default HeroSection
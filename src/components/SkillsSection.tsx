"use client";

import skillsData from '@/data/skills.json'
import { ThreeDCardComponent } from './3dcard'

function SkillsSection() {


    return (
        <div className="py-12 bg-blue-950">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED SKILLS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Tools and Technologies</p>

                </div>
            </div>
            <div className="mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 justify-center">
                    {skillsData.skills.map((skills) => (
                        <div key={skills.id} className="flex justify-center">
                            <ThreeDCardComponent
                                title={skills.name}
                                imageLink={skills.imageLink}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillsSection

// "use client";
// import React from "react";
// import { Boxes } from "./ui/background-boxes";
// import { cn } from "@/utils/cn";

// export function BackgroundBoxesDemo() {
//     return (
//         <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
//             <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

//             <Boxes />
//             <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
//                 Tailwind is Awesome
//             </h1>
//             <p className="text-center mt-2 text-neutral-300 relative z-20">
//                 Framer motion is the best animation library ngl
//             </p>
//         </div>
//     );
// }

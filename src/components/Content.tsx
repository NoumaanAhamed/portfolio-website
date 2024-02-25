"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        title: "Who am I?",
        description:
            "Hello! I'm Mohammed Noumaan, a passionate full-stack developer and problem solver. Currently, I'm pursuing my Bachelors degree in Information Technology at Rajalakshmi Engineering College in Chennai, India, with an expected graduation year of 2025. ",
    },
    {
        title: "What do i do?",
        description:
            "I'm a software developer with experience in the MERN stack. I specialize in Backend Devolopment along with frontend frameworks like React and Next.js. My knowledge extends to fundamental data structures and algorithms, making me well-versed in full-stack web development.",
    },

];
export function StickyScrollRevealDemo() {
    return (
        <div>
            <StickyScroll content={content} />
        </div>
    );
}

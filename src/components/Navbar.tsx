"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { GITHUB_URL } from "@/data/socials";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center ">
            <Navbar className="top-5" />
            {/* <p className="text-black dark:text-white">
                The Navbar will show on top of the page
            </p> */}
        </div>
    );
}

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <HoveredLink href="/">
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </HoveredLink>
                <HoveredLink href="/contact">
                    <MenuItem setActive={setActive} active={active} item="Contact">
                    </MenuItem>
                </HoveredLink>
                <MenuItem setActive={setActive} active={active} item="Projects">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="AI-Powered Todo App"
                            href="#"
                            src="https://res.cloudinary.com/dpuhvqdlu/image/upload/v1706017778/cld-sample-3.jpg"
                            description="AI-powered todo app that makes you 10x more productive deployed on AWS."
                        />
                        <ProductItem
                            title="Visual Search Ecommerce App"
                            href="#"
                            src="https://res.cloudinary.com/dpuhvqdlu/image/upload/v1706017776/cld-sample.jpg"
                            description="Ecommerce app with image search using AI"
                        />
                        <ProductItem
                            title="CryptoSwift"
                            href="#"
                            src="https://res.cloudinary.com/dpuhvqdlu/image/upload/v1706017777/cld-sample-2.jpg"
                            description="Mobile app to convert crypto to cash and vice-versa."
                        />
                        <ProductItem
                            title="Youtube Like Backend"
                            href="#"
                            src="https://res.cloudinary.com/dpuhvqdlu/image/upload/v1706017778/cld-sample-4.jpg"
                            description="Production ready backend for a video sharing app."
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Socials">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href={GITHUB_URL} target="_blank" >Github</HoveredLink>
                        <HoveredLink href="/individual">LinkedIn</HoveredLink>
                        <HoveredLink href="/team">Twitter(X)</HoveredLink>
                        <HoveredLink href="/team">Instagram</HoveredLink>

                    </div>
                </MenuItem>
                <HoveredLink href="/blog">
                    <MenuItem setActive={setActive} active={active} item="Blog">
                    </MenuItem>
                </HoveredLink>
            </Menu>
        </div>
    );
}

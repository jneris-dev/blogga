import { ScrollToTopButton } from "./ScrollToTopButton";

export function Footer() {
    return (
        <>
            <footer className="w-full max-w-[970px] mx-auto text-center px-5 pb-5">
                <hr className="mb-10 border-zinc-300" />
                <p className="font-medium text-md leading-relaxed">
                    Copyright 2022 - Blogga
                </p>
            </footer>
            <ScrollToTopButton />
        </>
    );
}
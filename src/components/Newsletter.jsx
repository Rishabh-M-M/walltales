import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export function SignupFormDemo() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Newsletter sign-up form submitted");
    };

    return (
        <div className="h-[60vh] bg-teal-700 flex justify-center items-center">
            <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-6 md:p-8 shadow-lg bg-white dark:bg-black text-neutral-800 dark:text-neutral-200 transition-all ease-in-out duration-300">
                <h2 className="font-bold text-xl">
                    Sign up for our Newsletter
                </h2>
                <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Stay updated with the latest news, tips, and updates. Sign up for our newsletter!
                </p>
                <form className="my-8" onSubmit={handleSubmit}>
                    <LabelInputContainer className="mb-6">
                        <Label htmlFor="email" className="transition-all duration-300 ease-in-out text-neutral-800 dark:text-neutral-200">
                            Email Address
                        </Label>
                        <Input
                            id="email"
                            placeholder="youremail@example.com"
                            type="email"
                            required
                            className="transition-all duration-300 ease-in-out focus:ring-2 focus:ring-cyan-300 dark:focus:ring-indigo-500 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100"
                        />
                    </LabelInputContainer>

                    <button
                        className="bg-gradient-to-br relative group/btn from-teal-600 to-teal-800 block w-full text-white rounded-md h-12 font-medium shadow-lg transition-all ease-in-out transform hover:scale-105 active:scale-95 active:opacity-80"
                        type="submit"
                    >
                        Sign up &rarr;
                        <BottomGradient />
                    </button>

                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                </form>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({ children, className }) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

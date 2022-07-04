import { useGetCategoriesQuery } from "../graphql/generated";

import { Group } from "../components/Group";
import { Header } from "../components/Header";
import { Newsletter } from "../components/Newsletter";

export function Home() {
    const { data } = useGetCategoriesQuery();

    return (
        <div className="p-5 w-full h-auto">
            <div className="bg-blue-500 rounded-lg text-zinc-100 pt-10 pb-20 min-h-[555px] max-w-[1420px] mx-auto flex flex-col justify-between">
                <Header />
                <div className="mt-20 flex flex-col justify-center max-w-[970px] mx-auto px-10">
                    <p className="text-lg mb-5">👋 HELLO</p>
                    <h1 className="sm:text-5xl text-4xl font-bold sm:leading-normal leading-relaxed">Insights about my personal and work life, and the in-betweens</h1>
                </div>
            </div>

            <div className="w-full md:px-5 my-20 gap-y-40 flex flex-col">
                {data?.categories.map((category) => {
                    return (
                        <Group
                            key={category.id}
                            categoryName={category.title}
                            categorySlug={category.slug}
                        />
                    )
                })}
            </div>

            <div className="w-full md:px-5 mb-20">
                <Newsletter />
            </div>

            <footer className="w-full max-w-[970px] mx-auto text-center px-5 pb-5">
                <hr className="mb-10 border-zinc-300" />
                <p className="font-medium text-md leading-relaxed">
                    Copyright 2022 - João Neris
                </p>
            </footer>
        </div>
    )
}

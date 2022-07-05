import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetPostsByCategoryQuery } from "../graphql/generated";

import { Header } from "../components/Header";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { PostCard } from "../components/PostCard";

export function Category() {
    const [more, setMore] = useState(4);

    const { category } = useParams<{ category: string }>();

    const { data } = useGetPostsByCategoryQuery({
        variables: {
            slug: category!
        }
    })

    const title = category?.split("-").join(" ").replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() });

    const total = Number(data?.posts.length)

    function morePosts() {

        if (more < 5 && more !== total)
            setMore(more + 5)

        if (more > 5 && more !== total)
            setMore(Number(data?.posts.length))
    }

    return (
        <div className="p-5 w-full h-auto">
            <div className="bg-blue-500 rounded-lg text-zinc-100 pt-10 pb-20 min-h-[555px] max-w-[1420px] mx-auto flex flex-col justify-between">
                <Header />
                <div className="mt-20 flex flex-col justify-center max-w-[970px] mx-auto px-10">
                    <span className="rounded border w-fit py-2 px-3 mb-4 uppercase text-xs font-medium">
                        {title}
                    </span>
                    <h1 className="sm:text-5xl text-4xl font-bold sm:leading-normal leading-relaxed">Insights about my personal and work life, and the in-betweens</h1>
                </div>
            </div>


            <div className="flex my-20 md:px-5 flex-col justify-center max-w-[970px] mx-auto w-full">
                <div className="flex flex-col divide-y">
                    {data?.posts.slice(0, more).map((posts) => {
                        return (
                            <PostCard
                                key={posts.id}
                                title={posts.title}
                                slug={posts.slug}
                                publishedAt={new Date(posts.publishedAt)}
                                excerpt={posts.excerpt}
                                coverUrl={posts.cover?.url}
                                categories={posts.categories}
                            />
                        )
                    })}
                    <button
                        onClick={morePosts}
                        disabled={more === total}
                        className="w-[120px] h-10 flex items-center justify-center font-medium rounded-md mt-16 bg-blue-300 text-blue-500 text-sm mx-auto transition-colors hover:text-white hover:bg-blue-400 disabled:pointer-events-none disabled:opacity-70"
                    >
                        More articles
                    </button>
                </div>
            </div>

            <div className="w-full md:px-5 mb-20">
                <Newsletter />
            </div>

            <Footer />
        </div>
    );
}
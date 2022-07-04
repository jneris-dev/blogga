import { useGetPostsQuery } from "../graphql/generated";

import { Header } from "../components/Header";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { PostCard } from "../components/PostCard";

export function Home() {
    const { data } = useGetPostsQuery();

    return (
        <div className="p-5 w-full h-auto">
            <div className="bg-blue-500 rounded-lg text-zinc-100 pt-10 pb-20 min-h-[555px] max-w-[1420px] mx-auto flex flex-col justify-between">
                <Header />
                <div className="mt-20 flex flex-col justify-center max-w-[970px] mx-auto px-10">
                    <p className="text-lg mb-5">👋 HELLO</p>
                    <h1 className="sm:text-5xl text-4xl font-bold sm:leading-normal leading-relaxed">Insights about my personal and work life, and the in-betweens</h1>
                </div>
            </div>

            <div className="flex my-20 md:px-5 flex-col justify-center max-w-[970px] mx-auto w-full">
                <div className="flex flex-col divide-y">
                    {data?.posts.map((posts) => {
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
                </div>
            </div>

            <div className="w-full md:px-5 mb-20">
                <Newsletter />
            </div>

            <Footer />
        </div>
    )
}

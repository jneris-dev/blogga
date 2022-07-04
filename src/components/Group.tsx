import { useGetPostsByCategoryQuery } from "../graphql/generated";

import { PostCard } from "./PostCard";

interface GroupProps {
    categoryName: string;
    categorySlug: string;
}

export function Group(props: GroupProps) {
    const { data } = useGetPostsByCategoryQuery({
        variables: {
            slug: props.categorySlug,
        }
    });

    return (
        <div className="flex flex-col justify-center max-w-[970px] mx-auto w-full">
            <h2 className="text-4xl font-bold">{props.categoryName}</h2>
            <hr className="mt-4 mb-16 border-zinc-300" />

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
    );
}
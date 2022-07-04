import { useGetRelatedPostsByCategoryQuery } from "../graphql/generated";

import { PostCard } from "./PostCard";

interface RelatedProps {
    idPost: string;
    categoryName?: string;
    categorySlug: string;
}

export function Related(props: RelatedProps) {
    const { data } = useGetRelatedPostsByCategoryQuery({
        variables: {
            slug: props.categorySlug,
            idPost: props.idPost,
        }
    });

    return (
        <div className="flex flex-col justify-center max-w-[970px] mx-auto">
            <h2 className="text-4xl font-bold mb-16">Other interesting posts</h2>

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
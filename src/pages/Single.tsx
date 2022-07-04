import { CaretLeft } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { useGetPostBySlugQuery } from "../graphql/generated";

import { Header } from "../components/Header";
import { Newsletter } from "../components/Newsletter";
import { Related } from "../components/Related";

export function Single() {
    const { slugPage } = useParams<{ slugPage: string }>()

    const { data } = useGetPostBySlugQuery({
        variables: {
            slug: slugPage!,
        }
    })

    const readable_date = new Date(data?.post?.publishedAt).toLocaleDateString('pt-br', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <div className="p-5 w-full h-auto">
            <div className="bg-blue-500 rounded-lg rounded-b-none text-zinc-100 pt-10 pb-20 min-h-[555px] max-w-[1420px] mx-auto flex flex-col justify-between">
                <Header />
                <div className="mt-20 flex md:flex-row flex-col justify-center max-w-[970px] mx-auto px-10 gap-5">

                    <Link
                        to={`/`}
                        className="rounded-full w-[34px] h-[34px] bg-blue-400 flex items-center justify-center flex-none cursor-pointer">
                        <CaretLeft size={16} weight="bold" color="white" />
                    </Link>
                    <div className="flex flex-col">
                        <div className="mb-5 flex flex-row items-center uppercase text-xs font-medium">
                            <span className="rounded-l-md border py-2 px-3">
                                {data?.post?.categories[0].title}
                            </span>
                            <span className="py-2 border bg-white rounded-r-md text-blue-500 px-3">
                                {readable_date}
                            </span>
                        </div>
                        <h1 className="sm:text-5xl text-3xl font-bold sm:leading-normal leading-relaxed">
                            {data?.post?.title}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="max-w-[1420px] mx-auto max-h-[740px] rounded-b-md overflow-hidden">
                <img
                    src={data?.post?.cover?.url}
                    alt={data?.post?.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div
                className="w-full max-w-[780px] md:px-5 my-20 mx-auto gap-5 flex flex-col text-lg content-single"
                dangerouslySetInnerHTML={{ __html: data?.post?.content.html! }}
            />

            <hr className="w-full max-w-[970px] mx-auto border-zinc-300" />

            <div className="w-full md:px-5 my-20">
                <Related
                    idPost={data?.post?.id!}
                    categoryName={data?.post?.categories[0].title}
                    categorySlug={data?.post?.categories[0].slug!}
                />
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
    );
}
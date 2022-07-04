import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';

interface PostProps {
    title: string;
    slug: string;
    publishedAt: Date;
    excerpt?: string | null;
    coverUrl?: string;
    categories: {
        title: string;
        id: string;
        slug: string;
    }[];
}

export function PostCard(props: PostProps) {
    const dateFormatted = format(props.publishedAt, "MMM d', 'yyyy", {
        locale: ptBR,
    })

    return (
        <div className="w-full position-relative flex md:flex-row flex-col items-stretch gap-5 pt-14 first:pt-0 pb-14 last:pb-0">
            <div className="flex-1 md:order-1 order-2 items-stretch">
                <div className="mb-5 gap-2 flex flex-row items-center">
                    {props?.categories.slice(0, 2).map((category) => {
                        return (
                            <span
                                key={category.id}
                                className="rounded bg-blue-300 py-2 px-3"
                            >
                                {category.title}
                            </span>
                        )
                    })}
                    <span className="rounded bg-white py-2 px-3 uppercase">
                        {dateFormatted}
                    </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                    {props.title}
                </h3>
                <p className="text-lg text-ellipsis">
                    {props.excerpt}
                    <Link
                        to={`/${props.slug}`}
                        className="block text-right mt-4 text-sm font-bold underline underline-offset-1 hover:no-underline cursor-pointer">
                        Continuar lendo
                    </Link>
                </p>
            </div>
            <div className="md:w-[300px] w-full min-h-[210px] rounded-md overflow-hidden md:order-2 order-1">
                <img
                    className="max-w-full max-h-full w-full h-full object-cover"
                    src={props.coverUrl}
                    alt={props.title}
                    title={props.title}
                />
            </div>
        </div>
    );
}
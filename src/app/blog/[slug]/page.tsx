import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { formatDate } from "@/lib/format";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const posts = getAllSlugs();
  if (!posts.includes(slug)) return {};
  const post = getPostBySlug(slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const slugs = getAllSlugs();

  if (!slugs.includes(slug)) {
    notFound();
  }

  const post = getPostBySlug(slug);

  return (
    <article className="pb-24">
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <FadeIn>
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" /> Back to blog
            </Link>
            <Badge>{post.tag}</Badge>
            <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-3 text-sm text-muted">
              <span>{formatDate(post.date)}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="prose-cyber mt-10">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </FadeIn>
        </Container>
      </section>
    </article>
  );
}

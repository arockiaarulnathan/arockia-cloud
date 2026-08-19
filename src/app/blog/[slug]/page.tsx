import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { ShareLinks } from "@/components/ShareLinks";
import { getAllPosts, getAllSlugs, getPostBySlug } from "@/lib/mdx";
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
  const morePosts = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <article className="pb-24">
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <FadeIn>
                <div className="mb-8 flex items-center justify-between gap-4">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to blog
                  </Link>
                  <Badge>{post.tag}</Badge>
                </div>
                <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {post.title}
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted">
                  <span>{formatDate(post.date)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime}</span>
                  <span aria-hidden="true" className="hidden sm:inline">
                    ·
                  </span>
                  <ShareLinks slug={post.slug} title={post.title} />
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
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-8">
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
                    Share this post
                  </p>
                  <ShareLinks slug={post.slug} title={post.title} />
                </div>

                {morePosts.length > 0 && (
                  <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
                      More from the blog
                    </p>
                    <ul className="space-y-4">
                      {morePosts.map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/blog/${p.slug}`}
                            className="group block rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-accent/50"
                          >
                            <p className="text-sm font-medium text-foreground">
                              {p.title}
                            </p>
                            <p className="mt-2 inline-flex items-center gap-1 text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
                              Read post <ArrowRight className="h-3 w-3" />
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </article>
  );
}

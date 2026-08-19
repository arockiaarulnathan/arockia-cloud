import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/format";
import { person } from "@/content/data/profile";

export const metadata: Metadata = {
  title: "Blog",
  description: `Notes on cybersecurity leadership, governance, and Zero Trust from ${person.name}.`,
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="pb-24">
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Blog"
            title="Notes from the field"
            description="Perspectives on cybersecurity strategy, governance, and leading security programs that actually change behavior."
          />
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post, i) => (
              <Card key={post.slug} index={i} className="flex flex-col">
                <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                  <Badge className="self-start">{post.tag}</Badge>
                  <h2 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted">
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readingTime}</span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

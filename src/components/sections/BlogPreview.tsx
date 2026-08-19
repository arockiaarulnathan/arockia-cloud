import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/format";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="From the Blog"
            title="Notes on leading security programs"
            description="Perspectives on Zero Trust, governance, and building security-first organizations."
          />
          <Button href="/blog" variant="secondary" className="shrink-0">
            Read all posts <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Card key={post.slug} index={i} className="flex flex-col">
              <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                <Badge className="self-start">{post.tag}</Badge>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {post.title}
                </h3>
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
  );
}

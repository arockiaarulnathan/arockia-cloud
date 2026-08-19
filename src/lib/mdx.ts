import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogFrontmatter, BlogPost } from "@/lib/types";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function readSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllSlugs(): string[] {
  return readSlugs();
}

export function getPostBySlug(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as BlogFrontmatter;
  const stats = readingTime(content);

  return {
    slug,
    ...frontmatter,
    readingTime: `${Math.max(1, Math.round(stats.minutes))} min read`,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  return readSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

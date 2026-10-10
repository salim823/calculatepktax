import type { BlogPost } from "./existing";
import { EXISTING_POSTS } from "./existing";
// Batch imports appended below by coordinator
import { BATCH_01_POSTS } from "./batch-01";
import { BATCH_02_POSTS } from "./batch-02";
import { BATCH_03_POSTS } from "./batch-03";
import { BATCH_04_POSTS } from "./batch-04";
import { BATCH_05_POSTS } from "./batch-05";
import { BATCH_06_POSTS } from "./batch-06";
import { BATCH_07_POSTS } from "./batch-07";
// __BATCH_IMPORTS__

export * from "./existing";

export const POSTS: BlogPost[] = [
  ...EXISTING_POSTS,
  ...BATCH_01_POSTS,
  ...BATCH_02_POSTS,
  ...BATCH_03_POSTS,
  ...BATCH_04_POSTS,
  ...BATCH_05_POSTS,
  ...BATCH_06_POSTS,
  ...BATCH_07_POSTS,
  // __BATCH_SPREADS__
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  return POSTS.filter((p) => p.slug !== slug).slice(0, count);
}

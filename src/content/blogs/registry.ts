/**
 * Blog registry — add new posts here for the site to pick them up.
 *
 * Agent workflow:
 * 1. Create `posts/your-slug.ts` exporting `post` (see AGENTS.md).
 * 2. Import it below and append to `blogPosts`.
 */

import { post as deepseekVsGemmaVsQwen } from './posts/deepseek-vs-gemma-vs-qwen-local-models';
import { post as odysseusOnAnRtx5060Ti } from './posts/odysseus-on-an-rtx-5060-ti';
import { post as whyBusinessDataLocal } from './posts/why-your-business-data-should-stay-local';

import type { BlogPost } from './types';

/** Newest first */
export const blogPosts: BlogPost[] = [
  deepseekVsGemmaVsQwen,
  odysseusOnAnRtx5060Ti,
  whyBusinessDataLocal,
];

/**
 * Blog registry — add new posts here for the site to pick them up.
 *
 * Agent workflow:
 * 1. Create `posts/your-slug.ts` exporting `post` (see AGENTS.md).
 * 2. Import it below and append to `blogPosts`.
 */

import { post as whyBusinessDataLocal } from './posts/why-your-business-data-should-stay-local';

import type { BlogPost } from './types';

/** Newest first */
export const blogPosts: BlogPost[] = [whyBusinessDataLocal];

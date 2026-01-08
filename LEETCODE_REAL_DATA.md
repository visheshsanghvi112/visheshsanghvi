# LeetCode Real Data Integration - What You Need

## Problem
The LeetCode page is showing **fake/hardcoded data** instead of your real LeetCode stats.

## Solution Options

### Option 1: Use LeetCode API (Easier but Limited)
LeetCode doesn't have an official public API, but there are scraping solutions:

**Using `leetcode-query` npm package:**
```bash
npm install leetcode-query
```

Then create a service file `src/services/leetcode.ts`:
```typescript
import LeetCode from 'leetcode-query';

const leetcode = new LeetCode();

export async function getUserStats(username: string) {
  try {
    const user = await leetcode.user(username);
    return {
      totalSolved: user.submitStats[0].submissions,
      ranking: user.ranking,
      reputations: user.reputation,
      contributions: user.contributions,
    };
  } catch (error) {
    console.error('LeetCode API Error:', error);
    return null;
  }
}
```

### Option 2: GraphQL Scraping (More Data)
LeetCode uses GraphQL. You can query directly:

```typescript
const LEETCODE_GRAPHQL = 'https://leetcode.com/graphql';

export async function fetchLeetCodeData(username: string) {
  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
        profile {
          ranking
          reputation
        }
      }
    }
  `;

  const response = await fetch(LEETCODE_GRAPHQL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query,
      variables: { username }
    })
  });

  return await response.json();
}
```

### Option 3: Embed LeetCode Profile (Fastest)
Just embed your LeetCode profile directly:

```tsx
<iframe 
  src="https://leetcode.com/visheshsanghvi112/" 
  width="100%" 
  height="800px"
  className="border-0 rounded-lg"
/>
```

## What I Need From You

**Tell me which option you want, and I'll implement it:**

1. ✅ **Option 1** - npm package (easiest, may have rate limits)
2. ✅ **Option 2** - GraphQL scraping (more reliable, complete data)
3. ✅ **Option 3** - Just embed your profile page (no coding needed)

**Also provide:**
- Your exact LeetCode username: `visheshsanghvi112` (confirm if this is correct)
- Do you want **real-time** data or **cached** data?

Once you tell me, I'll set it up properly!

// Diverse image pools to prevent duplicate images
export const IMAGE_POOLS = {
    web: [
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1593642532400-2682810df593?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&auto=format&fit=crop&q=80',
    ],
    ai: [
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1655635643532-fa9ba2648cbe?w=800&auto=format&fit=crop&q=80',
    ],
    mobile: [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&auto=format&fit=crop&q=80',
    ],
};

// Hash function for deterministic variety
export function hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}

// Get diverse image based on repo name
export function getDiverseImage(repoName: string, category: string): string {
    const pool = IMAGE_POOLS.web; // Use web pool for variety
    const index = hashString(repoName) % pool.length;
    return pool[index];
}

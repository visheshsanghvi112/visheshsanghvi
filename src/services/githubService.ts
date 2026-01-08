// GitHub Service to fetch and process repository data
// Automatically syncs projects from GitHub repos with deployment links

const GITHUB_USERNAME = 'visheshsanghvi112';
const GITHUB_API_BASE = 'https://api.github.com';

export interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    topics: string[];
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    fork: boolean;
}

export interface ProcessedProject {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    githubUrl: string;
    liveUrl?: string;
    category: string;
    featured?: boolean;
    stars: number;
    forks: number;
    language: string;
    lastUpdated: string;
}

// Extract deployment URL from description or homepage
function extractDeploymentUrl(repo: GitHubRepo): string | null {
    if (repo.homepage && isValidDeploymentUrl(repo.homepage)) {
        return repo.homepage;
    }

    if (repo.description) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const urls = repo.description.match(urlRegex);

        if (urls) {
            for (const url of urls) {
                if (isValidDeploymentUrl(url)) {
                    return url.replace(/[,;.]$/, '');
                }
            }
        }
    }

    return null;
}

// Check if URL is a valid deployment platform
function isValidDeploymentUrl(url: string): boolean {
    const deploymentDomains = [
        'vercel.app',
        'netlify.app',
        'herokuapp.com',
        'github.io',
        'render.com',
        'railway.app',
        'fly.dev',
        'streamlit.app',
        'replit.app',
        'pages.dev',
        'web.app',
        'firebaseapp.com',
    ];

    try {
        const urlObj = new URL(url);
        return deploymentDomains.some(domain => urlObj.hostname.includes(domain));
    } catch {
        return false;
    }
}

// Determine category based on topics and language
function determineCategory(repo: GitHubRepo): string {
    const topics = repo.topics || [];
    const language = repo.language?.toLowerCase() || '';
    const description = repo.description?.toLowerCase() || '';

    if (topics.some(t => ['ai', 'ml', 'machine-learning', 'deep-learning'].includes(t.toLowerCase())) ||
        description.includes('ai') || description.includes('machine learning')) {
        return 'AI';
    }

    if (language === 'dart' || topics.includes('flutter') || topics.includes('react-native')) {
        return 'Mobile';
    }

    if (language === 'jupyter notebook' || topics.some(t => ['data-science', 'data-analysis'].includes(t.toLowerCase()))) {
        return 'Data';
    }

    if (topics.some(t => ['finance', 'crypto', 'blockchain'].includes(t.toLowerCase()))) {
        return 'Finance';
    }

    if (topics.includes('game') || description.includes('game')) {
        return 'Games';
    }

    if (topics.some(t => ['cli', 'tool', 'utility'].includes(t.toLowerCase()))) {
        return 'Tools';
    }

    if (topics.some(t => ['health', 'fitness'].includes(t.toLowerCase()))) {
        return 'Health';
    }

    if (topics.some(t => ['education', 'learning'].includes(t.toLowerCase()))) {
        return 'Education';
    }

    if (topics.includes('ecommerce') || description.includes('shop')) {
        return 'E-commerce';
    }

    if (['javascript', 'typescript', 'html', 'css'].includes(language)) {
        return 'Web';
    }

    return 'Web';
}

// Get diverse images to avoid all projects having same image
function getSmartImage(repo: GitHubRepo, category: string): string {
    const repoName = repo.name.toLowerCase();

    // Keyword-based images
    if (repoName.includes('chess')) return 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&auto=format&fit=crop&q=80';
    if (repoName.includes('shop') || repoName.includes('store')) return 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80';
    if (repoName.includes('food') || repoName.includes('recipe')) return 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80';
    if (repoName.includes('fitness') || repoName.includes('gym')) return 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80';
    if (repoName.includes('crypto') || repoName.includes('bitcoin')) return 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&auto=format&fit=crop&q=80';
    if (repoName.includes('chat') || repoName.includes('message')) return 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&auto=format&fit=crop&q=80';
    if (repoName.includes('music') || repoName.includes('audio')) return 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=80';
    if (repoName.includes('blog') || repoName.includes('cms')) return 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80';
    if (repoName.includes('dashboard') || repoName.includes('analytics')) return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80';
    if (repoName.includes('bill') || repoName.includes('invoice')) return 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&auto=format&fit=crop&q=80';

    // Diverse image pools per category
    const imagePoolsByCategory: Record<string, string[]> = {
        'Web': [
            'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1593642532400-2682810df593?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
        ],
        'AI': [
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1655635643532-fa9ba2648cbe?w=800&auto=format&fit=crop&q=80',
        ],
        'Mobile': [
            'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&auto=format&fit=crop&q=80',
        ],
        'Finance': [
            'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&auto=format&fit=crop&q=80',
        ],
        'Games': [
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=80',
        ],
        'Data': [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
        ],
        'Tools': [
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80',
        ],
        'Health': [
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=80',
        ],
        'Education': [
            'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80',
        ],
        'E-commerce': [
            'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=80',
        ],
    };

    const imagePool = imagePoolsByCategory[category] || imagePoolsByCategory['Web'];
    let hash = 0;
    for (let i = 0; i < repo.name.length; i++) {
        hash = ((hash << 5) - hash) + repo.name.charCodeAt(i);
        hash = hash & hash;
    }
    const index = Math.abs(hash) % imagePool.length;
    return imagePool[index];
}

// Generate smart description
function generateSmartDescription(repo: GitHubRepo, category: string): string {
    if (repo.description && repo.description.trim()) {
        return repo.description;
    }

    const repoName = repo.name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const language = repo.language || 'Web';
    const techs = repo.topics && repo.topics.length > 0 ? repo.topics.slice(0, 3).join(', ') : language;

    const templates: Record<string, string[]> = {
        'AI': [`An intelligent ${language} application leveraging AI and machine learning capabilities.`],
        'Web': [`A modern web application built with ${techs} featuring responsive design and smooth UX.`],
        'Mobile': [`Cross-platform mobile application developed with ${language} for seamless user experience.`],
        'Games': [`Interactive gaming experience developed with ${language} featuring engaging gameplay.`],
        'Finance': [`Financial management tool built with ${language} for tracking and analytics.`],
        'Education': [`Educational platform built with ${language} to enhance learning experiences.`],
        'Tools': [`Productivity tool developed with ${language} to streamline workflows.`],
        'E-commerce': [`E-commerce platform built with ${language} for seamless online shopping.`],
        'Data': [`Data analysis and visualization tool built with ${language} for actionable insights.`],
        'Health': [`Health and wellness application built with ${language} for better lifestyle management.`],
    };

    const categoryTemplates = templates[category] || templates['Web'];
    return categoryTemplates[0];
}

// Extract technologies
function extractTechnologies(repo: GitHubRepo): string[] {
    const techs: string[] = [];
    if (repo.language) techs.push(repo.language);
    if (repo.topics && repo.topics.length > 0) {
        const relevantTopics = repo.topics.slice(0, 4);
        techs.push(...relevantTopics.map(t => t.charAt(0).toUpperCase() + t.slice(1)));
    }
    return techs.slice(0, 5);
}

// Fetch all repositories
export async function fetchAllRepositories(): Promise<GitHubRepo[]> {
    let allRepos: GitHubRepo[] = [];
    let page = 1;
    const perPage = 100;
    let hasMore = true;

    try {
        while (hasMore) {
            const response = await fetch(
                `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?per_page=${perPage}&page=${page}&sort=updated`,
                { headers: { 'Accept': 'application/vnd.github.v3+json' } }
            );

            if (!response.ok) {
                if (response.status === 403) {
                    const rateLimitReset = response.headers.get('X-RateLimit-Reset');
                    const resetTime = rateLimitReset ? new Date(parseInt(rateLimitReset) * 1000).toLocaleTimeString() : 'soon';
                    throw new Error(`GitHub API rate limit exceeded. Try again at ${resetTime}`);
                }
                throw new Error(`Failed to fetch repositories: ${response.status}`);
            }

            const repos: GitHubRepo[] = await response.json();
            if (repos.length === 0) {
                hasMore = false;
            } else {
                allRepos = [...allRepos, ...repos];
                hasMore = repos.length === perPage;
                page++;
            }
        }
        return allRepos;
    } catch (error) {
        console.error('Error fetching repositories:', error);
        throw error;
    }
}

// Process and filter deployed projects
export async function fetchDeployedProjects(): Promise<ProcessedProject[]> {
    try {
        const allRepos = await fetchAllRepositories();
        const deployedRepos = allRepos
            .filter(repo => {
                const hasDeploymentUrl = !!extractDeploymentUrl(repo);
                return hasDeploymentUrl && !repo.fork;
            })
            .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

        const projects: ProcessedProject[] = deployedRepos.map(repo => {
            const liveUrl = extractDeploymentUrl(repo);
            const category = determineCategory(repo);
            const technologies = extractTechnologies(repo);

            return {
                title: repo.name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
                description: generateSmartDescription(repo, category),
                technologies,
                image: getSmartImage(repo, category),
                githubUrl: repo.html_url,
                liveUrl: liveUrl || undefined,
                category,
                featured: repo.stargazers_count > 0 || repo.forks_count > 0,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                language: repo.language || 'Unknown',
                lastUpdated: repo.updated_at,
            };
        });

        return projects;
    } catch (error) {
        console.error('Error fetching deployed projects:', error);
        throw error;
    }
}

// Cache management
const CACHE_KEY = 'github_projects_cache';
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

export async function getCachedDeployedProjects(): Promise<ProcessedProject[]> {
    const cached = localStorage.getItem(CACHE_KEY);

    if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        const now = Date.now();
        if (now - timestamp < CACHE_DURATION) {
            return data;
        }
    }

    const projects = await fetchDeployedProjects();
    localStorage.setItem(CACHE_KEY, JSON.stringify({
        data: projects,
        timestamp: Date.now(),
    }));

    return projects;
}

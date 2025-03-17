export interface Project {
    id: number;
    title: string;
    image: string;
    imageBig: string;
    tags?: string[];
    github?: string;
    linkOnDeploy?: string;
    link: string;
    filter: 'lite' | 'medium' | 'hard';
}
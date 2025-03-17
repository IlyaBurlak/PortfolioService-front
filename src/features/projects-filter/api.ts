import {Project} from "../../entities/Project/ui/Project";

export const fetchProjects = async (): Promise<Project[]> => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/projects`);

    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }

    const data = await response.json();

    return data.map((project: any) => ({
        ...project,
        tags: project.tags?.map((t: any) => t.name) || []
    }));
};

export const fetchProjectByLink = async (link: string): Promise<Project | null> => {
    const url = new URL(`${process.env.REACT_APP_API_URL}/projects`);
    url.searchParams.append('link', `/${link}`);

    const response = await fetch(url.toString());

    if (!response.ok) {
        throw new Error('Failed to fetch project');
    }

    const data = await response.json();
    return data[0] ? {
        ...data[0],
        tags: data[0].tags?.map((t: any) => t.name) || []
    } : null;
};
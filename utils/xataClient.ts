import { XataClient } from "~/lib/xata";

export const xataClient = () => {
    const config = useRuntimeConfig();

    const xata = new XataClient({
        databaseURL: config.public.xataDatabaseUrl,
        apiKey: config.public.xataApiKey,
        branch: 'main'
    });

    return xata;
};

export interface ApiResponse<T> {
    status: number;
    message: string;
    data?: T;
    error?: {
        message: string;
    };
};

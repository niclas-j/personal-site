import type { APIRoute } from "astro";

export const post: APIRoute = ({ redirect }) => {
    return redirect('https://loglib.io/api/loglib');
}
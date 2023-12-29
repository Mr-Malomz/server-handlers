import { TodoRecord } from "~/lib/xata";
import { ApiResponse, xataClient } from "~/utils/xataClient";

export default defineEventHandler(async (event) => {
    const xata = xataClient();

    const response = await xata.db.Todo.getAll();

    if (response) {
        const successResponse: ApiResponse<TodoRecord[]> = {
            status: 200,
            message: "success",
            data: response,
        };
        return successResponse;
    } else {
        const failureResponse: ApiResponse<string> = {
            status: 500,
            message: "failed",
            error: {
                message: "Error getting todo list",
            },
        };
        return failureResponse;
    }
});

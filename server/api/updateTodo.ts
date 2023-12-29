import { TodoRecord } from "~/lib/xata";
import { ApiResponse, xataClient } from "~/utils/xataClient";

export default defineEventHandler(async (event) => {
    const xata = xataClient();
    const { description, id } = await readBody(event);

    const response = await xata.db.Todo.update(id, { description });

    if (response) {
        const successResponse: ApiResponse<TodoRecord> = {
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
                message: "Error updating todo",
            },
        };
        return failureResponse;
    }
});

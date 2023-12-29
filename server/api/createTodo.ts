import { TodoRecord } from "~/lib/xata";
import { ApiResponse, xataClient } from "~/utils/xataClient";

export default defineEventHandler(async (event) => {
    const xata = xataClient();
    const { description } = await readBody(event);

    const response = await xata.db.Todo.create({ description })

    if (response.description) {
        const successResponse: ApiResponse<TodoRecord> = {
            status: 201,
            message: "success",
            data: response,
        };
        return successResponse;
    } else {
        const failureResponse: ApiResponse<string> = {
            status: 500,
            message: "failed",
            error: {
                message: "Error creating todo",
            },
        };
        return failureResponse;
    }
});

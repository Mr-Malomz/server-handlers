import { TodoRecord } from "~/lib/xata";
import { ApiResponse, xataClient } from "~/utils/xataClient";

export default defineEventHandler(async (event) => {
    const xata = xataClient();
    const id = event.context.params!.id;

    if (!id) {
        const emptyDescriptionResponse: ApiResponse<string> = {
            status: 400,
            message: "failed",
            error: {
                message: "No id provided.",
            },
        };
        return emptyDescriptionResponse;
    }

    const response = await xata.db.Todo.read(id)

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
                message: "Error getting todo",
            },
        };
        return failureResponse;
    }
});

import { ApiResponse, xataClient } from "~/utils/xataClient";

export default defineEventHandler(async (event) => {
    const xata = xataClient();
    const { id } = await readBody(event);

    const response = await xata.db.Todo.delete(id)

    if (response) {
        const successResponse: ApiResponse<string> = {
            status: 200,
            message: "success",
            data: "Todo deleted successfully",
        };
        return successResponse;
    } else {
        const failureResponse: ApiResponse<string> = {
            status: 500,
            message: "failed",
            error: {
                message: "Error deleting todo",
            },
        };
        return failureResponse;
    }
});

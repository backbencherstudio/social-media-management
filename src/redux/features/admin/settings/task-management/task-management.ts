import { baseApi } from "@/src/redux/api/baseApi";


const taskManagement = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllTasks: builder.query<any, void>({
            query: () => ({
                url: "/task-management/all",
                method: "GET",
            }),
        }),
    }),
})

export const { useGetAllTasksQuery } = taskManagement;
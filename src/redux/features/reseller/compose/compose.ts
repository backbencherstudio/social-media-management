import { baseApi } from "../../../api/baseApi";

const compose = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSchedulePost: builder.mutation({
      query: (data) => ({
        url: "/post",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["posts"],
    }),
    postSendDesignfile: builder.mutation({
      query: (data) => ({
        url: "/design-file",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const {
  useCreateSchedulePostMutation,
  usePostSendDesignfileMutation,
} = compose;

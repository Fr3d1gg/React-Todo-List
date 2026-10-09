import { useForm } from "react-hook-form";
import { usePostTaskMutation } from "../../tanStack/TasksStack";

export const TaskForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = usePostTaskMutation(reset);

  return (
    <form
      onSubmit={handleSubmit((data) => mutate(data))}
      className="flex flex-col gap-3"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          {...register("nameTask", {
            required: "This field is required",
          })}
          type="text"
          placeholder="What's on your mind?"
          className="
            w-full flex-1 min-w-0
            bg-gray-800 border border-gray-600
            rounded-lg px-4 py-3
            text-sm sm:text-base text-white
            placeholder:text-gray-500
            outline-none focus:border-slate-400
            transition
          "
        />

        <button
          type="submit"
          disabled={isPending}
          className="
            w-full sm:w-auto
            bg-[#4f6f5b] hover:bg-[#5f826c]
            text-white font-medium
            px-6 py-3 rounded-lg
            cursor-pointer transition
            disabled:opacity-50
          "
        >
          {isPending ? "Adding..." : "Add"}
        </button>
      </div>

      {errors.nameTask && (
        <span className="text-red-500 text-sm text-left">
          {errors.nameTask.message}
        </span>
      )}
    </form>
  );
};

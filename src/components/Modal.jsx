import { Pencil, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useTaskStore } from "../stores/TaskStore";
import { useEditTaskMutation } from "../tanStack/TasksStack";
export const Modal = () => {
  const { setStateModal, itemSelect } = useTaskStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nameTask: itemSelect?.nameTask,
    },
  });
  const { mutate } = useEditTaskMutation();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-2xl">
        {/* HEADER */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-500/10 p-2">
              <Pencil size={20} className="text-blue-400" />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">Edit Task</h2>

              <p className="text-sm text-gray-400">
                Update your task information
              </p>
            </div>
          </div>

          <button
            onClick={() => setStateModal(false)}
            type="button"
            className="cursor-pointer rounded-lg p-2 text-gray-400 transition hover:bg-gray-800 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* INPUT */}
        <form onSubmit={handleSubmit(mutate)}>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Task name
            </label>

            <input
              {...register("nameTask", { required: true })}
              type="text"
              placeholder="Enter your task name..."
              className="
              w-full
              rounded-lg
              border border-gray-600
              bg-gray-800
              px-4 py-3
              text-white
              placeholder:text-gray-500
              outline-none
              transition
              focus:border-blue-400
              focus:ring-1
              focus:ring-blue-400/30
            "
            />
            {errors.nameTask && (
              <span className="text-red-500 text-sm">
                {errors.nameTask.message}
              </span>
            )}
          </div>

          {/* FOOTER */}
          <div className="mt-7 flex justify-end gap-3">
            <button
              onClick={() => setStateModal(false)}
              type="button"
              className="
            cursor-pointer
            rounded-lg
            border border-gray-600
            bg-gray-800
            px-5 py-2.5
            text-sm font-medium
            text-gray-300
            transition
            hover:bg-gray-700
            "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
            cursor-pointer
            rounded-lg
            bg-[#4f6f5b]
            px-5 py-2.5
            text-sm font-medium
            text-white
            transition
            hover:bg-[#5f826c]
            "
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

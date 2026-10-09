import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useTaskStore } from "../stores/TaskStore";
import { toast } from "sonner";
export const useGetTasksQuery = () => {
  const { getTask } = useTaskStore();
  return useQuery({
    queryKey: ["get-Task"],
    queryFn: getTask,
  });
};
export const usePostTaskMutation = (reset) => {
  const { postTask } = useTaskStore();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["post-task"],
    mutationFn: async (data) => {
      const dataform = {
        nameTask: data.nameTask,
      };
      await postTask(dataform);
    },
    onError: (error) => {
      toast.error("Error: " + error.message);
    },
    onSuccess: () => {
      toast.success("Task added successfully");
      reset();
      queryClient.invalidateQueries({ queryKey: ["get-Task"] });
    },
  });
};
export const useDeleteTaskMutation = () => {
  const { deleteTask, itemSelect } = useTaskStore();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-task"],
    mutationFn: async () => {
      const p = {
        id: itemSelect?.id,
      };
      await deleteTask(p);
    },
    onError: (error) => {
      toast.error("Error " + error.message);
    },
    onSuccess: () => {
      toast.success("Task deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["get-Task"] });
    },
  });
};

export const useUpdateTaskMutation = () => {
  const { updateTask, itemSelect } = useTaskStore();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["update-task"],
    mutationFn: async () => {
      const p = {
        id: itemSelect?.id,
        stateTask: !itemSelect?.stateTask,
      };
      await updateTask(p);
    },
    onError: (error) => {
      toast.error("Error " + error.message);
    },
    onSuccess: () => {
      toast.success("Task updated successfully");
      queryClient.invalidateQueries({ queryKey: ["get-Task"] });
    },
  });
};

export const useEditTaskMutation = () => {
  const { updateTask, itemSelect, setStateModal } = useTaskStore();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["update-task"],
    mutationFn: async (data) => {
      const p = {
        id: itemSelect?.id,
        nameTask: data?.nameTask,
      };
      await updateTask(p);
    },
    onError: (error) => {
      toast.error("Error " + error.message);
    },
    onSuccess: () => {
      toast.success("Task updated successfully");
      setStateModal(false);
      queryClient.invalidateQueries({ queryKey: ["get-Task"] });
    },
  });
};
export const useSearchTasksQuery = () => {
  const { searchTaskMutation, searchTask } = useTaskStore();
  return useQuery({
    queryKey: ["search-Task", { nameTask: searchTask }],
    queryFn: () => searchTaskMutation({ nameTask: searchTask }),
  });
};

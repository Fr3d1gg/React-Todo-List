import { useState } from "react";
import { Toaster } from "sonner";

import { useTaskStore } from "../stores/TaskStore";

import {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../tanStack/TasksStack";

import { Modal } from "../components/Modal";

import { TaskForm } from "../components/Tasks/TaskForm";
import { TaskSearch } from "../components/Tasks/TaskSearch";
import { PendingTasks } from "../components/Tasks/PendingTask";
import { CompletedTasks } from "../components/Tasks/CompleteTask";

export const CrudPage = () => {
  const [search, setSearch] = useState("");

  const { setItemSelect, stateModal, setStateModal } = useTaskStore();

  // Obtener tareas
  const { data, isLoading, error } = useGetTasksQuery();

  // Mutación para eliminar
  const { mutate: mutateDelete } = useDeleteTaskMutation();

  // Mutación para actualizar estado
  const { mutate: mutateUpdate } = useUpdateTaskMutation();

  // Buscar tareas por nombre
  const filteredTasks = (data ?? []).filter((task) =>
    (task.nameTask ?? "").toLowerCase().includes(search.trim().toLowerCase()),
  );

  // Tareas pendientes
  const pendingTasks = filteredTasks.filter((task) => task.stateTask === false);

  // Tareas completadas
  const completedTasks = filteredTasks.filter(
    (task) => task.stateTask === true,
  );

  // Abrir modal de edición
  const handleEdit = (task) => {
    setItemSelect(task);
    setStateModal(true);
  };

  // Completar o regresar a pendientes
  const handleToggle = (task) => {
    setItemSelect(task);
    mutateUpdate();
  };

  // Eliminar tarea
  const handleDelete = (task) => {
    setItemSelect(task);
    mutateDelete();
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-800 flex items-center justify-center px-4">
        <span className="text-white text-center">Cargando...</span>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gray-800 flex items-center justify-center px-4">
        <span className="text-white text-center">Error... {error.message}</span>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-800 text-white px-3 sm:px-4 md:px-6 py-6 sm:py-10">
      <Toaster position="bottom-center" richColors />

      {/* MODAL */}
      {stateModal && <Modal />}

      <div className="w-full max-w-5xl mx-auto">
        {/* TÍTULO */}
        <header className="mb-6 sm:mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Task List
          </h1>
        </header>

        {/* FORMULARIO Y BUSCADOR */}
        <section className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-5 md:p-6 mb-6 text-center">
          <h2 className="text-base sm:text-lg font-semibold mb-4">
            Create new task
          </h2>

          <TaskForm />

          <TaskSearch
            search={search}
            setSearch={setSearch}
            resultsCount={filteredTasks.length}
          />
        </section>

        {/* LISTAS DE TAREAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <PendingTasks
            tasks={pendingTasks}
            search={search}
            onEdit={handleEdit}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />

          <CompletedTasks
            tasks={completedTasks}
            search={search}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </main>
  );
};

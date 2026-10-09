import { Lightbulb, CircleCheck, Trash2, Pencil } from "lucide-react";

export const TaskItem = ({ task, isCompleted, onEdit, onToggle, onDelete }) => {
  return (
    <div
      className={`
        rounded-lg
        p-3 sm:px-4 sm:py-3
        flex flex-col sm:flex-row
        sm:items-center
        justify-between gap-3
        border transition
        ${
          isCompleted
            ? "bg-[#2b3931] border-[#405a4c] hover:border-[#587562]"
            : "bg-[#373429] border-[#5a5438] hover:border-[#716946]"
        }
      `}
    >
      <p
        className={`
          font-medium break-words
          text-sm sm:text-base
          text-center sm:text-left
          ${isCompleted ? "text-white/70 line-through" : "text-white"}
        `}
      >
        {task.nameTask}
      </p>

      <div className="flex items-center justify-center sm:justify-end gap-1 shrink-0">
        {/* EDITAR: SOLO TAREAS PENDIENTES */}
        {!isCompleted && (
          <button
            type="button"
            title="Edit task"
            onClick={() => onEdit(task)}
            className="
              p-2 rounded-lg text-gray-400
              hover:text-blue-300
              hover:bg-blue-900/30
              hover:scale-110
              transition-all duration-200
              cursor-pointer
            "
          >
            <Pencil size={19} />
          </button>
        )}

        {/* COMPLETAR O REGRESAR A PENDIENTES */}
        <button
          type="button"
          title={isCompleted ? "Move to pending" : "Complete task"}
          onClick={() => onToggle(task)}
          className={`
            p-2 rounded-lg text-gray-400
            hover:scale-110
            transition-all duration-200
            cursor-pointer
            ${
              isCompleted
                ? "hover:text-yellow-200 hover:bg-yellow-900/20"
                : "hover:text-green-300 hover:bg-green-900/30"
            }
          `}
        >
          {isCompleted ? <Lightbulb size={19} /> : <CircleCheck size={19} />}
        </button>

        {/* ELIMINAR */}
        <button
          type="button"
          title="Delete task"
          onClick={() => onDelete(task)}
          className="
            p-2 rounded-lg text-gray-400
            hover:text-red-300
            hover:bg-red-900/30
            hover:scale-110
            transition-all duration-200
            cursor-pointer
          "
        >
          <Trash2 size={19} />
        </button>
      </div>
    </div>
  );
};

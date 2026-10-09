import { Lightbulb } from "lucide-react";
import { TaskItem } from "./TaskItem";

export const PendingTasks = ({ tasks, search, onEdit, onToggle, onDelete }) => {
  return (
    <section className="bg-[#2f2d24] border border-[#5a5438] rounded-xl p-4 sm:p-5 md:p-6">
      <div className="flex items-center justify-center gap-2 mb-5">
        <Lightbulb size={22} className="text-[#c8b96f] shrink-0" />

        <h2 className="text-lg sm:text-xl font-semibold text-white">
          To-do list
        </h2>
      </div>

      <div className="space-y-3">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              isCompleted={false}
              onEdit={onEdit}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        ) : (
          <div className="py-8 text-center">
            <p className="text-white/70 text-sm">
              {search.trim() ? "No matching pending tasks" : "No pending tasks"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

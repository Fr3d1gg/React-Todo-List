import { CircleCheck } from "lucide-react";
import { TaskItem } from "./TaskItem";

export const CompletedTasks = ({ tasks, search, onToggle, onDelete }) => {
  return (
    <section className="bg-[#24302a] border border-[#405a4c] rounded-xl p-4 sm:p-5 md:p-6">
      <div className="flex items-center justify-center gap-2 mb-5">
        <CircleCheck size={22} className="text-[#82a98f] shrink-0" />

        <h2 className="text-lg sm:text-xl font-semibold text-white">
          Complete Task
        </h2>
      </div>

      <div className="space-y-3">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              isCompleted={true}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        ) : (
          <div className="py-8 text-center">
            <p className="text-white/70 text-sm">
              {search.trim()
                ? "No matching completed tasks"
                : "No completed tasks"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

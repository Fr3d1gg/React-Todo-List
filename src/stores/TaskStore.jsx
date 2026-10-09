import { create } from "zustand";
import { Supabase } from "../supabase/supabase.config";
const table = "Tasks";
export const useTaskStore = create((set) => ({
  itemSelect: null,
  setItemSelect: (p) => {
    set({ itemSelect: p });
  },
  stateModal: false,
  setStateModal: (p) => {
    set({ stateModal: p });
  },
  getTask: async () => {
    const { data, error } = await Supabase.from(table).select("*");
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },
  postTask: async (dataform) => {
    const { error } = await Supabase.from(table).insert(dataform);
    if (error) {
      throw new Error(error.message);
    }
  },
  updateTask: async (p) => {
    const { error } = await Supabase.from(table).update(p).eq("id", p.id);
    if (error) {
      throw new Error(error.message);
    }
  },
  deleteTask: async (p) => {
    const { error } = await Supabase.from(table).delete().eq("id", p.id);
    if (error) {
      throw new Error(error.message);
    }
  },
  searchTask: null,
  setSearchTask: (p) => {
    set({ searchTask: p });
  },
  searchTaskMutation: async (p) => {
    const { data, error } = await Supabase.from(table)
      .select()
      .ilike("nameTask", "%" + p.nameTask + "%");
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },
}));

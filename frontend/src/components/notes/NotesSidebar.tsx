import { useMemo, useState } from "react";
import { Search, Plus } from "lucide-react";
import type { Note } from "../../pages/Notes";
import NoteListItem from "./NoteListItem";

interface NotesSidebarProps {
  notes: Note[];
  selectedNote: Note;
  onSelect: (note: Note) => void;
}

const NotesSidebar = ({
  notes,
  selectedNote,
  onSelect,
}: NotesSidebarProps) => {
  const [search, setSearch] = useState("");

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const query = search.toLowerCase();

      return (
        note.title.toLowerCase().includes(query) ||
        note.preview.toLowerCase().includes(query) ||
        note.category.toLowerCase().includes(query)
      );
    });
  }, [notes, search]);

  return (
    <aside className="flex h-full w-96 flex-col border-r bg-slate-100">

      {/* Header */}

      <div className="border-b border-gray-300 p-5">

        <div className="mb-4 flex items-center justify-between">

          <div>
            <h2 className="text-xl font-semibold">
              Notes
            </h2>

            <p className="text-sm text-slate-500">
              {notes.length} Notes
            </p>
          </div>

          <button
            className="rounded-lg bg-blue-600 p-2 text-white transition hover:bg-blue-700"
          >
            <Plus size={18} />
          </button>

        </div>

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3.5 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border py-3 pl-10 pr-4 outline-none transition focus:border-blue-600"
          />

        </div>

      </div>

      {/* Notes List */}

      <div className="flex-1 overflow-y-auto">

        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <NoteListItem
              key={note.id}
              note={note}
              isSelected={selectedNote.id === note.id}
              onClick={() => onSelect(note)}
            />
          ))
        ) : (
          <div className="p-6 text-center text-sm text-slate-500">
            No matching notes found.
          </div>
        )}

      </div>

    </aside>
  );
};

export default NotesSidebar;
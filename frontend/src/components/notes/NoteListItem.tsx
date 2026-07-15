import type { Note } from "../../pages/Notes";

interface NoteListItemProps {
  note: Note;
  isSelected: boolean;
  onClick: () => void;
}

const NoteListItem = ({
  note,
  isSelected,
  onClick,
}: NoteListItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full border-b border-gray-300 px-5 py-3 text-left transition-all duration-200 ${
        isSelected
          ? "border-l-4 border-l-blue-600 bg-blue-50"
          : "hover:bg-slate-50"
      }`}
    >
      <div className="space-y-1 ">

        {/* Title */}
        <div className="flex items-center justify-between">
        <h3
          className={`font-semibold ${
            isSelected ? "text-blue-700" : "text-slate-900"
          }`}
        >
          {note.title}
        </h3>
          <span className="text-xs text-slate-400">
            {note.updatedAt}
          </span>
          </div>
        {/* Preview */}

        <p className="line-clamp-2 text-sm text-slate-500">
          {note.preview}
        </p>

        {/* Footer */}

        <div className="flex items-center justify-between">

          

          

        </div>

      </div>
    </button>
  );
};

export default NoteListItem;
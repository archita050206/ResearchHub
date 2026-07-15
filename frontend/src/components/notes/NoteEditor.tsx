import {
  Pencil,
  Share2,
  Trash2,
} from "lucide-react";
import type { Note } from "../../pages/Notes";

interface NoteEditorProps {
  note: Note;
}

const NoteEditor = ({ note }: NoteEditorProps) => {
  return (
    <section className="flex flex-1 flex-col overflow-hidden bg-slate-50">

      {/* Header */}

      <div className="border-b bg-white px-8 py-6">

        <div className="flex items-start justify-between">

          <div>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              {note.category}
            </span>

            <h1 className="mt-4 text-3xl font-bold text-slate-900">
              {note.title}
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Last updated {note.updatedAt}
            </p>

          </div>

          <div className="flex items-center gap-2">

            <button className="rounded-lg border p-2 transition hover:bg-slate-100">
              <Pencil size={18} />
            </button>

            <button className="rounded-lg border p-2 transition hover:bg-slate-100">
              <Share2 size={18} />
            </button>

            <button className="rounded-lg border p-2 text-red-600 transition hover:bg-red-50">
              <Trash2 size={18} />
            </button>

          </div>

        </div>

      </div>

      {/* Note Content */}

      <div className="flex-1 overflow-y-auto px-8 py-8">

        <article className="prose prose-slate max-w-none">

          <pre className="whitespace-pre-wrap font-sans leading-8 text-slate-700">
            {note.content}
          </pre>

        </article>

      </div>

    </section>
  );
};

export default NoteEditor;
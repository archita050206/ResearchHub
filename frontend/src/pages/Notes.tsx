import { useState } from "react";
import NotesSidebar from "../components/notes/NotesSidebar";
import NoteEditor from "../components/notes/NoteEditor";


export interface Note {
  id: number;
  title: string;
  preview: string;
  content: string;
  updatedAt: string;
  category: string;
}

const notesData: Note[] = [
  {
    id: 1,
    title: "Transformer Architecture",
    preview: "Understanding self-attention mechanisms meaning self-attention mechanisms...",
    updatedAt: "2 hours ago",
    category: "AI",
    content: `
# Transformer Architecture

The Transformer model was introduced in the paper
"Attention Is All You Need."

## Key Components

- Self Attention
- Multi Head Attention
- Positional Encoding
- Feed Forward Networks

## Why it matters

Transformers revolutionized Natural Language Processing
and became the foundation of BERT, GPT and many modern
LLMs.
`,
  },

  {
    id: 2,
    title: "Diffusion Models",
    preview: "Stable Diffusion and DDPM notes and make sure...",
    updatedAt: "Yesterday",
    category: "Computer Vision",
    content: `
# Diffusion Models

Diffusion models learn to generate images
by gradually denoising random noise.

Important papers:

• DDPM
• Stable Diffusion
• Imagen
`,
  },

  {
    id: 3,
    title: "Graph Neural Networks",
    preview: "Message passing and graph embeddings...",
    updatedAt: "3 days ago",
    category: "Machine Learning",
    content: `
# Graph Neural Networks

GNNs work on graph structured data.

Applications

- Social Networks
- Recommendation Systems
- Molecule Prediction
`,
  },
];

const Notes = () => {
  const [selectedNote, setSelectedNote] = useState<Note>(notesData[0]);

  return (
    <div className="flex h-[calc(100vh-90px)] overflow-hidden bg-slate-100">

      <NotesSidebar
        notes={notesData}
        selectedNote={selectedNote}
        onSelect={setSelectedNote}
      />

      <NoteEditor note={selectedNote} />

    </div>
  );
};

export default Notes;
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect } from "react";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({
  content,
  onChange,
  placeholder = "Tulis sesuatu...",
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none focus:outline-none min-h-[150px] p-4 bg-black border border-gray-700 rounded-b",
      },
    },
    immediatelyRender: false, // ← FIX: Disable SSR rendering
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) return null;

  return (
    <div className="border border-gray-700 rounded" suppressHydrationWarning>
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-2 bg-gray-900 border-b border-gray-700 rounded-t">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded text-sm font-semibold ${
            editor.isActive("bold")
              ? "bg-yellow-500 text-black"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          B
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded text-sm italic ${
            editor.isActive("italic")
              ? "bg-yellow-500 text-black"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          I
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`px-3 py-1 rounded text-sm line-through ${
            editor.isActive("strike")
              ? "bg-yellow-500 text-black"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          S
        </button>

        <div className="w-px bg-gray-700" />

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`px-3 py-1 rounded text-sm font-bold ${
            editor.isActive("heading", { level: 2 })
              ? "bg-yellow-500 text-black"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          H2
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`px-3 py-1 rounded text-sm font-bold ${
            editor.isActive("heading", { level: 3 })
              ? "bg-yellow-500 text-black"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          H3
        </button>

        <div className="w-px bg-gray-700" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive("bulletList")
              ? "bg-yellow-500 text-black"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          • List
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive("orderedList")
              ? "bg-yellow-500 text-black"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          1. List
        </button>

        <div className="w-px bg-gray-700" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive("blockquote")
              ? "bg-yellow-500 text-black"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          " Quote
        </button>

        <div className="w-px bg-gray-700" />

        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="px-3 py-1 rounded text-sm bg-gray-800 text-white hover:bg-gray-700"
        >
          ―
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="px-3 py-1 rounded text-sm bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ↶ Undo
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="px-3 py-1 rounded text-sm bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ↷ Redo
        </button>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />
    </div>
  );
}
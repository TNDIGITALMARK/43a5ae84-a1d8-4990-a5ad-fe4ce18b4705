'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Layout,
  Type,
  Image as ImageIcon,
  Square,
  Save,
  Eye,
  Settings,
  Palette,
  Download,
  Undo,
  Redo,
} from 'lucide-react';

interface PageSection {
  id: string;
  type: 'hero' | 'text' | 'image' | 'twoColumn';
  title: string;
  content: string;
  editable: boolean;
}

const initialSections: PageSection[] = [
  {
    id: '1',
    type: 'hero',
    title: "Antonio's Italian Kitchen",
    content: 'Experience authentic Italian cuisine in the heart of downtown',
    editable: true,
  },
  {
    id: '2',
    type: 'text',
    title: 'Our Story',
    content:
      'For over 20 years, we have been serving traditional Italian recipes passed down through generations...',
    editable: true,
  },
  {
    id: '3',
    type: 'twoColumn',
    title: 'Menu Highlights',
    content: 'Discover our signature dishes made with fresh, locally-sourced ingredients',
    editable: true,
  },
];

export default function EditorPage() {
  const [sections, setSections] = useState<PageSection[]>(initialSections);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [sidebarTab, setSidebarTab] = useState<'elements' | 'settings'>('elements');

  const handleSectionClick = (id: string) => {
    setSelectedSection(id === selectedSection ? null : id);
  };

  const handleTitleChange = (id: string, newTitle: string) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, title: newTitle } : section
      )
    );
  };

  const handleContentChange = (id: string, newContent: string) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, content: newContent } : section
      )
    );
  };

  const addSection = (type: PageSection['type']) => {
    const newSection: PageSection = {
      id: Date.now().toString(),
      type,
      title: 'New Section',
      content: 'Edit this content by clicking on it',
      editable: true,
    };
    setSections([...sections, newSection]);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Toolbar */}
      <header className="border-b border-border bg-card">
        <div className="px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/generated/logo.png"
                alt="BUILD.AI"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-bold text-white">BUILD.AI</span>
            </Link>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-white font-medium">Antonio&apos;s Italian Kitchen</h1>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 text-white/70 hover:text-white hover:bg-white/5 rounded transition-smooth">
              <Undo className="w-5 h-5" />
            </button>
            <button className="p-2 text-white/70 hover:text-white hover:bg-white/5 rounded transition-smooth">
              <Redo className="w-5 h-5" />
            </button>
            <div className="h-6 w-px bg-border mx-2" />
            <button className="px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded transition-smooth flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Preview
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded font-medium hover:brightness-110 transition-smooth flex items-center gap-2">
              <Save className="w-5 h-5" />
              Save
            </button>
            <button className="px-4 py-2 bg-secondary text-white rounded font-medium hover:brightness-110 transition-smooth flex items-center gap-2">
              <Download className="w-5 h-5" />
              Publish
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Elements & Settings */}
        <aside className="w-80 border-r border-border bg-card overflow-y-auto">
          <div className="p-4">
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setSidebarTab('elements')}
                className={`flex-1 px-4 py-2 rounded transition-smooth ${
                  sidebarTab === 'elements'
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                Elements
              </button>
              <button
                onClick={() => setSidebarTab('settings')}
                className={`flex-1 px-4 py-2 rounded transition-smooth ${
                  sidebarTab === 'settings'
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                Settings
              </button>
            </div>

            {sidebarTab === 'elements' ? (
              <div className="space-y-3">
                <h3 className="text-white/60 text-xs font-semibold uppercase mb-3">
                  Add Elements
                </h3>
                <button
                  onClick={() => addSection('hero')}
                  className="w-full p-4 bg-white/5 border border-border rounded-lg hover:bg-white/10 hover:border-primary transition-smooth text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                      <Layout className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Hero Section</p>
                      <p className="text-white/60 text-xs">Large header with title</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => addSection('text')}
                  className="w-full p-4 bg-white/5 border border-border rounded-lg hover:bg-white/10 hover:border-primary transition-smooth text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                      <Type className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Text Block</p>
                      <p className="text-white/60 text-xs">Paragraph content</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => addSection('image')}
                  className="w-full p-4 bg-white/5 border border-border rounded-lg hover:bg-white/10 hover:border-primary transition-smooth text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                      <ImageIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Image</p>
                      <p className="text-white/60 text-xs">Single image block</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => addSection('twoColumn')}
                  className="w-full p-4 bg-white/5 border border-border rounded-lg hover:bg-white/10 hover:border-primary transition-smooth text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                      <Square className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Two Columns</p>
                      <p className="text-white/60 text-xs">Side-by-side layout</p>
                    </div>
                  </div>
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-white/60 text-xs font-semibold uppercase mb-3">
                  Page Settings
                </h3>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">
                    <div className="flex items-center gap-2 mb-2">
                      <Palette className="w-4 h-4" />
                      Theme Color
                    </div>
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {['#3B82F6', '#06B6D4', '#8B5CF6', '#F59E0B', '#EF4444'].map((color) => (
                      <button
                        key={color}
                        className="w-full aspect-square rounded border-2 border-border hover:border-primary transition-smooth"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">
                    <div className="flex items-center gap-2 mb-2">
                      <Settings className="w-4 h-4" />
                      Page Title
                    </div>
                  </label>
                  <input
                    type="text"
                    defaultValue="Antonio's Italian Kitchen"
                    className="w-full px-3 py-2 bg-background text-white border border-border rounded focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">
                    Meta Description
                  </label>
                  <textarea
                    defaultValue="Authentic Italian cuisine in downtown"
                    className="w-full px-3 py-2 bg-background text-white border border-border rounded focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth resize-none"
                    rows={3}
                  />
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Main Canvas */}
        <main className="flex-1 overflow-y-auto bg-background-dark">
          <div className="max-w-5xl mx-auto p-8">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              {sections.map((section) => (
                <div
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`relative group cursor-pointer transition-all ${
                    selectedSection === section.id
                      ? 'ring-2 ring-primary ring-offset-2 ring-offset-white'
                      : 'hover:ring-2 hover:ring-primary/50'
                  }`}
                >
                  {section.type === 'hero' && (
                    <div className="relative h-96 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-12">
                      <div className="text-center text-white">
                        {selectedSection === section.id ? (
                          <>
                            <input
                              type="text"
                              value={section.title}
                              onChange={(e) => handleTitleChange(section.id, e.target.value)}
                              className="text-5xl font-bold mb-4 bg-transparent border-b-2 border-white/30 focus:border-white outline-none text-center w-full"
                              onClick={(e) => e.stopPropagation()}
                            />
                            <textarea
                              value={section.content}
                              onChange={(e) => handleContentChange(section.id, e.target.value)}
                              className="text-xl text-white/80 bg-transparent border border-white/30 rounded p-2 outline-none w-full resize-none"
                              rows={2}
                              onClick={(e) => e.stopPropagation()}
                            />
                          </>
                        ) : (
                          <>
                            <h1 className="text-5xl font-bold mb-4">{section.title}</h1>
                            <p className="text-xl text-white/80">{section.content}</p>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {section.type === 'text' && (
                    <div className="p-12">
                      {selectedSection === section.id ? (
                        <>
                          <input
                            type="text"
                            value={section.title}
                            onChange={(e) => handleTitleChange(section.id, e.target.value)}
                            className="text-3xl font-bold mb-4 bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none w-full"
                            onClick={(e) => e.stopPropagation()}
                          />
                          <textarea
                            value={section.content}
                            onChange={(e) => handleContentChange(section.id, e.target.value)}
                            className="text-gray-700 leading-relaxed bg-transparent border border-gray-300 rounded p-2 outline-none w-full resize-none"
                            rows={4}
                            onClick={(e) => e.stopPropagation()}
                          />
                        </>
                      ) : (
                        <>
                          <h2 className="text-3xl font-bold mb-4 text-gray-900">
                            {section.title}
                          </h2>
                          <p className="text-gray-700 leading-relaxed">{section.content}</p>
                        </>
                      )}
                    </div>
                  )}

                  {section.type === 'twoColumn' && (
                    <div className="p-12 bg-gray-50">
                      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                        {section.title}
                      </h2>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow">
                          <h3 className="text-xl font-semibold mb-2 text-gray-900">
                            Pasta Dishes
                          </h3>
                          <p className="text-gray-600">Handmade fresh daily</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                          <h3 className="text-xl font-semibold mb-2 text-gray-900">
                            Wood-Fired Pizza
                          </h3>
                          <p className="text-gray-600">Traditional Italian style</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedSection === section.id && (
                    <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-smooth">
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

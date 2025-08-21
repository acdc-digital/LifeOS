// BOOKS PANEL - Detailed book view with personal notes and blog-style posts
// /Users/matthewsimon/Projects/LifeOS/LifeOS/app/_components/activity/_components/books/BooksPanel.tsx

"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Plus, Calendar, User, FileText, Clock, Tag, Edit3 } from "lucide-react";

interface BookNote {
  id: number;
  title: string;
  content: string;
  date: string;
  tags: string[];
}

interface Book {
  id: number;
  title: string;
  author: string;
  type: string;
  pages: number;
  publishDate: string;
  isbn: string;
  genre: string[];
  synopsis: string;
  cover: string;
  status: string;
  progress: number;
  rating: number;
  notes: BookNote[];
}

export function BooksPanel() {
  // Mock book data with detailed information
  const mockBooks: Book[] = [
    {
      id: 1,
      title: "The Pragmatic Programmer",
      author: "David Thomas, Andrew Hunt",
      type: "Paperback",
      pages: 352,
      publishDate: "1999-10-20",
      isbn: "978-0201616224",
      genre: ["Programming", "Software Development"],
      synopsis: "Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users.",
      cover: "/placeholder-book.jpg",
      status: "reading",
      progress: 45,
      rating: 5,
      notes: [
        {
          id: 1,
          title: "Chapter 2 Insights",
          content: "The concept of 'Don't Repeat Yourself' really resonated with me. I've been guilty of copy-pasting code without thinking about the long-term maintenance implications.",
          date: "2025-08-18",
          tags: ["DRY", "best-practices"]
        },
        {
          id: 2,
          title: "Orthogonality Notes",
          content: "The orthogonality principle is fascinating. When systems are orthogonal, changes in one area don't affect others. This makes debugging and testing so much easier.",
          date: "2025-08-19",
          tags: ["architecture", "design"]
        }
      ]
    }
  ];

  const currentBook = mockBooks[0];

  const handleAddNote = () => {
    // TODO: Implement note editor functionality
    console.log('Add note functionality will be implemented');
  };

  if (!currentBook) {
    return (
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-[#454545]">
          <h3 className="text-[#cccccc] font-medium mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            BOOKS
          </h3>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-[#858585]">
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No books selected</p>
            <Button className="mt-4 bg-[#007acc] hover:bg-[#005a9e]">
              <Plus className="w-4 h-4 mr-2" />
              Add Book
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-[#454545]">
        <h3 className="text-[#cccccc] font-medium mb-4 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          BOOK DETAILS
        </h3>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {/* Book Overview Section */}
          <div className="flex gap-4">
            {/* Book Cover */}
            <div className="w-24 h-32 bg-[#2d2d2d] rounded flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-8 h-8 text-[#858585]" />
            </div>
            
            {/* Book Details */}
            <div className="flex-1 space-y-2">
              <h4 className="text-[#cccccc] font-semibold text-lg leading-tight">
                {currentBook.title}
              </h4>
              <p className="text-[#858585] flex items-center gap-1">
                <User className="w-3 h-3" />
                {currentBook.author}
              </p>
              
              {/* Book Metadata */}
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2 text-[#858585]">
                  <Tag className="w-3 h-3" />
                  <span className="text-[#cccccc]">Type:</span>
                  <span>{currentBook.type}</span>
                </div>
                <div className="flex items-center gap-2 text-[#858585]">
                  <FileText className="w-3 h-3" />
                  <span className="text-[#cccccc]">Pages:</span>
                  <span>{currentBook.pages}</span>
                </div>
                <div className="flex items-center gap-2 text-[#858585]">
                  <Calendar className="w-3 h-3" />
                  <span className="text-[#cccccc]">Published:</span>
                  <span>{new Date(currentBook.publishDate).getFullYear()}</span>
                </div>
              </div>

              {/* Genre Tags */}
              <div className="flex flex-wrap gap-1 mt-2">
                {currentBook.genre.map((genre: string) => (
                  <span
                    key={genre}
                    className="px-2 py-1 bg-[#007acc]/20 text-[#007acc] text-xs rounded"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Synopsis */}
          <div className="space-y-2">
            <h5 className="text-[#cccccc] font-medium text-sm">Synopsis</h5>
            <p className="text-[#858585] text-sm leading-relaxed">
              {currentBook.synopsis}
            </p>
          </div>

          {/* Reading Progress */}
          {currentBook.status === 'reading' && (
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h5 className="text-[#cccccc] font-medium text-sm">Reading Progress</h5>
                <span className="text-xs text-[#858585]">{currentBook.progress}%</span>
              </div>
              <div className="w-full bg-[#2d2d2d] rounded-full h-2">
                <div
                  className="bg-[#007acc] h-2 rounded-full transition-all"
                  style={{ width: `${currentBook.progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Notes Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h5 className="text-[#cccccc] font-medium text-sm flex items-center gap-2">
                <Edit3 className="w-4 h-4" />
                Reading Notes & Thoughts
              </h5>
              <Button
                size="sm"
                onClick={handleAddNote}
                className="bg-[#007acc] hover:bg-[#005a9e] text-white"
              >
                <Plus className="w-3 h-3 mr-1" />
                Add Note
              </Button>
            </div>

            {/* Notes List */}
            <div className="space-y-3">
              {currentBook.notes.map((note: BookNote) => (
                <div
                  key={note.id}
                  className="bg-[#3c3c3c] rounded-lg p-3 hover:bg-[#404040] transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h6 className="text-[#cccccc] font-medium text-sm">
                      {note.title}
                    </h6>
                    <div className="flex items-center gap-1 text-xs text-[#858585]">
                      <Clock className="w-3 h-3" />
                      {new Date(note.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <p className="text-[#858585] text-sm leading-relaxed mb-2">
                    {note.content}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {note.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 bg-[#2d2d2d] text-[#858585] text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              
              {currentBook.notes.length === 0 && (
                <div className="text-center py-8 text-[#858585] text-sm">
                  <Edit3 className="w-6 h-6 mx-auto mb-2 opacity-50" />
                  <p>No notes yet</p>
                  <p className="text-xs mt-1">Add your first reading note to get started</p>
                </div>
              )}
            </div>
          </div>

          {/* Book Metadata */}
          <div className="pt-4 border-t border-[#454545]">
            <h5 className="text-[#cccccc] font-medium text-sm mb-3">Book Information</h5>
            <div className="grid grid-cols-1 gap-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#858585]">ISBN:</span>
                <span className="text-[#cccccc]">{currentBook.isbn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#858585]">Status:</span>
                <span className="text-[#cccccc] capitalize">{currentBook.status}</span>
              </div>
              {currentBook.rating > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-[#858585]">My Rating:</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 text-xs ${
                          i < currentBook.rating
                            ? 'text-yellow-400'
                            : 'text-[#454545]'
                        }`}
                      >
                        ★
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AppSidebar from "../../../components/AppSidebar";

interface Exercise {
  id: number;
  title: string;
  image: string;
  difficulty: string;
  difficultyColor: string;
  difficultyIcon: string;
  tags: string[];
  category: string;
  isLiked?: boolean;
}

const INITIAL_EXERCISES: Exercise[] = [
  {
    id: 1,
    title: "Diamond Pushups",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800",
    difficulty: "ADVANCED",
    difficultyColor: "text-[#A7295A]",
    difficultyIcon: "⚡",
    tags: ["TRICEPS", "CHEST"],
    category: "Chest",
    isLiked: false,
  },
  {
    id: 2,
    title: "Romanian Deadlift",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800",
    difficulty: "PRO",
    difficultyColor: "text-[#A7295A]",
    difficultyIcon: "🔥",
    tags: ["HAMSTRINGS", "LOWER BACK"],
    category: "Legs",
    isLiked: true,
  },
  {
    id: 3,
    title: "Cobra Stretch",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
    difficulty: "BEGINNER",
    difficultyColor: "text-[#604F9E]",
    difficultyIcon: "🌱",
    tags: ["MOBILITY", "SPINE"],
    category: "Mobility",
    isLiked: false,
  },
  {
    id: 4,
    title: "Kettlebell Swings",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800",
    difficulty: "INTERMEDIATE",
    difficultyColor: "text-[#A7295A]",
    difficultyIcon: "⏱️",
    tags: ["FULL BODY", "POWER"],
    category: "Cardio",
    isLiked: false,
  },
  {
    id: 5,
    title: "Quad Extension",
    image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?q=80&w=800",
    difficulty: "INTERMEDIATE",
    difficultyColor: "text-[#604F9E]",
    difficultyIcon: "🏋️",
    tags: ["QUADS", "ISOLATION"],
    category: "Legs",
    isLiked: false,
  },
  {
    id: 6,
    title: "HIIT Sprints",
    image: "https://images.unsplash.com/photo-1522845015757-50bce044e5da?q=80&w=800",
    difficulty: "ENDURANCE",
    difficultyColor: "text-[#A7295A]",
    difficultyIcon: "🏃",
    tags: ["CARDIO", "VO2 MAX"],
    category: "Cardio",
    isLiked: false,
  },
  {
    id: 7,
    title: "Wide Grip Pull-ups",
    image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=800",
    difficulty: "ADVANCED",
    difficultyColor: "text-[#A7295A]",
    difficultyIcon: "⚡",
    tags: ["LATS", "UPPER BACK"],
    category: "Back",
    isLiked: false,
  },
  {
    id: 8,
    title: "Double Unders",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800",
    difficulty: "CARDIO",
    difficultyColor: "text-[#604F9E]",
    difficultyIcon: "⚡",
    tags: ["CALVES", "AGILITY"],
    category: "Cardio",
    isLiked: false,
  },
];

const MORE_EXERCISES: Exercise[] = [
  {
    id: 9,
    title: "Barbell Bench Press",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800",
    difficulty: "INTERMEDIATE",
    difficultyColor: "text-[#A7295A]",
    difficultyIcon: "🏋️",
    tags: ["CHEST", "TRICEPS"],
    category: "Chest",
    isLiked: false,
  },
  {
    id: 10,
    title: "Barbell Back Squat",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800",
    difficulty: "ADVANCED",
    difficultyColor: "text-[#A7295A]",
    difficultyIcon: "⚡",
    tags: ["QUADS", "GLUTES"],
    category: "Legs",
    isLiked: false,
  },
  {
    id: 11,
    title: "Shoulder Press",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800",
    difficulty: "INTERMEDIATE",
    difficultyColor: "text-[#604F9E]",
    difficultyIcon: "🏋️",
    tags: ["SHOULDERS", "TRICEPS"],
    category: "Shoulders",
    isLiked: false,
  },
  {
    id: 12,
    title: "Lying Leg Curl",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800",
    difficulty: "BEGINNER",
    difficultyColor: "text-[#604F9E]",
    difficultyIcon: "🌱",
    tags: ["HAMSTRINGS", "ISOLATION"],
    category: "Legs",
    isLiked: false,
  },
];

export default function ExerciseLibraryPage() {
  const [exercises, setExercises] = useState<Exercise[]>(INITIAL_EXERCISES);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Exercises");
  const [hasLoadedMore, setHasLoadedMore] = useState(false);
  const [loading, setLoading] = useState(false);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Chest");
  const [newDifficulty, setNewDifficulty] = useState("INTERMEDIATE");
  const [newTags, setNewTags] = useState("");

  // Notification Toast State
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    document.title = "Exercise Library · VitaForge";
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  const handleLikeToggle = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExercises((prev) =>
      prev.map((ex) => {
        if (ex.id === id) {
          const nextLiked = !ex.isLiked;
          triggerToast(nextLiked ? `Added ${ex.title} to favorites` : `Removed ${ex.title} from favorites`);
          return { ...ex, isLiked: nextLiked };
        }
        return ex;
      })
    );
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setExercises((prev) => [...prev, ...MORE_EXERCISES]);
      setHasLoadedMore(true);
      setLoading(false);
      triggerToast("Loaded 4 additional movements");
    }, 800);
  };

  const handleAddExerciseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const formattedTags = newTags
      .split(",")
      .map((t) => t.trim().toUpperCase())
      .filter((t) => t.length > 0);

    const difficultyIcons: Record<string, string> = {
      BEGINNER: "🌱",
      INTERMEDIATE: "🏋️",
      ADVANCED: "⚡",
      PRO: "🔥",
      ENDURANCE: "🏃",
    };

    const newEx: Exercise = {
      id: Date.now(),
      title: newTitle,
      category: newCategory,
      difficulty: newDifficulty,
      difficultyColor: newDifficulty === "BEGINNER" || newDifficulty === "INTERMEDIATE" ? "text-[#604F9E]" : "text-[#A7295A]",
      difficultyIcon: difficultyIcons[newDifficulty] || "💪",
      tags: formattedTags.length > 0 ? formattedTags : ["GENERAL"],
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800",
      isLiked: false,
    };

    setExercises((prev) => [newEx, ...prev]);
    setIsModalOpen(false);
    setNewTitle("");
    setNewTags("");
    triggerToast(`Added custom movement: ${newTitle}`);
  };

  // Filter logic
  const filteredExercises = useMemo(() => {
    return exercises.filter((ex) => {
      const matchesSearch =
        ex.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ex.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        ex.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === "All Exercises" || ex.category.toLowerCase() === activeCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [exercises, searchQuery, activeCategory]);

  const categories = ["All Exercises", "Chest", "Legs", "Cardio", "Mobility", "Back"];

  return (
    <div className="min-h-screen bg-[#F7F6F9] pb-24 relative font-sans">
      <AppSidebar />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-[#2D2F31] text-white px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10 animate-fade-in transition-all">
          <div className="w-2.5 h-2.5 bg-[#BAA7FE] rounded-full animate-pulse" />
          <span className="text-sm font-semibold tracking-tight">{toastMessage}</span>
        </div>
      )}

      {/* Top Header Navigation Bar */}
      <header className="sticky top-0 z-40 w-full h-[108px] bg-white/60 backdrop-blur-md border-b border-slate-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center justify-between px-12 lg:pl-[340px]">
        <div className="flex flex-col gap-1">
          <h1 className="text-[30px] font-black tracking-[-0.75px] text-[#2D2F31] leading-tight">
            Exercise <span className="bg-gradient-to-r from-[#A7295A] to-[#604F9E] bg-clip-text text-transparent">Library</span>
          </h1>
          <p className="text-sm text-[#5A5B5E] font-medium">Discover 450+ high-performance movements</p>
        </div>

        {/* User Profile and Notifications */}
        <div className="flex items-center gap-4">
          <button 
            className="p-3 text-[#5A5B5E] hover:text-[#2D2F31] rounded-full hover:bg-slate-100 transition-colors relative"
            onClick={() => triggerToast("No new notifications")}
          >
            <svg className="w-5 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#A7295A] rounded-full border border-white" />
          </button>
          <div className="w-10 h-10 rounded-full bg-slate-200 border border-slate-300/30 overflow-hidden relative">
            <Image
              src="/images/auth/avatar_3.png"
              alt="User profile"
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[1024px] mx-auto px-12 py-8 flex flex-col gap-8 lg:ml-[320px]">
        
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-[928px]">
          
          {/* Search Box */}
          <div className="relative w-full md:w-[448px] h-14">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-[#767779]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search exercises, muscles, or equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full pl-12 pr-6 bg-[#F1F0F4] border border-slate-200/20 text-[#2D2F31] placeholder-[#767779] text-base font-normal rounded-2xl outline-none focus:bg-white focus:ring-2 focus:ring-[#604F9E]/20 transition-all shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className="absolute inset-y-0 right-4 flex items-center text-[#767779] hover:text-[#2D2F31]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`h-11 px-6 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-[1.02] flex items-center justify-center ${
                    isActive
                      ? "bg-gradient-to-r from-[#604F9E] to-[#BAA7FE] text-white shadow-[0_10px_15px_-3px_rgba(96,79,158,0.25)]"
                      : "bg-[#F1F0F4] text-[#5A5B5E] hover:bg-[#E4E3E8] hover:text-[#2D2F31]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Bento Grid Layout for Exercise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-[928px]">
          {filteredExercises.map((ex) => (
            <div
              key={ex.id}
              className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(96,79,158,0.04)] border border-slate-100/80 hover:shadow-xl hover:shadow-[#604F9E]/10 hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative w-full h-[156px] bg-slate-900 overflow-hidden">
                <Image
                  src={ex.image}
                  alt={ex.title}
                  fill
                  sizes="220px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized={ex.image.startsWith("http")}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                {/* Difficulty Overlay badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3.5 py-1 bg-white/90 backdrop-blur-md border border-white/20 rounded-full shadow-sm">
                  <span className="text-xs">{ex.difficultyIcon}</span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#2D2F31]">
                    {ex.difficulty}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-5">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-lg font-bold text-[#2D2F31] group-hover:text-[#604F9E] leading-tight transition-colors">
                    {ex.title}
                  </h3>
                  
                  {/* Heart Like Toggle */}
                  <button
                    onClick={(e) => handleLikeToggle(ex.id, e)}
                    className="p-1 rounded-full text-[#ADADB0] hover:text-[#A7295A] hover:bg-slate-50 transition-colors"
                  >
                    <svg
                      className={`w-5 h-5 transition-transform active:scale-75 ${
                        ex.isLiked ? "fill-[#A7295A] text-[#A7295A]" : "text-[#ADADB0]"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  {ex.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-[#E8E8EB] text-[#5A5B5E] text-[10px] font-bold tracking-wider rounded-md uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredExercises.length === 0 && (
          <div className="w-full max-w-[928px] bg-white rounded-3xl p-16 flex flex-col items-center justify-center text-center border border-slate-100">
            <div className="w-16 h-16 rounded-2xl bg-[#F1F0F4] flex items-center justify-center text-[#767779] mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#2D2F31] mb-2">No movements found</h3>
            <p className="text-sm text-[#5A5B5E] max-w-sm">
              We couldn't find any exercise matching "{searchQuery}" in category "{activeCategory}".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All Exercises");
              }}
              className="mt-6 px-6 py-2.5 bg-gradient-to-r from-[#604F9E] to-[#BAA7FE] text-white font-bold text-sm rounded-full shadow-md"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Load More Exercises Button */}
        {!hasLoadedMore && filteredExercises.length > 0 && (
          <div className="flex justify-center w-full max-w-[928px] mt-6">
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-[#2D2F31] font-bold text-sm rounded-full border border-slate-200 shadow-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-[#604F9E] border-t-transparent animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  Load More Exercises
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}

      </main>

      {/* Floating Action Button (FAB) for custom exercises */}
      <div className="fixed bottom-12 right-12 z-40">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#604F9E] to-[#BAA7FE] hover:from-[#503E8D] hover:to-[#A996ED] text-white flex items-center justify-center shadow-[0_20px_40px_rgba(96,79,158,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer relative group"
          title="Add custom exercise"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
          </svg>
          
          {/* Tooltip tooltip-hover */}
          <span className="absolute right-20 bg-[#2D2F31] text-white text-[11px] font-bold uppercase tracking-wider py-2 px-4 rounded-xl shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
            Add Custom Exercise
          </span>
        </button>
      </div>

      {/* Add Custom Exercise Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-[32px] w-full max-w-lg overflow-hidden shadow-2xl border border-white/20 animate-scale-up">
            
            {/* Modal Header */}
            <div className="px-8 py-6 bg-gradient-to-r from-[#604F9E] to-[#BAA7FE] text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-black">Add Custom Exercise</h3>
                <p className="text-xs text-white/80 mt-1">Create a new high-performance movement</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handleAddExerciseSubmit} className="p-8 flex flex-col gap-6">
              
              {/* Exercise Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase text-[#5A5B5E] tracking-wider">
                  Movement Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Diamond Pushups"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-5 py-3.5 bg-[#F1F0F4] border border-slate-200/50 rounded-2xl outline-none focus:bg-white focus:ring-2 focus:ring-[#604F9E]/20 text-[#2D2F31]"
                />
              </div>

              {/* Grid: Category & Difficulty */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Category */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-[#5A5B5E] tracking-wider">
                    Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-5 py-3.5 bg-[#F1F0F4] border border-slate-200/50 rounded-2xl outline-none focus:bg-white text-[#2D2F31]"
                  >
                    <option value="Chest">Chest</option>
                    <option value="Legs">Legs</option>
                    <option value="Cardio">Cardio</option>
                    <option value="Mobility">Mobility</option>
                    <option value="Back">Back</option>
                    <option value="Shoulders">Shoulders</option>
                  </select>
                </div>

                {/* Difficulty */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-[#5A5B5E] tracking-wider">
                    Difficulty
                  </label>
                  <select
                    value={newDifficulty}
                    onChange={(e) => setNewDifficulty(e.target.value)}
                    className="w-full px-5 py-3.5 bg-[#F1F0F4] border border-slate-200/50 rounded-2xl outline-none focus:bg-white text-[#2D2F31]"
                  >
                    <option value="BEGINNER">BEGINNER</option>
                    <option value="INTERMEDIATE">INTERMEDIATE</option>
                    <option value="ADVANCED">ADVANCED</option>
                    <option value="PRO">PRO</option>
                    <option value="ENDURANCE">ENDURANCE</option>
                  </select>
                </div>

              </div>

              {/* Tags */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase text-[#5A5B5E] tracking-wider">
                  Tags (Comma Separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chest, Strength, Calisthenics"
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  className="w-full px-5 py-3.5 bg-[#F1F0F4] border border-slate-200/50 rounded-2xl outline-none focus:bg-white focus:ring-2 focus:ring-[#604F9E]/20 text-[#2D2F31]"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-[#5A5B5E] font-bold text-sm rounded-full transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-gradient-to-r from-[#604F9E] to-[#BAA7FE] text-white font-bold text-sm rounded-full shadow-lg shadow-[#604F9E]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Add Movement
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}

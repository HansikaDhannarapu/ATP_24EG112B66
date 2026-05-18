// src/styles/common.js
// Shared visual system: calm neutrals, soft borders, restrained accent color.

// Layout
export const pageBackground = "bg-[#f7f8fa] min-h-screen";
export const pageWrapper = "max-w-5xl mx-auto px-4 sm:px-6 py-10";
export const section = "mb-12";

// Cards
export const cardClass =
  "bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:border-slate-300 transition-colors duration-200 cursor-pointer";

// Typography
export const pageTitleClass = "text-3xl font-semibold text-slate-900 tracking-normal leading-tight mb-2";
export const headingClass = "text-2xl font-semibold text-slate-900 tracking-normal";
export const subHeadingClass = "text-lg font-semibold text-slate-900 tracking-normal";
export const bodyText = "text-slate-600 leading-relaxed";
export const mutedText = "text-sm text-slate-500";
export const linkClass = "text-slate-700 hover:text-slate-950 transition-colors";

// Buttons
export const primaryBtn =
  "bg-slate-900 text-white font-medium px-5 py-2 rounded-md hover:bg-slate-700 transition-colors cursor-pointer text-sm";
export const secondaryBtn =
  "border border-slate-300 text-slate-700 font-medium px-5 py-2 rounded-md hover:bg-slate-100 transition-colors cursor-pointer text-sm";
export const ghostBtn = "text-slate-700 font-medium hover:text-slate-950 transition-colors cursor-pointer text-sm";

// Forms
export const formCard = "bg-white rounded-lg border border-slate-200 p-8 max-w-3xl mx-auto shadow-sm";
export const formTitle = "text-2xl font-semibold text-slate-900 text-center mb-7";
export const labelClass = "text-sm font-medium text-slate-700 mb-1.5 block";
export const inputClass =
  "w-full bg-white border border-slate-300 rounded-md px-4 py-2.5 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition";
export const formGroup = "mb-4";
export const submitBtn =
  "w-full bg-slate-900 text-white font-medium py-2.5 rounded-md hover:bg-slate-700 transition-colors cursor-pointer mt-2 text-sm disabled:cursor-not-allowed disabled:bg-slate-400";

// Navbar
export const navbarClass =
  "sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200";
export const navContainerClass = "max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4";
export const navBrandClass = "text-2xl font-semibold text-slate-900 hover:text-slate-700 transition-colors";
export const navLinksClass = "flex items-center gap-2 sm:gap-3 text-sm font-medium";
export const navLinkClass = "text-slate-600 hover:text-slate-950 transition-colors";
export const navLinkActiveClass = "bg-slate-100 text-slate-950";

// Article / Blog
export const articleGrid = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5";
export const articleCardClass =
  "bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:border-slate-300 transition-colors duration-200 flex flex-col gap-3 cursor-pointer";
export const articleTitle = "text-lg font-semibold text-slate-900 leading-snug";
export const articleExcerpt = "text-sm text-slate-600 leading-relaxed";
export const articleMeta = "text-xs text-slate-500";
export const articleBody = "text-slate-700 leading-[1.85] text-[0.95rem] max-w-2xl";
export const timestampClass = "text-xs text-slate-500 flex items-center gap-1.5";
export const tagClass = "text-[0.7rem] font-semibold text-slate-600 uppercase tracking-wider w-fit";

// Article Page
export const articlePageWrapper = "max-w-3xl mx-auto px-4 sm:px-6 py-10";
export const articleHeader = "mb-8 flex flex-col gap-4";
export const articleCategory = "text-xs font-semibold uppercase tracking-wider text-slate-600";
export const articleMainTitle = "text-3xl sm:text-4xl font-semibold text-slate-950 leading-tight";
export const articleAuthorRow =
  "flex items-center justify-between border-y border-slate-200 py-4 text-sm text-slate-500";
export const authorInfo = "flex items-center gap-2 font-medium text-slate-700";
export const articleContent = "text-slate-700 leading-[1.9] text-base whitespace-pre-line mt-8";
export const articleFooter = "border-t border-slate-200 mt-10 pt-5 text-sm text-slate-500";

// Article Actions
export const articleActions = "flex gap-3 mt-6";
export const editBtn = "bg-slate-900 text-white text-sm px-4 py-2 rounded-md hover:bg-slate-700 transition";
export const deleteBtn = "bg-rose-600 text-white text-sm px-4 py-2 rounded-md hover:bg-rose-700 transition";

// Article Status Badge
export const articleStatusActive =
  "absolute top-3 right-3 text-[10px] font-semibold px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100";
export const articleStatusDeleted =
  "absolute top-3 right-3 text-[10px] font-semibold px-2 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-100";

// Feedback
export const errorClass =
  "bg-rose-50 text-rose-700 border border-rose-100 rounded-md px-4 py-3 text-sm";
export const successClass =
  "bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-md px-4 py-3 text-sm";
export const loadingClass = "text-slate-500 text-sm animate-pulse text-center py-10";
export const emptyStateClass = "text-center text-slate-500 py-12 text-sm bg-white rounded-lg border border-slate-200";

// Comments
export const commentsWrapper = "mt-12 flex flex-col gap-4";
export const commentCard = "bg-white rounded-lg border border-slate-200 p-5";
export const commentHeader = "flex items-center justify-between mb-2";
export const commentUser = "text-sm font-semibold text-slate-900";
export const commentTime = "text-xs text-slate-500";
export const commentText = "text-slate-700 text-sm leading-relaxed mt-1";
export const avatar =
  "w-9 h-9 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-sm font-semibold";
export const commentUserRow = "flex items-center gap-3";

// Divider
export const divider = "border-t border-slate-200 my-8";

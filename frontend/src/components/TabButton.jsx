export default function TabButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? 'rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 ring-1 ring-slate-700'
          : 'rounded-full bg-transparent px-4 py-2 text-sm font-medium text-slate-300 ring-1 ring-slate-800 hover:bg-slate-900/40'
      }
    >
      {children}
    </button>
  )
}

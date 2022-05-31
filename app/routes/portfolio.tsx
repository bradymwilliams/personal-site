import { Outlet } from "remix";

export default function Portfolio() {
  return (
    <div className="relative bg-slate-900">
      <div className="prose-img:max-w-100 container prose prose-xl prose-invert max-w-4xl px-4 pt-4 pb-8 prose-headings:font-bold prose-img:sm:max-w-md ">
        <Outlet />
      </div>
    </div>
  );
}

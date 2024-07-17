
export default function SelectedProject({ project ,onDelte}) {
  const formattedDate = new Date(project.dueDate).toLocaleString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-4 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button className="text-stone-100  rounded-lg p-1 w-28 bg-stone-900" onClick={onDelte}>
            Delete
          </button>
        </div>
        <p className="text-stone-400 mb-4">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
    </div>
  );
}

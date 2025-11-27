export default function ProjectsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">
          Manage and organize your projects
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-muted/50 p-6 rounded-xl space-y-2"
          >
            <h3 className="font-semibold">Project {i}</h3>
            <p className="text-sm text-muted-foreground">
              Project description goes here
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

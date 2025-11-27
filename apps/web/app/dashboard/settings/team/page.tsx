export default function TeamSettingsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold">Team Settings</h1>
        <p className="text-muted-foreground">
          Manage team members and permissions
        </p>
      </div>
      <div className="bg-muted/50 p-6 rounded-xl space-y-4">
        <h3 className="font-semibold">Team Members</h3>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-background rounded-lg">
              <div className="size-10 rounded-full bg-muted" />
              <div>
                <p className="font-medium">Team Member {i}</p>
                <p className="text-sm text-muted-foreground">member{i}@example.com</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

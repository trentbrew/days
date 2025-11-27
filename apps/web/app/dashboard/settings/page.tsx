export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your application settings and preferences
        </p>
      </div>
      <div className="grid gap-4">
        <div className="bg-muted/50 p-6 rounded-xl space-y-4">
          <h3 className="font-semibold">General Settings</h3>
          <p className="text-sm text-muted-foreground">
            Configure general application settings
          </p>
        </div>
        <div className="bg-muted/50 p-6 rounded-xl space-y-4">
          <h3 className="font-semibold">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your account and profile
          </p>
        </div>
        <div className="bg-muted/50 p-6 rounded-xl space-y-4">
          <h3 className="font-semibold">Privacy & Security</h3>
          <p className="text-sm text-muted-foreground">
            Control your privacy and security preferences
          </p>
        </div>
      </div>
    </div>
  )
}

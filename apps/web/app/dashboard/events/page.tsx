"use client"

import { useState } from "react"
import { EventManager, Event } from "@/components/ui/event-manager"
import { CalendarSidebar } from "@/components/calendar-sidebar"
import { SidebarProvider } from "@workspace/ui/components/sidebar"

// Sample events data
const sampleEvents: Event[] = [
  {
    id: "1",
    title: "Team Standup",
    description: "Daily sync with the engineering team",
    startTime: new Date(2025, 10, 26, 9, 0),
    endTime: new Date(2025, 10, 26, 9, 30),
    color: "blue",
    category: "Meeting",
    tags: ["Team", "Work"],
  },
  {
    id: "2",
    title: "Design Review",
    description: "Review new dashboard mockups with design team",
    startTime: new Date(2025, 10, 26, 14, 0),
    endTime: new Date(2025, 10, 26, 15, 0),
    color: "purple",
    category: "Meeting",
    tags: ["Team", "Important"],
  },
  {
    id: "3",
    title: "Client Call",
    description: "Quarterly review with Acme Corp",
    startTime: new Date(2025, 10, 27, 10, 0),
    endTime: new Date(2025, 10, 27, 11, 0),
    color: "green",
    category: "Meeting",
    tags: ["Client", "Important"],
  },
  {
    id: "4",
    title: "Project Deadline",
    description: "Submit final deliverables for Phase 1",
    startTime: new Date(2025, 10, 28, 17, 0),
    endTime: new Date(2025, 10, 28, 18, 0),
    color: "red",
    category: "Task",
    tags: ["Urgent", "Work"],
  },
  {
    id: "5",
    title: "Lunch with Sarah",
    description: "Catch up at the new Italian place downtown",
    startTime: new Date(2025, 10, 26, 12, 0),
    endTime: new Date(2025, 10, 26, 13, 0),
    color: "pink",
    category: "Personal",
    tags: ["Personal"],
  },
  {
    id: "6",
    title: "Sprint Planning",
    description: "Plan next sprint tasks and priorities",
    startTime: new Date(2025, 10, 24, 10, 0),
    endTime: new Date(2025, 10, 24, 12, 0),
    color: "blue",
    category: "Meeting",
    tags: ["Team", "Work"],
  },
  {
    id: "7",
    title: "Code Review",
    description: "Review pull requests for authentication feature",
    startTime: new Date(2025, 10, 25, 15, 0),
    endTime: new Date(2025, 10, 25, 16, 0),
    color: "orange",
    category: "Task",
    tags: ["Work"],
  },
  {
    id: "8",
    title: "Gym Session",
    description: "Weekly workout routine",
    startTime: new Date(2025, 10, 27, 7, 0),
    endTime: new Date(2025, 10, 27, 8, 0),
    color: "green",
    category: "Personal",
    tags: ["Personal"],
  },
  {
    id: "9",
    title: "Product Demo",
    description: "Demo new features to stakeholders",
    startTime: new Date(2025, 10, 28, 14, 0),
    endTime: new Date(2025, 10, 28, 15, 30),
    color: "purple",
    category: "Meeting",
    tags: ["Important", "Client"],
  },
  {
    id: "10",
    title: "Team Happy Hour",
    description: "End of month celebration at O'Malley's",
    startTime: new Date(2025, 10, 29, 17, 0),
    endTime: new Date(2025, 10, 29, 19, 0),
    color: "pink",
    category: "Personal",
    tags: ["Team", "Personal"],
  },
]

export default function EventsPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events, setEvents] = useState<Event[]>(sampleEvents)

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex w-full h-full gap-0">
        <CalendarSidebar 
          side="left" 
          currentDate={currentDate}
          onDateChange={setCurrentDate}
        />
        <div className="flex-1 min-w-0">
          <EventManager 
            currentDate={currentDate}
            onDateChange={setCurrentDate}
            events={events}
            onEventCreate={(event) => setEvents((prev) => [...prev, { ...event, id: Math.random().toString(36).substr(2, 9) }])}
            onEventUpdate={(id, updates) => setEvents((prev) => prev.map((e) => (e.id === id ? { ...e, ...updates } : e)))}
            onEventDelete={(id) => setEvents((prev) => prev.filter((e) => e.id !== id))}
          />
        </div>
      </div>
    </SidebarProvider>
  )
}

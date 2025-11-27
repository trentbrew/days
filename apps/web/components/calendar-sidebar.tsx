'use client';

import * as React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Inbox,
  Tag,
  Globe,
} from 'lucide-react';
import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@workspace/ui/components/sidebar';
import { Checkbox } from '@workspace/ui/components/checkbox';

interface MiniCalendarProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
}

// Mini calendar component
function MiniCalendar({ currentDate, onDateChange }: MiniCalendarProps) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const today = new Date();
  const isToday = (day: number) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  const prevMonth = () => {
    onDateChange(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    onDateChange(new Date(year, month + 1, 1));
  };

  const goToToday = () => {
    onDateChange(new Date());
  };

  const handleDayClick = (day: number, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return;
    onDateChange(new Date(year, month, day));
  };

  const days = [];

  // Previous month days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
      isToday: false,
    });
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    days.push({
      day,
      isCurrentMonth: true,
      isToday: isToday(day),
    });
  }

  // Next month days to fill the grid
  const remainingDays = 42 - days.length;
  for (let day = 1; day <= remainingDays; day++) {
    days.push({
      day,
      isCurrentMonth: false,
      isToday: false,
    });
  }

  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">
          {monthNames[month]} {year}
        </h3>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={prevMonth}
          >
            <ChevronLeft className="h-3 w-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 px-2 text-xs"
            onClick={goToToday}
          >
            Today
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={nextMonth}
          >
            <ChevronRight className="h-3 w-3" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map((day, i) => (
          <div
            key={`dow-${i}`}
            className="text-center text-xs font-medium text-muted-foreground h-6 flex items-center justify-center"
          >
            {day}
          </div>
        ))}

        {days.map((day, i) => (
          <button
            key={`day-${i}`}
            onClick={() => handleDayClick(day.day, day.isCurrentMonth)}
            className={cn(
              'h-6 text-xs rounded-md hover:bg-accent transition-colors flex items-center justify-center',
              day.isCurrentMonth
                ? 'text-foreground cursor-pointer'
                : 'text-muted-foreground/50 cursor-default',
              day.isToday &&
                'bg-primary text-primary-foreground hover:bg-primary/90 font-semibold',
            )}
          >
            {day.day}
          </button>
        ))}
      </div>
    </div>
  );
}

// List items
const lists = [
  { name: 'All', icon: CalendarIcon, color: 'text-blue-500' },
  { name: 'Inbox', icon: Inbox, color: 'text-gray-500' },
];

// Tags
const tags = [
  { name: 'Lists', count: 0 },
  { name: 'Tags', count: 0 },
];

// Subscribed calendars
const subscribedCalendars = [
  { name: 'trent@turtle.tech', icon: Globe, enabled: true },
  { name: 'hello@trentbrew.com', icon: Globe, enabled: true },
];

interface CalendarSidebarProps extends React.ComponentProps<typeof Sidebar> {
  currentDate: Date;
  onDateChange: (date: Date) => void;
}

export function CalendarSidebar({
  currentDate,
  onDateChange,
  ...props
}: CalendarSidebarProps) {
  return (
    <Sidebar
      collapsible="none"
      className="border-r !bg-sidebar/50 sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto"
      {...props}
    >
      <SidebarContent>
        {/* Mini Calendar */}
        <SidebarGroup>
          <MiniCalendar currentDate={currentDate} onDateChange={onDateChange} />
        </SidebarGroup>

        {/* Lists */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-xs">Lists</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {lists.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton className="px-3">
                    <item.icon className={cn('h-4 w-4', item.color)} />
                    <span>{item.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Tags */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-xs">Tags</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tags.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton className="px-3">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <span>{item.name}</span>
                    <span className="ml-auto text-xs text-muted-foreground">
                      {item.count}
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Subscribed Calendars */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-xs">
            Subscribed Calendars
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {subscribedCalendars.map((calendar) => (
                <SidebarMenuItem key={calendar.name}>
                  <div className="flex items-center gap-2 px-3 py-2 w-full">
                    <Checkbox checked={calendar.enabled} className="h-4 w-4" />
                    <calendar.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{calendar.name}</span>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

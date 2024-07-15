"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function DatePicker({
  dateGetter,
  initialDate,
}: {
  dateGetter?: React.Dispatch<React.SetStateAction<Date | undefined>>;
  initialDate?: Date;
}) {
  const [date, setDate] = React.useState<Date>();

  React.useEffect(() => {
    if (initialDate) {
      setDate(initialDate);
      console.log(date);
    }
    if (dateGetter) {
      dateGetter(date);
    }
  }, [initialDate, date, dateGetter]);

  return (
    <Popover>
      <PopoverTrigger asChild className=" focus-visible:border-2">
        <Button
          variant={"outline"}
          className={cn(
            "w-[200px]   justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Selectionner une date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(e) => {
            setDate(e);
            dateGetter && dateGetter(e);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

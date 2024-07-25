"use client"

import { Button } from "@/components/ui/button"

export default function Main() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-[calc(100vh-96px)]">
      <div>Current Time</div>
      <div>
        <Button
          className="h-24"
          onClick={() => {
            console.log("on clock in")
          }}
        >
          Clock IN
        </Button>
      </div>
      <div>
        <Button
          // className="bg-red-500"
          onClick={() => {
            console.log("on clock out")
          }}
        >
          Clock Out
        </Button>
      </div>

      <div>hello world</div>
      <div>hello world</div>
    </div>
  )
}

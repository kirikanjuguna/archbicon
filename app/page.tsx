"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 bg-background text-foreground">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Archbicon</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Type something..." />
          <Button>Click Me</Button>
        </CardContent>
      </Card>
    </main>
  );
}

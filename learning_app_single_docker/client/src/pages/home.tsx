import React from 'react';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data: user } = useQuery(['/api/user'], { queryFn: async () => {
    const res = await fetch('/api/user');
    return res.json();
  }});

  const { data: subjects } = useQuery(['/api/subjects'], { queryFn: async () => {
    const res = await fetch('/api/subjects');
    return res.json();
  }});

  if (!user || !subjects) {
    return <div className="min-h-screen flex items-center justify-center">Loading your learning adventure...</div>;
  }

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold">Good Morning, {user.username}! 🌟</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {subjects.map((s:any) => (
          <div key={s.id} className="bg-card rounded-2xl p-4 shadow">{s.name}</div>
        ))}
      </div>
    </main>
  );
}

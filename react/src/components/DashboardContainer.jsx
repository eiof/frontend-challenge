import React from 'react';

export default function DashboardContainer({ children }) {
 return (
    <main className="container mx-auto px-4 pt-4 mb-16">
      <h1 className="text-2xl">Promotion Analytics</h1>
      {children}
    </main>
  );
}


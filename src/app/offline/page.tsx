"use client";

export default function OfflinePage() {

  const lang = navigator?.language ?? "en";

  return (
    <main>
      <h1>
        {
            lang.startsWith("ru")
            ? "Нет соединения"
            : "Offline"
        }
      </h1>
    </main>
  );
}
import { Routes, Route } from "react-router";
import {
  BuildsPage,
  EmblemsPage,
  GuidesPage,
  HeroesPage,
  HomePage,
} from "@/pages";
import { Header } from "@/widgets/header";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/heroes" element={<HeroesPage />} />
          <Route path="/builds" element={<BuildsPage />} />
          <Route path="/emblems" element={<EmblemsPage />} />
          <Route path="/guides" element={<GuidesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

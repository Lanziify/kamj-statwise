import { Route, Routes } from "react-router-dom"
import "./App.css"
import IndexPage from "./pages/IndexPage"
import PublicRoute from "./components/PublicRoute"
import LearnPage from "./pages/LearnPage"
import LessonPage from "./pages/LessonPage"
import Ztable from "./pages/lectures/Ztable"
import QuizMenuPage from "./pages/QuizMenuPage"
import QuizPage from "./pages/QuizPage"
import ScorePage from "./pages/ScorePage"
import InfoGraphics from "./pages/InfoGraphics"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute />}>
        <Route index element={<IndexPage />} />
        <Route path="learn" element={<LearnPage />} />
        <Route path="learn/:id" element={<LessonPage />} />
        <Route path="learn/z-table" element={<Ztable />} />
        <Route path="quiz" element={<QuizMenuPage />} />
        <Route path="quiz/:id" element={<QuizPage />} />
        <Route path="quiz/score" element={<ScorePage />} />
        <Route path="infographic" element={<InfoGraphics />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App

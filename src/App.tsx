import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import PublicRoute from './routes/Public'
import LessonPage from './pages/LessonPage'
import LessonContentPage from './pages/LessonContentPage'
import Ztable from './pages/lectures/Ztable'
import QuizMenuPage from './pages/QuizMenuPage'
import QuizPage from './pages/QuizPage'
import ScorePage from './pages/ScorePage'
import InfoGraphics from './pages/InfoGraphics'
import NotFound from './pages/NotFound'
import Login from './pages/auth/Login'
import ProtectedRoute from './routes/Protected'
import Dashboard from './pages/protected/Dashboard'
import AuthRoute from './routes/Auth'
import Lessons from './pages/protected/Lessons'
import Topic from './pages/protected/Topic'

function App() {
    return (
        <Routes>
            <Route path='/' index element={<IndexPage />} />
            <Route element={<PublicRoute />}>
                <Route path='lessons' element={<LessonPage />} />
                <Route path='lessons/:title' element={<Topic />} />
                <Route path='quiz' element={<QuizMenuPage />} />
                <Route path='quiz/:id' element={<QuizPage />} />
                <Route path='quiz/score' element={<ScorePage />} />
                <Route path='infographic' element={<InfoGraphics />} />
                <Route path='*' element={<NotFound />} />
            </Route>
            <Route element={<AuthRoute />}>
                <Route path='login' element={<Login />} />
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path='admin'>
                    <Route index element={<Navigate to='dashboard' />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='lessons' element={<Lessons />} />
                    <Route path='lessons/:title' element={<Topic />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App

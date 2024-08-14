import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import PublicRoute from './routes/Public'
import LessonPage from './pages/LessonPage'
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
import CreateTopic from './pages/protected/CreateTopic'
import QuizList from './pages/protected/QuizList'
import QuizItem from './pages/protected/QuizItem'

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
            <Route path='admin' element={<ProtectedRoute />}>
                <Route index element={<Navigate to='dashboard' />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='lessons'>
                    <Route index element={<Lessons />} />
                    <Route path='topic/:id' element={<Topic />} />
                    <Route path='new/topic' element={<CreateTopic />} />
                </Route>
                <Route path='quizzes'>
                    <Route index element={<QuizList />} />
                    <Route path='topic/:id' element={<Topic />} />
                    <Route path=':id' element={<QuizItem />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App

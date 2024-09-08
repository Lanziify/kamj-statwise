import React from 'react'
import './App.css'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import PublicRoute from './routes/Public'
import PublicLessons from './pages/PublicLessons'
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
import LessonContent from './pages/LessonContent'
import LessonItem from './pages/LessonItem'
import Game from './pages/Game'

function App() {
    const { pathname } = useLocation()

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <Routes>
            <Route path='/' index element={<IndexPage />} />
            <Route element={<PublicRoute />}>
                <Route path='lessons'>
                    <Route index element={<PublicLessons />} />
                    <Route path='/lessons/:id' element={<LessonItem />} />
                    <Route
                        path='/lessons/:id/topic'
                        element={<Navigate to='/lessons' />}
                    />
                    <Route
                        path='/lessons/:id/topic/:id'
                        element={<LessonContent />}
                    />
                </Route>

                <Route path='quizzes'>
                    <Route index element={<QuizMenuPage />} />
                    <Route path=':id' element={<QuizPage />} />
                </Route>

                <Route path='quiz/score' element={<ScorePage />} />
                <Route path='infographic' element={<InfoGraphics />} />
                <Route path='games' element={<Game />} />
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
                    <Route
                        path='topic'
                        element={<Navigate to='/admin/quizzes' />}
                    />
                    <Route path='topic/:id' element={<Topic />} />
                    <Route path=':id' element={<QuizItem />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App

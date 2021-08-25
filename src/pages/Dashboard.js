import Header from "../components/Header/Header"
import Welcome from "../components/Welcome/Welcome"
import Footer from "../components/Footer/Footer"
import NutrimentCard from "../components/NutrimentCard/NutrimentCard"
import ActivityGraph from "../components/ActivityGraph/ActivityGraph"
import AverageSessionGraph from "../components/AverageSessionGraph/AverageSessionGraph"
import PerformanceGraph from "../components/PerformanceGraph/PerformanceGraph"
import ScoreGraph from "../components/ScoreGraph/ScoreGraph"
import proteinIcon from "../assets/protein-icon.png"
import carbsIcon from "../assets/carbs-icon.png"
import fatIcon from "../assets/fat-icon.png"
import caloriesIcon from "../assets/calories-icon.png"
import { useEffect, useState } from "react"
import UserService from '../service/user.service';
import './Dashboard.css'

export default function Dashboard() {
    const userId = 12
    const userInfoTemplate = {
        userInfos: {
            firstName: '',
            lastName: '',
            age: 0,
        },
        todayScore: 0,
        keyData: {
            calorieCount: 0,
            proteinCount: 0,
            carbohydrateCount: 0,
            lipidCount: 0
        }
    }
    const userActivityTemplate = { sessions: [] }
    const userAverageSessionTemplate = { sessions: [] }
    const userPerformanceTemplate = { kind: {}, data: [] }

    const [userInfo, updateUserInfo] = useState(userInfoTemplate)
    const [userActivity, updateUserActivity] = useState(userActivityTemplate)
    const [userAverageSession, updateUserAverageSession] = useState(userAverageSessionTemplate)
    const [userPerfomance, updateUserPerfomance] = useState(userPerformanceTemplate)

    useEffect(getAllData, [])

    function getAllData() {
        const userService = new UserService()
        userService.getUserInfo(userId).then((data) => updateUserInfo(data))
        userService.getUserActivity(userId).then((data) => updateUserActivity(data))
        userService.getUserAverageSession(userId).then((data) => updateUserAverageSession(data))
        userService.getUserPerformance(userId).then((data) => updateUserPerfomance(data))
    }

    return (
        <div className='wrapper'>
            <Header />
            <main>
                <Welcome userName={userInfo.userInfos.firstName} />
                <ActivityGraph data={userActivity.sessions} />
                <AverageSessionGraph data={userAverageSession} />
                <PerformanceGraph data={userPerfomance} />
                <ScoreGraph value={userInfo.todayScore} />
                <NutrimentCard image={caloriesIcon} title="Calories" value={userInfo.keyData.calorieCount} unit="kCal" />
                <NutrimentCard image={proteinIcon} title="Proteines" value={userInfo.keyData.proteinCount} unit="g" />
                <NutrimentCard image={carbsIcon} title="Glucides" value={userInfo.keyData.carbohydrateCount} unit="g" />
                <NutrimentCard image={fatIcon} title="Lipides" value={userInfo.keyData.lipidCount} unit="g" />
            </main>
            <Footer />
        </div>
    )
}

import Header from '../components/Header/Header'
import Welcome from '../components/Welcome/Welcome'
import NavBar from '../components/NavBar/NavBar'
import NutrimentCard from '../components/NutrimentCard/NutrimentCard'
import ActivityGraph from '../components/ActivityGraph/ActivityGraph'
import AverageSessionGraph from '../components/AverageSessionGraph/AverageSessionGraph'
import PerformanceGraph from '../components/PerformanceGraph/PerformanceGraph'
import ScoreGraph from '../components/ScoreGraph/ScoreGraph'
import proteinIcon from '../assets/protein-icon.png'
import carbsIcon from '../assets/carbs-icon.png'
import fatIcon from '../assets/fat-icon.png'
import caloriesIcon from '../assets/calories-icon.png'
import { useEffect, useState } from 'react'
import UserService from '../service/user.service'
import './Dashboard.css'

export default function Dashboard() {
	const userId = process.env.REACT_APP_USERID

	const [userInfo, updateUserInfo] = useState({})
	const [userActivity, updateUserActivity] = useState({})
	const [userAverageSession, updateUserAverageSession] = useState({})
	const [userPerfomance, updateUserPerfomance] = useState({})

	useEffect(getAllData, [userId])

	/**
	 * @description This function collect all the data from the backend API and update each local state
	 */
	function getAllData() {
		const userService = new UserService()
		userService.getUserInfo(userId).then((data) => updateUserInfo(data))
		userService
			.getUserActivity(userId)
			.then((data) => updateUserActivity(data))
		userService
			.getUserAverageSession(userId)
			.then((data) => updateUserAverageSession(data))
		userService
			.getUserPerformance(userId)
			.then((data) => updateUserPerfomance(data))
	}

	return (
		<div className="wrapper">
			<Header />
			<NavBar />
			<main>
				<div>
					<Welcome userName={userInfo?.userInfos?.firstName} />
				</div>
				<div className="graphContainer">
					<div className="container">
						<div className="activity">
							<ActivityGraph data={userActivity?.sessions} />
						</div>
						<div className="average">
							<AverageSessionGraph
								data={userAverageSession?.sessions}
							/>
						</div>
						<div className="performance">
							<PerformanceGraph data={userPerfomance} />
						</div>
						<div className="score">
							<ScoreGraph value={userInfo?.todayScore} />
						</div>
					</div>
					<div className="cardsContainer">
						<NutrimentCard
							image={caloriesIcon}
							title="Calories"
							value={userInfo?.keyData?.calorieCount}
							unit="kCal"
						/>
						<NutrimentCard
							image={proteinIcon}
							title="Proteines"
							value={userInfo?.keyData?.proteinCount}
							unit="g"
						/>
						<NutrimentCard
							image={carbsIcon}
							title="Glucides"
							value={userInfo?.keyData?.carbohydrateCount}
							unit="g"
						/>
						<NutrimentCard
							image={fatIcon}
							title="Lipides"
							value={userInfo?.keyData?.lipidCount}
							unit="g"
						/>
					</div>
				</div>
			</main>
		</div>
	)
}

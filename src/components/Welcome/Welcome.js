import './Welcome.css'

export default function Welcome({ userName }) {
	return (
		<div>
			<h1>
				Bonjour <span className="userName">{userName}</span>
			</h1>
			<p>Félicitation ! vous avez explosé vos objectifs hier 👏🏼</p>
		</div>
	)
}

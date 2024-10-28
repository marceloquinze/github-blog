import { useParams } from "react-router-dom";

export function Issue() {

	const { issueNumber } = useParams()

	return (
		<div>
			Issue Number: {issueNumber}
		</div>
	)
}
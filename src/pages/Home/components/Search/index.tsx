import { SearchContainer } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";

interface SearchFormData {
	search: string;
}

interface SearchProps {
	searchIssue: (query: string) => Promise<void>;
	numberOfIssues: number;
	searchterm: string;
}

export function Search( { searchIssue, numberOfIssues, searchterm }: SearchProps) {
	const { register, handleSubmit } = useForm<SearchFormData>()
	const onSubmit: SubmitHandler<SearchFormData> = (data) => {
		searchIssue(data.search); 
	};

	return (
		<SearchContainer className="search-container">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="header">
					<h3>Publications</h3>
					<span className="num-publications">{numberOfIssues > 1 ? numberOfIssues + ' publications' : numberOfIssues + ' publication'}</span>
				</div>
				<input 
					type="text" 
					placeholder="Search for posts" 
					id="search" {...register('search')} 
					defaultValue={searchterm}
				/>
			</form>
		</SearchContainer>
	)
}
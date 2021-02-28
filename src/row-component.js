import react from 'react';

export function RowComponent(props) {
	const {data, onClick} = props;

	function handleClick() {
		onClick(data);
	}

render() {
	return (
		<tr onClick={handleClick}>
		<td>{data.price}</td>
		<td>{data.name}</td>
		</tr>
	);
	}
}
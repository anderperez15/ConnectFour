import { Box } from '../Box';
import { TableProps } from '../../interfaces/index.d';
import { overColumn } from '../../signals';
import './index.css';


export const Table = ({ Board }:TableProps) => {
	return (
		<table className='table'>
			<tbody onMouseLeave={() => overColumn.value = null }>
				{
					Board.map((row, ind) => {
						return (
							<tr key={`row_${ind}`}>
								{
									row.map((box, sub) => {
										return (
											<Box key={`box_${ind}_${sub}`} value={box} numberCol={sub} />
										)
									})
								}
							</tr>
						)
					})
				}

			</tbody>
		</table>
	)
}
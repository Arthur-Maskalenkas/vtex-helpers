export const Debug = ({ data }: { data: Record<any, any> }) => {
		const renderData = (data: Record<any, any>) => {
				return (
						<ul>
								{Object.entries(data).map(([ key, value ], index) => {
										return (
												<li key={index}>
														<h1>{key}</h1>
														{typeof value === 'object' ? renderData(value) : <p>{value}</p>}
												</li>
										)
								})}
						</ul>
				);
		};

		return <div>{renderData(data)}</div>;
}
import React from 'react'

export default function Skills() {
	return (
		<div>
			<section className='my-10 '>
				<h2 className='text-2xl font-bold text-center mb-2 capitalize '>skills</h2>
				<p className='text-center text-sm '>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur.</p>
				<div className='flex flex-col gap-3 mt-3'>
					<ProgressCard name='Html' value='100'num='100'/>
					<ProgressCard name='css' value='90' num='90'/>
					<ProgressCard name='javascript' value='75' num='75'/>
					<ProgressCard name='php' value='80' num='80'/>
					<ProgressCard name='wordpress/cms' value='90' num='90' />
					<ProgressCard name='photoshop' value='55' num='55'/>

				</div>
			</section>
		</div>
	)
}

const ProgressCard = (props) => {
	return(
		<div>
			<label className='text-sm uppercase ml-5 ' for="file">{props.name}</label>
			<span className='float-right mr-[10%]'>{props.num}%</span>
<progress id="file" value={props.value} max="100" className='ml-2 w-11/12  ' >  </progress>

		</div>
		)
}
import React from 'react'

export default function service() {
	return (
		<div>
			<section className='my-10 w-11/12 mx-auto'>
				<h2 className='text-2xl font-bold text-center capitalize mb-2'>services</h2>
				<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
				<div className='flex flex-col gap-6 my-5'>
					<Card
					 name='lorem ipsum'
					 para='Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut quam quod facere ut non occaecati ut aut. Nesciunt mollitia illum tempore corrupti sed eum reiciendis. Maxime modi rerum.<' 
					 img='' 
					 alt=''/>
					 	<Card
					 name='lorem ipsum'
					 para='Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut quam quod facere ut non occaecati ut aut. Nesciunt mollitia illum tempore corrupti sed eum reiciendis. Maxime modi rerum.<' 
					 img='' 
					 alt=''/>	<Card
					 name='lorem ipsum'
					 para='Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut quam quod facere ut non occaecati ut aut. Nesciunt mollitia illum tempore corrupti sed eum reiciendis. Maxime modi rerum.<' 
					 img='' 
					 alt=''/>
				</div>
			</section>
		</div>
	)
}

function Card(props){
	return(
		<div>
		<img src={props.img} alt={props.alt} className='bg-blue-500 w-16 h-16 rounded-full float-left'/>	
		<h3 className='ml-[16%] capitalize mb-1'>{props.name}</h3>
		<p className='ml-[16%]'>{props.para}</p>
		</div>
		)
}
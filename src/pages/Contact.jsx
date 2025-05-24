import React from 'react'

export default function Contact() {
	return (
		<div>
			<section>
				<h2 className='text-2xl capitalize text-center font-bold mb-2'>contact</h2>
				<p className='text-center'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
				<address className='w-11/12 mx-auto'>
					<div className='flex flex-col gap-6 my-5'>
						<AdressCard 
							img='' 
							alt='' 
							title='address'
							 info='A108 Adam Street, New York, NY 535022'
							/>
						<AdressCard 
							img='' 
							alt='' 
							title='call us' 
							info='+1 234 567 890'
						/>
						<AdressCard 
							img='' 
							alt='' 
							title='email' 
							info='example@gmail.com'
						/>


					</div>
				
				</address>
<FormComponent/>
			</section>
		</div>
	)

}

function AdressCard(props){
	return(
		<>
		<div className=''>
			<img className='ring-2 size-20 rounded-full float-left mr-5' src={props.img} alt={props.alt}/>
			<strong>{props.title}</strong>
			<p>{props.info}</p>
		</div>
		</>
		)
}


function FormComponent(){
	return(
		<>
		<form action="" className='flex flex-col gap-5 rounded  form-section w-10/12 mx-auto ring-1 p-5 my-10'>
			<label htmlFor="" className='text-xs' >your name</label>
			<input type="text" className='rounded'/>
			<label htmlFor="">your email</label>	
			<input type="text"/>
			<label htmlFor="">subject</label>
			<input type="text"/>
			<label htmlFor="">message</label>
			<textarea name="" id=""></textarea>
			<button className='bg-blue-400 text-white text-md capitalize w-fit mx-auto px-3 py-2 '>send message</button>
		</form>
		</>
		)
}
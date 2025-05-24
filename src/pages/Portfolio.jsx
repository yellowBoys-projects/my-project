import React from 'react'

export default function Portfolio() {
	return (
		<div>
			<section className='my-5 w-10/12 mx-auto'>
				<h2 className='text-center text-2xl font-bold capitalize mb-2'>portfolio</h2>
				<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
				<div className=''>
					<ul className='flex gap-3 justify-center my-3 capitalize'>
						<li>All</li>
						<li>app</li>
						<li>product</li>
						<li>branding</li>
						<li>books</li>

					</ul>
					<div className='my-5 flex flex-col gap-5'>

						<Img img="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/app-1.jpg" alt=""/>
						<Img img="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/product-1.jpg" alt=""/>
						<Img img="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/branding-1.jpg" alt=""/>
						<Img img="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/books-1.jpg" alt=""/>
						<Img img="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/app-2.jpg" alt=""/>
						<Img img="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/product-2.jpg" alt=""/>
						
					</div>
				</div>
			</section>
		</div>
	)
}

const Img = (props) => {
return <img src={props.img} alt={props.alt} className='object-cover shadow-2xl rounded hover:scale-110 duration-200 w-full'/>
}
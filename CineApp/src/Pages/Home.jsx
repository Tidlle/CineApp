import data from '../../artigos.json'

function Home() {
    return ( 
        <div className='grid grid-cols-3'>
        {
            data.map(
                (filme, index) => (
                    <>
                    <div className="card" key={index}>
                    <h1>{filme.title}</h1>
                    <img className='w-[300]' src={filme.image}/>
                    

                    <div className='tags'>
                        {
                            filme.tags.map(tag => (
                                <span className="bg-pink-800 text-white p-1 m-1"  key={tag}>{tag}</span>
                            ))
                        }
                    </div>
                    <div className='text'>
                        {
                            filme.text.map(text =>(
                               <span className='p-1 m-1' key={text}>{text}</span> 
                            ))
                        }

                    </div>
                    </div>
                    </>
                )
            )
       }
       </div>
     );
}

export default Home;
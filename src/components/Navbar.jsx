import React,   { useEffect, useState, useSyncExternalStore }from 'react'
import './navbar.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = () => {

  const [newsdata ,setNewsdata] = useState([])
  const[page,setPage] = useState(1)


  const fetchapidata= async () =>{
    try {
      const fetchdata = await fetch ('https://newsapi.org/v2/top-headlines?country=us&apiKey=e03ba4028ae249f28467e32f64fa2cf8')
      const res = await fetchdata.json()  
      setNewsdata(res.articles)
      
    } 
    catch (error) {
      console.log(error)
    }
  }

  const handlenext = async ()=>{
    try {
      const fetchdata = await fetch (`https://newsapi.org/v2/top-headlines?country=us&apiKey=e03ba4028ae249f28467e32f64fa2cf8&page=${page+1}`)
      const res = await fetchdata.json()  
      setNewsdata(res.articles)
    } 
    catch (error) {
      console.log(error)
    }
    setPage(page+1)
    console.log(page)
  }


  const handleprevious = async ()=>{
    try {
      const fetchdata = await fetch (`https://newsapi.org/v2/top-headlines?country=us&apiKey=e03ba4028ae249f28467e32f64fa2cf8&page=${page-1}`)
      const res = await fetchdata.json()  
      setNewsdata(res.articles)
    } 
    catch (error) {
      console.log(error)
    }
    setPage(page-1)
    console.log(page)
  }

  useEffect (() =>{
    fetchapidata()
  },[]);

  useEffect(()=>{
    AOS.init({
      
    });
  },[])

    
  return (
    <>
      {/* <div className='nav_link mt-4'>
          <a href="" className='btn nav-iteam'>catagory</a>
          <a href="" className='btn nav-iteam'>catagory</a>
          <a href="" className='btn nav-iteam'>catagory</a>
          <a href="" className='btn nav-iteam'>catagory</a>
      </div> */}

      <div className="row mt-5" >
          {
                newsdata.map((element) => {
                  return (
                    <div className="col-md-4 m-auto card-col" style={{paddingBottom:80}} key={element.url}>
                        <div className="card newscard" data-aos="fade-up" data-aos-anchor-placement="top-center" >
                          <div className="card-body">
                            <div className='mb-4 ' style={{ width:460,height:327,overflow:"hidden"}}>
                              <img src={element.urlToImage?element.urlToImage:""} className="card-img-top imageeffect" alt="" height="327" width="460"/>
                            </div>
                            <h6 className='subtitle'>Source : <span className='submain'>{element.source.name}</span></h6>  
                            <h5 className="card-title mt-4 cardtitle">{element.title.slice(0,60)}.....</h5>
                            <p className="card-text cardDec text-justify mb-4">{element.description?element.description.slice(0,120):""}</p>
                            <h6 className='subtitle text-end'>Published On : <span className='submain'>{element.publishedAt.slice(0,10)}</span></h6>   
                            <a href={element.url} className=" cardtitle">READ MORE</a>
                          </div>
                        </div>
                    </div>
                  );

                })
          }
        </div>
        <div className="container text-center mb-5">
            <button className=' cardtitle btn' onClick={handleprevious} disabled={page<2}>
              Previous     
            </button>
            /
            <button className='cardtitle btn' onClick={handlenext} disabled={page>=2}>
              Next
            </button>
        </div>
    </>
  )
}

export default Navbar

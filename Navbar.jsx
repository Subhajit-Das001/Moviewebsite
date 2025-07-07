 function NavBar(){




    return(
        <div className="Navbar">
          
          <div className="logo">
    <h1><span style={{ color: 'purple' }}>Alcher</span><span style={{ color: 'blue' }}>flix</span></h1>
  </div>
  <div className="nav-links">
    <a href="#" className="link">Home</a>
    <a href="#" className="link">Movies</a>
    <a href="#"className="link">Series</a>
    <a href="#" className="link">Popular</a>
    <a href="#" className="link">Trendings</a>
  </div>
          <div class="profile-container">
         
            <div class="profile-text-containter">
                <span class="profile-text">profile</span>
                <i class="icon-sort fa-solid fa-sort-down"></i>
                <img src="https://tse3.mm.bing.net/th/id/OIP.ytk_FI-XypVcV4Z3NrxHFQHaE7?pid=Api&P=0&h=180" className="imgg" alt="profile_pic"/>
            </div>
          
        </div>

        </div>
    );


 }

 export  default NavBar 
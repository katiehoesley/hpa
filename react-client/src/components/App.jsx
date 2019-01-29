import React from 'react';
import LoginForm from './LoginForm.jsx';
import test_data from '../../../test_data.json'
import Product from './Product.jsx'
import AllProducts from './AllProducts.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentUser: '', 
      isLoggedIn: false, 
      pageNum: 1, 
      loggedInUsers: [],
      data: test_data.data,
      selectedProduct: [], 
      sortedBy: '', 
      currImage: [],
      usersVisible: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.seeUsers = this.seeUsers.bind(this); 
    this.nextPage = this.nextPage.bind(this); 
    this.previousPage = this.previousPage.bind(this); 
    this.selectProduct = this.selectProduct.bind(this); 
    this.returnToMain = this.returnToMain.bind(this);
    this.handleSort = this.handleSort.bind(this);

  }

  handleChange(event) {
    this.setState({
       currentUser: event.target.value,
    }); 
  }



  handleSubmit(e) {
    e.preventDefault();
    const { currentUser } = this.state;
    let dataBody = {
      "username": currentUser,
    }

    this.setState({
      isLoggedIn: true,
    })  

    //POST USERNAME INPUT (CURRENT USER IN THE STATE) TO THE DB
    fetch('/users', { 
      method: 'POST', 
      body: JSON.stringify( dataBody ), 
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
      console.log("Error Reading data " + err);
    })
  }


  seeUsers(){ //GET ALL USERNAMES FROM THE DB

    if( this.state.usersVisible === true ) {
      this.setState({
        usersVisible: false
      })
    } else if ( this.state.usersVisible === false) {
      // this.setState({
      //   usersVisible: true
      // })
      
      fetch(`/users`, {
        method: "GET", 
        body: JSON.stringify( ), 
        headers: {
          'Content-Type':'application/json'
        },
      })
      .then(res => res.json())
      .then((res) => {
        this.setState({
          loggedInUsers: res.map((el) => res.indexOf(el) !== res.length-1 ? `${el.username}, `: `${el.username}`),
          usersVisible: true,
        });
      })
      .catch(err => console.log(err));

    }
  }
   


  nextPage() {
    var nextIncrement = this.state.pageNum + 25
    if(nextIncrement <= this.state.data.length) {
      this.setState({
        pageNum: nextIncrement
      })
    }
  }

  previousPage() {
    var prevIncrement = this.state.pageNum - 25
    if(prevIncrement > 0) {
      this.setState({
        pageNum: prevIncrement
      })
    }
  }



  selectProduct(event) {
    const currentID = event.target.id;
    const nextItem = this.state.data.filter((el) => el.advertisement_id === currentID)
    event.preventDefault();
    this.setState({
      selectedProduct: nextItem, 
    })
  }



  returnToMain(event) {
    event.preventDefault();
    this.setState({
      selectedProduct: []
    })
  }
  

  handleSort(e) {
    event.preventDefault();
    const sorter = e.target.value
    let filteredData; 

    if(sorter === 'price') {
      filteredData = this.state.data.sort((a, b) => a[sorter] - b[sorter])
    } else if (sorter === 'title') {
      filteredData = this.state.data.sort((a, b) => a[sorter].localeCompare(b[sorter]))
    } else if (sorter === 'timestamp') {
      filteredData = this.state.data.sort((a, b) => new Date(a[sorter]) - new Date(b[sorter]))
    } else {
      filteredData = this.state.data;
    }

    this.setState({
      sortedBy: e.target.value,
      data: filteredData
    })
  }



  render () {
      const isLoggedIn = this.state.isLoggedIn; 
      let currentPage; 

      if (isLoggedIn && this.state.selectedProduct.length > 0) {
        currentPage = <Product product={this.state.selectedProduct} returnToMain={this.returnToMain}/>
      } else if (isLoggedIn) {
        currentPage = <AllProducts usersVisible={this.state.usersVisible} handleSort={this.handleSort} nextPage={this.nextPage} pageNum={this.state.pageNum} 
              prevPage={this.previousPage} data={this.state.data} user={this.state.currentUser} checkUsers={this.seeUsers} 
              selectProduct={this.selectProduct} nextPage={this.nextPage}  loggedInUsers={ this.state.loggedInUsers }
          /> 
      } else {
        currentPage = <LoginForm onSubmit={this.handleSubmit} onChange={this.handleChange} />
      }

      return(
        <div className='openPage'>
          {currentPage}
        </div>
      )   
    }
  }
  
  export default App; 

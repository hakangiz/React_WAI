import React, { Component } from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'
import { addArticle,deleteArticle } from './redux/actions';
import { connect } from 'react-redux';
import { Button } from 'react-native';


class App extends Component {
state={
  appArticles:[],
}

  func_addArticle=()=>{
    //if (this.state.appArticles.length===0) return;
    this.props.dispatchAddArticle({title:"İlk eklenen",id:100})
  }

  func_deleteArticle=(id)=>{
    this.props.dispatchDeleteArticle(id)
  }
  
  func_writeConsole=()=>{
    //console.log(this);
    console.log(this.props);
  }
  

  render() {
    //debugger
    //this.props.state.subscribe(() => console.log('Look ma, Redux!!'));
    
    return (
      <View>
        <Text> Main Page </Text>
        <Button title="AddArticle" onPress={()=>this.func_addArticle()}>
        </Button>
        <Button title="DeleteArticle" onPress={()=>this.func_deleteArticle(100)}>
        </Button>
        <Button title="writeConsole" onPress={()=>this.func_writeConsole()}>
        </Button>
      </View>
    )
  }
}

function mapStateToProps(state,props) {
  return {
    articles:state.articles.articles
  }
}; 


function mapDispatchToProps (dispatch)  {
  return {
    dispatchAddArticle:(article)=>dispatch(addArticle(article)),
    dispatchDeleteArticle:(id)=>dispatch(deleteArticle(id))
  }
};

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(ActionCreators, dispatch),
// });

export default connect(mapStateToProps,mapDispatchToProps)(App);
//export default connect(mapStateToProps)(App);
//export default connect()(App);
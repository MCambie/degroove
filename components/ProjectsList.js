import React from 'react';
import {ScrollView,Text,StyleSheet,View, Button} from 'react-native';
import ProjectTouchable from './ProjectTouchable';
import FooterDGR from './Footer';
import app from './firebaseAuth';
import 'firebase/auth';
import base from './firestore';

class ProjectList extends React.Component{

	constructor(props) {
    super(props);
    this.state = {
      projects: [],
      searchStringUser: ""
    };
  }

  searchInputChange(input) {
    this.setState({searchStringUser: input});
    console.log(this.state.searchStringUser);
  }

  componentDidMount() {
    var test = base.get('/projects', {context: this, withIds: true});
    test.then(function(value) {
      this.setState({projects: value});
    }.bind(this));
  }

	testfunction2(){
		app.auth().signOut()
	}

	render(){
		const projectFilter = this.state.projects.filter((searchText) => {
      let search = searchText.region;
      return search.match(this.state.searchStringUser);
    })

    const projectTest = projectFilter.map((test) => {
      return (
        <ProjectTouchable
					key = {test.id}
					id= {test.id}
					name = {test.name}
					region = {test.region}
					field = {test.field}
					type = {test.type}
					skills = {test.skills}
					hours = {test.hours}
				 />
      )
    });
		return(
			 <ScrollView>
                <Text style={styles.header}>
                    Project List
                </Text>
								<Button title="logout" onPress={()=>this.testfunction2()}/>
                {projectTest}
                <FooterDGR/>
			</ScrollView>
			)
	}
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   backgroundColor: 'blue',
    //   alignItems: 'center',
    //   justifyContent: 'center',
	},

})

export default ProjectDescription;

import React from 'react';
import {ScrollView,Text,StyleSheet,View, Button} from 'react-native';
import ProjectTouchable from './ProjectTouchable';
import FooterDGR from './Footer';
import app from './firebaseAuth';
import HeaderDGR from './Header';
import 'firebase/auth';
import base from './firestore';

class ProjectsList extends React.Component{
static navigationOptions={header:null}
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
			 <ScrollView style={{flex: 1}}>
              <HeaderDGR pageName={"Projects List"}  />
                {projectTest}
                <FooterDGR navigation= {this.props.navigation} style={styles.footer}/>
			</ScrollView>
			)
	}
}

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        width: '100%',
        backgroundColor: 'rgb(79, 188, 132)',
        color: 'white'
    },
    footer: {
        position: "absolute",
        bottom: 0,
    }
})

export default ProjectsList;

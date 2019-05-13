import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import * as contenful from 'contentful'
import Course from '../components/Course'

const SPACE_ID = 's2k1kdsv2m59'
const ACCESS_TOKEN = 'vFvk2TDOwjI0KnGTjcfBzkKkPZPOBQk6XtKx3TB-hyg'

const client = contenful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

class CourseList extends Component{
    state = {
        courses: [],
        searchString: ''
    }

    constructor(){
        super()
        this.getCourses()
    }

    getCourses = () => {
        client.getEntries({
            content_type: 'course',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({courses: response.items})
        })
        .catch((error) => {
            console.log('Fetching data Error')
            console.log(error)
        })
    }

    onSearchInputChange = (event) => {
        if(event.target.value) {
            this.setState({searchString: event.target.value})
        }else{
            this.setState({searchString: ''})
        }
        this.getCourses()
    }

    render(){
        return(
            <div>
                {this.state.courses ? (
                    <div>
                        <TextField style={{padding: 24}} id="searchInput" placeholder="cari disini" margin="normal" onChange={this.onSearchInputChange} />
                        <Grid container spacing={24} style={{padding: 24}}>
                            {this.state.courses.map(currentCouse => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentCouse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found"}
            </div>
        )
    }

}

export default CourseList;
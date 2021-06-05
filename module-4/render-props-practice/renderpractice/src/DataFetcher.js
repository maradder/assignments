import React, {Component} from 'react'


class DataFetcher extends Component {
    state = {
        loading: false,
        data: null
    }

    componentDidMount(props) {
        this.setState({loading: true})
        fetch(this.props.url)
            .then(res => res.json())
            .then(data => this.setState({data: data, loading: false}))
            .catch(console.error(Error))
    }

    render( ) {
        return(
        this.state.loading === false ? <p>{JSON.stringify(this.state.data)}</p> : <h1>Loading...</h1>
        )}
}

export default DataFetcher
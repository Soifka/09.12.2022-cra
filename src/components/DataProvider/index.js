import React, { Component } from 'react';

/*
1. Компонент идет за аднными
2. Компоненет получает данные и кладет их в стейт
3. Компонент делится данными с кем-то другим, кто знает, что делать с этими данными 
 */

class DataProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true,
            isError: false
        }
    }

    componentDidMount() {
        this.load();
    }

    load = () => {
        this.props.loadData()
        .then((data) => {
            this.setState({
                data
            })
        })
        .catch((error) => {
            this.setState({
                isError: true
            })
        })
        .finally(() => {
            this.setState({
                isLoading: false
            })
        })
    }
    
    render() {
        return this.props.children(this.state);
    }
}

export default DataProvider;

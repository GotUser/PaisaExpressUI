import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
class ReactSimpleSpinner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            styles : {
                'size': 32,
                'lineSize': 3,
                'lineBgColor': '#eee',
                'lineFgColor': '#2196f3',
                'speed': 0.8,
                'spacing': 4,
                'fontSize': 13,
                'textFgColor': '#555'
            },
            'message': '',
            spinner_style:{},
            text_style :{}
        };

        this.size_px = this.size_px.bind(this);
        this.line_size_px = this.line_size_px.bind(this);
        this.text_margin_top = this.text_margin_top.bind(this);
        this.text_font_size = this.text_font_size.bind(this);
        this.spinner_style = this.spinner_style.bind(this);
        this.text_style = this.text_style.bind(this);
        this.isNumber = this.isNumber.bind(this);

    }

    isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }

    size_px() {
        switch (this.state.styles.size)
        {
            case 'tiny':    return 12
            case 'small':   return 16
            case 'medium':  return 32
            case 'large':   return 48
            case 'big':     return 64
            case 'huge':    return 96
            case 'massive': return 128
        }
        return this.isNumber(this.state.styles.size) ? this.state.styles.size : 32
    }

    line_size_px() {
        switch (this.state.styles.size)
        {
            case 'tiny':    return 1
            case 'small':   return 2
            case 'medium':  return 3
            case 'large':   return 3
            case 'big':     return 4
            case 'huge':    return 4
            case 'massive': return 5
        }
        return this.isNumber(this.state.styles.lineSize) ? this.state.styles.lineSize : 4
    }
    text_margin_top() {
        switch (this.state.styles.size)
        {
            case 'tiny':
            case 'small':
            case 'medium':
            case 'large':
            case 'big':
            case 'huge':
            case 'massive':
                return Math.min(Math.max(Math.ceil(this.size_px()/8), 3), 12)
        }
        return this.isNumber(this.state.styles.spacing) ? this.state.styles.spacing : 4
    }
    text_font_size() {
        switch (this.state.styles.size)
        {
            case 'tiny':
            case 'small':
            case 'medium':
            case 'large':
            case 'big':
            case 'huge':
            case 'massive':
                return Math.min(Math.max(Math.ceil(this.size_px()*0.4), 11), 32)
        }
        return this.isNumber(this.state.styles.fontSize) ? this.state.styles.fontSize : 13
    }
    spinner_style() {
        return {
            'margin': '0 auto',
            'borderRadius': '100%',
            'border': this.line_size_px()+'px solid '+this.state.styles.lineBgColor,
            'borderTop': this.line_size_px()+'px solid '+this.state.styles.lineFgColor,
            'width': this.size_px()+'px',
            'height': this.size_px()+'px',
            'animation': 'react-simple-spinner-spin '+this.state.styles.speed+'s linear infinite'
        }
    }
    text_style() {
        return {
            'marginTop': this.text_margin_top()+'px',
            'color': this.state.styles.textFgColor,
            'fontSize': this.text_font_size()+'px',
            'textAlign': 'center'
        }
    }

    componentDidMount()
    {
        if(this.props.message)
            this.setState({message: this.props.message});

        let newStyles = {};
        _.each(this.state.styles,(value,key) => {
            if(this.props[key])
            {
                newStyles[key] = this.props[key]
            }
        })

        if(newStyles)
            this.setState({styles: Object.assign(this.state.styles,newStyles)});

        this.setState({text_style: this.text_style()});
        this.setState({spinner_style: this.spinner_style()});
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.message !== this.props.message ) {
            this.setState({message: nextProps.message});
        }

        let newStyles = {};
        _.each(this.state.styles,(value,key) => {
            if(this.props[key] && nextProps[key])
            {
                if(nextProps[key] !== this.props[key] )
                    newStyles[key] = nextProps[key]
            }
        })

        if(newStyles)
            this.setState({styles: Object.assign(this.state.styles,newStyles)});

        this.setState({text_style: this.text_style()});
        this.setState({spinner_style: this.spinner_style()});
    }

    render() {
        let msg =  '';

        if(this.state.message != '')
        {
            msg = <div className="react-simple-spinner-text" style={this.state.text_style} >{this.state.message}</div>
        }

        //console.log('msg',this.state.message);

        return (
            <div>
                <div className="react-simple-spinner" style={this.state.spinner_style}></div>
                {msg}

                <style jsx={true.toString()}>{`
                  .react-simple-spinner {
                    transition: all 0.3s linear;
                  }
                  @keyframes react-simple-spinner-spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                `}</style>
           </div>
    );
    }
}

ReactSimpleSpinner.propTypes = {
    'size'         : PropTypes.oneOfType([PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge', 'massive']),PropTypes.number]),
    'lineSize'     : PropTypes.number,
    'lineBgColor'  : PropTypes.string,
    'lineFgColor'  : PropTypes.string,
    'speed'        : PropTypes.number,
    'spacing'      : PropTypes.number,
    'message'      : PropTypes.string,
    'fontSize'     : PropTypes.number,
    'textFgColor'  : PropTypes.string

}
export {ReactSimpleSpinner};
export default ReactSimpleSpinner;
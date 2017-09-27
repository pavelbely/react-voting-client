import React from 'react';
import Winner from './Winner';
import Vote from './Vote';

class Voting extends React.PureComponent {

    getPair() {
        return this.props.pair || [];
    }

    isDisabled() {
        return !!this.props.hasVoted;
    }

    hasVotedFor(entry) {
        return this.props.hasVoted === entry;
    }

    render() {
        return <div className="voting">
            {this.props.winner ?
                <Winner ref="winner" winner={this.props.winner}/> :
                <Vote {...this.props} />
            }
        </div>;
    }
}

export default Voting;
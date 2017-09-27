import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate
} from 'react-addons-test-utils';
import {List} from 'immutable';
import Voting from './Voting';
import {expect} from 'chai';


describe('Voting', () => {

    it('renders a pair of buttons', () => {
        const component = renderIntoDocument(
            <Voting pair={["Trainspotting", "Snatch"]} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(2);
        expect(buttons[0].textContent).to.equal('Trainspotting');
        expect(buttons[1].textContent).to.equal('Snatch');

    });

    it('invokes a callback when a button is clicked', () => {
        let votedWith;
        const vote = (entry) => votedWith = entry;
        const component = renderIntoDocument(
            <Voting pair={['Snatch', 'Zohan']}
                    vote={vote}/>
        );

        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        Simulate.click(buttons[0]);

        expect(votedWith).to.equal('Snatch');
    });

    it('disables the button when user has voted', () => {
        const component = renderIntoDocument(
            <Voting pair={['Snatch', 'Zohan']}
                    hasVoted="Snatch"/>
        );

        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(2);
        expect(buttons[0].hasAttribute('disabled')).to.equal(true);
        expect(buttons[1].hasAttribute('disabled')).to.equal(true);
    });

    it('voted label should be present on a clicked button', () => {
        const component = renderIntoDocument(
            <Voting pair={['Snatch', 'Zohan']}
                    hasVoted="Snatch"/>
        );

        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons[0].textContent).to.contain('Voted');
    });

    it('voted label should be present on a clicked button', () => {
        const component = renderIntoDocument(
            <Voting winner="Snatch"/>
        );

        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(buttons.length).to.equal(0);

        const winner = ReactDOM.findDOMNode(component.refs.winner);
        expect(winner).to.be.ok;
        expect(winner.textContent).to.contain('Snatch');
    });

    it('renders as a pure component', () => {
       const pair = List.of('Snatch', 'Zohan');
       const container = document.createElement('div');
       let component = ReactDOM.render(
           <Voting pair={pair} />,
           container
       );

       let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
       expect(firstButton.textContent).to.equal('Snatch');

       const newPair = pair.set(0, 'Sunshine');
       component = ReactDOM.render(
           <Voting pair={newPair} />,
           container
       );
       firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
       expect(firstButton.textContent).to.equal('Sunshine');
    });
});